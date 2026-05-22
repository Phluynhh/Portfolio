# EntrustExim — Import/Export Cargo Management System

> **Capstone Project** · University of Information Technology (UIT) – VNUHCM  
> Course: Advanced Software Engineering  
> Instructor: TS. Nguyễn Trịnh Đông

---

## 📌 Project Overview

**EntrustExim** is a web-based platform that supports the management of import/export cargo consignment operations. The system streamlines the entire workflow from quote requests, shipment tracking, document management, to financial reporting — serving clients, employees, and administrators.

| Metric | Value |
|---|---|
| User Stories | 42 |
| APIs | 86 |
| Function Points (FP) | 402 |
| Web Interfaces | 76 (38 Input / 38 Output) |

---

## 👤 My Role

**Frontend Developer** (Member)  
Team: Frontend sub-team (7 members) led by Scrum Master — Bùi Duy Phúc

Responsible for building and implementing user-facing features of the web application across multiple sprints using an Agile/Scrum methodology (8 sprints total).

---

## 🛠 Tech Stack

### Frontend
- **Next.js** — React framework for SSR & routing
- **React** — Component-based UI library
- **Tailwind CSS** — Utility-first styling
- **shadcn/ui** — Accessible UI component library
- **React Query (TanStack Query)** — Server state management & data fetching

### Backend (Team)
- **NestJS** — Node.js backend framework
- **PostgreSQL** — Relational database
- **Redis** — Caching layer
- **Prisma** — ORM
- **Docker** — Containerization & deployment

---

## 🚀 Key Features

### Dashboard
Overview screen with real-time KPIs — total customers, active shipments, quotes, freight — plus a report chart and recent shipments table.

### Quote Request Management
- Client-facing form to submit new quote requests (origin, destination, shipment type, cargo dimensions, insurance options)
- Admin view to manage and respond to all incoming quote requests

### Quotation Management
Manage and track quotes sent to clients with status updates and approval flow.

### Shipment Management
Comprehensive shipment tracking with filters by type (FCL, AIR, LAND), status (Pending, Delivered, On Hold, Document Verification), and location data.

### Freight Management
Manage freight providers and associated logistics records.

### Document Management
Upload, organize, and manage shipping documents tied to specific shipments and contracts.

### Stakeholder Management
Separate management views for:
- **Customers** — client information and history
- **Providers** — logistics and service providers
- **Employees** — internal staff management

### Financial Management
Invoice and payment tracking within the system.

---

## 🖥 UI Screens

| Screen | Description |
|---|---|
| **Dashboard** | Main overview with KPI cards, report chart, and recent shipments |
| **Create Quote Request** | Multi-field form for clients to submit cargo shipping requests |
| **Quote Request Management** | Admin table to view and manage all incoming requests |
| **Quotation Management** | Handle and track quotes issued to clients |
| **Shipment Management** | Full shipment list with status badges and pagination |
| **Transportation Management** | Manage cargo transportation details |
| **Document Management** | Upload and manage shipping documents |
| **Stakeholder Management** | Manage customers, providers, and employees |
| **Financial Management** | Track invoices and payments |

---

## 🔄 Development Process

The project was developed using **Agile/Scrum** across **8 sprints**, with:
- Product Backlog grooming and sprint planning
- Sprint reviews and retrospectives
- Frontend Scrum Master coordinating the FE sub-team

---

## 👥 Team

- **Project Manager:** Trần Phước Lộc  
- **Frontend Scrum Master:** Bùi Duy Phúc  
- **Frontend Members:** Trương Nguyễn Trung Khang, Đỗ Anh Khôi, Nguyễn Mai Khanh, Trần Đình Phương Linh, Đặng Thị Ngọc Minh, Phạm Quang Khánh  
- **Backend Scrum Master:** Ngô Đức Lộc  
- **Business Analyst Leader:** Trần Minh Nguyệt  

---

*Built at UIT – University of Information Technology, Vietnam National University Ho Chi Minh City*
