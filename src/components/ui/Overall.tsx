"use client";

import { useEffect, useState } from "react";
import Decorations from "../graphics/Decorations";
import { Button } from "@/components/ui/button";
export default function Overall() {
  const headline = "Fullstack Developer Building Modern Web & AI Products";
  const skills = ["Fullstack", "Frontend", "Backend", "AI/ML"];
  const [typedHeadline, setTypedHeadline] = useState("");

  useEffect(() => {
    let currentIndex = 0;

    const typingTimer = setInterval(() => {
      currentIndex += 1;
      setTypedHeadline(headline.slice(0, currentIndex));

      if (currentIndex >= headline.length) {
        clearInterval(typingTimer);
      }
    }, 35);

    return () => clearInterval(typingTimer);
  }, []);

  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-12 py-8 lg:flex-row">
        <div className="w-full lg:w-1/2">
          <div className="inline-flex items-center gap-3 rounded-full border border-primary/30 bg-secondary px-5 py-2 text-primary shadow-sm">
            <span className="relative flex h-3 w-3 items-center justify-center">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
            </span>
            <span className="text-sm font-medium leading-none">
              Open to Work
            </span>
          </div>

          <h1
            className="mt-5 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl"
            aria-label={headline}
          >
            {typedHeadline}
            <span className="ml-1 inline-block h-[1em] w-0.5 animate-pulse bg-foreground align-[-0.15em]" />
          </h1>

          <h2 className="mt-5 text-lg text-foreground/75 lg:text-xl">
            I design and develop modern digital products with strong frontend
            execution, reliable backend architecture, and AI-powered
            functionality.
          </h2>

          <div className="mt-6 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full bg-secondary px-4 py-2 text-sm font-semibold leading-none text-primary"
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="mt-4">
            <Button>View Projects</Button>
            <Button variant={"secondary"} className="ml-2">
              Contact Me
            </Button>
          </div>
        </div>

        <div className="relative hidden h-136 w-full lg:block lg:w-1/2">
          <Decorations />
        </div>
      </div>
    </section>
  );
}
