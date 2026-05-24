"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import {
  BrainCircuit,
  Code,
  Database,
  GraduationCap,
  Rocket,
  Server,
  Sparkles,
  Wrench,
} from "lucide-react";
import { motion, useInView } from "framer-motion";
import SkillCard from "@/components/ui/SkillCard";
import type { Language } from "../../lib/i18n";

const frontendSkills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "React Native",
];

const backendSkills = [
  "Python",
  "Node.js",
  "Java",
  "PHP",
  "REST API",
  "Authentication",
  "WebSockets",
];

const databaseSkills = [
  "PostgreSQL",
  "MySQL",
  "MongoDB",
  "SQLServer",
  "Redis",
  "Prisma",
];

const aiLlmSkills = [
  "PyTorch",
  "TensorFlow",
  "NumPy",
  "Pandas",
  "OpenAI",
  "Hugging Face",
];

const toolSkills = [
  "Git & GitHub",
  "Docker",
  "Postman",
  "Figma",
  "VS Code",
  "Agile",
];

interface SkillsProps {
  lang: Language;
}

export default function Skills({ lang }: SkillsProps) {
  const isVi = lang === "vi";
  const profileHighlights = [
    {
      title: isVi ? "Đang học tại" : "Studying at",
      value: "UIT - VNU HCM",
      icon: GraduationCap,
      className:
        "left-0 top-14 sm:left-2 md:-left-2 md:top-18 lg:left-0 xl:-left-2",
    },
    {
      title: isVi ? "Trọng tâm" : "Main focus",
      value: "FE & BE",
      icon: Rocket,
      className:
        "right-0 top-36 sm:right-2 md:-right-4 md:top-40 lg:right-0 xl:-right-6",
    },
    {
      title: isVi ? "Đang khám phá" : "Exploring",
      value: "AI, RAG & LLM Apps",
      icon: Sparkles,
      className: "bottom-6 left-1/2 -translate-x-1/2 md:bottom-0 lg:bottom-2",
    },
  ];

  const imageSectionRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(imageSectionRef, {
    once: true,
    margin: "-100px 0px",
  });

  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-8 md:px-12">
        <h1 className="text-5xl font-bold">
          {isVi ? "Kỹ năng & Chuyên môn" : "Skills & Expertise"}
        </h1>
        <Separator className="data-horizontal:h-1 w-1/12! rounded-full bg-primary" />

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          <SkillCard
            title="Frontend"
            icon={<Code />}
            skills={frontendSkills}
            accent="var(--chart-1)"
          />
          <SkillCard
            title="Backend"
            icon={<Server />}
            skills={backendSkills}
            accent="var(--chart-2)"
          />
          <SkillCard
            title={isVi ? "Cơ sở dữ liệu" : "Databases"}
            icon={<Database />}
            skills={databaseSkills}
            accent="var(--chart-3)"
          />
          <SkillCard
            title="AI & LLM"
            icon={<BrainCircuit />}
            skills={aiLlmSkills}
            accent="var(--chart-5)"
          />
          <SkillCard
            title={isVi ? "Công cụ" : "Tools"}
            icon={<Wrench />}
            skills={toolSkills}
            accent="var(--destructive)"
          />
        </div>

        <div className="flex w-full flex-col gap-6 lg:flex-row lg:items-center">
          <div className="w-full rounded-3xl border border-bs-accent-foreground/20 bg-sidebar p-8 shadow-sm lg:w-1/2">
            <p className="text-base leading-7 text-foreground/90">
              {isVi
                ? "Mình luôn học hỏi và khám phá công nghệ mới. Nếu bạn đang tìm một tech stack cụ thể, khả năng cao là mình có thể nắm bắt rất nhanh."
                : "I'm always learning and exploring new technologies. If there's a specific tech stack you're looking for, there's a good chance I can pick it up quickly."}
            </p>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              {isVi
                ? "Cách mình làm là nắm thật chắc nền tảng, đồng thời luôn cập nhật xu hướng của ngành."
                : "My approach is to master the fundamentals deeply while staying current with industry trends."}
            </p>
          </div>

          <div
            ref={imageSectionRef}
            className="flex w-full justify-center lg:w-1/2"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.7, y: 60 }}
              animate={
                isInView
                  ? { opacity: 1, scale: 1, y: 0 }
                  : { opacity: 0, scale: 0.7, y: 60 }
              }
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 10,
                mass: 0.8,
              }}
              className="relative flex h-115 w-full max-w-130 items-center justify-center sm:h-125"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 12,
                  delay: 0.08,
                }}
                className="absolute h-46.25 w-46.25 rounded-full bg-primary/15 blur-3xl sm:h-52.5 sm:w-52.5"
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.68 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 12,
                  delay: 0.14,
                }}
                className="absolute h-62.5 w-62.5 rounded-full bg-primary/15 sm:h-70 sm:w-70"
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: -8 }}
                animate={
                  isInView
                    ? { opacity: 1, scale: 1, rotate: 0 }
                    : { opacity: 0, scale: 0.8, rotate: -8 }
                }
                transition={{
                  type: "spring",
                  stiffness: 95,
                  damping: 12,
                  delay: 0.2,
                }}
                className="absolute h-76.25 w-76.25 rounded-full border-4 border-dashed border-primary/35 sm:h-85 sm:w-85"
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.75, y: 40 }}
                animate={
                  isInView
                    ? { opacity: 1, scale: 1, y: 0 }
                    : { opacity: 0, scale: 0.75, y: 40 }
                }
                transition={{
                  type: "spring",
                  stiffness: 140,
                  damping: 9,
                  delay: 0.26,
                }}
                className="relative z-10 flex h-82.5 w-65 items-end justify-center sm:h-92.5 sm:w-72.5"
              >
                <Image
                  src="/camera.png"
                  alt="Profile photo"
                  width={420}
                  height={520}
                  className="h-full w-auto object-contain drop-shadow-[0_20px_35px_hsl(var(--primary)/0.18)]"
                  unoptimized
                  priority
                />
              </motion.div>

              {profileHighlights.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, scale: 0.6, y: 20 }}
                    animate={
                      isInView
                        ? { opacity: 1, scale: 1, y: 0 }
                        : { opacity: 0, scale: 0.6, y: 20 }
                    }
                    whileHover={{
                      scale: 1.05,
                      y: -4,
                      transition: {
                        type: "spring",
                        stiffness: 300,
                        damping: 15,
                      },
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 180,
                      damping: 10,
                      delay: 0.38 + index * 0.12,
                    }}
                    className={`absolute z-20 rounded-2xl border border-border/50 bg-background/90 px-4 py-3 shadow-[0_10px_30px_hsl(var(--foreground)/0.08)] backdrop-blur-sm ${item.className}`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/12 text-primary">
                        <Icon size={18} />
                      </div>
                      <div>
                        <p className="text-lg font-bold leading-none text-foreground">
                          {item.value}
                        </p>
                        <p className="mt-1 whitespace-nowrap text-sm leading-none text-muted-foreground">
                          {item.title}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
