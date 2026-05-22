import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import ProjectDetailHeader from "@/components/ui/ProjectDetailHeader";
import type { Language } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import {
  ArrowLeft,
  BarChart3,
  CheckCircle2,
  ClipboardList,
  Layers,
  Monitor,
  PackageCheck,
  Ship,
  Users,
} from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

type EntrustEximPageProps = {
  searchParams: Promise<{ lang?: string }>;
};

type ProjectImage = {
  src: string;
  alt: string;
  caption: Record<Language, string>;
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
  "EntrustExim",
  "import/export cargo",
  "quote requests",
  "shipment tracking",
  "document management",
  "financial reporting",
  "Frontend Developer",
  "Frontend sub-team",
  "7 members",
  "Agile/Scrum",
  "8 sprints",
  "Next.js",
  "React",
  "Tailwind CSS",
  "shadcn/ui",
  "React Query",
  "TanStack Query",
  "NestJS",
  "PostgreSQL",
  "Redis",
  "Prisma",
  "Docker",
  "Dashboard",
  "Quote Request Management",
  "Quotation Management",
  "Shipment Management",
  "Freight Management",
  "Stakeholder Management",
  "Financial Management",
  "76 web interfaces",
  "86 APIs",
  "42 user stories",
  "402 function points",
];

const PROJECT = {
  title: "EntrustExim",
  categoryLabel: "Advanced Software Engineering Capstone",
  tags: ["Next.js", "React", "Tailwind CSS", "shadcn/ui", "React Query"],
  images: [
    {
      src: "/projects/entrust-exim/dashboard.png",
      alt: "EntrustExim dashboard screen",
      caption: {
        en: "Dashboard with KPI cards, report chart, and recent shipments",
        vi: "Dashboard với KPI cards, biểu đồ báo cáo và bảng lô hàng gần đây",
      },
    },
    {
      src: "/projects/entrust-exim/signin.png",
      alt: "EntrustExim sign in screen",
      caption: {
        en: "Authentication screen for platform users",
        vi: "Màn hình đăng nhập cho người dùng hệ thống",
      },
    },
    {
      src: "/projects/entrust-exim/customer.png",
      alt: "EntrustExim customer management screen",
      caption: {
        en: "Customer management view for stakeholder records",
        vi: "Màn hình quản lý khách hàng trong nhóm stakeholder",
      },
    },
    {
      src: "/projects/entrust-exim/shipment.png",
      alt: "EntrustExim shipment management screen",
      caption: {
        en: "Shipment management list with logistics status and detail data",
        vi: "Danh sách quản lý lô hàng với trạng thái logistics và dữ liệu chi tiết",
      },
    },
    {
      src: "/projects/entrust-exim/readme-sample.png",
      alt: "EntrustExim README sample image",
      caption: {
        en: "README sample asset included with the project materials",
        vi: "Ảnh mẫu README được bổ sung trong tài liệu dự án",
      },
    },
  ] satisfies ProjectImage[],
  content: {
    en: {
      eyebrow: "Project Detail",
      back: "Back to portfolio",
      roleLabel: "Role",
      highlightLabel: "Highlight",
      role: "Frontend Developer",
      highlight: "Cargo operations UI delivered through 8 Scrum sprints",
      overview:
        "EntrustExim is a web-based platform for managing import/export cargo consignment operations. It streamlines the workflow from quote requests, shipment tracking, and document management to financial reporting for clients, employees, and administrators.",
      responsibilitiesTitle: "My Role",
      responsibilities: [
        "Worked as a Frontend Developer in a 7-member frontend sub-team led by Scrum Master Bui Duy Phuc.",
        "Built and implemented user-facing web features across multiple Agile/Scrum sprints.",
        "Contributed to a capstone project for the Advanced Software Engineering course at UIT - VNUHCM.",
        "Translated logistics workflows into practical screens for clients, employees, and administrators.",
      ],
      featuresTitle: "Key Features",
      features: [
        "Dashboard with real-time KPIs for total customers, active shipments, quotes, freight, reports, and recent shipments.",
        "Quote request flows for client submissions and admin response management.",
        "Quotation, shipment, freight, document, stakeholder, invoice, and payment management modules.",
        "Shipment filters by type, status, and location, including FCL, AIR, LAND, Pending, Delivered, On Hold, and Document Verification.",
      ],
      outcomesTitle: "Project Scale",
      outcomes: [
        "Covered 42 user stories, 86 APIs, 402 function points, and 76 web interfaces.",
        "Separated 38 input interfaces and 38 output interfaces across operational workflows.",
        "Supported Product Backlog grooming, sprint planning, sprint reviews, and retrospectives across 8 sprints.",
      ],
      stackTitle: "Tech Stack",
      metricsTitle: "Metrics",
      screensTitle: "UI Screens",
      processTitle: "Development Process",
      teamTitle: "Team",
      imagesTitle: "Project Images",
      courseLabel: "Course",
      courseValue: "Advanced Software Engineering",
      instructorLabel: "Instructor",
      instructorValue: "TS. Nguyen Trinh Dong",
    },
    vi: {
      eyebrow: "Chi tiết dự án",
      back: "Về portfolio",
      roleLabel: "Vai trò",
      highlightLabel: "Điểm nhấn",
      role: "Lập trình viên Frontend",
      highlight: "Xây dựng UI nghiệp vụ logistics qua 8 sprint Scrum",
      overview:
        "EntrustExim là nền tảng web hỗ trợ quản lý nghiệp vụ ký gửi hàng hóa xuất nhập khẩu. Hệ thống tối ưu toàn bộ quy trình từ yêu cầu báo giá, theo dõi lô hàng, quản lý chứng từ đến báo cáo tài chính cho khách hàng, nhân viên và quản trị viên.",
      responsibilitiesTitle: "Mình phụ trách",
      responsibilities: [
        "Đảm nhận vai trò Frontend Developer trong frontend sub-team 7 thành viên do Scrum Master Bùi Duy Phúc dẫn dắt.",
        "Xây dựng và triển khai các tính năng giao diện người dùng qua nhiều sprint Agile/Scrum.",
        "Tham gia đồ án capstone của môn Advanced Software Engineering tại UIT - VNUHCM.",
        "Chuyển các luồng nghiệp vụ logistics thành màn hình thực tế cho khách hàng, nhân viên và quản trị viên.",
      ],
      featuresTitle: "Tính năng chính",
      features: [
        "Dashboard với KPI realtime cho tổng khách hàng, lô hàng đang hoạt động, báo giá, freight, biểu đồ báo cáo và lô hàng gần đây.",
        "Luồng quote request cho khách hàng gửi yêu cầu và admin quản lý, phản hồi yêu cầu.",
        "Các module quản lý quotation, shipment, freight, document, stakeholder, invoice và payment.",
        "Bộ lọc shipment theo loại, trạng thái và vị trí, gồm FCL, AIR, LAND, Pending, Delivered, On Hold và Document Verification.",
      ],
      outcomesTitle: "Quy mô dự án",
      outcomes: [
        "Bao phủ 42 user stories, 86 APIs, 402 function points và 76 web interfaces.",
        "Tách 38 input interfaces và 38 output interfaces trên các luồng vận hành.",
        "Thực hiện Product Backlog grooming, sprint planning, sprint reviews và retrospectives trong 8 sprint.",
      ],
      stackTitle: "Tech Stack",
      metricsTitle: "Chỉ số",
      screensTitle: "UI Screens",
      processTitle: "Quy trình phát triển",
      teamTitle: "Team",
      imagesTitle: "Hình ảnh dự án",
      courseLabel: "Môn học",
      courseValue: "Advanced Software Engineering",
      instructorLabel: "Giảng viên",
      instructorValue: "TS. Nguyễn Trịnh Đông",
    },
  },
};

const metrics = [
  ["42", "User Stories"],
  ["86", "APIs"],
  ["402", "Function Points"],
  ["76", "Web Interfaces"],
  ["38", "Input Interfaces"],
  ["38", "Output Interfaces"],
];

const frontendStack = [
  "Next.js",
  "React",
  "Tailwind CSS",
  "shadcn/ui",
  "React Query (TanStack Query)",
];

const backendStack = ["NestJS", "PostgreSQL", "Redis", "Prisma", "Docker"];

const screens = [
  ["Dashboard", "KPI cards, report chart, and recent shipments"],
  ["Create Quote Request", "Client cargo shipping request form"],
  ["Quote Request Management", "Admin table for incoming requests"],
  ["Quotation Management", "Quote issuing, tracking, and approval"],
  ["Shipment Management", "Shipment list, status badges, and pagination"],
  ["Transportation Management", "Cargo transportation details"],
  ["Document Management", "Shipping document upload and organization"],
  ["Stakeholder Management", "Customers, providers, and employees"],
  ["Financial Management", "Invoices and payment tracking"],
];

const team = [
  ["Project Manager", "Tran Phuoc Loc"],
  ["Frontend Scrum Master", "Bui Duy Phuc"],
  [
    "Frontend Members",
    "Truong Nguyen Trung Khang, Do Anh Khoi, Nguyen Mai Khanh, Tran Dinh Phuong Linh, Dang Thi Ngoc Minh, Pham Quang Khanh",
  ],
  ["Backend Scrum Master", "Ngo Duc Loc"],
  ["Business Analyst Leader", "Tran Minh Nguyet"],
];

const process = [
  "Agile/Scrum methodology across 8 sprints",
  "Product Backlog grooming and sprint planning",
  "Sprint reviews and retrospectives",
  "Frontend Scrum Master coordination for the FE sub-team",
];

export const metadata: Metadata = {
  title: "EntrustExim | Portfolio",
  description:
    "Frontend project for an import/export cargo management platform built with Next.js, React, Tailwind CSS, shadcn/ui, and React Query.",
};

function normalizeLang(lang?: string): Language {
  return lang === "vi" ? "vi" : "en";
}

export default async function EntrustEximPage({
  searchParams,
}: EntrustEximPageProps) {
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
                icon={<Monitor size={18} />}
                label={content.roleLabel}
                value={content.role}
              />
              <SummaryTile
                icon={<Layers size={18} />}
                label={content.highlightLabel}
                value={content.highlight}
              />
              <SummaryTile
                icon={<ClipboardList size={18} />}
                label={content.courseLabel}
                value={content.courseValue}
              />
              <SummaryTile
                icon={<Users size={18} />}
                label={content.instructorLabel}
                value={content.instructorValue}
              />
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

        <section className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
          <Panel title={content.metricsTitle} icon={<BarChart3 size={20} />}>
            <div className="grid gap-3 sm:grid-cols-2">
              {metrics.map(([value, label]) => (
                <div key={label} className="rounded-lg border border-border p-4">
                  <p className="text-3xl font-bold text-primary">{value}</p>
                  <p className="mt-1 text-sm font-semibold text-foreground/70">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </Panel>

          <Panel title={content.stackTitle} icon={<PackageCheck size={20} />}>
            <div className="grid gap-5 md:grid-cols-2">
              <StackGroup title="Frontend" items={frontendStack} />
              <StackGroup title="Backend (Team)" items={backendStack} />
            </div>
          </Panel>
        </section>

        <section className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <Panel title={content.screensTitle} icon={<Ship size={20} />}>
            <div className="grid gap-3 md:grid-cols-2">
              {screens.map(([name, description]) => (
                <div key={name} className="rounded-lg border border-border p-4">
                  <p className="text-sm font-bold text-foreground">{name}</p>
                  <p className="mt-1 text-sm leading-6 text-foreground/65">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </Panel>

          <div className="space-y-5">
            <Panel title={content.processTitle} icon={<ClipboardList size={20} />}>
              <Checklist items={process} />
            </Panel>
            <Panel title={content.teamTitle} icon={<Users size={20} />}>
              <div className="space-y-3">
                {team.map(([role, names]) => (
                  <div key={role} className="rounded-lg border border-border p-3">
                    <p className="text-sm font-bold text-primary">{role}</p>
                    <p className="mt-1 text-sm leading-6 text-foreground/70">
                      {names}
                    </p>
                  </div>
                ))}
              </div>
            </Panel>
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

function Panel({
  title,
  icon,
  children,
}: {
  title: string;
  icon: ReactNode;
  children: ReactNode;
}) {
  return (
    <section className="rounded-xl border border-border bg-card p-5">
      <div className="mb-4 flex items-center gap-3 text-primary">
        {icon}
        <h2 className="text-lg font-bold">{title}</h2>
      </div>
      {children}
    </section>
  );
}

function StackGroup({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="mb-3 text-sm font-bold text-foreground">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <Badge
            key={item}
            variant="secondary"
            className="rounded-md border border-primary/15 bg-primary/5 px-3 py-1.5 text-primary"
          >
            {item}
          </Badge>
        ))}
      </div>
    </div>
  );
}

function Checklist({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-sm leading-6">
          <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-teal-600" />
          <span className="text-foreground/75">{item}</span>
        </li>
      ))}
    </ul>
  );
}
