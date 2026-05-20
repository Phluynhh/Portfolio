import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Language } from "@/lib/i18n";
import {
  ArrowLeft,
  CheckCircle2,
  Github,
  Layers,
  Smartphone,
} from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

type SoulSpaceExpertPageProps = {
  searchParams: Promise<{ lang?: string }>;
};

type ProjectImage = {
  src: string;
  alt: string;
  caption: Record<Language, string>;
};

const PROJECT = {
  title: "SoulSpace FE Expert",
  categoryLabel: "FE",
  githubUrl:
    "https://github.com/Chuyen-d-Mobile-va-Pervasive-Computing/SoulSpace-FE-Expert",
  tags: ["React Native", "TypeScript", "Expo", "Mobile UI"],
  images: [
    {
      src: "/projects/soulspace-fe-expert/main.jpg",
      alt: "SoulSpace FE Expert app overview",
      caption: {
        en: "Expert mobile workspace overview",
        vi: "Tổng quan workspace mobile dành cho chuyên gia",
      },
    },
    {
      src: "/projects/soulspace-fe-expert/login.jpg",
      alt: "SoulSpace expert login screen",
      caption: {
        en: "Authentication flow",
        vi: "Luồng đăng nhập",
      },
    },
    {
      src: "/projects/soulspace-fe-expert/signup.jpg",
      alt: "SoulSpace expert signup screen",
      caption: {
        en: "Expert account onboarding",
        vi: "Luồng tạo tài khoản chuyên gia",
      },
    },
    {
      src: "/projects/soulspace-fe-expert/calendar.jpg",
      alt: "SoulSpace expert calendar screen",
      caption: {
        en: "Session and schedule management",
        vi: "Quản lý lịch làm việc và phiên tư vấn",
      },
    },
    {
      src: "/projects/soulspace-fe-expert/appointments.jpg",
      alt: "SoulSpace expert appointment screen",
      caption: {
        en: "Appointment detail workflow",
        vi: "Luồng chi tiết cuộc hẹn",
      },
    },
    {
      src: "/projects/soulspace-fe-expert/chat.jpg",
      alt: "SoulSpace expert chat screen",
      caption: {
        en: "Conversation experience",
        vi: "Trải nghiệm trò chuyện",
      },
    },
    {
      src: "/projects/soulspace-fe-expert/forum.jpg",
      alt: "SoulSpace expert forum screen",
      caption: {
        en: "Community and forum flow",
        vi: "Luồng cộng đồng và diễn đàn",
      },
    },
    {
      src: "/projects/soulspace-fe-expert/post.jpg",
      alt: "SoulSpace expert post screen",
      caption: {
        en: "Post detail experience",
        vi: "Trải nghiệm xem bài viết",
      },
    },
  ] satisfies ProjectImage[],
  content: {
    en: {
      eyebrow: "Project Detail",
      back: "Back to portfolio",
      roleLabel: "Role",
      highlightLabel: "Highlight",
      role: "Frontend Mobile Developer",
      highlight: "Built smooth mobile flows for expert operations",
      overview:
        "SoulSpace FE Expert is the mobile workspace for experts in the SoulSpace ecosystem. The app helps experts review appointments, manage session context, and move through daily work with a clean, responsive interface.",
      responsibilitiesTitle: "Responsibilities",
      responsibilities: [
        "Built React Native screens and reusable UI pieces for expert workflows.",
        "Connected mobile views with backend APIs for profile, schedule, and session data.",
        "Improved navigation structure so experts can move quickly between core tasks.",
        "Kept layouts responsive across common mobile screen sizes.",
      ],
      featuresTitle: "Key Features",
      features: [
        "Expert dashboard for upcoming work and key session information.",
        "Schedule views that make appointment status easy to scan.",
        "Session detail flow with client context and action-focused layout.",
        "Consistent mobile UI system built with TypeScript and Expo.",
      ],
      outcomesTitle: "Outcomes",
      outcomes: [
        "Delivered a focused mobile experience for expert-side operations.",
        "Reduced friction in repeated schedule and session workflows.",
        "Created a code structure that can grow with future SoulSpace features.",
      ],
      imagesTitle: "Project Images",
      codeLabel: "View Code",
    },
    vi: {
      eyebrow: "Chi tiết dự án",
      back: "Về portfolio",
      roleLabel: "Vai trò",
      highlightLabel: "Điểm nhấn",
      role: "Lập trình viên Frontend Mobile",
      highlight: "Xây dựng luồng thao tác mượt mà cho chuyên gia",
      overview:
        "SoulSpace FE Expert là không gian làm việc trên mobile dành cho chuyên gia trong hệ sinh thái SoulSpace. Ứng dụng hỗ trợ chuyên gia theo dõi lịch hẹn, xem ngữ cảnh phiên làm việc và xử lý công việc hằng ngày bằng giao diện rõ ràng, dễ thao tác.",
      responsibilitiesTitle: "Mình phụ trách",
      responsibilities: [
        "Xây dựng màn hình React Native và các thành phần UI tái sử dụng cho luồng chuyên gia.",
        "Kết nối giao diện mobile với API cho hồ sơ, lịch làm việc và dữ liệu phiên tư vấn.",
        "Tổ chức navigation để chuyên gia di chuyển nhanh giữa các tác vụ chính.",
        "Đảm bảo layout ổn định trên nhiều kích thước màn hình mobile phổ biến.",
      ],
      featuresTitle: "Tính năng chính",
      features: [
        "Dashboard chuyên gia hiển thị công việc sắp tới và thông tin phiên quan trọng.",
        "Màn hình lịch giúp trạng thái cuộc hẹn dễ đọc và dễ quét nhanh.",
        "Luồng chi tiết phiên làm việc với ngữ cảnh khách hàng và bố cục tập trung vào hành động.",
        "Hệ thống UI mobile nhất quán, được xây dựng với TypeScript và Expo.",
      ],
      outcomesTitle: "Kết quả",
      outcomes: [
        "Hoàn thiện trải nghiệm mobile tập trung cho phía chuyên gia.",
        "Giảm ma sát trong các thao tác lặp lại như xem lịch và xử lý phiên làm việc.",
        "Tạo cấu trúc code có thể mở rộng cho các tính năng SoulSpace tiếp theo.",
      ],
      imagesTitle: "Hình ảnh dự án",
      codeLabel: "Xem mã nguồn",
    },
  },
};

export const metadata: Metadata = {
  title: "SoulSpace FE Expert | Portfolio",
  description:
    "Mobile app interface for expert users in SoulSpace, focused on performance and user-friendly interaction.",
};

function normalizeLang(lang?: string): Language {
  return lang === "vi" ? "vi" : "en";
}

export default async function SoulSpaceExpertPage({
  searchParams,
}: SoulSpaceExpertPageProps) {
  const query = await searchParams;
  const lang = normalizeLang(query.lang);
  const content = PROJECT.content[lang];
  const heroImage = PROJECT.images[0];
  const galleryImages = PROJECT.images.slice(1);

  return (
    <main className="min-h-dvh bg-background text-foreground">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 py-8 md:px-10 lg:px-12">
        <header className="flex items-center justify-between gap-4">
          <Button asChild variant="ghost" className="h-10 px-3">
            <Link href={`/?lang=${lang}#projects`}>
              <ArrowLeft size={18} />
              {content.back}
            </Link>
          </Button>

          <Badge className="rounded-md bg-primary px-3 py-1 text-primary-foreground">
            {PROJECT.categoryLabel}
          </Badge>
        </header>

        <section className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-sm font-semibold tracking-[0.18em] text-primary uppercase">
                {content.eyebrow}
              </p>
              <h1 className="text-4xl leading-tight font-bold md:text-6xl">
                {PROJECT.title}
              </h1>
              <p className="max-w-2xl text-base leading-8 text-foreground/75 md:text-lg">
                {content.overview}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {PROJECT.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="h-8 rounded-md border border-primary/15 bg-primary/5 px-3 text-primary"
                >
                  {tag}
                </Badge>
              ))}
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <SummaryTile
                icon={<Smartphone size={18} />}
                label={content.roleLabel}
                value={content.role}
              />
              <SummaryTile
                icon={<Layers size={18} />}
                label={content.highlightLabel}
                value={content.highlight}
              />
            </div>

            <Button asChild className="h-11 px-5">
              <a href={PROJECT.githubUrl} target="_blank" rel="noreferrer">
                <Github size={18} />
                {content.codeLabel}
              </a>
            </Button>
          </div>

          <ProjectFigure image={heroImage} caption={heroImage.caption[lang]} />
        </section>

        <section className="grid gap-6 lg:grid-cols-3">
          <InfoBlock
            title={content.responsibilitiesTitle}
            items={content.responsibilities}
          />
          <InfoBlock title={content.featuresTitle} items={content.features} />
          <InfoBlock title={content.outcomesTitle} items={content.outcomes} />
        </section>

        <section className="space-y-5">
          <h2 className="text-2xl font-bold">{content.imagesTitle}</h2>
          <div className="grid gap-5 md:grid-cols-2">
            {galleryImages.map((image) => (
              <ProjectFigure
                key={image.src}
                image={image}
                caption={image.caption[lang]}
              />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

function SummaryTile({
  icon,
  label,
  value,
}: {
  icon: ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-lg border border-border bg-card p-4">
      <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-primary">
        {icon}
        {label}
      </div>
      <p className="text-sm font-semibold text-foreground">{value}</p>
    </div>
  );
}

function InfoBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="rounded-xl border border-border bg-card p-5">
      <h2 className="mb-4 text-lg font-bold">{title}</h2>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-6">
            <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
            <span className="text-foreground/75">{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

function ProjectFigure({
  image,
  caption,
}: {
  image: ProjectImage;
  caption: string;
}) {
  return (
    <figure className="mx-auto w-full max-w-sm overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
      <Image
        src={image.src}
        alt={image.alt}
        width={1080}
        height={2160}
        className="h-auto w-full object-contain"
      />
      <figcaption className="border-t border-border px-5 py-4 text-sm font-medium text-foreground/70">
        {caption}
      </figcaption>
    </figure>
  );
}
