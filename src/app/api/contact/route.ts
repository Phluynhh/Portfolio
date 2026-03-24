import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

interface ContactPayload {
  fullName?: string;
  email?: string;
  company?: string;
  message?: string;
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export async function POST(request: Request) {
  try {
    const { fullName, email, company, message } =
      (await request.json()) as ContactPayload;

    if (!fullName?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { message: "Missing required contact fields." },
        { status: 400 },
      );
    }

    if (!isValidEmail(email.trim())) {
      return NextResponse.json(
        { message: "Please provide a valid email address." },
        { status: 400 },
      );
    }

    const username = process.env.MAIL_USERNAME;
    const password = process.env.MAIL_PASSWORD;
    const contactEmail = process.env.CONTACT_EMAIL;

    if (!username || !password || !contactEmail) {
      return NextResponse.json(
        { message: "Mail server credentials are not configured." },
        { status: 500 },
      );
    }

    const safeFullName = escapeHtml(fullName.trim());
    const safeEmail = escapeHtml(email.trim());
    const safeCompany = escapeHtml(company?.trim() || "Not provided");
    const safeMessage = escapeHtml(message.trim());

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: username,
        pass: password,
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${username}>`,
      to: contactEmail,
      replyTo: email.trim(),
      subject: `Portfolio Contact - ${fullName.trim()}`,
      text: [
        `Name: ${fullName.trim()}`,
        `Email: ${email.trim()}`,
        `Company: ${company?.trim() || "Not provided"}`,
        "",
        "Message:",
        message.trim(),
      ].join("\n"),
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111827;">
          <h2 style="margin-bottom: 16px;">New portfolio contact message</h2>
          <p><strong>Name:</strong> ${safeFullName}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <p><strong>Company:</strong> ${safeCompany}</p>
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-line;">${safeMessage}</p>
        </div>
      `,
    });

    return NextResponse.json({ message: "Message sent successfully." });
  } catch (error) {
    console.error("Failed to send contact email", error);

    return NextResponse.json(
      { message: "Unable to send your message right now." },
      { status: 500 },
    );
  }
}
