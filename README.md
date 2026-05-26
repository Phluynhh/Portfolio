# Personal Portfolio - Phluynh

A modern personal portfolio website built with **Next.js**, designed to present my developer profile, technical skills, professional experience, featured projects, and direct contact information.

Live website:

**https://www.pluynh.id.vn/**

## Table of Contents

- [Overview](#overview)
- [Key Features](#key-features)
- [Tech Stack](#tech-stack)
- [Page Sections](#page-sections)
- [Featured Projects](#featured-projects)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Available Scripts](#available-scripts)
- [Deployment](#deployment)
- [Contact](#contact)

## Overview

This is the personal portfolio website of **Tran Dinh Phuong Linh**, focused on showcasing my work and growth as a software developer across:

- Fullstack Web Development
- Frontend Development
- Backend Development
- AI/ML and AI-powered product integration
- Practical, scalable, and maintainable digital product development

The website works as an online professional profile where recruiters, collaborators, and visitors can quickly learn about my background, technical capabilities, work experience, and selected projects.

## Key Features

- **Complete portfolio website** with overview, about, skills, projects, experience, services, and contact sections.
- **English/Vietnamese language support**, with the selected language persisted in `localStorage`.
- **Typing animation** in the hero section for a more dynamic first impression.
- **Grouped technical skills** covering Frontend, Backend, Databases, AI/LLM, and developer tools.
- **Dedicated project detail pages** with descriptions, roles, technologies, highlights, screenshots, documents, and GitHub links.
- **Contact form integration** using a Next.js API route and Nodemailer.
- **Responsive layout** optimized for desktop, tablet, and mobile screens.
- **Interactive UI and animations** powered by Lucide React and Framer Motion.
- **Production deployment with a custom domain** at `https://www.pluynh.id.vn/`.

## Tech Stack

### Frontend

- **Next.js 16**
- **React 19**
- **TypeScript**
- **Tailwind CSS 4**
- **shadcn/ui**
- **Radix UI**
- **Framer Motion**
- **Lucide React**

### Backend/API

- **Next.js API Routes**
- **Node.js runtime**
- **Nodemailer** for handling contact form emails

### Development Tools

- **ESLint**
- **PostCSS**
- **npm**
- **Git/GitHub**

## Page Sections

### 1. Overall / Hero

The landing section introduces the main positioning: **Fullstack Developer Building Modern Web & AI Products**. It includes a typing headline animation, calls to action for viewing projects or contacting me, and links to GitHub, LinkedIn, email, WhatsApp, and Telegram.

### 2. About

The about section summarizes my development mindset, professional direction, working philosophy, and soft skills, including:

- English Communication
- Problem Solving
- Team Collaboration
- Self-learning
- Adaptability

### 3. Skills & Expertise

Technical skills are grouped by category:

- **Frontend:** HTML5, CSS3, JavaScript, TypeScript, React, Next.js, Tailwind CSS, React Native
- **Backend:** Python, Node.js, Java, PHP, REST API, Authentication, WebSockets
- **Databases:** PostgreSQL, MySQL, MongoDB, SQL Server, Redis, Prisma
- **AI & LLM:** PyTorch, TensorFlow, NumPy, Pandas, OpenAI, Hugging Face
- **Tools:** Git & GitHub, Docker, Postman, Figma, VS Code, Agile

### 4. Projects

The projects section highlights selected work across Frontend, Backend, and AI. Each project has its own detail page under the `/projects/...` route.

### 5. Experience

The experience section presents my work at **Cybertech JSC** as a Fullstack Developer, focusing on:

- Building frontend experiences with React/Next.js
- Designing and maintaining backend APIs
- Integrating AI-powered features
- Improving workflows and delivering scalable digital products

### 6. Why Hire Me / Services

This section communicates the value I bring when collaborating on software products, including product thinking, problem-solving ability, and practical fullstack development experience.

### 7. Contact

The contact section provides a direct form where visitors can submit:

- Full name
- Email address
- Company
- Message

Submitted data is sent to `/api/contact`, then forwarded to the configured email address through Nodemailer.

## Featured Projects

### EntrustExim

A web-based import/export cargo management platform covering quote requests, shipment tracking, document management, and financial reporting.

- Role: Frontend Developer
- Technologies: Next.js, React, Tailwind CSS, shadcn/ui, React Query
- GitHub: https://github.com/ASE-UIT/05.-Import-and-Export-Goods-Entrusted-System-FrontEnd
- Detail route: `/projects/entrust-exim`

### SoulSpace FE Expert

A mobile application interface for expert users in the SoulSpace ecosystem, focused on performance and smooth user interaction.

- Role: Frontend Mobile Developer
- Technologies: React Native, TypeScript, Expo, Mobile UI
- GitHub: https://github.com/Chuyen-d-Mobile-va-Pervasive-Computing/SoulSpace-FE-Expert
- Detail route: `/projects/soulspace-fe-expert`

### SoulSpace FE Admin

A web-based admin dashboard for managing platform resources, users, and operational workflows.

- Role: Frontend Web Developer
- Technologies: React, TypeScript, Dashboard, Admin Panel
- GitHub: https://github.com/Chuyen-d-Mobile-va-Pervasive-Computing/SoulSpace-FE-Admin
- Detail route: `/projects/soulspace-fe-admin`

### SoulSpace Backend

Core backend services powering authentication, business logic, and data APIs for the SoulSpace ecosystem.

- Role: Backend Developer
- Technologies: FastAPI, Python, MongoDB, AI Services
- GitHub: https://github.com/Chuyen-d-Mobile-va-Pervasive-Computing/SoulSpace-Backend
- Detail route: `/projects/soulspace-backend`

### SE400 Seminar CNPM

An AI seminar project applying Machine Learning and NLP to detect community-standard violations in text, comparing pipelines from classical machine learning to deep learning and transformer-based models.

- Role: AI Engineer
- Technologies: Python, NLP, RoBERTa, Multi-label Classification
- GitHub: https://github.com/FakerHecker/SE400_Seminar_CNPM
- Detail route: `/projects/se400-seminar-cnpm`

### Student Management System BE

A Spring Boot backend for a student management system, applying 13 design patterns across authentication, academic records, grades, conduct, tuition, reports, and notifications.

- Role: Backend Developer
- Technologies: Spring Boot, MVC, MySQL, Design Patterns
- GitHub: https://github.com/Se401-Student-Management-System/Student-Management-System-BE
- Detail route: `/projects/student-management-system-be`

## Project Structure

```text
portfolio/
├── public/
│   ├── projects/                  # Images, README files, and supporting documents for projects
│   ├── refer/                     # Reference images
│   ├── skills/                    # Skill icons
│   └── thumbnail_*.png|jpg        # Project thumbnails
├── src/
│   ├── app/
│   │   ├── api/contact/route.ts   # Contact form email API
│   │   ├── projects/              # Project detail pages
│   │   ├── globals.css            # Global styles
│   │   ├── layout.tsx             # Root layout
│   │   └── page.tsx               # Home page
│   ├── components/
│   │   ├── graphics/              # Decorative graphics
│   │   └── ui/                    # Main UI components
│   ├── hooks/                     # Custom hooks
│   └── lib/
│       ├── project-summaries/     # EN/VI project summary content
│       ├── i18n.ts                # Language type definition
│       ├── projects.ts            # Project registry
│       └── utils.ts               # Utility functions
├── components.json
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tsconfig.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js compatible with Next.js 16
- npm

### Installation

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open the application in your browser:

```text
http://localhost:3000
```

Build for production:

```bash
npm run build
```

Start the production server:

```bash
npm run start
```

## Environment Variables

The contact form requires the following environment variables in `.env` or in the deployment platform configuration:

```env
MAIL_USERNAME=your_gmail_address
MAIL_PASSWORD=your_app_password
CONTACT_EMAIL=receiver_email_address
```

Variable descriptions:

- `MAIL_USERNAME`: email account used to send contact messages.
- `MAIL_PASSWORD`: app password or equivalent authentication credential.
- `CONTACT_EMAIL`: destination email address that receives contact form submissions.

Do not commit real environment variables or credentials to GitHub.

## Available Scripts

```bash
npm run dev
```

Starts the local development server.

```bash
npm run build
```

Creates a production build.

```bash
npm run start
```

Starts the production server after building.

```bash
npm run lint
```

Runs ESLint to check code quality.

## Deployment

The website is deployed and available at:

**https://www.pluynh.id.vn/**

For production deployment, make sure the following environment variables are configured:

- `MAIL_USERNAME`
- `MAIL_PASSWORD`
- `CONTACT_EMAIL`

## Contact

- Website: https://www.pluynh.id.vn/
- GitHub: https://github.com/Phluynhh
- Email: tranlinh250415@gmail.com
- WhatsApp: https://wa.me/84941410532
- Telegram: https://t.me/Phluynhh

---

This README provides a complete overview of the portfolio source code, features, local setup, contact form configuration, and deployed production website.
