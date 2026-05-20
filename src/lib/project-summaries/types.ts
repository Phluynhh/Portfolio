export type ProjectCategory = "FE" | "BE" | "AI";

export interface ProjectItem {
  slug: string;
  title: string;
  description: string;
  role: string;
  tags: string[];
  highlight: string;
  thumbnailSrc?: string;
  githubUrl: string;
  liveUrl?: string;
  detailHref?: string;
  categories: ProjectCategory[];
}
