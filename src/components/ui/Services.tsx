import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Brain, Code2, ServerCog, CircleCheckBig, Star } from "lucide-react";

const SERVICES = [
  {
    title: "Frontend Development",
    description:
      "Build modern and responsive interfaces with clean UX, scalable component systems, and strong performance focus.",
    icon: Code2,
    tags: ["Next.js", "React", "TypeScript"],
  },
  {
    title: "Backend Development",
    description:
      "Design reliable APIs, business workflows, and data architecture for secure and maintainable systems.",
    icon: ServerCog,
    tags: ["REST API", "Database", "System Design"],
  },
  {
    title: "AI Integration",
    description:
      "Integrate AI capabilities into products such as smart recommendations, automation pipelines, and model-backed features.",
    icon: Brain,
    tags: ["LLM", "Automation", "Applied AI"],
  },
];

const WHY_HIRE_ME = [
  {
    title: "Versatile Across Stacks",
    desc: "Comfortable with Frontend, Backend, Fullstack, and AI—I adapt to your needs.",
  },
  {
    title: "Product-Minded Engineer",
    desc: "I think beyond code. Every solution is aligned with business goals.",
  },
  {
    title: "Independent & Reliable",
    desc: "Manage projects end-to-end with minimal oversight or support.",
  },
  {
    title: "Strong Communication",
    desc: "Clear explanations, proactive updates, and collaborative problem-solving.",
  },
  {
    title: "Fast Learner",
    desc: "Quickly acquire new skills and technologies as projects demand.",
  },
  {
    title: "Shipped Products",
    desc: "Track record of delivering real, working products to production.",
  },
];

export default function Services() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 py-8">
        <h1 className="text-5xl font-bold">Services</h1>
        <Separator className="data-horizontal:h-1 w-1/12! rounded-full bg-primary" />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {SERVICES.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="rounded-2xl border border-primary/20 bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/35 hover:shadow-lg"
              >
                <div className="mb-5 inline-flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon size={24} />
                </div>

                <h2 className="text-2xl font-bold text-foreground">
                  {service.title}
                </h2>
                <p className="mt-3 text-base leading-relaxed text-foreground/75">
                  {service.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <Badge
                      key={`${service.title}-${tag}`}
                      variant="secondary"
                      className="h-7 rounded-md border border-primary/15 bg-primary/5 px-3 text-sm text-primary"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
        <h1 className="text-5xl font-bold mt-8">Why Hire Me</h1>
        <Separator className="data-horizontal:h-1 w-1/12! rounded-full bg-primary" />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {WHY_HIRE_ME.map((item, i) => (
            <div
              key={i}
              className="flex gap-4 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-primary/40"
            >
              <div className="flex h-10 w-10 items-start justify-center mt-1">
                <CircleCheckBig className="text-primary" />
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900 items-start">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm text-foreground/75 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full rounded-2xl border border-primary/10 bg-sidebar px-4 py-8 md:px-8 md:py-12">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-6">
            {[
              { value: "1+", label: "Years of Experience" },
              { value: "10+", label: "Projects & Experiments" },
              { value: "∞", label: "Willingness to Learn" },
            ].map((item) => (
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
      </div>
    </section>
  );
}
