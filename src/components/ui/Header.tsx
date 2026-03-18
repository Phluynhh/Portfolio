"use client";

import {
  useEffect,
  useState,
  useRef,
  type MouseEvent,
  type KeyboardEvent,
} from "react";
import { Globe, Moon, Sun, ChevronDown, Check } from "lucide-react";
import type { Language } from "../../lib/i18n";

const NAV_LINKS: Record<Language, Array<{ label: string; href: string }>> = {
  en: [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ],
  vi: [
    { label: "Giới thiệu", href: "#about" },
    { label: "Kỹ năng", href: "#skills" },
    { label: "Dự án", href: "#projects" },
    { label: "Kinh nghiệm", href: "#experience" },
    { label: "Dịch vụ", href: "#services" },
    { label: "Liên hệ", href: "#contact" },
  ],
};

const LANGUAGES = [
  { value: "en", label: "English" },
  { value: "vi", label: "Tiếng Việt" },
];

function getInitialTheme(): boolean {
  if (typeof window === "undefined") return false;
  const stored = localStorage.getItem("theme");
  if (stored) return stored === "dark";
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

interface HeaderProps {
  lang: Language;
  onLanguageChange: (value: Language) => void;
}

export default function Header({ lang, onLanguageChange }: HeaderProps) {
  const [isDark, setIsDark] = useState(getInitialTheme);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent | globalThis.MouseEvent) {
      if (!langRef.current) return;
      if (!langRef.current.contains(event.target as Node)) {
        setIsLangOpen(false);
      }
    }

    function handleEscape(event: globalThis.KeyboardEvent) {
      if (event.key === "Escape") {
        setIsLangOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  function toggleTheme() {
    const next = !isDark;
    setIsDark(next);
    localStorage.setItem("theme", next ? "dark" : "light");
  }

  function scrollToSection(event: MouseEvent<HTMLAnchorElement>, href: string) {
    const id = href.replace("#", "");
    const target = document.getElementById(id);

    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    history.replaceState(null, "", `#${id}`);
  }

  function handleLanguageSelect(value: Language) {
    onLanguageChange(value);
    setIsLangOpen(false);
  }

  function handleTriggerKeyDown(event: KeyboardEvent<HTMLButtonElement>) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setIsLangOpen((prev) => !prev);
    }

    if (event.key === "ArrowDown") {
      event.preventDefault();
      setIsLangOpen(true);
    }
  }

  const selectedLanguage =
    LANGUAGES.find((language) => language.value === lang) ?? LANGUAGES[0];
  const navLinks = NAV_LINKS[lang];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-20 border-b border-border bg-background/50 backdrop-blur-md">
      <div className="mx-auto flex h-full w-full max-w-6xl items-center justify-between px-4 md:px-6">
        <a
          href="#overall"
          onClick={(event) => scrollToSection(event, "#overall")}
          className="select-none text-2xl font-bold tracking-tight text-primary"
        >
          Portfolio
        </a>

        <nav>
          <ul className="flex items-center gap-7">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(event) => scrollToSection(event, link.href)}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <div ref={langRef} className="relative">
            <button
              type="button"
              aria-haspopup="listbox"
              aria-expanded={isLangOpen}
              aria-label={lang === "vi" ? "Chọn ngôn ngữ" : "Select language"}
              onClick={() => setIsLangOpen((prev) => !prev)}
              onKeyDown={handleTriggerKeyDown}
              className="flex h-9 w-42.5 items-center justify-between rounded-xl px-3 text-sm text-muted-foreground transition-colors hover:bg-muted"
            >
              <span className="flex min-w-0 items-center gap-2">
                <Globe className="size-4 shrink-0" />
                <span className="w-23 truncate text-left">
                  {selectedLanguage.label}
                </span>
              </span>

              <ChevronDown
                className={`size-4 shrink-0 transition-transform ${
                  isLangOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isLangOpen && (
              <div
                role="listbox"
                className="absolute top-full right-0 z-50 mt-2 w-42.5 overflow-hidden rounded-2xl border border-border bg-popover text-popover-foreground shadow-lg"
              >
                {LANGUAGES.map((language) => {
                  const isSelected = language.value === lang;

                  return (
                    <button
                      key={language.value}
                      type="button"
                      role="option"
                      aria-selected={isSelected}
                      onClick={() =>
                        handleLanguageSelect(language.value as Language)
                      }
                      className="flex h-11 w-full items-center justify-between px-4 text-left text-sm transition-colors hover:bg-muted"
                    >
                      <span className="w-23 shrink-0 text-left">
                        {language.label}
                      </span>

                      <span className="flex w-4 shrink-0 justify-center">
                        {isSelected ? <Check className="size-4" /> : null}
                      </span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          <button
            onClick={toggleTheme}
            aria-label={lang === "vi" ? "Đổi giao diện" : "Toggle theme"}
            className="flex size-9 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            {isDark ? <Sun className="size-4" /> : <Moon className="size-4" />}
          </button>
        </div>
      </div>
    </header>
  );
}
