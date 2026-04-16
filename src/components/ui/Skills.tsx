"use client";

import React, { useMemo, useRef, useState } from "react";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import {
  BrainCircuit,
  Code,
  Database,
  Layers,
  Server,
  Wrench,
} from "lucide-react";
import { motion, useInView } from "framer-motion";
import type { Language } from "../../lib/i18n";
import { useIsMobile } from "@/hooks/use-mobile";

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

const fullstackSkills = [
  "REST API Integration",
  "Authentication (JWT/OAuth)",
  "CRUD Application",
  "State Management",
  "Role-Based Access Control",
];

const aiLlmSkills = [
  "Image Retrieval",
  "RAG Chatbot",
  "OpenAI API",
  "Vector Search",
  "LLM Integration",
  "Semantic Search",
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

type SkillField = {
  key: string;
  title: string;
  shortLabel: string;
  icon: React.ElementType;
  description: string;
  skills: string[];
};

export default function Skills({ lang }: SkillsProps) {
  const isVi = lang === "vi";
  const isMobile = useIsMobile(768);
  const isTablet = useIsMobile(1024);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.25 });

  const skillFields = useMemo<SkillField[]>(
    () => [
      {
        key: "frontend",
        title: isVi ? "Frontend Development" : "Frontend Development",
        shortLabel: "Frontend",
        icon: Code,
        description: isVi
          ? "Xay dung giao dien nhanh, toi uu va de mo rong."
          : "Building fast, scalable, and polished interfaces.",
        skills: frontendSkills,
      },
      {
        key: "backend",
        title: isVi ? "Backend Development" : "Backend Development",
        shortLabel: "Backend",
        icon: Server,
        description: isVi
          ? "Thiet ke API va xu ly nghiep vu phia server on dinh."
          : "Designing stable APIs and backend business logic.",
        skills: backendSkills,
      },
      {
        key: "database",
        title: isVi ? "Database & Storage" : "Database & Storage",
        shortLabel: "Database",
        icon: Database,
        description: isVi
          ? "Lam viec voi he quan tri du lieu va toi uu truy van."
          : "Working with data systems and query optimization.",
        skills: databaseSkills,
      },
      {
        key: "fullstack",
        title: isVi ? "Fullstack Practices" : "Fullstack Practices",
        shortLabel: "Fullstack",
        icon: Layers,
        description: isVi
          ? "Ket noi frontend va backend trong cac ung dung thuc te."
          : "Bridging frontend and backend in real-world apps.",
        skills: fullstackSkills,
      },
      {
        key: "ai-llm",
        title: isVi ? "AI & LLM Integrations" : "AI & LLM Integrations",
        shortLabel: "AI-LLM",
        icon: BrainCircuit,
        description: isVi
          ? "Tich hop AI vao san pham voi tra cuu ngu nghia va RAG."
          : "Integrating AI features including semantic and RAG systems.",
        skills: aiLlmSkills,
      },
      {
        key: "tools",
        title: isVi ? "Tools & Workflow" : "Tools & Workflow",
        shortLabel: "Tools",
        icon: Wrench,
        description: isVi
          ? "Toi uu quy trinh phat trien voi cong cu va quy trinh phu hop."
          : "Optimizing development workflow with the right tools.",
        skills: toolSkills,
      },
    ],
    [isVi],
  );

  const [selectedFieldKey, setSelectedFieldKey] = useState<string>(
    skillFields[0]?.key ?? "frontend",
  );

  const selectedField =
    skillFields.find((field) => field.key === selectedFieldKey) ??
    skillFields[0];
  const ringDiameter = isMobile ? 194 : isTablet ? 246 : 316;
  const ringRadius = ringDiameter / 2;

  const orbitConfig = useMemo(
    () =>
      skillFields.map((field, index) => {
        const angle = -90 + index * (360 / skillFields.length);
        const radians = (angle * Math.PI) / 180;
        const nodeSize = isMobile ? 56 : isTablet ? 64 : 68;
        const radius = ringRadius;

        return {
          field,
          x: Math.cos(radians) * radius,
          y: Math.sin(radians) * radius,
          nodeSize,
          delay: 0.25 + index * 0.16,
        };
      }),
    [isMobile, isTablet, ringRadius, skillFields],
  );

  return (
    <section ref={sectionRef} className="relative overflow-hidden">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-8 md:px-12">
        <h1 className="text-5xl font-bold">
          {isVi ? "Kỹ năng & Chuyên môn" : "Skills & Expertise"}
        </h1>
        <Separator className="data-horizontal:h-1 w-1/12! rounded-full bg-primary" />

        <div className="mt-4 inline-flex items-center justify-center lg:w-full">
          <div className="space-y-6 rounded-3xl border border-border/70 bg-card/70 p-5 shadow-sm backdrop-blur-sm sm:p-7 lg:w-1/3">
            <div className="space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <p>
                I&apos;m always learning and exploring new technologies. If
                there&apos;s a specific tech stack you&apos;re looking for,
                there&apos;s a good chance I can pick it up quickly.
              </p>
              <p>
                My approach is to master the fundamentals deeply while staying
                current with industry trends.
              </p>
            </div>

            <div className="space-y-3 border-t border-border/70 pt-5">
              <div>
                <p className="text-sm font-semibold text-foreground sm:text-base">
                  {selectedField.title}
                </p>
                <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
                  {selectedField.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {selectedField.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary sm:text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:w-2/3">
            <div className="mx-auto flex h-82.5 w-full max-w-95 items-center justify-center sm:h-95 sm:max-w-105 md:h-100 md:max-w-110 lg:h-130 lg:max-w-140">
              <div className="relative h-80 w-80 sm:h-90 sm:w-90 md:h-95 md:w-95 lg:h-125 lg:w-125">
                <motion.div
                  initial={{ opacity: 0, scale: 0.88 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.55, ease: "easeOut" }}
                  className="absolute top-1/2 left-1/2 z-20 h-34 w-34 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full border border-sky-500 bg-background shadow-lg sm:h-40 sm:w-40 lg:h-52 lg:w-52"
                >
                  <Image
                    src="/body.png"
                    alt="Profile"
                    fill
                    sizes="(max-width: 640px) 136px, (max-width: 1024px) 160px, 208px"
                    className="object-cover"
                    priority={false}
                  />
                </motion.div>

                <motion.div
                  aria-hidden="true"
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.15 }}
                  style={{
                    width: `${ringDiameter}px`,
                    height: `${ringDiameter}px`,
                  }}
                  className="pointer-events-none absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/20"
                />

                {orbitConfig.map(({ field, x, y, nodeSize, delay }) => {
                  const Icon = field.icon;
                  const isSelected = selectedField.key === field.key;

                  return (
                    <motion.button
                      key={field.key}
                      type="button"
                      onClick={() => setSelectedFieldKey(field.key)}
                      initial={{ opacity: 0, scale: 0.3 }}
                      animate={
                        isInView
                          ? {
                              opacity: 1,
                              scale: 1,
                              x,
                              y,
                            }
                          : {}
                      }
                      transition={{
                        duration: 0.5,
                        delay,
                        ease: "easeOut",
                      }}
                      style={{
                        width: `${nodeSize}px`,
                        height: `${nodeSize}px`,
                        minWidth: `${nodeSize}px`,
                        minHeight: `${nodeSize}px`,
                      }}
                      className={`absolute top-1/2 left-1/2 z-30 flex aspect-square shrink-0 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border p-0 text-center transition-all duration-300 ${
                        isSelected
                          ? "border-primary bg-primary text-primary-foreground shadow-lg"
                          : "border-border bg-white text-foreground shadow-sm hover:border-primary/60"
                      }`}
                      aria-label={field.title}
                    >
                      <Icon className="size-4 sm:size-5" />
                    </motion.button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
