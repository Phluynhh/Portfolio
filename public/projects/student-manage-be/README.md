# 📚 Hệ Thống Quản Lý Học Sinh — Vận Dụng Mẫu Thiết Kế

> **Đồ án môn Mẫu Thiết Kế** — Nhóm 6.1  
> Trường Đại học Công nghệ Thông tin, ĐHQG-HCM  
> GVHD: ThS. Lê Thanh Trọng

---

## 👥 Thành Viên Nhóm

| MSSV | Họ và Tên |
|------|-----------|
| 22520560 | Nguyễn Khánh Huy |
| 22520616 | Ngô Hoàng Khang |
| 22520778 | Trần Đình Phương Linh |
| 22520857 | Đặng Thị Ngọc Minh |

---

## 🏫 Giới Thiệu Hệ Thống

Hệ thống **Quản lý Học sinh** là phần mềm hỗ trợ các trường học quản lý và theo dõi thông tin học sinh một cách hiệu quả. Hệ thống được tái cấu trúc từ nền tảng PHP/CodeIgniter sang **Java Spring Boot**, đồng thời áp dụng **13 mẫu thiết kế (Design Patterns)** để cải thiện chất lượng mã nguồn.

### Chức Năng Chính

- 🔐 Đăng nhập & xác thực theo vai trò
- 📊 Thống kê học sinh, học lực và hạnh kiểm
- 👨‍🎓 Quản lý học sinh, công nhân viên, lớp học
- 📝 Đánh giá & nhập điểm
- 📋 Xem kết quả học tập, học phí và hạnh kiểm
- ⚠️ Quản lý hạnh kiểm & vi phạm
- 💰 Quản lý học phí & thanh toán

---

## 🏗️ Kiến Trúc Hệ Thống

### Stack Công Nghệ

| Tầng | Công nghệ |
|------|-----------|
| **Frontend** | React / Next.js |
| **Backend** | Java Spring Boot (MVC) |
| **Database** | MySQL |
| **Build Tool** | Gradle / Maven |

### Mô Hình MVC

```
┌──────────────────────────────────────────┐
│                 CLIENT                   │
│           (React / Next.js)              │
└─────────────────┬────────────────────────┘
                  │ HTTP Request
┌─────────────────▼────────────────────────┐
│              CONTROLLER                  │
│   BoardOfDirectorsController             │
│   TeacherController                      │
│   SupervisorController                   │
│   TuitionController                      │
└────────┬──────────────────┬──────────────┘
         │                  │
┌────────▼──────┐   ┌───────▼──────────────┐
│    SERVICE    │   │        MODEL         │
│  (Facade,     │   │  (Student, Grade,    │
│  Command,     │   │  SchoolRecord,       │
│  Strategy...) │   │  TuitionFee...)      │
└────────┬──────┘   └───────┬──────────────┘
         │                  │
┌────────▼──────────────────▼──────────────┐
│              REPOSITORY                  │
│        (JPA / Hibernate ORM)             │
└─────────────────┬────────────────────────┘
                  │
┌─────────────────▼────────────────────────┐
│               DATABASE                   │
│                MySQL                     │
└──────────────────────────────────────────┘
```

---

## 🎨 13 Mẫu Thiết Kế Được Áp Dụng

### Phân Loại

```
Creational (Khởi tạo)          Structural (Cấu trúc)       Behavioral (Hành vi)
─────────────────────          ──────────────────────       ────────────────────
✅ Singleton                   ✅ Facade                    ✅ Observer
✅ Factory Method              ✅ Proxy                     ✅ State
✅ Builder                     ✅ Decorator                 ✅ Iterator
                                                            ✅ Command
                                                            ✅ Strategy
                                                            ✅ Chain of Responsibility
                                                            ✅ Template Method
```

---

## 🔍 Chi Tiết Từng Mẫu Thiết Kế

### 1. 🟦 Singleton
**Vấn đề:** Các model được khởi tạo lại nhiều lần ở nhiều controller, gây lãng phí tài nguyên.  
**Giải pháp:** Đảm bảo các service dùng chung (logger, cấu hình hệ thống) chỉ khởi tạo **một lần duy nhất**.

```
DatabaseConnection ──► getInstance() ──► [Dùng chung toàn hệ thống]
SystemConfig      ──► getInstance()
Logger            ──► getInstance()
```

**Lợi ích:** Tiết kiệm tài nguyên, đảm bảo tính nhất quán dữ liệu.

---

### 2. 🏭 Factory Method
**Vấn đề:** Tạo đối tượng thông báo (Notification) với loại khác nhau rải rác trong code.  
**Giải pháp:** Định nghĩa interface tạo đối tượng, để subclass quyết định lớp cụ thể.

```
NotificationFactory (abstract)
    ├── EmailNotificationFactory  ──► EmailNotification
    ├── SMSNotificationFactory    ──► SMSNotification
    └── SystemNotificationFactory ──► SystemNotification
```

**Lợi ích:** Dễ thêm loại thông báo mới mà không sửa code cũ.

---

### 3. 🏗️ Builder
**Vấn đề:** Tạo đối tượng `SchoolRecord` (học bạ) với nhiều tham số trong controller, dễ gây lỗi.  
**Giải pháp:** Xây dựng `SchoolRecord` theo từng bước thông qua `SchoolRecordBuilder`.

```
SchoolRecordBuilder
    .setStudent(student)
    .setSemester(semester)
    .setGrades(grades)
    .setBehavior(behavior)
    .build()  ──► SchoolRecord
```

**Lợi ích:** Mã nguồn rõ ràng, dễ mở rộng, giảm lỗi khi tạo đối tượng phức tạp.

---

### 4. 👀 Observer
**Vấn đề:** Thông báo sự kiện (cập nhật điểm, thay đổi trạng thái) chưa được tổ chức hợp lý.  
**Giải pháp:** Mở rộng Observer Pattern cho nhiều sự kiện, tự động gửi thông báo email.

```
GradeSubject (Observable)
    ├── notifyObservers()
    │
    ├── EmailObserver        ──► gửi email học sinh
    ├── SMSObserver          ──► gửi SMS phụ huynh
    └── SystemLogObserver    ──► ghi log hệ thống
```

**Lợi ích:** Tách biệt nguồn sự kiện và người nhận, dễ thêm observer mới.

---

### 5. 🎭 Facade
**Vấn đề:** `BoardOfDirectorsController` gọi quá nhiều model/service, code phức tạp, khó bảo trì.  
**Giải pháp:** Gom nhóm thao tác thành lớp giao diện đơn `StudentStatisticsFacade`.

```
Client ──► StudentStatisticsFacade
               ├── StudentService
               ├── GradeService
               ├── BehaviorService
               └── TuitionService
```

**Lợi ích:** Controller đơn giản hóa, tách biệt logic nghiệp vụ phức tạp.

---

### 6. 🔄 State
**Vấn đề:** Xử lý trạng thái học sinh (Đang học, Bảo lưu, Tốt nghiệp...) không đồng nhất.  
**Giải pháp:** Chuẩn hóa chuyển trạng thái qua State Pattern.

```
StudentContext
    ├── EnrolledState     ──► (chuyển → SuspendedState, GraduatedState)
    ├── SuspendedState    ──► (chuyển → EnrolledState, ExpelledState)
    ├── GraduatedState    ──► [terminal]
    └── ExpelledState     ──► [terminal]
```

**Lợi ích:** Hệ thống linh hoạt, dễ thêm trạng thái mới, không có if-else lồng nhau.

---

### 7. 🛡️ Proxy
**Vấn đề:** Kiểm soát truy cập tài nguyên (học bạ, báo cáo) chưa đồng đều theo vai trò.  
**Giải pháp:** Proxy kiểm soát truy cập dựa trên vai trò người dùng.

```
Client ──► ResourceProxy (kiểm tra quyền)
               ├── [ADMIN]    ──► SchoolRecordReal (full access)
               ├── [TEACHER]  ──► GradeResource (read/write)
               ├── [STUDENT]  ──► GradeResource (read only)
               └── [DENIED]   ──► AccessDeniedException
```

**Lợi ích:** Bảo mật tập trung, dễ mở rộng quyền truy cập.

---

### 8. 🔁 Iterator
**Vấn đề:** Duyệt danh sách học sinh bằng `foreach` trực tiếp, gắn chặt vào cấu trúc dữ liệu.  
**Giải pháp:** Dùng `Iterator Pattern` để duyệt `StudentCollection`.

```
StudentCollection
    └── iterator() ──► StudentIterator
                           ├── hasNext()
                           └── next() ──► Student
```

**Lợi ích:** Tách biệt việc duyệt và cấu trúc lưu trữ, dễ thay đổi cấu trúc dữ liệu.

---

### 9. ⚡ Command
**Vấn đề:** Các thao tác thanh toán được xử lý trực tiếp trong controller, khó mở rộng.  
**Giải pháp:** Đóng gói thao tác thành các Command, hỗ trợ undo/redo.

```
CommandInvoker (TuitionController)
    ├── AddPaymentCommand    ──► execute() / undo()
    ├── ExportFileCommand    ──► execute() / undo()
    └── StatisticsCommand    ──► execute()
```

**Lợi ích:** Hỗ trợ undo/redo, dễ tổ chức và bảo trì, lịch sử thao tác.

---

### 10. 🎯 Strategy
**Vấn đề:** Xử lý vi phạm học sinh được viết cố định theo mức độ, khó thay đổi.  
**Giải pháp:** Tách riêng logic xử lý từng mức độ vi phạm.

```
ViolationContext
    ├── MinorViolationStrategy   ──► cảnh cáo miệng
    ├── ModerateViolationStrategy ──► hạ hạnh kiểm
    └── SevereViolationStrategy  ──► đình chỉ học
```

**Lợi ích:** Dễ mở rộng, thay đổi chiến lược runtime, tái sử dụng cao.

---

### 11. 🎀 Decorator
**Vấn đề:** Chức năng gửi email khi thêm nhận xét nằm trực tiếp trong `BasicEvaluationProcessor`.  
**Giải pháp:** Bọc chức năng gửi email trong `NotificationDecorator`.

```
EvaluationComponent (interface)
    └── BasicEvaluationProcessor (ConcreteComponent)
            └── NotificationDecorator (wraps)
                    ├── addComment()      [original]
                    └── sendEmailAlert()  [extended]
```

**Lợi ích:** Mở rộng chức năng mà không thay đổi lớp gốc, có thể chồng decorator.

---

### 12. ⛓️ Chain of Responsibility (CoR)
**Vấn đề:** Toàn bộ xác thực đăng nhập nằm trong một hàm, rối rắm và khó mở rộng.  
**Giải pháp:** Mỗi bước xác thực là một handler độc lập.

```
LoginRequest ──► UsernameHandler ──► PasswordHandler ──► RoleHandler
                     │                    │                   │
                 [fail: stop]        [fail: stop]        [success: login]
```

**Lợi ích:** Dễ thêm/xóa handler (captcha, 2FA), mỗi handler có trách nhiệm rõ ràng.

---

### 13. 📄 Template Method
**Vấn đề:** Mỗi loại báo cáo tự viết quy trình xử lý, nhiều code lặp lại.  
**Giải pháp:** Định nghĩa khung xử lý chung trong abstract class, subclass tùy biến các bước.

```
ReportTemplate (abstract)
    └── generateReport()
            ├── validateParams()   [abstract]
            ├── fetchData()        [abstract]
            └── processData()      [abstract]
                    ▲               ▲
        TeacherGradeReport    SupervisorBehaviorReport
```

**Lợi ích:** Chuẩn hóa quy trình, tránh lặp code, dễ thêm loại báo cáo mới.

---

## 📦 Cấu Trúc Dự Án

```
src/
├── main/
│   ├── java/
│   │   └── com/studentmanagement/
│   │       ├── controller/
│   │       │   ├── BoardOfDirectorsController.java
│   │       │   ├── TeacherController.java
│   │       │   ├── SupervisorController.java
│   │       │   └── TuitionController.java
│   │       ├── service/
│   │       │   ├── facade/
│   │       │   │   └── StudentStatisticsFacade.java
│   │       │   ├── command/
│   │       │   │   ├── AddPaymentCommand.java
│   │       │   │   └── ExportFileCommand.java
│   │       │   └── strategy/
│   │       │       ├── MinorViolationStrategy.java
│   │       │       └── SevereViolationStrategy.java
│   │       ├── model/
│   │       │   ├── Student.java
│   │       │   ├── SchoolRecord.java
│   │       │   ├── Grade.java
│   │       │   └── TuitionFee.java
│   │       ├── pattern/
│   │       │   ├── singleton/
│   │       │   │   └── SystemConfig.java
│   │       │   ├── factory/
│   │       │   │   └── NotificationFactory.java
│   │       │   ├── builder/
│   │       │   │   └── SchoolRecordBuilder.java
│   │       │   ├── observer/
│   │       │   │   └── GradeSubject.java
│   │       │   ├── proxy/
│   │       │   │   └── ResourceProxy.java
│   │       │   ├── iterator/
│   │       │   │   └── StudentIterator.java
│   │       │   ├── state/
│   │       │   │   └── StudentContext.java
│   │       │   ├── decorator/
│   │       │   │   └── NotificationDecorator.java
│   │       │   ├── chain/
│   │       │   │   └── AuthenticationHandler.java
│   │       │   └── template/
│   │       │       └── ReportTemplate.java
│   │       └── repository/
│   │           ├── StudentRepository.java
│   │           ├── GradeRepository.java
│   │           └── AccountRepository.java
│   └── resources/
│       └── application.properties
└── test/
    └── java/
        └── com/studentmanagement/
```

---

## 🚀 Hướng Dẫn Chạy Dự Án

### Yêu Cầu Hệ Thống
- Java 17+
- Maven hoặc Gradle
- MySQL 8.0+
- Node.js 18+ (cho frontend)

### Backend (Spring Boot)
```bash
# Clone project
git clone <repository-url>
cd student-management-backend

# Cấu hình database trong application.properties
spring.datasource.url=jdbc:mysql://localhost:3306/student_management
spring.datasource.username=your_username
spring.datasource.password=your_password

# Build & Run
./gradlew bootRun
# hoặc
mvn spring-boot:run
```

### Frontend (React)
```bash
cd student-management-frontend
npm install
npm run dev
```

---

## 🛠️ Thuận Lợi & Khó Khăn Khi Chuyển Đổi

### ✅ Thuận Lợi
- **Kiến trúc rõ ràng hơn**: Spring Boot hỗ trợ MVC, DI, annotation rõ ràng
- **Quản lý phụ thuộc hiện đại**: Gradle/Maven tích hợp CI/CD dễ dàng
- **Hiệu năng cao**: Java hỗ trợ đa luồng tốt cho nhiều người dùng
- **Áp dụng Design Pattern**: Dễ dàng và tự nhiên hơn trong Java
- **Cộng đồng lớn**: Spring Boot có tài liệu và thư viện phong phú

### ⚠️ Khó Khăn
- **Cấu hình phức tạp**: Cần thiết lập JDK, IDE, database, file properties
- **Chuyển đổi dữ liệu**: Toàn bộ model, DTO, service từ PHP sang Java
- **Quản lý session khác biệt**: Luồng xác thực và lưu trạng thái khác PHP
- **Tiêu tốn bộ nhớ**: Java dùng nhiều RAM hơn PHP, cần tối ưu
- **Học lại frontend**: React/Next.js khác biệt hoàn toàn với PHP truyền thống

---

## 📖 Tài Liệu Tham Khảo

1. [Refactoring Guru](https://refactoring.guru/) — Design Patterns reference
2. A. Shvets, *Dive Into Design Patterns*, Independently Published, 2019
3. Spring Boot Documentation — https://spring.io/projects/spring-boot

---

## 📜 Giấy Phép

Đây là dự án học thuật phục vụ mục đích giáo dục tại Trường Đại học Công nghệ Thông tin, ĐHQG-HCM.

---

*Nhóm 6.1 — Môn Mẫu Thiết Kế — Tháng 6 năm 2025*
