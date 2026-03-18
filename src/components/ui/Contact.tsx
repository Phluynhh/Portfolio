import React from "react";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone, MapPin, Send } from "lucide-react";
export default function Contact() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 py-8">
        <h1 className="text-5xl font-bold text-center">Get In Touch</h1>
        <p className="text-center">
          I'm always interested in hearing about new opportunities and
          interesting projects.
        </p>
        <Separator className="data-horizontal:h-1 w-1/12! mx-auto rounded-full bg-primary" />
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[360px_minmax(0,1fr)] lg:gap-14">
          {/* Left side */}
          <div className="space-y-6">
            {[
              {
                title: "Email",
                value: "tranlinh250415@gmail.com",
                href: "mailto:tranlinh250415@gmail.com",
                icon: <Mail />,
              },
              {
                title: "Phone",
                value: "0941 410 532",
                href: "tel:0941410532",
                icon: <Phone />,
              },
              {
                title: "Location",
                value: "Vietnam",
                href: "#",
                icon: <MapPin />,
              },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  {item.icon}
                </div>

                <div className="space-y-1 pt-1">
                  <h3 className="text-base font-semibold text-foreground">
                    {item.title}
                  </h3>
                  {item.href !== "#" ? (
                    <a
                      href={item.href}
                      className="text-base text-primary transition-colors hover:text-primary/80"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-base text-foreground/70">{item.value}</p>
                  )}
                </div>
              </div>
            ))}

            <div className="rounded-3xl border border-primary/10 bg-primary/5 px-8 py-6">
              <p className="text-sm leading-6 text-foreground/75">
                I usually respond within 24 hours. Looking forward to connecting
                with you!
              </p>
            </div>
          </div>

          {/* Right side */}
          <div className="space-y-7">
            <div className="space-y-3">
              <label className="text-base font-semibold text-foreground">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="h-12 w-full rounded-lg border border-border bg-background px-5 text-base outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary mt-2"
              />
            </div>

            <div className="space-y-3">
              <label className="text-base font-semibold text-foreground">
                Email Address
              </label>
              <input
                type="email"
                placeholder="your@email.com"
                className="h-12 w-full rounded-lg border border-border bg-background px-5 text-base outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary mt-2"
              />
            </div>

            <div className="space-y-3">
              <label className="text-base font-semibold text-foreground">
                Company
              </label>
              <input
                type="text"
                placeholder="Your company (optional)"
                className="h-12 w-full rounded-lg border border-border bg-background px-5 text-base outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary mt-2"
              />
            </div>

            <div className="space-y-3">
              <label className="text-base font-semibold text-foreground">
                Message
              </label>
              <textarea
                placeholder="Tell me about your project..."
                rows={7}
                className="resize-none min-h-45 w-full rounded-2xl border border-border bg-background px-5 py-4 text-base outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary mt-2"
              />
            </div>

            <button
              type="button"
              className="flex h-12 w-full items-center justify-center gap-3 rounded-lg bg-primary px-6 text-base font-semibold text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:opacity-95"
            >
              Send Message
              <Send />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
