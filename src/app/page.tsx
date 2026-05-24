"use client";

import { useEffect, useState } from "react";
import About from "@/components/ui/About";
import Contact from "@/components/ui/Contact";
import Experience from "@/components/ui/Experience";
import Footer from "@/components/ui/Footer";
import Header from "@/components/ui/Header";
import Overall from "@/components/ui/Overall";
import Projects from "@/components/ui/Projects";
import { Separator } from "@/components/ui/separator";
import Services from "@/components/ui/Services";
import Skills from "@/components/ui/Skills";
import type { Language } from "../lib/i18n";

export default function Home() {
  const [lang, setLang] = useState<Language>(() => {
    if (typeof window === "undefined") return "en";
    const queryLang = new URLSearchParams(window.location.search).get("lang");
    if (queryLang === "en" || queryLang === "vi") return queryLang;
    const stored = localStorage.getItem("lang");
    return stored === "en" || stored === "vi" ? stored : "en";
  });

  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  return (
    <div className="w-full flex-col">
      <Header lang={lang} onLanguageChange={setLang} />
      <div id="overall" className="mt-20 scroll-mt-24">
        <Overall key={lang} lang={lang} />
      </div>
      <div id="about" className="mt-4 scroll-mt-24">
        <About lang={lang} />
      </div>
      <div id="skills" className="mt-4 scroll-mt-24">
        <Skills lang={lang} />
      </div>
      <div id="projects" className="mt-4 scroll-mt-24">
        <Projects lang={lang} />
      </div>
      <div id="experience" className="mt-4 scroll-mt-24">
        <Experience lang={lang} />
      </div>
      <div id="why-hire-me" className="mt-4 scroll-mt-24">
        <Services lang={lang} />
      </div>
      <div id="contact" className="mt-4 scroll-mt-24">
        <Contact lang={lang} />
      </div>
      <Separator />
      <Footer lang={lang} />
    </div>
  );
}
