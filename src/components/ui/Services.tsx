"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ChevronLeft, ChevronRight, CircleCheckBig, Star } from "lucide-react";
import type { Language } from "../../lib/i18n";

const WHY_HIRE_ME_EN = [
  {
    title: "Versatile Across Stacks",
    desc: "Comfortable with Frontend, Backend, Fullstack, and AI. I adapt to the shape of the product.",
    accent: "oklch(0.6 0.17 260)",
  },
  {
    title: "Product-Minded Engineer",
    desc: "I think beyond code and keep solutions aligned with user needs and business goals.",
    accent: "oklch(0.56 0.12 185)",
  },
  {
    title: "Independent & Reliable",
    desc: "Able to own tasks end-to-end while keeping communication clear and predictable.",
    accent: "oklch(0.58 0.13 145)",
  },
  {
    title: "Strong Communication",
    desc: "Clear explanations, proactive updates, and collaborative problem-solving.",
    accent: "oklch(0.61 0.16 335)",
  },
  {
    title: "Fast Learner",
    desc: "Quickly pick up new tools, domains, and patterns when a project needs them.",
    accent: "oklch(0.63 0.15 70)",
  },
  {
    title: "Shipped Products",
    desc: "Hands-on experience turning ideas into real, working software.",
    accent: "oklch(0.61 0.15 25)",
  },
];

const WHY_HIRE_ME_VI = [
  {
    title: "Linh hoạt nhiều mảng",
    desc: "Thoải mái với Frontend, Backend, Fullstack và AI. Mình thích nghi theo hình dáng của sản phẩm.",
    accent: "oklch(0.6 0.17 260)",
  },
  {
    title: "Tư duy sản phẩm",
    desc: "Mình không chỉ viết code, mà luôn gắn giải pháp với nhu cầu người dùng và mục tiêu kinh doanh.",
    accent: "oklch(0.56 0.12 185)",
  },
  {
    title: "Độc lập và đáng tin cậy",
    desc: "Có thể xử lý công việc end-to-end và giữ việc trao đổi rõ ràng, dễ theo dõi.",
    accent: "oklch(0.58 0.13 145)",
  },
  {
    title: "Giao tiếp rõ ràng",
    desc: "Giải thích mạch lạc, cập nhật chủ động và phối hợp tốt khi giải quyết vấn đề.",
    accent: "oklch(0.61 0.16 335)",
  },
  {
    title: "Học nhanh",
    desc: "Nắm bắt nhanh công cụ, domain và pattern mới khi dự án cần.",
    accent: "oklch(0.63 0.15 70)",
  },
  {
    title: "Đã triển khai sản phẩm thực tế",
    desc: "Có kinh nghiệm biến ý tưởng thành phần mềm thật, có thể sử dụng được.",
    accent: "oklch(0.61 0.15 25)",
  },
];

const TESTIMONIALS_EN = [
  {
    quote:
      "Working with Linh has been an absolute pleasure. Coming from a Frontend background, they have a great eye for design and can even jump into Figma and Photoshop to tweak icons or UI elements when needed. Beyond that, as they expanded into Backend and AI, their solid technical foundation allowed them to learn new languages incredibly fast. Whenever we face a challenging issue, they always take the initiative to research and figure out creative solutions. In terms of work ethic, they are highly reliable-always proactively updating their progress and thoroughly reviewing their work. What I love most about Linh is their positive attitude in teamwork. Even under pressure, they know how to lighten the mood, keeping the team motivated, well-coordinated, and focused on hitting our targets.",
    name: "Phan Nguyễn Trà Giang",
    avatar: "/refer/tra_giang.jpg",
  },
  {
    quote:
      "Linh is the kind of teammate who makes collaboration feel easy. They listen carefully, clarify requirements early, and turn feedback into polished improvements without losing momentum. I especially appreciate how they balance technical detail with a strong sense of user experience.",
    name: "Nguyễn Ngọc Diễm Ngân",
    avatar: "/refer/diem_ngan.jpg",
  },
  {
    quote:
      "Linh approaches problems with patience and ownership. When a task becomes unclear or technically difficult, they research, test ideas, and communicate progress so the team can stay aligned. Their careful mindset makes the final work feel dependable.",
    name: "Đặng Thị Ngọc Minh",
    avatar: "/refer/ngoc_minh.jpg",
  },
  {
    quote:
      "Working with Linh is always encouraging because they bring both skill and good energy to the team. They are quick to support others, open to discussing solutions, and consistent about reviewing their own work before sharing it. That attitude helps the whole team move with more confidence.",
    name: "Nguyễn Thị Nguyệt Ánh",
    avatar: "/refer/nguyet_anh.jpg",
  },
];

const TESTIMONIALS_VI = [
  {
    quote:
      "Làm việc có suy nghĩ, giao tiếp rõ ràng, học nhanh và theo sát các chi tiết.",
    name: "Đồng đội dự án",
    role: "Collaborator",
  },
  {
    quote:
      "Đáng tin cậy trong việc hiện thực tính năng và cẩn thận với trải nghiệm người dùng.",
    name: "Mentor dự án",
    role: "Reviewer",
  },
  {
    quote:
      "Có tư duy sản phẩm bình tĩnh khi giải quyết vấn đề kỹ thuật và liên tục cải thiện giải pháp.",
    name: "Người phối hợp sản phẩm",
    role: "Stakeholder",
  },
  {
    quote:
      "Có tinh thần làm chủ trong bài toán nhóm và giúp team tiến lên bằng các quyết định thực tế.",
    name: "Team Lead",
    role: "Project Lead",
  },
  {
    quote:
      "Cẩn thận với các trường hợp biên và sẵn sàng chỉnh sửa đến khi sản phẩm gọn gàng.",
    name: "Technical Reviewer",
    role: "Code Reviewer",
  },
];

const TESTIMONIALS_VI_WITH_AVATARS = [
  {
    quote:
      "Working with Linh has been an absolute pleasure. Coming from a Frontend background, they have a great eye for design and can even jump into Figma and Photoshop to tweak icons or UI elements when needed. Beyond that, as they expanded into Backend and AI, their solid technical foundation allowed them to learn new languages incredibly fast. Whenever we face a challenging issue, they always take the initiative to research and figure out creative solutions. In terms of work ethic, they are highly reliable-always proactively updating their progress and thoroughly reviewing their work. What I love most about Linh is their positive attitude in teamwork. Even under pressure, they know how to lighten the mood, keeping the team motivated, well-coordinated, and focused on hitting our targets.",
    name: "Phan Nguyễn Trà Giang",
    avatar: "/refer/tra_giang.jpg",
  },
  {
    quote:
      "Linh là một đồng đội khiến việc phối hợp trở nên rất dễ chịu. Bạn ấy lắng nghe kỹ, làm rõ yêu cầu từ sớm và biến góp ý thành những cải thiện chỉn chu mà vẫn giữ được nhịp làm việc. Điều mình thích là Linh luôn cân bằng tốt giữa kỹ thuật và trải nghiệm người dùng.",
    name: "Nguyễn Ngọc Diễm Ngân",
    avatar: "/refer/diem_ngan.jpg",
  },
  {
    quote:
      "Linh tiếp cận vấn đề rất kiên nhẫn và có trách nhiệm. Khi một phần việc chưa rõ hoặc khó về kỹ thuật, bạn ấy chủ động tìm hiểu, thử nhiều hướng và cập nhật tiến độ để cả team luôn nắm được tình hình. Sự cẩn thận đó làm kết quả cuối cùng rất đáng tin.",
    name: "Đặng Thị Ngọc Minh",
    avatar: "/refer/ngoc_minh.jpg",
  },
  {
    quote:
      "Làm việc với Linh luôn mang lại cảm giác tích cực vì bạn ấy vừa có kỹ năng, vừa biết lan tỏa năng lượng tốt cho nhóm. Linh sẵn sàng hỗ trợ mọi người, cởi mở khi thảo luận giải pháp và luôn tự kiểm tra kỹ phần việc của mình trước khi gửi đi.",
    name: "Nguyễn Thị Nguyệt Ánh",
    avatar: "/refer/nguyet_anh.jpg",
  },
];

void TESTIMONIALS_VI;

interface ServicesProps {
  lang: Language;
}

export default function Services({ lang }: ServicesProps) {
  const isVi = lang === "vi";
  const whyHireMe = isVi ? WHY_HIRE_ME_VI : WHY_HIRE_ME_EN;
  const testimonials = useMemo(
    () => (isVi ? TESTIMONIALS_VI_WITH_AVATARS : TESTIMONIALS_EN),
    [isVi],
  );
  const marqueeTestimonials = useMemo(
    () => [...testimonials, ...testimonials],
    [testimonials],
  );
  const [marqueeDirection, setMarqueeDirection] = useState<"normal" | "reverse">(
    "normal",
  );
  const stats = isVi
    ? [
        { value: "1+", label: "Năm kinh nghiệm" },
        { value: "10+", label: "Dự án và thử nghiệm" },
        { value: "Luôn", label: "Tinh thần học hỏi" },
      ]
    : [
        { value: "1+", label: "Years of Experience" },
        { value: "10+", label: "Projects & Experiments" },
        { value: "Always", label: "Willingness to Learn" },
      ];

  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-8 md:px-12">
        <div>
          <h1 className="text-4xl font-bold md:text-5xl">
            {isVi ? "Vì sao nên chọn mình" : "Why Hire Me"}
          </h1>
          <Separator className="mt-4 data-horizontal:h-1 w-1/12! rounded-full bg-primary" />
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {whyHireMe.map((item) => (
            <article
              key={item.title}
              className="flex gap-4 rounded-lg border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              style={{
                "--why-accent": item.accent,
              } as React.CSSProperties}
            >
              <div className="mt-1 flex h-10 w-10 shrink-0 items-start justify-center">
                <CircleCheckBig className="text-[var(--why-accent)]" />
              </div>

              <div>
                <h3 className="text-lg font-bold text-[var(--why-accent)]">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {item.desc}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="w-full rounded-lg border border-primary/10 bg-sidebar px-4 py-8 md:px-8 md:py-12">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-6">
            {stats.map((item) => (
              <div
                key={item.label}
                className="flex flex-col items-center justify-center text-center"
              >
                <div className="flex items-center gap-3">
                  <Star className="h-7 w-7 text-primary" />
                  <span className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                    {item.value}
                  </span>
                </div>

                <p className="mt-2 text-sm text-foreground/70 md:text-base">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div
          id="testimonials"
          className="flex scroll-mt-24 flex-col gap-5 pt-8 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <h1 className="text-4xl font-bold md:text-5xl">
              {isVi ? "Người đã đánh giá mình" : "Testimonials"}
            </h1>
            <Separator className="mt-4 data-horizontal:h-1 w-1/12! rounded-full bg-primary" />
          </div>

          <div className="flex items-center gap-2">
            <Button
              type="button"
              variant="outline"
              size="icon-lg"
              aria-label={isVi ? "Trượt đánh giá sang trái" : "Slide testimonials left"}
              onClick={() => setMarqueeDirection("reverse")}
            >
              <ChevronLeft className="size-5" />
            </Button>
            <Button
              type="button"
              variant="outline"
              size="icon-lg"
              aria-label={isVi ? "Trượt đánh giá sang phải" : "Slide testimonials right"}
              onClick={() => setMarqueeDirection("normal")}
            >
              <ChevronRight className="size-5" />
            </Button>
          </div>
        </div>

        <div className="overflow-hidden">
          <div
            className="testimonial-marquee-track flex w-[800%] md:w-[400%]"
            style={{ animationDirection: marqueeDirection }}
          >
            {marqueeTestimonials.map((item, index) => (
              <div
                key={`${index}-${item.name}`}
                className="flex w-[12.5%] shrink-0 px-0 md:px-3"
              >
                <article className="flex min-h-[24rem] w-full flex-col rounded-lg border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md">
                  <div className="flex items-center gap-4">
                    <Image
                      src={item.avatar}
                      alt={item.name}
                      width={64}
                      height={64}
                      className="h-16 w-16 rounded-full object-cover ring-2 ring-primary/15"
                    />
                    <p className="text-lg font-semibold text-foreground">
                      {item.name}
                    </p>
                  </div>

                  <div className="mt-8 flex gap-1 text-yellow-400">
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <Star
                        key={starIndex}
                        className="h-6 w-6 fill-current stroke-current"
                      />
                    ))}
                  </div>

                  <p className="mt-5 text-base leading-relaxed text-foreground/80 md:text-lg">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
