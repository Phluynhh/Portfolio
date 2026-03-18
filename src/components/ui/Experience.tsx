import React from "react";
import { Separator } from "@/components/ui/separator";
import { BriefcaseBusiness, CalendarDays, Award } from "lucide-react";
import type { Language } from "../../lib/i18n";

interface ExperienceProps {
  lang: Language;
}

export default function Experience({ lang }: ExperienceProps) {
  const isVi = lang === "vi";

  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 py-8">
        <h1 className="text-5xl font-bold">
          {isVi ? "Kinh nghiệm" : "Experience"}
        </h1>
        <Separator className="data-horizontal:h-1 w-1/12! rounded-full bg-primary" />

        <div className="flex gap-5">
          <div className="hidden min-w-10 flex-col items-center pt-1 sm:flex">
            <div className="flex size-10 items-center justify-center rounded-full border-2 border-primary text-primary">
              <BriefcaseBusiness size={20} />
            </div>
            <div className="mt-4 h-28 w-1 rounded-full bg-primary/40" />
          </div>

          <article className="w-full rounded-2xl border border-primary/20 bg-card p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/35 hover:shadow-lg">
            <h2 className="text-2xl font-bold text-foreground">
              {isVi ? "Lập trình viên Full Stack" : "Full Stack Developer"}
            </h2>

            <a
              href="https://www.cybertech.com.vn/"
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex text-lg font-semibold text-primary hover:underline"
            >
              Cybertech JSC
            </a>

            <div className="mt-4 flex items-center gap-3 text-base text-foreground/70">
              <CalendarDays size={20} />
              <span>{isVi ? "Vị trí hiện tại" : "Current Position"}</span>
            </div>

            <div className="mt-4 flex items-center gap-3 text-base font-semibold text-foreground">
              <Award size={20} className="text-primary" />
              <span>{isVi ? "Trách nhiệm chính" : "Key Responsibilities"}</span>
            </div>

            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-foreground/85">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 size-2.5 shrink-0 rounded-full bg-primary/70" />
                <span>
                  {isVi
                    ? "Xây dựng và tối ưu trải nghiệm frontend với React/Next.js để tạo sản phẩm mượt mà, thân thiện với người dùng."
                    : "Build and optimize frontend experiences with React/Next.js for responsive, user-friendly products."}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 size-2.5 shrink-0 rounded-full bg-primary/70" />
                <span>
                  {isVi
                    ? "Thiết kế và duy trì backend API, business logic và luồng dữ liệu cho hệ thống ổn định, dễ mở rộng."
                    : "Design and maintain backend APIs, business logic, and data flows for scalable, reliable systems."}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 size-2.5 shrink-0 rounded-full bg-primary/70" />
                <span>
                  {isVi
                    ? "Tích hợp tính năng AI vào sản phẩm, từ khả năng dựa trên mô hình đến tự động hóa quy trình thông minh."
                    : "Integrate AI features into products, from model-driven capabilities to intelligent workflow automation."}
                </span>
              </li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
