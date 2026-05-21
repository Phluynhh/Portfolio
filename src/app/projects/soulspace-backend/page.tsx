import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import ProjectDetailHeader from "@/components/ui/ProjectDetailHeader";
import type { Language } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import {
  ArrowLeft,
  BrainCircuit,
  CheckCircle2,
  Database,
  ExternalLink,
  FileText,
  Github,
  Route,
  Server,
  ShieldCheck,
  Terminal,
} from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

type SoulSpaceBackendPageProps = {
  searchParams: Promise<{ lang?: string }>;
};

type ProjectImage = {
  src: string;
  alt: string;
  caption: Record<Language, string>;
};

type ProjectDocument = {
  href: string;
  title: Record<Language, string>;
  description: Record<Language, string>;
  external?: boolean;
};

type InfoBlockTone = "sky" | "violet" | "emerald";

const INFO_BLOCK_STYLES: Record<
  InfoBlockTone,
  {
    section: string;
    icon: string;
    title: string;
    highlight: string;
  }
> = {
  sky: {
    section: "border-primary/35",
    icon: "text-primary",
    title: "text-primary",
    highlight: "text-primary",
  },
  violet: {
    section: "border-purple-300",
    icon: "text-purple-600",
    title: "text-purple-600",
    highlight: "text-purple-600",
  },
  emerald: {
    section: "border-teal-300",
    icon: "text-teal-600",
    title: "text-teal-600",
    highlight: "text-teal-600",
  },
};

const HIGHLIGHT_TERMS = [
  "FastAPI",
  "MongoDB",
  "Service-Based Architecture",
  "Layered Architecture",
  "JWT",
  "WebSocket",
  "AI sentiment analysis",
  "toxic content detection",
  "mental health platform",
  "authentication",
  "journal",
  "community",
  "expert",
  "appointment",
  "chat",
  "admin",
  "moderation",
  "report",
  "API docs",
  "backend services",
  "cross-platform clients",
  "SoulSpace",
];

const DRIVE_URL =
  "https://drive.google.com/drive/folders/1xN1mD89YgfKYurQYh_pBgdfUf1ynjhPH?usp=drive_link";

const PROJECT = {
  title: "SoulSpace Backend",
  categoryLabel: "October 2025 - December 2025",
  githubUrl:
    "https://github.com/Chuyen-d-Mobile-va-Pervasive-Computing/SoulSpace-Backend",
  tags: ["FastAPI", "Python", "MongoDB", "AI Services", "WebSocket"],
  images: [
    {
      src: "/projects/soulspace-be/architecture_diagram.png",
      alt: "SoulSpace Backend system architecture diagram",
      caption: {
        en: "Service-based backend architecture",
        vi: "Kiến trúc backend theo service",
      },
    },
    {
      src: "/projects/soulspace-be/tech_stack.png",
      alt: "SoulSpace Backend technology stack",
      caption: {
        en: "Backend technology stack and integrations",
        vi: "Tech stack và các tích hợp backend",
      },
    },
  ] satisfies ProjectImage[],
  documents: [
    {
      href: "/projects/soulspace-be/SE405_Report_SoulSpace.pdf",
      title: {
        en: "SE405 Report PDF",
        vi: "Báo cáo SE405 PDF",
      },
      description: {
        en: "Detailed course report for the SoulSpace backend and product system.",
        vi: "Báo cáo chi tiết về backend và hệ thống sản phẩm SoulSpace.",
      },
    },
    {
      href: DRIVE_URL,
      title: {
        en: "Google Drive Folder",
        vi: "Thư mục Google Drive",
      },
      description: {
        en: "Shared folder for the group's full documentation and supporting files.",
        vi: "Thư mục chia sẻ tài liệu đầy đủ và các file liên quan của nhóm.",
      },
      external: true,
    },
  ] satisfies ProjectDocument[],
  content: {
    en: {
      eyebrow: "Project Detail",
      back: "Back to portfolio",
      roleLabel: "Role",
      highlightLabel: "Highlight",
      role: "Backend Developer",
      highlight: "Built backend services for a mental health platform",
      overview:
        "SoulSpace Backend powers authentication, journals, community posts, expert appointments, realtime chat, tests, gamification, notifications, admin workflows, moderation, reports, and AI-assisted mental health features.",
      responsibilitiesTitle: "Responsibilities",
      responsibilities: [
        "Designed backend services with Service-Based Architecture and Layered Architecture.",
        "Implemented API flows for authentication, journal, community, expert, appointment, chat, admin, moderation, and report modules.",
        "Integrated MongoDB, JWT authentication, WebSocket chat, file storage, email, and push notification services.",
        "Connected AI sentiment analysis and toxic content detection into product workflows.",
      ],
      featuresTitle: "Key Features",
      features: [
        "FastAPI backend with automatic API docs for development and testing.",
        "MongoDB data layer for flexible mental health, community, and appointment data.",
        "Realtime chat flow using WebSocket rooms.",
        "AI features for journal sentiment analysis and community content moderation.",
      ],
      outcomesTitle: "Outcomes",
      outcomes: [
        "Delivered backend services that support cross-platform clients in the SoulSpace ecosystem.",
        "Created clear technical documentation through README and report assets.",
        "Structured the backend so future modules can be added without breaking core flows.",
      ],
      readmeTitle: "README Overview",
      architectureTitle: "System Architecture",
      architectureDescription:
        "The backend follows a Service-Based Architecture combined with Layered Architecture: API Gateway, Service Layer, Data/AI services, and external integrations.",
      servicesTitle: "Service Layer",
      techTitle: "Core Stack",
      setupTitle: "Run Locally",
      apiTitle: "Main API Endpoints",
      teamTitle: "Team",
      documentsTitle: "Documents",
      imagesTitle: "Architecture Images",
      codeLabel: "View Code",
      driveLabel: "Open Drive",
    },
    vi: {
      eyebrow: "Chi tiết dự án",
      back: "Về portfolio",
      roleLabel: "Vai trò",
      highlightLabel: "Điểm nhấn",
      role: "Lập trình viên Backend",
      highlight: "Xây dựng backend services cho nền tảng sức khỏe tinh thần",
      overview:
        "SoulSpace Backend đảm nhận xác thực, nhật ký cảm xúc, cộng đồng, đặt lịch với chuyên gia, realtime chat, bài test, gamification, thông báo, luồng admin, kiểm duyệt, báo cáo và các tính năng AI hỗ trợ sức khỏe tinh thần.",
      responsibilitiesTitle: "Mình phụ trách",
      responsibilities: [
        "Thiết kế backend services theo Service-Based Architecture và Layered Architecture.",
        "Xây dựng API cho authentication, journal, community, expert, appointment, chat, admin, moderation và report modules.",
        "Tích hợp MongoDB, JWT authentication, WebSocket chat, file storage, email và push notification services.",
        "Kết nối AI sentiment analysis và toxic content detection vào các luồng sản phẩm.",
      ],
      featuresTitle: "Tính năng chính",
      features: [
        "FastAPI backend có API docs tự động để phục vụ dev và testing.",
        "MongoDB data layer cho dữ liệu sức khỏe tinh thần, cộng đồng và lịch hẹn.",
        "Realtime chat flow sử dụng WebSocket rooms.",
        "AI features cho phân tích cảm xúc nhật ký và kiểm duyệt nội dung cộng đồng.",
      ],
      outcomesTitle: "Kết quả",
      outcomes: [
        "Hoàn thiện backend services hỗ trợ các cross-platform clients trong hệ sinh thái SoulSpace.",
        "Tạo tài liệu kỹ thuật rõ ràng thông qua README và file báo cáo.",
        "Tổ chức backend để có thể thêm module mới mà không phá vỡ các core flows.",
      ],
      readmeTitle: "Tổng quan README",
      architectureTitle: "Kiến trúc hệ thống",
      architectureDescription:
        "Backend được xây dựng theo Service-Based Architecture kết hợp Layered Architecture: API Gateway, Service Layer, Data/AI services và external integrations.",
      servicesTitle: "Service Layer",
      techTitle: "Core Stack",
      setupTitle: "Chạy local",
      apiTitle: "API Endpoints chính",
      teamTitle: "Team",
      documentsTitle: "Tài liệu",
      imagesTitle: "Hình ảnh kiến trúc",
      codeLabel: "Xem mã nguồn",
      driveLabel: "Mở Drive",
    },
  },
};

export const metadata: Metadata = {
  title: "SoulSpace Backend | Portfolio",
  description:
    "Backend services for SoulSpace, including FastAPI APIs, MongoDB, realtime chat, moderation, and AI features.",
};

function normalizeLang(lang?: string): Language {
  return lang === "vi" ? "vi" : "en";
}

export default async function SoulSpaceBackendPage({
  searchParams,
}: SoulSpaceBackendPageProps) {
  const query = await searchParams;
  const lang = normalizeLang(query.lang);
  const content = PROJECT.content[lang];
  const heroImage = PROJECT.images[0];
  const galleryImages = PROJECT.images.slice(1);

  return (
    <main className="min-h-dvh bg-background text-foreground">
      <ProjectDetailHeader initialLang={lang} />
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 py-8 pt-28 md:px-10 lg:px-12">
        <header className="flex items-center justify-between gap-4">
          <Button asChild variant="ghost" className="h-10 px-3">
            <Link href={`/?lang=${lang}#projects`}>
              <ArrowLeft size={18} />
              <span className="text-sm">{content.back}</span>
            </Link>
          </Button>

          <Badge className="rounded-md bg-primary px-3 py-3 text-sm text-primary-foreground">
            {PROJECT.categoryLabel}
          </Badge>
        </header>

        <section className="grid gap-8 lg:grid-cols-[1fr_0.95fr] lg:items-center">
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
                icon={<Server size={18} />}
                label={content.roleLabel}
                value={content.role}
              />
              <SummaryTile
                icon={<Database size={18} />}
                label={content.highlightLabel}
                value={content.highlight}
              />
            </div>

            <div className="flex flex-wrap gap-3">
              <Button asChild className="h-11 px-5">
                <a href={PROJECT.githubUrl} target="_blank" rel="noreferrer">
                  <Github size={18} />
                  {content.codeLabel}
                </a>
              </Button>
              <Button asChild variant="outline" className="h-11 px-5">
                <a href={DRIVE_URL} target="_blank" rel="noreferrer">
                  <ExternalLink size={18} />
                  {content.driveLabel}
                </a>
              </Button>
            </div>
          </div>

          <ProjectFigure image={heroImage} caption={heroImage.caption[lang]} />
        </section>

        <section className="grid gap-6 lg:grid-cols-3">
          <InfoBlock
            title={content.responsibilitiesTitle}
            items={content.responsibilities}
            tone="sky"
          />
          <InfoBlock
            title={content.featuresTitle}
            items={content.features}
            tone="violet"
          />
          <InfoBlock
            title={content.outcomesTitle}
            items={content.outcomes}
            tone="emerald"
          />
        </section>

        <section className="space-y-5">
          <h2 className="text-2xl font-bold">{content.readmeTitle}</h2>
          <ReadmeOverview content={content} />
        </section>

        <section className="space-y-5">
          <h2 className="text-2xl font-bold">{content.documentsTitle}</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {PROJECT.documents.map((document) => (
              <DocumentCard
                key={document.href}
                document={document}
                lang={lang}
              />
            ))}
          </div>
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

function InfoBlock({
  title,
  items,
  tone,
}: {
  title: string;
  items: string[];
  tone: InfoBlockTone;
}) {
  const styles = INFO_BLOCK_STYLES[tone];

  return (
    <section className={cn("rounded-xl border-2 bg-card p-5", styles.section)}>
      <h2 className={cn("mb-4 text-lg font-bold", styles.title)}>{title}</h2>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-6">
            <CheckCircle2
              className={cn("mt-0.5 size-4 shrink-0", styles.icon)}
            />
            <span className="text-foreground/75">
              <HighlightedText
                text={item}
                highlightClassName={styles.highlight}
              />
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}

function HighlightedText({
  text,
  highlightClassName,
}: {
  text: string;
  highlightClassName: string;
}) {
  const terms = [...HIGHLIGHT_TERMS].sort((a, b) => b.length - a.length);
  const chunks: ReactNode[] = [];
  let cursor = 0;

  while (cursor < text.length) {
    const match = terms.find((term) =>
      text
        .slice(cursor)
        .toLocaleLowerCase()
        .startsWith(term.toLocaleLowerCase()),
    );

    if (!match) {
      chunks.push(text[cursor]);
      cursor += 1;
      continue;
    }

    chunks.push(
      <mark
        key={`${match}-${cursor}`}
        className={cn("bg-transparent font-bold", highlightClassName)}
      >
        {text.slice(cursor, cursor + match.length)}
      </mark>,
    );
    cursor += match.length;
  }

  return chunks;
}

function ProjectFigure({
  image,
  caption,
}: {
  image: ProjectImage;
  caption: string;
}) {
  return (
    <figure className="mx-auto w-full max-w-xl overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
      <Image
        src={image.src}
        alt={image.alt}
        width={1440}
        height={900}
        className="h-auto w-full object-contain"
      />
      <figcaption className="border-t border-border px-5 py-4 text-sm font-medium text-foreground/70">
        {caption}
      </figcaption>
    </figure>
  );
}

function ReadmeOverview({
  content,
}: {
  content: (typeof PROJECT.content)[Language];
}) {
  const services = [
    ["Auth", "Register, login, JWT"],
    ["Journal", "Emotion journal and AI analysis"],
    ["Community", "Anonymous posts and moderation"],
    ["Expert", "Expert profile and verification"],
    ["Appointment", "Consultation booking"],
    ["Chat", "Realtime WebSocket rooms"],
    ["Admin", "Platform management"],
    ["Report", "Violation report handling"],
  ];

  const techStack = [
    "Python 3.11+",
    "FastAPI",
    "Uvicorn",
    "Pydantic",
    "MongoDB Atlas",
    "Motor",
    "Cloudinary",
    "RoBERTa",
    "scikit-learn",
    "AssemblyAI",
    "Expo Push",
  ];

  const apiEndpoints = [
    ["POST", "/auth/register"],
    ["POST", "/auth/login"],
    ["POST", "/journal"],
    ["GET", "/community/posts"],
    ["POST", "/appointments"],
    ["WS", "/ws/chat/{room_id}"],
    ["POST", "/tree/water"],
    ["GET", "/tests"],
  ];

  const setupCommands = [
    "python -m venv venv",
    "pip install -r requirements.txt",
    "cp .env.example .env",
    "uvicorn main:app --reload --host 0.0.0.0 --port 8000",
  ];

  const team = [
    "Tran Dinh Phuong Linh - 22520778",
    "Dang Thi Ngoc Minh - 22520857",
    "Nguyen Khanh Huy - 22520560",
    "Tran Bao Phu - 22521104",
  ];

  return (
    <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
      <section className="rounded-xl border border-border bg-card p-5">
        <div className="mb-4 flex items-center gap-3 text-primary">
          <Route size={20} />
          <h3 className="text-lg font-bold">{content.architectureTitle}</h3>
        </div>
        <p className="text-sm leading-7 text-foreground/75">
          {content.architectureDescription}
        </p>
      </section>

      <section className="rounded-xl border border-border bg-card p-5">
        <div className="mb-4 flex items-center gap-3 text-primary">
          <ShieldCheck size={20} />
          <h3 className="text-lg font-bold">{content.techTitle}</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="rounded-md border border-primary/15 bg-primary/5 px-3 py-1.5 text-primary"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </section>

      <section className="rounded-xl border border-border bg-card p-5">
        <h3 className="mb-4 text-lg font-bold text-primary">
          {content.servicesTitle}
        </h3>
        <div className="grid gap-3 sm:grid-cols-2">
          {services.map(([name, description]) => (
            <div key={name} className="rounded-lg border border-border p-3">
              <p className="text-sm font-bold">{name} Service</p>
              <p className="mt-1 text-sm leading-6 text-foreground/65">
                {description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-xl border border-border bg-card p-5">
        <div className="mb-4 flex items-center gap-3 text-primary">
          <Terminal size={20} />
          <h3 className="text-lg font-bold">{content.setupTitle}</h3>
        </div>
        <div className="overflow-hidden rounded-lg border border-border bg-foreground/3">
          {setupCommands.map((command) => (
            <code
              key={command}
              className="block border-b border-border px-4 py-3 text-sm last:border-b-0"
            >
              {command}
            </code>
          ))}
        </div>
      </section>

      <section className="rounded-xl border border-border bg-card p-5">
        <h3 className="mb-4 text-lg font-bold text-primary">
          {content.apiTitle}
        </h3>
        <div className="overflow-hidden rounded-lg border border-border">
          {apiEndpoints.map(([method, endpoint]) => (
            <div
              key={`${method}-${endpoint}`}
              className="grid grid-cols-[72px_1fr] border-b border-border text-sm last:border-b-0"
            >
              <span className="bg-primary/5 px-3 py-3 font-bold text-primary">
                {method}
              </span>
              <code className="px-3 py-3">{endpoint}</code>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-xl border border-border bg-card p-5">
        <h3 className="mb-4 text-lg font-bold text-primary">
          {content.teamTitle}
        </h3>
        <ul className="space-y-3">
          {team.map((member) => (
            <li key={member} className="flex items-center gap-3 text-sm">
              <CheckCircle2 className="size-4 text-teal-600" />
              <span>{member}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

function DocumentCard({
  document,
  lang,
}: {
  document: ProjectDocument;
  lang: Language;
}) {
  return (
    <a
      href={document.href}
      target="_blank"
      rel="noreferrer"
      className="group rounded-xl border border-border bg-card p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-primary/45 hover:shadow-md"
    >
      <div className="mb-4 flex items-center justify-between gap-3 text-primary">
        <span className="flex size-10 items-center justify-center rounded-lg bg-primary/10">
          {document.external ? (
            <ExternalLink size={20} />
          ) : (
            <FileText size={20} />
          )}
        </span>
        <BrainCircuit
          size={18}
          className="text-foreground/35 transition group-hover:text-primary"
        />
      </div>
      <h3 className="mb-2 text-base font-bold">{document.title[lang]}</h3>
      <p className="text-sm leading-6 text-foreground/70">
        {document.description[lang]}
      </p>
    </a>
  );
}
