import React from "react";
import { Facebook, Github, Linkedin, Mail } from "lucide-react";
import type { Language } from "../../lib/i18n";

interface FooterProps {
  lang: Language;
}

export default function Footer({ lang }: FooterProps) {
  const isVi = lang === "vi";

  return (
    <footer className="w-full px-4 py-12 md:px-12 lg:px-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 items-start">
        {/* Column 1 - Portfolio */}
        <div>
          <h3 className="text-primary font-semibold text-lg">Portfolio</h3>
          <p className="mt-4 text-muted-foreground max-w-sm">
            {isVi
              ? "Xây dựng sản phẩm web và AI hiện đại với sự chỉn chu và đam mê."
              : "Building modern web and AI products with passion and precision."}
          </p>
        </div>

        {/* Column 2 - Quick Links */}
        <div>
          <h3 className="font-semibold text-lg">
            {isVi ? "Liên kết nhanh" : "Quick Links"}
          </h3>
          <ul className="mt-4 space-y-2 text-muted-foreground">
            <li>
              <a href="#about" className="hover:text-primary">
                {isVi ? "Giới thiệu" : "About"}
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-primary">
                {isVi ? "Dự án" : "Projects"}
              </a>
            </li>
            <li>
              <a href="#experience" className="hover:text-primary">
                {isVi ? "Kinh nghiệm" : "Experience"}
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-primary">
                {isVi ? "Liên hệ" : "Contact"}
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3 - Social */}
        <div>
          <h3 className="font-semibold text-lg">
            {isVi ? "Theo dõi mình" : "Follow Me"}
          </h3>
          <div className="flex gap-4 mt-4 text-xl">
            <a
              href="https://www.facebook.com/phuong.linh.3844125"
              target="_blank"
              rel="noreferrer"
            >
              <span>
                <Facebook />
              </span>
            </a>
            <a
              href="www.linkedin.com/in/linh-trần-đình-phương-116010355"
              target="_blank"
              rel="noreferrer"
            >
              <span>
                <Linkedin />
              </span>
            </a>
            <a
              href="https://github.com/Phluynhh"
              target="_blank"
              rel="noreferrer"
            >
              <span>
                <Github />
              </span>
            </a>
            <a
              href="mailto:tranlinh250415@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <span>
                <Mail />
              </span>
            </a>
          </div>
        </div>

        {/* Column 4 - Back to Top */}
        <div className="flex md:justify-end">
          <a
            href="#overall"
            className="bg-primary text-white px-5 py-2 rounded-lg hover:opacity-90 transition"
          >
            {isVi ? "Lên đầu trang" : "Back to Top"}
          </a>
        </div>
      </div>

      {/* Divider */}
      <div className="mt-10 border-t pt-6 text-center text-sm text-muted-foreground">
        {isVi
          ? "© 2026 Phuong Linh. Bảo lưu mọi quyền."
          : "© 2026 Phuong Linh. All rights reserved."}
      </div>
    </footer>
  );
}
