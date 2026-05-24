"use client";

import React, { useEffect, useRef, useState } from "react";
import { Separator } from "@/components/ui/separator";
import { Target, Zap, Heart } from "lucide-react";
import type { Language } from "../../lib/i18n";

interface AboutProps {
  lang: Language;
}

export default function About({ lang }: AboutProps) {
  const isVi = lang === "vi";
  const skillsRef = useRef<HTMLDivElement>(null);
  const [skillsVisible, setSkillsVisible] = useState(false);
  const softSkills = [
    {
      label: isVi ? "Giao tiếp tiếng Anh" : "English Communication",
      value: 75,
      color: "bg-blue-500",
    },
    {
      label: isVi ? "Giải quyết vấn đề" : "Problem Solving",
      value: 80,
      color: "bg-emerald-500",
    },
    {
      label: isVi ? "Hợp tác nhóm" : "Team Collaboration",
      value: 80,
      color: "bg-violet-500",
    },
    {
      label: isVi ? "Tự học" : "Self-learning",
      value: 85,
      color: "bg-amber-500",
    },
    {
      label: isVi ? "Khả năng thích nghi" : "Adaptability",
      value: 80,
      color: "bg-rose-500",
    },
  ];

  useEffect(() => {
    const skillsElement = skillsRef.current;
    if (!skillsElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSkillsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(skillsElement);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-8 md:px-12">
        <h1 className="text-5xl font-bold">
          {isVi ? "Giới thiệu" : "About me"}
        </h1>
        <Separator className="data-horizontal:h-1 w-1/12! rounded-full bg-primary" />
        <div className="mx-auto flex w-full flex-col justify-between gap-12 py-8 lg:flex-row">
          <div className="w-full lg:w-2/3">
            <p>
              {isVi ? (
                <>
                  Mình là một{" "}
                  <strong className="font-bold text-foreground">
                    software developer
                  </strong>{" "}
                  quan tâm đến việc xây dựng các{" "}
                  <strong className="font-bold text-foreground">
                    sản phẩm số thực tế
                  </strong>{" "}
                  và{" "}
                  <strong className="font-bold text-foreground">
                    có khả năng mở rộng
                  </strong>
                  . Mình có kinh nghiệm làm việc ở{" "}
                  <strong className="font-bold text-foreground">frontend</strong>,{" "}
                  <strong className="font-bold text-foreground">backend</strong>,{" "}
                  <strong className="font-bold text-foreground">
                    fullstack development
                  </strong>{" "}
                  và{" "}
                  <strong className="font-bold text-foreground">
                    tích hợp AI
                  </strong>{" "}
                  thông qua các đồ án học thuật, dự án cá nhân và công việc thực
                  tế.
                </>
              ) : (
                <>
                  I&apos;m a{" "}
                  <strong className="font-bold text-foreground">
                    software developer
                  </strong>{" "}
                  interested in building{" "}
                  <strong className="font-bold text-foreground">practical</strong>{" "}
                  and{" "}
                  <strong className="font-bold text-foreground">
                    scalable digital products
                  </strong>
                  . I have experience working across{" "}
                  <strong className="font-bold text-foreground">frontend</strong>,{" "}
                  <strong className="font-bold text-foreground">backend</strong>,{" "}
                  <strong className="font-bold text-foreground">
                    fullstack development
                  </strong>
                  , and{" "}
                  <strong className="font-bold text-foreground">
                    AI integration
                  </strong>{" "}
                  through academic projects, personal projects, and real-world
                  work.
                </>
              )}
            </p>
            <p className="mt-4">
              {isVi ? (
                <>
                  Mình thích{" "}
                  <strong className="font-bold text-foreground">
                    giải quyết vấn đề
                  </strong>
                  ,{" "}
                  <strong className="font-bold text-foreground">
                    viết code rõ ràng
                  </strong>{" "}
                  và liên tục cải thiện{" "}
                  <strong className="font-bold text-foreground">
                    kỹ năng kỹ thuật
                  </strong>
                  . Mình có thể làm việc độc lập hoặc phối hợp với đội nhóm để
                  tạo ra các{" "}
                  <strong className="font-bold text-foreground">
                    giải pháp phần mềm ổn định
                  </strong>{" "}
                  và đáng tin cậy.
                </>
              ) : (
                <>
                  I enjoy{" "}
                  <strong className="font-bold text-foreground">
                    solving problems
                  </strong>
                  ,{" "}
                  <strong className="font-bold text-foreground">
                    writing clean code
                  </strong>
                  , and continuously improving my{" "}
                  <strong className="font-bold text-foreground">
                    technical skills
                  </strong>
                  . I can work independently or collaborate with a team to
                  deliver{" "}
                  <strong className="font-bold text-foreground">
                    reliable software solutions
                  </strong>
                  .
                </>
              )}
            </p>

            <div ref={skillsRef} className="mt-8 grid gap-5">
              {softSkills.map((skill) => (
                <div key={skill.label}>
                  <div className="mb-2 flex items-center justify-between gap-4 text-sm">
                    <span className="font-semibold text-foreground">
                      {skill.label}
                    </span>
                    <span className="font-bold text-foreground">
                      {skill.value}%
                    </span>
                  </div>
                  <div
                    className="h-2.5 overflow-hidden rounded-full bg-secondary"
                    role="progressbar"
                    aria-label={skill.label}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-valuenow={skill.value}
                  >
                    <div
                      className={`h-full rounded-full transition-[width] duration-1000 ease-out ${skill.color}`}
                      style={{ width: skillsVisible ? `${skill.value}%` : 0 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-1/3">
            <div className="border border-primary/20 rounded-2xl p-8 bg-sidebar">
              <p className="text-primary text-xl font-bold">
                {isVi ? "Triết lý" : "Philosophy"}
              </p>
              <p className="mt-4 italic text-sm">
                {isVi
                  ? '"Làm ra sản phẩm có chất lượng. Xây dựng để mở rộng. Tư duy như một product owner. Viết code như thể bạn sẽ bảo trì nó mãi mãi."'
                  : '"Ship with quality. Build for scale. Think like a product owner. Code like you\'ll maintain it forever."'}
              </p>
            </div>

            <div className="mt-4 flex items-center gap-4 rounded-2xl bg-sky-50 p-4 transition-transform duration-200 ease-out hover:scale-[1.02] dark:bg-sky-400/10">
              <div className="rounded-lg bg-sky-100 p-2 text-sky-500 dark:bg-sky-400/15 dark:text-sky-300">
                <Target />
              </div>
              <div>
                <p className="text-sm font-semibold">
                  {isVi ? "Giải quyết vấn đề" : "Problem Solver"}
                </p>
                <p className="text-xs mt-1">
                  {isVi
                    ? "Mình tiếp cận mọi thách thức với tư duy rõ ràng và sáng tạo."
                    : "I approach every challenge with a clear head and creative mindset."}
                </p>
              </div>
            </div>

            <div className="mt-4 flex items-center gap-4 rounded-2xl bg-amber-50 p-4 transition-transform duration-200 ease-out hover:scale-[1.02] dark:bg-amber-400/10">
              <div className="rounded-lg bg-amber-100 p-2 text-amber-500 dark:bg-amber-400/15 dark:text-amber-300">
                <Zap />
              </div>
              <div>
                <p className="text-sm font-semibold">
                  {isVi ? "Học nhanh" : "Quick Learner"}
                </p>
                <p className="text-xs mt-1">
                  {isVi
                    ? "Công nghệ và lĩnh vực mới là cơ hội thú vị, không phải rào cản."
                    : "New technologies and domains are exciting opportunities, not obstacles."}
                </p>
              </div>
            </div>

            <div className="mt-4 flex items-center gap-4 rounded-2xl bg-rose-50 p-4 transition-transform duration-200 ease-out hover:scale-[1.02] dark:bg-rose-400/10">
              <div className="rounded-lg bg-rose-100 p-2 text-rose-500 dark:bg-rose-400/15 dark:text-rose-300">
                <Heart />
              </div>
              <div>
                <p className="text-sm font-semibold">
                  {isVi ? "Tận tâm" : "Passionate"}
                </p>
                <p className="text-xs mt-1">
                  {isVi
                    ? "Mình thực sự quan tâm đến việc tạo ra sản phẩm có giá trị và tạo tác động tích cực."
                    : "I genuinely care about building products that matter and make an impact."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
