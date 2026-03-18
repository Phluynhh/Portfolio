import React from "react";
import { Facebook, Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full px-6 md:px-12 lg:px-20 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 items-start">
        {/* Column 1 - Portfolio */}
        <div>
          <h3 className="text-primary font-semibold text-lg">Portfolio</h3>
          <p className="mt-4 text-muted-foreground max-w-sm">
            Building modern web and AI products with passion and precision.
          </p>
        </div>

        {/* Column 2 - Quick Links */}
        <div>
          <h3 className="font-semibold text-lg">Quick Links</h3>
          <ul className="mt-4 space-y-2 text-muted-foreground">
            <li>
              <a href="#about" className="hover:text-primary">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-primary">
                Projects
              </a>
            </li>
            <li>
              <a href="#experience" className="hover:text-primary">
                Experience
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-primary">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3 - Social */}
        <div>
          <h3 className="font-semibold text-lg">Follow Me</h3>
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
            className="bg-primary text-white px-5 py-2 rounded-xl hover:opacity-90 transition"
          >
            Back to Top
          </a>
        </div>
      </div>

      {/* Divider */}
      <div className="mt-10 border-t pt-6 text-center text-sm text-muted-foreground">
        © 2026 Phuong Linh. All rights reserved.
      </div>
    </footer>
  );
}
