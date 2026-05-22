import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Language } from "@/lib/i18n";
import type { ProjectItem } from "@/lib/projects";
import { ExternalLink, Github, Monitor, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  project: ProjectItem;
  lang: Language;
}

export default function ProjectCard({ project, lang }: ProjectCardProps) {
  const isVi = lang === "vi";
  const categoryLabel = project.categories.join("/");

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-primary/20 bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="relative flex h-56 items-center justify-center overflow-hidden bg-linear-to-br from-blue-100 via-slate-100 to-blue-200/70 p-6">
        <Badge
          variant="secondary"
          className="absolute top-4 right-4 z-10 bg-primary text-primary-foreground"
        >
          {categoryLabel}
        </Badge>

        {project.thumbnailSrc ? (
          <Image
            src={project.thumbnailSrc}
            alt={`${project.title} thumbnail`}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        ) : (
          <div className="w-full max-w-sm rounded-xl border-4 border-primary/90 bg-linear-to-br from-blue-50 to-blue-100 p-5 shadow-sm">
            <div className="mb-4 flex gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-primary/30" />
              <span className="h-2.5 w-2.5 rounded-full bg-primary/30" />
              <span className="h-2.5 w-2.5 rounded-full bg-primary/30" />
            </div>
            <div className="h-5 w-32 rounded-md bg-primary/20" />
            <div className="mt-4 h-3.5 w-full rounded-md bg-primary/18" />
            <div className="mt-3 h-3.5 w-4/5 rounded-md bg-primary/18" />
            <div className="mt-4 flex justify-center">
              <Monitor className="text-primary/70" size={18} />
            </div>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col space-y-5 p-6">
        <div className="space-y-3">
          <h3 className="text-xl leading-tight font-bold text-foreground">
            {project.title}
          </h3>
          <p className="text-sm leading-relaxed text-foreground/75">
            {project.description}
          </p>
        </div>

        <p className="text-sm text-foreground/90">
          {isVi ? "Vai trò:" : "Role:"}{" "}
          <span className="font-semibold">{project.role}</span>
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge
              key={`${project.title}-${tag}`}
              variant="secondary"
              className="h-7 rounded-md border border-primary/15 bg-primary/5 px-3 text-xs text-primary"
            >
              {tag}
            </Badge>
          ))}
        </div>

        <div className="flex items-start gap-2 text-sm leading-relaxed font-semibold text-primary">
          <Sparkles className="mt-0.5 shrink-0" size={16} />
          <span>{project.highlight}</span>
        </div>

        <div className="border-border/70 mt-auto border-t pt-5">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {project.detailHref ? (
              <Button asChild className="h-12 w-full text-base font-semibold">
                <Link
                  href={{
                    pathname: project.detailHref,
                    query: { lang },
                  }}
                  aria-label={
                    isVi
                      ? `Xem chi tiết ${project.title}`
                      : `View details of ${project.title}`
                  }
                >
                  <ExternalLink size={18} />
                  {isVi ? "Xem chi tiết" : "View Detail"}
                </Link>
              </Button>
            ) : project.liveUrl ? (
              <Button asChild className="h-12 w-full text-base font-semibold">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={
                    isVi
                      ? `Xem bản chạy thử của ${project.title}`
                      : `View live demo of ${project.title}`
                  }
                >
                  <ExternalLink size={18} />
                  {isVi ? "Xem demo" : "View Live"}
                </a>
              </Button>
            ) : (
              <Button disabled className="h-12 w-full text-base font-semibold">
                <ExternalLink size={18} />
                {isVi ? "Xem chi tiết" : "View Detail"}
              </Button>
            )}

            {project.githubUrl ? (
              <Button
                asChild
                variant="secondary"
                className="h-12 w-full text-base font-semibold"
              >
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={
                    isVi
                      ? `Xem mã nguồn của ${project.title}`
                      : `View source code of ${project.title}`
                  }
                >
                  <Github size={18} />
                  {isVi ? "Xem mã nguồn" : "View Code"}
                </a>
              </Button>
            ) : (
              <Button
                disabled
                variant="secondary"
                className="h-12 w-full text-base font-semibold"
              >
                <Github size={18} />
                {isVi ? "Xem mã nguồn" : "View Code"}
              </Button>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
