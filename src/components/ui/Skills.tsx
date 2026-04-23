"use client";

import React, { useMemo, useRef, useState } from "react";
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
  const ringDiameter = isMobile ? 288 : isTablet ? 452 : 388;
  const ringRadius = ringDiameter / 2;
  const nodeSize = isMobile ? 64 : isTablet ? 84 : 68;
  const orbitFrameSize =
    ringDiameter + nodeSize + (isMobile ? 42 : isTablet ? 68 : 56);
  const centerCoreSize = ringDiameter * (isMobile ? 0.32 : isTablet ? 0.34 : 0.33);
  const ringStep = (ringDiameter - centerCoreSize) / 6;
  const accentCircleSize = centerCoreSize;
  const innerAuraSize = centerCoreSize + ringStep * 2;
  const outerAuraSize = centerCoreSize + ringStep * 4;

  const orbitConfig = useMemo(
    () =>
      skillFields.map((field, index) => {
        const angle = -90 + index * (360 / skillFields.length);
        const radians = (angle * Math.PI) / 180;
        const radius = ringRadius;

        return {
          field,
          x: Math.cos(radians) * radius,
          y: Math.sin(radians) * radius,
          nodeSize,
          delay: 0.25 + index * 0.16,
        };
      }),
    [nodeSize, ringRadius, skillFields],
  );

  return (
    <section ref={sectionRef} className="relative overflow-visible">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-8 md:px-12">
        <h1 className="text-4xl font-bold sm:text-5xl">
          {isVi ? "Kỹ năng & Chuyên môn" : "Skills & Expertise"}
        </h1>
        <Separator className="data-horizontal:h-1 w-1/12! rounded-full bg-primary" />

        <div className="mt-4 mb-16 flex w-full flex-col gap-10 lg:flex-row lg:items-center lg:gap-12">
          <div className="w-full space-y-6 rounded-3xl border border-border/70 bg-card/70 p-5 shadow-sm backdrop-blur-sm sm:p-7 lg:max-w-[32rem] lg:flex-1">
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

          <div className="flex w-full items-center justify-center lg:flex-1">
            <div
              className="flex w-full items-center justify-center"
              style={{
                minHeight: `${orbitFrameSize}px`,
                paddingTop: isMobile ? "0.5rem" : "1rem",
                paddingBottom: isMobile ? "0.5rem" : "1rem",
              }}
            >
              <div
                className="relative"
                style={{
                  width: `${orbitFrameSize}px`,
                  height: `${orbitFrameSize}px`,
                }}
              >
                <svg
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 z-5"
                  width={orbitFrameSize}
                  height={orbitFrameSize}
                  viewBox={`0 0 ${orbitFrameSize} ${orbitFrameSize}`}
                >
                  {orbitConfig.map(({ field, x, y, nodeSize, delay }) => {
                    const center = orbitFrameSize / 2;
                    const distance = Math.sqrt(x * x + y * y) || 1;
                    const endOffset = distance - nodeSize / 2;
                    const endX = center + (x / distance) * endOffset;
                    const endY = center + (y / distance) * endOffset;
                    const isSelected = selectedField.key === field.key;

                    return (
                      <motion.line
                        key={`connector-${field.key}`}
                        x1={center}
                        y1={center}
                        x2={endX}
                        y2={endY}
                        stroke={
                          isSelected
                            ? "rgba(37, 99, 235, 0.82)"
                            : "rgba(37, 99, 235, 0.3)"
                        }
                        strokeWidth={
                          isSelected
                            ? isMobile
                              ? 3
                              : 3.6
                            : 1.35
                        }
                        strokeLinecap="round"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
                        transition={{
                          duration: 0.45,
                          delay: Math.max(delay - 0.08, 0),
                          ease: "easeOut",
                        }}
                      />
                    );
                  })}
                </svg>

                <motion.div
                  aria-hidden="true"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.45, delay: 0.1, ease: "easeOut" }}
                  style={{
                    width: `${accentCircleSize}px`,
                    height: `${accentCircleSize}px`,
                  }}
                  className="absolute top-1/2 left-1/2 z-10 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-blue-400/16 bg-white shadow-sm"
                >
                  <span className="text-[10px] font-semibold tracking-[0.28em] text-primary sm:text-xs">
                    SKILLS
                  </span>
                </motion.div>

                <motion.div
                  aria-hidden="true"
                  initial={{ opacity: 0, scale: 0.82 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.45, delay: 0.16, ease: "easeOut" }}
                  style={{
                    width: `${innerAuraSize}px`,
                    height: `${innerAuraSize}px`,
                  }}
                  className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-400/22"
                />

                <motion.div
                  aria-hidden="true"
                  initial={{ opacity: 0, scale: 0.84 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.28, ease: "easeOut" }}
                  style={{
                    width: `${outerAuraSize}px`,
                    height: `${outerAuraSize}px`,
                  }}
                  className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-300/16"
                />

                <motion.div
                  aria-hidden="true"
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.15 }}
                  style={{
                    width: `${ringDiameter}px`,
                    height: `${ringDiameter}px`,
                  }}
                  className="pointer-events-none absolute top-1/2 left-1/2 z-0 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/20"
                />

                {orbitConfig.map(({ field, x, y, nodeSize, delay }) => {
                  const Icon = field.icon;
                  const isSelected = selectedField.key === field.key;

                  return (
                    <React.Fragment key={field.key}>
                      <motion.button
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
                        <Icon className={isMobile ? "size-4" : "size-5"} />
                      </motion.button>
                    </React.Fragment>
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
