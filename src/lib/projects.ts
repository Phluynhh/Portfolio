import type { Language } from "@/lib/i18n";
import {
  entrustEximEn,
  entrustEximVi,
} from "@/lib/project-summaries/entrust-exim";
import {
  se400SeminarCnpmEn,
  se400SeminarCnpmVi,
} from "@/lib/project-summaries/se400-seminar-cnpm";
import {
  soulSpaceBackendEn,
  soulSpaceBackendVi,
} from "@/lib/project-summaries/soulspace-backend";
import {
  soulSpaceFeAdminEn,
  soulSpaceFeAdminVi,
} from "@/lib/project-summaries/soulspace-fe-admin";
import {
  soulSpaceFeExpertEn,
  soulSpaceFeExpertVi,
} from "@/lib/project-summaries/soulspace-fe-expert";
import {
  studentManagementSystemBeEn,
  studentManagementSystemBeVi,
} from "@/lib/project-summaries/student-management-system-be";
import type {
  ProjectCategory,
  ProjectItem,
} from "@/lib/project-summaries/types";

export type { ProjectCategory, ProjectItem };

const PROJECTS_EN: ProjectItem[] = [
  entrustEximEn,
  soulSpaceFeExpertEn,
  soulSpaceFeAdminEn,
  soulSpaceBackendEn,
  se400SeminarCnpmEn,
  studentManagementSystemBeEn,
];

const PROJECTS_VI: ProjectItem[] = [
  entrustEximVi,
  soulSpaceFeExpertVi,
  soulSpaceFeAdminVi,
  soulSpaceBackendVi,
  se400SeminarCnpmVi,
  studentManagementSystemBeVi,
];

const PROJECT_THUMBNAILS: Record<string, string> = {
  "entrust-exim": "/thumbnail_entrust.png",
  "soulspace-fe-expert": "/thumbnail_expert.jpg",
  "soulspace-fe-admin": "/thumbnail_admin.jpg",
  "soulspace-backend": "/thumbnail_patient.jpg",
  "se400-seminar-cnpm": "/thumbnail_detect.jpg",
  "student-management-system-be": "/thumbnail_student.png",
};

export function getProjects(lang: Language) {
  const projects = lang === "vi" ? PROJECTS_VI : PROJECTS_EN;

  return projects.map((project) => ({
    ...project,
    thumbnailSrc: project.thumbnailSrc ?? PROJECT_THUMBNAILS[project.slug],
  }));
}
