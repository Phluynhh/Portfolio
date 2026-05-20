import type { Language } from "@/lib/i18n";
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
  soulSpaceFeExpertEn,
  soulSpaceFeAdminEn,
  soulSpaceBackendEn,
  se400SeminarCnpmEn,
  studentManagementSystemBeEn,
];

const PROJECTS_VI: ProjectItem[] = [
  soulSpaceFeExpertVi,
  soulSpaceFeAdminVi,
  soulSpaceBackendVi,
  se400SeminarCnpmVi,
  studentManagementSystemBeVi,
];

export function getProjects(lang: Language) {
  return lang === "vi" ? PROJECTS_VI : PROJECTS_EN;
}
