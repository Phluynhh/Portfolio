"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import ProjectCard from "@/components/ui/ProjectCard";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { Language } from "@/lib/i18n";
import { getProjects, type ProjectItem } from "@/lib/projects";

type TabKey = "all" | "fe" | "be" | "ai";

const TAB_CONFIG: Array<{ key: TabKey; label: string }> = [
  { key: "all", label: "All" },
  { key: "fe", label: "FE" },
  { key: "be", label: "BE" },
  { key: "ai", label: "AI" },
];

function filterProjectsByTab(tab: TabKey, projects: ProjectItem[]) {
  if (tab === "all") {
    return projects;
  }

  const categoryMap: Record<Exclude<TabKey, "all">, "FE" | "BE" | "AI"> = {
    fe: "FE",
    be: "BE",
    ai: "AI",
  };

  return projects.filter((project) =>
    project.categories.includes(categoryMap[tab]),
  );
}

interface ProjectsProps {
  lang: Language;
}

export default function Projects({ lang }: ProjectsProps) {
  const isVi = lang === "vi";
  const projects = getProjects(lang);

  const [activeTab, setActiveTab] = useState<TabKey>("all");
  const [expandedTabs, setExpandedTabs] = useState<Record<TabKey, boolean>>({
    all: false,
    fe: false,
    be: false,
    ai: false,
  });

  const projectsByTab = useMemo(
    () => ({
      all: filterProjectsByTab("all", projects),
      fe: filterProjectsByTab("fe", projects),
      be: filterProjectsByTab("be", projects),
      ai: filterProjectsByTab("ai", projects),
    }),
    [projects],
  );

  const handleViewMore = (tab: TabKey) => {
    setExpandedTabs((prev) => ({
      ...prev,
      [tab]: true,
    }));
  };

  const renderTabContent = (tab: TabKey) => {
    const tabProjects = projectsByTab[tab];
    const isExpanded = expandedTabs[tab];
    const visibleProjects = isExpanded ? tabProjects : tabProjects.slice(0, 5);
    const showViewMore = !isExpanded && tabProjects.length > 5;

    return (
      <div className="space-y-6">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {visibleProjects.map((project) => (
            <ProjectCard key={project.title} project={project} lang={lang} />
          ))}
        </div>

        {showViewMore ? (
          <div className="flex justify-center">
            <Button
              variant="outline"
              className="h-11 px-8 text-base"
              onClick={() => handleViewMore(tab)}
            >
              {isVi ? "Xem thêm" : "View more"}
            </Button>
          </div>
        ) : null}
      </div>
    );
  };

  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-8 md:px-12">
        <h1 className="text-5xl font-bold">
          {isVi ? "Dự án nổi bật" : "Featured Projects"}
        </h1>
        <Separator className="data-horizontal:h-1 w-1/12! rounded-full bg-primary" />

        <Tabs
          value={activeTab}
          onValueChange={(value) => setActiveTab(value as TabKey)}
          className="gap-6"
        >
          <TabsList className="h-11 rounded-xl bg-primary/8 p-1.5">
            {TAB_CONFIG.map((tab) => (
              <TabsTrigger
                key={tab.key}
                value={tab.key}
                className="rounded-lg px-5 text-sm font-semibold data-active:bg-primary data-active:text-primary-foreground"
              >
                {isVi && tab.key === "all" ? "Tất cả" : tab.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {TAB_CONFIG.map((tab) => (
            <TabsContent key={tab.key} value={tab.key}>
              {renderTabContent(tab.key)}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
