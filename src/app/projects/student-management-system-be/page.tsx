import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import ProjectDetailHeader from "@/components/ui/ProjectDetailHeader";
import type { Language } from "@/lib/i18n";
import {
  ArrowLeft,
  BookOpen,
  CheckCircle2,
  Database,
  ExternalLink,
  FileText,
  Github,
  GraduationCap,
  Layers3,
  ListChecks,
  Route,
  ShieldCheck,
  Terminal,
  Users,
  WalletCards,
} from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

type PageProps = {
  searchParams: Promise<{ lang?: string }>;
};

type Figure = {
  src: string;
  alt: string;
  caption: Record<Language, string>;
};

type Pattern = {
  name: string;
  type: string;
  problem: Record<Language, string>;
  solution: Record<Language, string>;
  benefit: Record<Language, string>;
};

const DRIVE_URL =
  "https://drive.google.com/drive/u/0/folders/1WzFv28J37GeXey1RRbi3VTtePxpXjt8c";
const REPORT_URL =
  "/projects/student-manage-be/B%C3%A1o%20c%C3%A1o%20%C4%91%E1%BB%93%20%C3%A1n%20M%E1%BA%ABu%20thi%E1%BA%BFt%20k%E1%BA%BF_Nh%C3%B3m%206.1.docx";

const PROJECT = {
  title: "Student Management System BE",
  subtitle: {
    en: "Student Management System using Design Patterns",
    vi: "Hệ thống Quản lý Học sinh vận dụng Mẫu thiết kế",
  },
  period: "June 2025",
  githubUrl:
    "https://github.com/Se401-Student-Management-System/Student-Management-System-BE",
  tags: [
    "Java Spring Boot",
    "MVC",
    "MySQL",
    "JPA / Hibernate",
    "Design Patterns",
  ],
  figures: [
    {
      src: "/projects/student-manage-be/system_architecture_mvc.svg",
      alt: "Student Management System MVC architecture",
      caption: {
        en: "Spring Boot MVC architecture from client to controller, service, model, repository, and MySQL database.",
        vi: "Kiến trúc Spring Boot MVC từ client đến controller, service, model, repository và MySQL.",
      },
    },
    {
      src: "/projects/student-manage-be/design_patterns_classification.svg",
      alt: "Design patterns classification",
      caption: {
        en: "Classification of the 13 applied design patterns by creational, structural, and behavioral groups.",
        vi: "Phân loại 13 mẫu thiết kế theo nhóm khởi tạo, cấu trúc và hành vi.",
      },
    },
    {
      src: "/projects/student-manage-be/auth_flow_chain_of_responsibility.svg",
      alt: "Authentication flow using Chain of Responsibility",
      caption: {
        en: "Login validation flow split into independent handlers using Chain of Responsibility.",
        vi: "Luồng xác thực đăng nhập được tách thành các handler độc lập bằng Chain of Responsibility.",
      },
    },
    {
      src: "/projects/student-manage-be/facade_observer_interaction.svg",
      alt: "Facade and Observer interaction",
      caption: {
        en: "Facade simplifies statistics services while Observer dispatches grade and state-change notifications.",
        vi: "Facade gom logic thống kê, Observer phát thông báo khi có cập nhật điểm hoặc trạng thái.",
      },
    },
    {
      src: "/projects/student-manage-be/student_state_machine.svg",
      alt: "Student state machine",
      caption: {
        en: "Student lifecycle modeled as states: enrolled, suspended, graduated, and expelled.",
        vi: "Vòng đời học sinh được mô hình hóa qua các trạng thái: đang học, bảo lưu, tốt nghiệp và thôi học.",
      },
    },
  ] satisfies Figure[],
};

const CONTENT = {
  en: {
    eyebrow: "Project Detail",
    back: "Back to portfolio",
    overview:
      "A course project for refactoring a student management system from PHP/CodeIgniter into Java Spring Boot. The backend uses MVC, JPA/Hibernate, MySQL, and 13 design patterns to make authentication, student records, grades, conduct, tuition, reports, and notifications easier to extend and maintain.",
    roleLabel: "Role",
    role: "Backend Developer",
    highlightLabel: "Highlight",
    highlight: "Pattern-driven Spring Boot refactor for school operations",
    codeLabel: "View Code",
    driveLabel: "Open Drive",
    reportLabel: "Open Report",
    courseTitle: "Course & Team",
    overviewTitle: "README Overview",
    architectureTitle: "Architecture",
    featuresTitle: "Main Features",
    patternsTitle: "13 Applied Design Patterns",
    structureTitle: "Project Structure",
    runTitle: "Run Locally",
    migrationTitle: "Refactor Notes",
    documentsTitle: "Documents",
    diagramsTitle: "Flow & Architecture Diagrams",
    referencesTitle: "References",
  },
  vi: {
    eyebrow: "Chi tiết dự án",
    back: "Về portfolio",
    overview:
      "Đồ án môn Mẫu thiết kế về việc tái cấu trúc hệ thống quản lý học sinh từ PHP/CodeIgniter sang Java Spring Boot. Backend dùng MVC, JPA/Hibernate, MySQL và 13 design patterns để các luồng xác thực, hồ sơ học sinh, điểm số, hạnh kiểm, học phí, báo cáo và thông báo dễ mở rộng, dễ bảo trì hơn.",
    roleLabel: "Vai trò",
    role: "Lập trình viên Backend",
    highlightLabel: "Điểm nhấn",
    highlight: "Tái cấu trúc backend Spring Boot theo hướng design patterns",
    codeLabel: "Xem mã nguồn",
    driveLabel: "Mở Drive",
    reportLabel: "Mở báo cáo",
    courseTitle: "Môn học & Nhóm",
    overviewTitle: "Tổng quan từ README",
    architectureTitle: "Kiến trúc",
    featuresTitle: "Chức năng chính",
    patternsTitle: "13 mẫu thiết kế áp dụng",
    structureTitle: "Cấu trúc dự án",
    runTitle: "Chạy dự án",
    migrationTitle: "Ghi chú chuyển đổi",
    documentsTitle: "Tài liệu",
    diagramsTitle: "Sơ đồ flow & kiến trúc",
    referencesTitle: "Tài liệu tham khảo",
  },
} satisfies Record<Language, Record<string, string>>;

const team = [
  ["22520560", "Nguyễn Khánh Huy"],
  ["22520616", "Ngô Hoàng Khang"],
  ["22520778", "Trần Đình Phương Linh"],
  ["22520857", "Đặng Thị Ngọc Minh"],
];

const courseFacts = [
  ["Course", "Design Patterns"],
  ["Group", "Group 6.1"],
  ["University", "University of Information Technology, VNU-HCM"],
  ["Supervisor", "MSc. Le Thanh Trong"],
];

const architectureLayers = [
  ["Client", "React / Next.js sends HTTP requests to backend APIs."],
  [
    "Controller",
    "BoardOfDirectorsController, TeacherController, SupervisorController, TuitionController.",
  ],
  [
    "Service",
    "Business layer applying Facade, Command, Strategy, Observer, State, and other patterns.",
  ],
  ["Model", "Student, Grade, SchoolRecord, TuitionFee, and related domain entities."],
  ["Repository", "JPA / Hibernate ORM repositories for MySQL persistence."],
  ["Database", "MySQL stores student, grade, conduct, tuition, and account data."],
];

const features = [
  {
    icon: <ShieldCheck size={18} />,
    en: "Role-based login and authentication.",
    vi: "Đăng nhập và xác thực theo vai trò.",
  },
  {
    icon: <Database size={18} />,
    en: "Student, staff, class, academic record, and grade management.",
    vi: "Quản lý học sinh, công nhân viên, lớp học, học bạ và điểm số.",
  },
  {
    icon: <ListChecks size={18} />,
    en: "Statistics for student population, academic performance, and conduct.",
    vi: "Thống kê số lượng học sinh, học lực và hạnh kiểm.",
  },
  {
    icon: <GraduationCap size={18} />,
    en: "Evaluation workflows for teachers, supervisors, and school administrators.",
    vi: "Luồng đánh giá dành cho giáo viên, giám thị và ban giám hiệu.",
  },
  {
    icon: <WalletCards size={18} />,
    en: "Tuition, payment, reporting, and export operations.",
    vi: "Quản lý học phí, thanh toán, báo cáo và xuất file.",
  },
  {
    icon: <Route size={18} />,
    en: "Conduct violation handling with flexible severity strategies.",
    vi: "Xử lý vi phạm hạnh kiểm theo từng mức độ linh hoạt.",
  },
];

const patterns: Pattern[] = [
  {
    name: "Singleton",
    type: "Creational",
    problem: {
      en: "Shared services and configuration can be repeatedly instantiated.",
      vi: "Các service dùng chung và cấu hình hệ thống có thể bị khởi tạo lặp lại.",
    },
    solution: {
      en: "Use single instances for shared resources such as database connection, system config, and logger.",
      vi: "Dùng một instance duy nhất cho database connection, system config và logger.",
    },
    benefit: {
      en: "Saves resources and keeps shared state consistent.",
      vi: "Tiết kiệm tài nguyên và giữ trạng thái dùng chung nhất quán.",
    },
  },
  {
    name: "Factory Method",
    type: "Creational",
    problem: {
      en: "Notification object creation is scattered across the codebase.",
      vi: "Việc tạo đối tượng thông báo bị rải rác trong nhiều nơi.",
    },
    solution: {
      en: "Introduce factories for email, SMS, and system notifications.",
      vi: "Tạo factory cho EmailNotification, SMSNotification và SystemNotification.",
    },
    benefit: {
      en: "Adds new notification channels without changing old callers.",
      vi: "Thêm loại thông báo mới mà không phải sửa các nơi gọi cũ.",
    },
  },
  {
    name: "Builder",
    type: "Creational",
    problem: {
      en: "SchoolRecord construction has many parameters and is easy to misuse.",
      vi: "Tạo SchoolRecord có nhiều tham số, dễ truyền sai hoặc thiếu.",
    },
    solution: {
      en: "Build SchoolRecord step by step with SchoolRecordBuilder.",
      vi: "Dùng SchoolRecordBuilder để dựng học bạ theo từng bước rõ ràng.",
    },
    benefit: {
      en: "Improves readability and lowers object-construction errors.",
      vi: "Code dễ đọc hơn và giảm lỗi khi tạo đối tượng phức tạp.",
    },
  },
  {
    name: "Facade",
    type: "Structural",
    problem: {
      en: "BoardOfDirectorsController needs to coordinate too many services.",
      vi: "BoardOfDirectorsController phải gọi quá nhiều service/model.",
    },
    solution: {
      en: "Expose StudentStatisticsFacade as a simple interface for statistics workflows.",
      vi: "Dùng StudentStatisticsFacade làm interface gọn cho các luồng thống kê.",
    },
    benefit: {
      en: "Keeps controllers thin and hides complex business orchestration.",
      vi: "Controller gọn hơn và che đi phần phối hợp nghiệp vụ phức tạp.",
    },
  },
  {
    name: "Proxy",
    type: "Structural",
    problem: {
      en: "Access to records and reports needs consistent role checks.",
      vi: "Truy cập học bạ và báo cáo cần kiểm soát quyền thống nhất.",
    },
    solution: {
      en: "Route protected resources through ResourceProxy before touching real resources.",
      vi: "Đưa truy cập tài nguyên qua ResourceProxy trước khi tới resource thật.",
    },
    benefit: {
      en: "Centralizes authorization for admin, teacher, student, and denied cases.",
      vi: "Tập trung phân quyền cho admin, giáo viên, học sinh và trường hợp bị từ chối.",
    },
  },
  {
    name: "Decorator",
    type: "Structural",
    problem: {
      en: "Email alert logic is mixed into the evaluation processor.",
      vi: "Logic gửi email bị trộn trực tiếp vào bộ xử lý đánh giá.",
    },
    solution: {
      en: "Wrap BasicEvaluationProcessor with NotificationDecorator.",
      vi: "Bọc BasicEvaluationProcessor bằng NotificationDecorator.",
    },
    benefit: {
      en: "Extends behavior without modifying the original processor.",
      vi: "Mở rộng chức năng mà không sửa lớp gốc.",
    },
  },
  {
    name: "Observer",
    type: "Behavioral",
    problem: {
      en: "Grade and state-change events need organized notification delivery.",
      vi: "Sự kiện cập nhật điểm và trạng thái cần cơ chế thông báo rõ ràng.",
    },
    solution: {
      en: "GradeSubject notifies EmailObserver, SMSObserver, and SystemLogObserver.",
      vi: "GradeSubject thông báo đến EmailObserver, SMSObserver và SystemLogObserver.",
    },
    benefit: {
      en: "Decouples event sources from notification receivers.",
      vi: "Tách nguồn sự kiện khỏi các bên nhận thông báo.",
    },
  },
  {
    name: "State",
    type: "Behavioral",
    problem: {
      en: "Student lifecycle transitions can become nested conditional logic.",
      vi: "Chuyển trạng thái học sinh dễ biến thành nhiều if-else lồng nhau.",
    },
    solution: {
      en: "Represent enrolled, suspended, graduated, and expelled as separate states.",
      vi: "Tách Đang học, Bảo lưu, Tốt nghiệp và Thôi học thành các state riêng.",
    },
    benefit: {
      en: "Makes lifecycle rules explicit and easier to extend.",
      vi: "Quy tắc vòng đời rõ ràng hơn và dễ mở rộng.",
    },
  },
  {
    name: "Iterator",
    type: "Behavioral",
    problem: {
      en: "Student traversal is coupled to collection structure.",
      vi: "Việc duyệt học sinh bị phụ thuộc vào cấu trúc lưu trữ.",
    },
    solution: {
      en: "Use StudentCollection and StudentIterator with hasNext and next.",
      vi: "Dùng StudentCollection và StudentIterator với hasNext, next.",
    },
    benefit: {
      en: "Separates traversal logic from storage details.",
      vi: "Tách logic duyệt khỏi chi tiết lưu trữ.",
    },
  },
  {
    name: "Command",
    type: "Behavioral",
    problem: {
      en: "Payment and export actions are handled directly in controllers.",
      vi: "Thanh toán và xuất file bị xử lý trực tiếp trong controller.",
    },
    solution: {
      en: "Encapsulate operations as AddPaymentCommand, ExportFileCommand, and StatisticsCommand.",
      vi: "Đóng gói thao tác thành AddPaymentCommand, ExportFileCommand và StatisticsCommand.",
    },
    benefit: {
      en: "Supports history, undo/redo, and cleaner action orchestration.",
      vi: "Hỗ trợ lịch sử thao tác, undo/redo và tổ chức hành động rõ hơn.",
    },
  },
  {
    name: "Strategy",
    type: "Behavioral",
    problem: {
      en: "Violation handling differs by severity but should stay replaceable.",
      vi: "Xử lý vi phạm thay đổi theo mức độ nhưng cần dễ thay thế.",
    },
    solution: {
      en: "Use Minor, Moderate, and Severe violation strategies.",
      vi: "Dùng Minor, Moderate và Severe violation strategies.",
    },
    benefit: {
      en: "Changes behavior at runtime and keeps each rule focused.",
      vi: "Có thể đổi chiến lược runtime và giữ từng luật xử lý tập trung.",
    },
  },
  {
    name: "Chain of Responsibility",
    type: "Behavioral",
    problem: {
      en: "Login validation in one function becomes hard to extend.",
      vi: "Xác thực đăng nhập trong một hàm lớn rất khó mở rộng.",
    },
    solution: {
      en: "Split authentication into username, password, and role handlers.",
      vi: "Tách xác thực thành UsernameHandler, PasswordHandler và RoleHandler.",
    },
    benefit: {
      en: "Allows captcha, 2FA, or new checks to be inserted cleanly.",
      vi: "Dễ thêm captcha, 2FA hoặc bước kiểm tra mới.",
    },
  },
  {
    name: "Template Method",
    type: "Behavioral",
    problem: {
      en: "Report workflows repeat validation, fetching, and processing steps.",
      vi: "Các loại báo cáo lặp lại bước validate, lấy dữ liệu và xử lý.",
    },
    solution: {
      en: "Define the shared report algorithm in ReportTemplate.",
      vi: "Định nghĩa khung xử lý chung trong ReportTemplate.",
    },
    benefit: {
      en: "Standardizes report generation and reduces duplication.",
      vi: "Chuẩn hóa tạo báo cáo và giảm trùng lặp code.",
    },
  },
];

const structure = [
  "controller: BoardOfDirectorsController, TeacherController, SupervisorController, TuitionController",
  "service/facade: StudentStatisticsFacade",
  "service/command: AddPaymentCommand, ExportFileCommand",
  "service/strategy: MinorViolationStrategy, SevereViolationStrategy",
  "model: Student, SchoolRecord, Grade, TuitionFee",
  "pattern: singleton, factory, builder, observer, proxy, iterator, state, decorator, chain, template",
  "repository: StudentRepository, GradeRepository, AccountRepository",
  "resources: application.properties",
];

const runCommands = [
  "Java 17+",
  "Maven or Gradle",
  "MySQL 8.0+",
  "spring.datasource.url=jdbc:mysql://localhost:3306/student_management",
  "./gradlew bootRun",
  "mvn spring-boot:run",
];

const migrationNotes = {
  en: [
    "Spring Boot made MVC, dependency injection, annotations, and service boundaries clearer than the previous PHP/CodeIgniter version.",
    "Gradle/Maven improved dependency management and made CI/CD integration easier.",
    "The migration required converting models, DTOs, services, database configuration, and session/authentication flows.",
    "Java offers better multithreading for many users, but needs more memory tuning than PHP.",
  ],
  vi: [
    "Spring Boot giúp MVC, dependency injection, annotation và ranh giới service rõ hơn bản PHP/CodeIgniter cũ.",
    "Gradle/Maven giúp quản lý phụ thuộc hiện đại và thuận tiện hơn cho CI/CD.",
    "Quá trình chuyển đổi cần viết lại model, DTO, service, cấu hình database và luồng session/authentication.",
    "Java hỗ trợ đa luồng tốt cho nhiều người dùng, nhưng cần chú ý tối ưu bộ nhớ hơn PHP.",
  ],
};

const references = [
  ["Refactoring Guru", "https://refactoring.guru/"],
  ["Dive Into Design Patterns - A. Shvets", "https://refactoring.guru/design-patterns/book"],
  ["Spring Boot Documentation", "https://spring.io/projects/spring-boot"],
];

export const metadata: Metadata = {
  title: "Student Management System BE | Portfolio",
  description:
    "Spring Boot backend project for a student management system using MVC, MySQL, JPA/Hibernate, and 13 design patterns.",
};

function normalizeLang(lang?: string): Language {
  return lang === "vi" ? "vi" : "en";
}

export default async function StudentManagementSystemBePage({
  searchParams,
}: PageProps) {
  const query = await searchParams;
  const lang = normalizeLang(query.lang);
  const content = CONTENT[lang];
  const heroFigure = PROJECT.figures[0];

  return (
    <main className="min-h-dvh bg-background text-foreground">
      <ProjectDetailHeader initialLang={lang} />
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 py-8 pt-28 md:px-10 lg:px-12">
        <header className="flex items-center justify-between gap-4">
          <Button asChild variant="ghost" className="h-10 px-3">
            <Link href={`/?lang=${lang}#projects`}>
              <ArrowLeft size={18} />
              <span className="text-sm">{content.back}</span>
            </Link>
          </Button>
          <Badge className="rounded-md bg-primary px-3 py-3 text-sm text-primary-foreground">
            {PROJECT.period}
          </Badge>
        </header>

        <section className="grid gap-8 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-sm font-semibold tracking-[0.18em] text-primary uppercase">
                {content.eyebrow}
              </p>
              <h1 className="text-4xl leading-tight font-bold md:text-6xl">
                {PROJECT.title}
              </h1>
              <p className="text-lg leading-8 font-semibold text-primary/85">
                {PROJECT.subtitle[lang]}
              </p>
              <p className="max-w-2xl text-base leading-8 text-foreground/75 md:text-lg">
                {content.overview}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {PROJECT.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="h-8 rounded-md border border-primary/15 bg-primary/5 px-3 text-primary"
                >
                  {tag}
                </Badge>
              ))}
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <SummaryTile
                icon={<Database size={18} />}
                label={content.roleLabel}
                value={content.role}
              />
              <SummaryTile
                icon={<Layers3 size={18} />}
                label={content.highlightLabel}
                value={content.highlight}
              />
            </div>

            <div className="flex flex-wrap gap-3">
              <Button asChild className="h-11 px-5">
                <a href={PROJECT.githubUrl} target="_blank" rel="noreferrer">
                  <Github size={18} />
                  {content.codeLabel}
                </a>
              </Button>
              <Button asChild variant="outline" className="h-11 px-5">
                <a href={DRIVE_URL} target="_blank" rel="noreferrer">
                  <ExternalLink size={18} />
                  {content.driveLabel}
                </a>
              </Button>
              <Button asChild variant="secondary" className="h-11 px-5">
                <a href={REPORT_URL} target="_blank" rel="noreferrer">
                  <FileText size={18} />
                  {content.reportLabel}
                </a>
              </Button>
            </div>
          </div>

          <ProjectFigure figure={heroFigure} caption={heroFigure.caption[lang]} />
        </section>

        <Section title={content.courseTitle} icon={<BookOpen size={20} />}>
          <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
            <KeyValueGrid items={localizeCourseFacts(lang)} />
            <DataTable
              headers={lang === "vi" ? ["MSSV", "Họ và tên"] : ["Student ID", "Name"]}
              rows={team}
            />
          </div>
        </Section>

        <Section title={content.overviewTitle} icon={<GraduationCap size={20} />}>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <FeatureTile key={feature.en} icon={feature.icon}>
                {feature[lang]}
              </FeatureTile>
            ))}
          </div>
        </Section>

        <Section title={content.architectureTitle} icon={<Layers3 size={20} />}>
          <div className="grid gap-5 lg:grid-cols-[1fr_0.95fr]">
            <ProjectFigure
              figure={PROJECT.figures[0]}
              caption={PROJECT.figures[0].caption[lang]}
            />
            <div className="grid gap-3">
              {architectureLayers.map(([layer, description]) => (
                <InfoPanel key={layer} title={layer}>
                  <p className="text-sm leading-7 text-foreground/75">
                    {description}
                  </p>
                </InfoPanel>
              ))}
            </div>
          </div>
        </Section>

        <Section title={content.patternsTitle} icon={<Route size={20} />}>
          <div className="grid gap-4">
            {["Creational", "Structural", "Behavioral"].map((type) => (
              <PatternGroup
                key={type}
                type={type}
                patterns={patterns.filter((pattern) => pattern.type === type)}
                lang={lang}
              />
            ))}
          </div>
        </Section>

        <Section title={content.structureTitle} icon={<FileText size={20} />}>
          <div className="grid gap-3 md:grid-cols-2">
            {structure.map((item) => (
              <div key={item} className="rounded-xl border border-border bg-card p-4">
                <code className="text-sm leading-6">{item}</code>
              </div>
            ))}
          </div>
        </Section>

        <Section title={content.runTitle} icon={<Terminal size={20} />}>
          <CommandBlock commands={runCommands} />
        </Section>

        <Section title={content.migrationTitle} icon={<ListChecks size={20} />}>
          <ul className="grid gap-3 md:grid-cols-2">
            {migrationNotes[lang].map((note) => (
              <li
                key={note}
                className="flex gap-3 rounded-xl border border-border bg-card p-4 text-sm leading-7 text-foreground/75"
              >
                <CheckCircle2 className="mt-1 size-4 shrink-0 text-teal-600" />
                <span>{note}</span>
              </li>
            ))}
          </ul>
        </Section>

        <Section title={content.documentsTitle} icon={<FileText size={20} />}>
          <div className="grid gap-4 md:grid-cols-3">
            <DocumentLink
              href="/projects/student-manage-be/README.md"
              title="README.md"
              description={
                lang === "vi"
                  ? "Tài liệu tổng quan về hệ thống, kiến trúc, 13 patterns và cách chạy."
                  : "Overview of the system, architecture, 13 patterns, and setup steps."
              }
            />
            <DocumentLink
              href={REPORT_URL}
              title={lang === "vi" ? "Báo cáo đồ án DOCX" : "Project Report DOCX"}
              description={
                lang === "vi"
                  ? "File báo cáo môn Mẫu thiết kế của Nhóm 6.1."
                  : "Design Patterns course report by Group 6.1."
              }
            />
            <DocumentLink
              href={DRIVE_URL}
              title={lang === "vi" ? "Thư mục Google Drive" : "Google Drive Folder"}
              description={
                lang === "vi"
                  ? "Folder chứa tài liệu và các file liên quan của project."
                  : "Shared folder containing project documents and supporting files."
              }
              external
            />
          </div>
        </Section>

        <Section title={content.diagramsTitle} icon={<Route size={20} />}>
          <div className="grid gap-5 md:grid-cols-2">
            {PROJECT.figures.map((figure) => (
              <ProjectFigure
                key={figure.src}
                figure={figure}
                caption={figure.caption[lang]}
              />
            ))}
          </div>
        </Section>

        <Section title={content.referencesTitle} icon={<BookOpen size={20} />}>
          <div className="grid gap-3 md:grid-cols-3">
            {references.map(([title, href]) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-border bg-card p-4 text-sm font-semibold text-primary transition hover:border-primary/45 hover:shadow-sm"
              >
                {title}
              </a>
            ))}
          </div>
        </Section>
      </div>
    </main>
  );
}

function localizeCourseFacts(lang: Language) {
  if (lang === "en") {
    return courseFacts;
  }

  return [
    ["Môn học", "Mẫu thiết kế"],
    ["Nhóm", "Nhóm 6.1"],
    ["Trường", "Trường Đại học Công nghệ Thông tin, ĐHQG-HCM"],
    ["GVHD", "ThS. Lê Thanh Trọng"],
  ];
}

function Section({
  title,
  icon,
  children,
}: {
  title: string;
  icon: ReactNode;
  children: ReactNode;
}) {
  return (
    <section className="space-y-5">
      <div className="flex items-center gap-3 text-primary">
        {icon}
        <h2 className="text-2xl font-bold text-foreground">{title}</h2>
      </div>
      {children}
    </section>
  );
}

function SummaryTile({
  icon,
  label,
  value,
}: {
  icon: ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-lg border border-border bg-card p-4">
      <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-primary">
        {icon}
        {label}
      </div>
      <p className="text-sm font-semibold text-foreground">{value}</p>
    </div>
  );
}

function FeatureTile({
  icon,
  children,
}: {
  icon: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="flex gap-3 rounded-xl border border-border bg-card p-4">
      <span className="mt-0.5 text-primary">{icon}</span>
      <p className="text-sm leading-7 text-foreground/75">{children}</p>
    </div>
  );
}

function InfoPanel({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="rounded-xl border border-border bg-card p-4">
      <h3 className="mb-2 text-sm font-bold text-primary">{title}</h3>
      {children}
    </section>
  );
}

function PatternGroup({
  type,
  patterns,
  lang,
}: {
  type: string;
  patterns: Pattern[];
  lang: Language;
}) {
  return (
    <article className="rounded-xl border border-border bg-card p-5">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <h3 className="text-lg font-bold text-primary">{type}</h3>
        <Badge variant="secondary" className="rounded-md">
          {patterns.length} patterns
        </Badge>
      </div>
      <div className="grid gap-3 lg:grid-cols-2">
        {patterns.map((pattern) => (
          <div key={pattern.name} className="rounded-lg border border-border p-4">
            <h4 className="text-base font-bold">{pattern.name}</h4>
            <dl className="mt-3 space-y-2 text-sm leading-6 text-foreground/72">
              <div>
                <dt className="font-semibold text-foreground">
                  {lang === "vi" ? "Vấn đề" : "Problem"}
                </dt>
                <dd>{pattern.problem[lang]}</dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">
                  {lang === "vi" ? "Giải pháp" : "Solution"}
                </dt>
                <dd>{pattern.solution[lang]}</dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">
                  {lang === "vi" ? "Lợi ích" : "Benefit"}
                </dt>
                <dd>{pattern.benefit[lang]}</dd>
              </div>
            </dl>
          </div>
        ))}
      </div>
    </article>
  );
}

function KeyValueGrid({ items }: { items: string[][] }) {
  return (
    <div className="grid gap-3">
      {items.map(([label, value]) => (
        <div key={label} className="rounded-xl border border-border bg-card p-4">
          <p className="text-sm font-bold text-primary">{label}</p>
          <p className="mt-2 text-sm leading-6 text-foreground/75">{value}</p>
        </div>
      ))}
    </div>
  );
}

function DataTable({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-border bg-card">
      <table className="w-full min-w-md border-collapse text-sm">
        <thead className="bg-primary/8 text-primary">
          <tr>
            {headers.map((header) => (
              <th key={header} className="border-r border-border px-4 py-3 text-left font-bold last:border-r-0">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.join("-")} className="border-t border-border">
              {row.map((cell, index) => (
                <td
                  key={`${cell}-${index}`}
                  className="border-r border-border px-4 py-3 leading-6 text-foreground/75 last:border-r-0"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function CommandBlock({ commands }: { commands: string[] }) {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-card">
      {commands.map((command) => (
        <code
          key={command}
          className="block border-b border-border px-4 py-3 text-sm leading-6 last:border-b-0"
        >
          {command}
        </code>
      ))}
    </div>
  );
}

function DocumentLink({
  href,
  title,
  description,
  external,
}: {
  href: string;
  title: string;
  description: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group rounded-xl border border-border bg-card p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-primary/45 hover:shadow-md"
    >
      <div className="mb-4 flex items-center justify-between gap-3 text-primary">
        <span className="flex size-10 items-center justify-center rounded-lg bg-primary/10">
          {external ? <ExternalLink size={20} /> : <FileText size={20} />}
        </span>
        <Users
          size={18}
          className="text-foreground/35 transition group-hover:text-primary"
        />
      </div>
      <h3 className="mb-2 text-base font-bold">{title}</h3>
      <p className="text-sm leading-6 text-foreground/70">{description}</p>
    </a>
  );
}

function ProjectFigure({
  figure,
  caption,
}: {
  figure: Figure;
  caption: string;
}) {
  return (
    <figure className="mx-auto w-full max-w-xl overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
      <Image
        src={figure.src}
        alt={figure.alt}
        width={1360}
        height={900}
        className="h-auto w-full object-contain"
      />
      <figcaption className="border-t border-border px-5 py-4 text-sm font-medium text-foreground/70">
        {caption}
      </figcaption>
    </figure>
  );
}
