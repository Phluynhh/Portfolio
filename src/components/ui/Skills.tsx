import React from "react";
import { Separator } from "@/components/ui/separator";
import {
  BrainCircuit,
  Code,
  Database,
  Layers,
  Server,
  Wrench,
} from "lucide-react";
import SkillCard from "@/components/ui/SkillCard";

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

export default function Skills() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 py-8">
        <h1 className="text-5xl font-bold">Skills & Expertise</h1>
        <Separator className="data-horizontal:h-1 w-1/12! rounded-full bg-primary" />
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          <SkillCard
            title="Frontend"
            icon={<Code color="#246bf6" />}
            skills={frontendSkills}
          />
          <SkillCard
            title="Backend"
            icon={<Server color="#246bf6" />}
            skills={backendSkills}
          />
          <SkillCard
            title="Databases"
            icon={<Database color="#246bf6" />}
            skills={databaseSkills}
          />
          <SkillCard
            title="Fullstack"
            icon={<Layers color="#246bf6" />}
            skills={fullstackSkills}
          />
          <SkillCard
            title="AI & LLM"
            icon={<BrainCircuit color="#246bf6" />}
            skills={aiLlmSkills}
          />
          <SkillCard
            title="Tools"
            icon={<Wrench color="#246bf6" />}
            skills={toolSkills}
          />
        </div>
      </div>
    </section>
  );
}
