"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Header from "@/components/ui/Header";
import type { Language } from "@/lib/i18n";

interface ProjectDetailHeaderProps {
  initialLang: Language;
}

export default function ProjectDetailHeader({
  initialLang,
}: ProjectDetailHeaderProps) {
  const [lang, setLang] = useState<Language>(initialLang);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  function handleLanguageChange(value: Language) {
    setLang(value);
    router.replace(`${pathname}?lang=${value}`);
  }

  return (
    <Header
      lang={lang}
      onLanguageChange={handleLanguageChange}
      homeHref={`/?lang=${lang}#overall`}
      navHrefPrefix={`/?lang=${lang}`}
    />
  );
}
