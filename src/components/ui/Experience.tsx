import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  ArrowRight,
  Award,
  Bot,
  BriefcaseBusiness,
  CalendarDays,
  Code2,
  ExternalLink,
  Globe2,
  ShieldCheck,
  Sparkles,
  UsersRound,
} from "lucide-react";
import type { Language } from "../../lib/i18n";

interface ExperienceProps {
  lang: Language;
}

export default function Experience({ lang }: ExperienceProps) {
  const isVi = lang === "vi";

  const offerings = [
    {
      icon: Code2,
      label: isVi ? "Phát triển Web" : "Web Development",
    },
    {
      icon: Bot,
      label: isVi ? "AI & Tự động hóa" : "AI & Automation",
    },
    {
      icon: ShieldCheck,
      label: isVi ? "Giải pháp doanh nghiệp" : "Enterprise Solutions",
    },
    {
      icon: Sparkles,
      label: isVi ? "Tối ưu quy trình" : "Workflow Optimization",
    },
  ];

  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-8 md:px-12">
        <h1 className="text-5xl font-bold">
          {isVi ? "Kinh nghiệm" : "Experience"}
        </h1>
        <Separator className="data-horizontal:h-1 w-1/12! rounded-full bg-primary" />

        <article className="overflow-hidden rounded-2xl border border-primary/20 bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/35 hover:shadow-lg">
          <div className="grid gap-0 lg:grid-cols-[0.92fr_1.45fr]">
            <aside className="border-b border-border bg-secondary/35 p-6 sm:p-8 lg:border-r lg:border-b-0">
              <div className="flex flex-col gap-6">
                <div className="relative flex size-24 items-center justify-center overflow-hidden rounded-2xl border border-primary/20 bg-background shadow-[0_18px_40px_rgba(124,58,237,0.16)]">
                  <Image
                    src="/logo_cybertech.png"
                    alt="Cybertech logo"
                    width={78}
                    height={78}
                    className="object-contain"
                  />
                </div>

                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h2 className="text-3xl font-bold text-foreground">
                      Cybertech
                    </h2>
                    <span className="rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-primary">
                      JSC
                    </span>
                  </div>
                  <p className="mt-4 max-w-md text-sm leading-7 text-foreground/70">
                    {isVi
                      ? "Cybertech cung cấp giải pháp công nghệ và phần mềm cho doanh nghiệp, tập trung vào hệ thống web, tự động hóa quy trình và các sản phẩm số có khả năng mở rộng."
                      : "Cybertech delivers technology and software solutions for businesses, focusing on web systems, workflow automation, and scalable digital products."}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-xl border border-border bg-background/70 p-4">
                    <div className="flex items-center gap-2 text-2xl font-bold">
                      <UsersRound size={18} className="text-primary" />
                      <span>200+</span>
                    </div>
                    <p className="mt-1 text-xs text-foreground/55">
                      {isVi ? "Khách hàng" : "Customers"}
                    </p>
                  </div>
                  <div className="rounded-xl border border-border bg-background/70 p-4">
                    <div className="flex items-center gap-2 text-2xl font-bold">
                      <BriefcaseBusiness size={18} className="text-primary" />
                      <span>{isVi ? "AI" : "AI"}</span>
                    </div>
                    <p className="mt-1 text-xs text-foreground/55">
                      {isVi ? "Giải pháp chuyển đổi số" : "Digital solutions"}
                    </p>
                  </div>
                </div>

                <Button
                  asChild
                  size="lg"
                  className="h-12 w-fit rounded-xl px-6 text-base font-bold shadow-[0_14px_30px_rgba(124,58,237,0.22)]"
                >
                  <a
                    href="https://www.cybertech.com.vn/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Visit Cybertech website"
                  >
                    <ExternalLink className="size-5" />
                    {isVi ? "Truy cập Cybertech" : "Visit Cybertech"}
                    <ArrowRight className="size-5" />
                  </a>
                </Button>
              </div>
            </aside>

            <div className="p-6 sm:p-8 lg:p-10">
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-2xl font-bold leading-tight text-foreground sm:text-3xl">
                  {isVi
                    ? "Xây dựng sản phẩm số với tư duy Full Stack"
                    : "Building Digital Products With Full Stack Thinking"}
                </h3>
                <p className="mt-4 text-sm leading-7 text-foreground/70 sm:text-base">
                  {isVi
                    ? "Mình tham gia phát triển giao diện, backend API và các luồng tích hợp để biến yêu cầu nghiệp vụ thành trải nghiệm sản phẩm rõ ràng, ổn định và dễ mở rộng."
                    : "I contribute across frontend, backend APIs, and integrations to turn business requirements into clear, reliable, and extensible product experiences."}
                </p>
              </div>

              <div className="mt-8">
                <div className="flex items-center gap-3 text-sm font-bold uppercase tracking-[0.22em] text-foreground/55">
                  <Award size={18} className="text-primary" />
                  <span>
                    {isVi ? "Trách nhiệm chính" : "Key Responsibilities"}
                  </span>
                </div>

                <ul className="mt-5 space-y-3 text-sm leading-relaxed text-foreground/85">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 size-2.5 shrink-0 rounded-full bg-primary/70" />
                    <span>
                      {isVi ? (
                        <>
                          Xây dựng và tối ưu{" "}
                          <strong className="font-bold text-primary">
                            trải nghiệm frontend
                          </strong>{" "}
                          với{" "}
                          <strong className="font-bold text-primary">
                            React/Next.js
                          </strong>{" "}
                          để tạo sản phẩm mượt mà, thân thiện với người dùng.
                        </>
                      ) : (
                        <>
                          Build and optimize{" "}
                          <strong className="font-bold text-primary">
                            frontend experiences
                          </strong>{" "}
                          with{" "}
                          <strong className="font-bold text-primary">
                            React/Next.js
                          </strong>{" "}
                          for responsive, user-friendly products.
                        </>
                      )}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 size-2.5 shrink-0 rounded-full bg-primary/70" />
                    <span>
                      {isVi ? (
                        <>
                          Thiết kế và duy trì{" "}
                          <strong className="font-bold text-primary">
                            backend API
                          </strong>
                          ,{" "}
                          <strong className="font-bold text-primary">
                            business logic
                          </strong>{" "}
                          và luồng dữ liệu cho hệ thống ổn định, dễ mở rộng.
                        </>
                      ) : (
                        <>
                          Design and maintain{" "}
                          <strong className="font-bold text-primary">
                            backend APIs
                          </strong>
                          ,{" "}
                          <strong className="font-bold text-primary">
                            business logic
                          </strong>
                          , and data flows for scalable, reliable systems.
                        </>
                      )}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 size-2.5 shrink-0 rounded-full bg-primary/70" />
                    <span>
                      {isVi ? (
                        <>
                          Tích hợp{" "}
                          <strong className="font-bold text-primary">
                            tính năng AI
                          </strong>{" "}
                          vào sản phẩm, từ khả năng dựa trên mô hình đến{" "}
                          <strong className="font-bold text-primary">
                            tự động hóa quy trình
                          </strong>{" "}
                          thông minh.
                        </>
                      ) : (
                        <>
                          Integrate{" "}
                          <strong className="font-bold text-primary">
                            AI features
                          </strong>{" "}
                          into products, from model-driven capabilities to{" "}
                          <strong className="font-bold text-primary">
                            workflow automation
                          </strong>
                          .
                        </>
                      )}
                    </span>
                  </li>
                </ul>
              </div>

              <Separator className="my-8" />

              <div className="flex flex-wrap gap-3">
                {offerings.map(({ icon: Icon, label }) => (
                  <span
                    key={label}
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-4 py-2 text-sm font-semibold text-foreground/75"
                  >
                    <Icon size={16} className="text-primary" />
                    {label}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-5 text-sm text-foreground/55">
                <span className="inline-flex items-center gap-2">
                  <CalendarDays size={16} />
                  {isVi
                    ? "Fullstack Developer · 03/2025 - 05/2026"
                    : "Fullstack Developer · Mar 2025 - May 2026"}
                </span>
                <span className="inline-flex items-center gap-2">
                  <Globe2 size={16} />
                  cybertech.com.vn
                </span>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
