import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import ProjectDetailHeader from "@/components/ui/ProjectDetailHeader";
import type { Language } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { ArrowLeft, CheckCircle2, Github, Layers, Monitor } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

type SoulSpaceAdminPageProps = {
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
  "admin dashboard",
  "platform resources",
  "React",
  "TypeScript",
  "management screens",
  "reusable UI patterns",
  "reports",
  "posts",
  "expert content",
  "verification flows",
  "overview pages",
  "moderation workflows",
  "operational data",
  "clear dashboard experience",
  "admin-side operations",
  "consistent web UI",
  "future admin features",
  "Dashboard",
  "SoulSpace",
];

const PROJECT = {
  title: "SoulSpace FE Admin",
  categoryLabel: "October 2025 - December 2025",
  githubUrl:
    "https://github.com/Chuyen-d-Mobile-va-Pervasive-Computing/SoulSpace-FE-Admin",
  tags: ["React", "TypeScript", "Dashboard", "Admin Panel"],
  images: [
    {
      src: "/projects/soulspace-fe-admin/login.png",
      alt: "SoulSpace FE Admin login screen",
      caption: {
        en: "Admin authentication flow",
        vi: "Luong dang nhap quan tri",
      },
    },
    {
      src: "/projects/soulspace-fe-admin/overview.png",
      alt: "SoulSpace FE Admin overview dashboard",
      caption: {
        en: "Admin dashboard overview",
        vi: "Tong quan dashboard quan tri",
      },
    },
    {
      src: "/projects/soulspace-fe-admin/overview_2.png",
      alt: "SoulSpace FE Admin analytics overview",
      caption: {
        en: "Operational overview and platform metrics",
        vi: "Tong quan van hanh va chi so nen tang",
      },
    },
    {
      src: "/projects/soulspace-fe-admin/community.png",
      alt: "SoulSpace FE Admin community management",
      caption: {
        en: "Community management workspace",
        vi: "Khong gian quan ly cong dong",
      },
    },
    {
      src: "/projects/soulspace-fe-admin/post.png",
      alt: "SoulSpace FE Admin post management",
      caption: {
        en: "Post management list",
        vi: "Danh sach quan ly bai viet",
      },
    },
    {
      src: "/projects/soulspace-fe-admin/post_detail.png",
      alt: "SoulSpace FE Admin post detail",
      caption: {
        en: "Post detail and moderation view",
        vi: "Chi tiet bai viet va thao tac kiem duyet",
      },
    },
    {
      src: "/projects/soulspace-fe-admin/expert_post.png",
      alt: "SoulSpace FE Admin expert post management",
      caption: {
        en: "Expert content management",
        vi: "Quan ly noi dung cua chuyen gia",
      },
    },
    {
      src: "/projects/soulspace-fe-admin/report_detail.png",
      alt: "SoulSpace FE Admin report detail",
      caption: {
        en: "Report detail workflow",
        vi: "Luong chi tiet bao cao",
      },
    },
    {
      src: "/projects/soulspace-fe-admin/verify.png",
      alt: "SoulSpace FE Admin verification screen",
      caption: {
        en: "Verification review flow",
        vi: "Luong xet duyet xac minh",
      },
    },
    {
      src: "/projects/soulspace-fe-admin/test.png",
      alt: "SoulSpace FE Admin testing screen",
      caption: {
        en: "Admin testing and review screen",
        vi: "Man hinh kiem tra va ra soat",
      },
    },
  ] satisfies ProjectImage[],
  content: {
    en: {
      eyebrow: "Project Detail",
      back: "Back to portfolio",
      roleLabel: "Role",
      highlightLabel: "Highlight",
      role: "Frontend Web Developer",
      highlight: "Implemented clear admin experiences for complex data",
      overview:
        "SoulSpace FE Admin is the web dashboard for managing platform resources, community activity, reports, and operational workflows in the SoulSpace ecosystem.",
      responsibilitiesTitle: "Responsibilities",
      responsibilities: [
        "Built React management screens and reusable UI patterns for admin workflows.",
        "Structured dashboard views for reports, posts, expert content, and verification flows.",
        "Connected admin screens with operational data for clearer review and moderation workflows.",
        "Kept layouts consistent across overview pages and detail views.",
      ],
      featuresTitle: "Key Features",
      features: [
        "Admin dashboard for platform resources and operational data.",
        "Post and community management views for moderation workflows.",
        "Report detail screens that make review context easier to understand.",
        "Verification flows for checking expert and platform information.",
      ],
      outcomesTitle: "Outcomes",
      outcomes: [
        "Delivered a clear dashboard experience for admin-side operations.",
        "Reduced scanning effort across reports, posts, and verification tasks.",
        "Created a consistent web UI that can grow with future admin features.",
      ],
      imagesTitle: "Project Images",
      codeLabel: "View Code",
    },
    vi: {
      eyebrow: "Chi tiet du an",
      back: "Ve portfolio",
      roleLabel: "Vai tro",
      highlightLabel: "Diem nhan",
      role: "Lap trinh vien Frontend Web",
      highlight: "Thiet ke trai nghiem admin ro rang cho du lieu phuc tap",
      overview:
        "SoulSpace FE Admin la dashboard web dung de quan ly tai nguyen nen tang, hoat dong cong dong, bao cao va cac quy trinh van hanh trong he sinh thai SoulSpace.",
      responsibilitiesTitle: "Minh phu trach",
      responsibilities: [
        "Xay dung cac management screens bang React va reusable UI patterns cho luong admin.",
        "To chuc dashboard cho reports, posts, expert content va verification flows.",
        "Ket noi man hinh admin voi operational data de viec review va moderation workflows ro rang hon.",
        "Giu layout nhat quan giua overview pages va detail views.",
      ],
      featuresTitle: "Tinh nang chinh",
      features: [
        "Admin dashboard cho platform resources va operational data.",
        "Man hinh post va community management phuc vu moderation workflows.",
        "Report detail screens giup ngu canh review de nam bat hon.",
        "Verification flows de kiem tra thong tin chuyen gia va nen tang.",
      ],
      outcomesTitle: "Ket qua",
      outcomes: [
        "Hoan thien clear dashboard experience cho admin-side operations.",
        "Giam cong scan qua reports, posts va verification tasks.",
        "Tao consistent web UI co the mo rong cho future admin features.",
      ],
      imagesTitle: "Hinh anh du an",
      codeLabel: "Xem ma nguon",
    },
  },
};

export const metadata: Metadata = {
  title: "SoulSpace FE Admin | Portfolio",
  description:
    "Admin web dashboard for managing platform resources, users, and operational workflows.",
};

function normalizeLang(lang?: string): Language {
  return lang === "vi" ? "vi" : "en";
}

export default async function SoulSpaceAdminPage({
  searchParams,
}: SoulSpaceAdminPageProps) {
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
                icon={<Monitor size={18} />}
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
