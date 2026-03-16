import React from "react";
import { Badge } from "@/components/ui/badge";

type SkillCardProps = {
  title: string;
  icon: React.ReactNode;
  skills: string[];
};

export default function SkillCard({ title, icon, skills }: SkillCardProps) {
  return (
    <div className="group/card rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:scale-[1.03] hover:border-primary">
      <div className="flex items-center gap-4">
        <div className="rounded-lg bg-primary/20 p-2">{icon}</div>
        <p className="text-xl font-bold">{title}</p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {skills.map((skill) => (
          <Badge
            key={skill}
            variant="secondary"
            className="h-auto px-3 py-1 text-sm transition-colors duration-300 group-hover/card:bg-primary group-hover/card:text-primary-foreground"
          >
            {skill}
          </Badge>
        ))}
      </div>
    </div>
  );
}
