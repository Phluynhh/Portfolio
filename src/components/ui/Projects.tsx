"use client";

import { useMemo, useState } from "react";
import ProjectCard, { type ProjectItem } from "@/components/ui/ProjectCard";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

type TabKey = "all" | "fe" | "be" | "ai";

const PROJECTS: ProjectItem[] = [
  {
    title: "SoulSpace FE Expert",
    description:
      "Mobile app interface for expert users in SoulSpace, focused on performance and user-friendly interaction.",
    role: "Frontend Mobile Developer",
    tags: ["React Native", "TypeScript", "Expo", "Mobile UI"],
    highlight: "Built smooth mobile flows for expert operations",
    githubUrl:
      "https://github.com/Chuyen-d-Mobile-va-Pervasive-Computing/SoulSpace-FE-Expert",
    categories: ["FE"],
  },
  {
    title: "SoulSpace FE Admin",
    description:
      "Admin web dashboard for managing platform resources, users, and operational workflows.",
    role: "Frontend Web Developer",
    tags: ["React", "TypeScript", "Dashboard", "Admin Panel"],
    highlight: "Implemented clear admin experiences for complex data",
    githubUrl:
      "https://github.com/Chuyen-d-Mobile-va-Pervasive-Computing/SoulSpace-FE-Admin",
    categories: ["FE"],
  },
  {
    title: "SoulSpace Backend",
    description:
      "Core backend services powering authentication, business logic, and data APIs for the SoulSpace ecosystem.",
    role: "Backend Developer",
    tags: ["Node.js", "API", "Database", "Architecture"],
    highlight: "Delivered stable APIs for cross-platform clients",
    githubUrl:
      "https://github.com/Chuyen-d-Mobile-va-Pervasive-Computing/SoulSpace-Backend",
    categories: ["BE"],
  },
  {
    title: "SE400 Seminar CNPM",
    description:
      "AI-oriented seminar project exploring practical machine learning applications and solution delivery.",
    role: "AI Engineer",
    tags: ["Python", "Machine Learning", "Data", "Research"],
    highlight: "Applied AI concepts to build practical outcomes",
    githubUrl: "https://github.com/FakerHecker/SE400_Seminar_CNPM",
    categories: ["AI"],
  },
  {
    title: "Student Management System BE",
    description:
      "Backend system for student lifecycle management including enrollment, academic records, and service endpoints.",
    role: "Backend Developer",
    tags: ["Backend", "REST API", "Database", "System Design"],
    highlight: "Engineered scalable backend modules for education use cases",
    githubUrl:
      "https://github.com/Se401-Student-Management-System/Student-Management-System-BE",
    categories: ["BE"],
  },
];

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

export default function Projects() {
  const [activeTab, setActiveTab] = useState<TabKey>("all");
  const [expandedTabs, setExpandedTabs] = useState<Record<TabKey, boolean>>({
    all: false,
    fe: false,
    be: false,
    ai: false,
  });

  const projectsByTab = useMemo(
    () => ({
      all: filterProjectsByTab("all", PROJECTS),
      fe: filterProjectsByTab("fe", PROJECTS),
      be: filterProjectsByTab("be", PROJECTS),
      ai: filterProjectsByTab("ai", PROJECTS),
    }),
    [],
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
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

        {showViewMore ? (
          <div className="flex justify-center">
            <Button
              variant="outline"
              className="h-11 px-8 text-base"
              onClick={() => handleViewMore(tab)}
            >
              View more
            </Button>
          </div>
        ) : null}
      </div>
    );
  };

  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 py-8">
        <h1 className="text-5xl font-bold">Featured Projects</h1>
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
                {tab.label}
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
