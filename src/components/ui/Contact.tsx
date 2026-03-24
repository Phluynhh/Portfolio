"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import type { Language } from "../../lib/i18n";

interface ContactProps {
  lang: Language;
}

interface ContactFormValues {
  fullName: string;
  email: string;
  company: string;
  message: string;
}

const INITIAL_FORM_VALUES: ContactFormValues = {
  fullName: "",
  email: "",
  company: "",
  message: "",
};

export default function Contact({ lang }: ContactProps) {
  const isVi = lang === "vi";
  const [formValues, setFormValues] =
    useState<ContactFormValues>(INITIAL_FORM_VALUES);
  const [isSending, setIsSending] = useState(false);
  const [feedback, setFeedback] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = event.target;

    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const { fullName, email, message } = formValues;

    if (!fullName.trim() || !email.trim() || !message.trim()) {
      setFeedback({
        type: "error",
        message: isVi
          ? "Vui lòng nhập họ tên, email và nội dung trước khi gửi."
          : "Please fill in your name, email, and message before sending.",
      });
      return;
    }

    setIsSending(true);
    setFeedback(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formValues),
      });

      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(
          result.message ||
            (isVi
              ? "Không thể gửi email lúc này. Vui lòng thử lại sau."
              : "Unable to send your email right now. Please try again later."),
        );
      }

      setFeedback({
        type: "success",
        message: isVi
          ? "Cảm ơn bạn đã liên hệ. Mình đã nhận được email và sẽ phản hồi sớm nhất có thể."
          : "Thanks for reaching out. I received your message and will get back to you as soon as possible.",
      });
      setFormValues(INITIAL_FORM_VALUES);
    } catch (error) {
      setFeedback({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : isVi
              ? "Đã có lỗi xảy ra khi gửi email."
              : "Something went wrong while sending your email.",
      });
    } finally {
      setIsSending(false);
    }
  }

  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-8 md:px-12">
        <h1 className="text-center text-5xl font-bold">
          {isVi ? "Liên hệ" : "Get In Touch"}
        </h1>
        <p className="text-center">
          {isVi
            ? "Mình luôn sẵn sàng trao đổi về cơ hội mới và những dự án thú vị."
            : "I'm always interested in hearing about new opportunities and interesting projects."}
        </p>
        <Separator className="data-horizontal:h-1! mx-auto w-1/12 rounded-full bg-primary" />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[360px_minmax(0,1fr)] lg:gap-14">
          <div className="space-y-6">
            {[
              {
                title: isVi ? "Phản hồi" : "Replies",
                value: isVi
                  ? "Mình sẽ phản hồi qua email bạn điền trong form."
                  : "I'll reply to the email address you enter in the form.",
                icon: <Mail />,
              },
              {
                title: isVi ? "Điện thoại" : "Phone",
                value: "0941 410 532",
                href: "tel:0941410532",
                icon: <Phone />,
              },
              {
                title: isVi ? "Địa điểm" : "Location",
                value: isVi ? "Việt Nam" : "Vietnam",
                icon: <MapPin />,
              },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  {item.icon}
                </div>

                <div className="space-y-1 pt-1">
                  <h3 className="text-base font-semibold text-foreground">
                    {item.title}
                  </h3>
                  {"href" in item ? (
                    <a
                      href={item.href}
                      className="text-base text-primary transition-colors hover:text-primary/80"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-base text-foreground/70">{item.value}</p>
                  )}
                </div>
              </div>
            ))}

            <div className="rounded-3xl border border-primary/10 bg-primary/5 px-8 py-6">
              <p className="text-sm leading-6 text-foreground/75">
                {isVi
                  ? "Mình thường phản hồi trong vòng 24 giờ. Rất mong được kết nối với bạn!"
                  : "I usually respond within 24 hours. Looking forward to connecting with you!"}
              </p>
            </div>
          </div>

          <form className="space-y-7" onSubmit={handleSubmit}>
            <div className="space-y-3">
              <label
                htmlFor="fullName"
                className="text-base font-semibold text-foreground"
              >
                {isVi ? "Họ và tên" : "Full Name"}
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                value={formValues.fullName}
                onChange={handleChange}
                placeholder={isVi ? "Tên của bạn" : "Your name"}
                className="mt-2 h-12 w-full rounded-lg border border-border bg-background px-5 text-base outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary"
              />
            </div>

            <div className="space-y-3">
              <label
                htmlFor="email"
                className="text-base font-semibold text-foreground"
              >
                {isVi ? "Địa chỉ email" : "Email Address"}
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formValues.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="mt-2 h-12 w-full rounded-lg border border-border bg-background px-5 text-base outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary"
              />
            </div>

            <div className="space-y-3">
              <label
                htmlFor="company"
                className="text-base font-semibold text-foreground"
              >
                {isVi ? "Công ty" : "Company"}
              </label>
              <input
                id="company"
                name="company"
                type="text"
                value={formValues.company}
                onChange={handleChange}
                placeholder={
                  isVi
                    ? "Công ty của bạn (không bắt buộc)"
                    : "Your company (optional)"
                }
                className="mt-2 h-12 w-full rounded-lg border border-border bg-background px-5 text-base outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary"
              />
            </div>

            <div className="space-y-3">
              <label
                htmlFor="message"
                className="text-base font-semibold text-foreground"
              >
                {isVi ? "Nội dung" : "Message"}
              </label>
              <textarea
                id="message"
                name="message"
                value={formValues.message}
                onChange={handleChange}
                placeholder={
                  isVi
                    ? "Hãy chia sẻ với mình về dự án của bạn..."
                    : "Tell me about your project..."
                }
                rows={7}
                className="mt-2 min-h-45 w-full resize-none rounded-2xl border border-border bg-background px-5 py-4 text-base outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary"
              />
            </div>

            {feedback ? (
              <div
                className={`rounded-2xl border px-5 py-4 text-sm leading-6 ${
                  feedback.type === "success"
                    ? "border-primary/20 bg-primary/5 text-foreground"
                    : "border-red-500/20 bg-red-500/5 text-red-600 dark:text-red-300"
                }`}
              >
                {feedback.message}
              </div>
            ) : null}

            <button
              type="submit"
              disabled={isSending}
              className="flex h-12 w-full items-center justify-center gap-3 rounded-lg bg-primary px-6 text-base font-semibold text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
            >
              {isSending
                ? isVi
                  ? "Đang gửi..."
                  : "Sending..."
                : isVi
                  ? "Gửi tin nhắn"
                  : "Send Message"}
              <Send />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
