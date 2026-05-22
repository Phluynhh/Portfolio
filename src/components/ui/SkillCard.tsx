import React from "react";
import Image from "next/image";

type SkillCardProps = {
  title: string;
  icon: React.ReactNode;
  skills: string[];
  accent: string;
};

const skillLogos: Record<string, string> = {
  HTML5: "/skills/html.png",
  CSS3: "/skills/css.svg",
  JavaScript: "/skills/javascript.svg",
  TypeScript: "/skills/typescript.svg",
  React: "/skills/react.svg",
  "Next.js": "/skills/next.js.svg",
  "Tailwind CSS": "/skills/tailwind-css.svg",
  "React Native": "/skills/react-native.svg",
  Python: "/skills/python.svg",
  "Node.js": "/skills/nodejs.svg",
  "REST API": "/skills/rest-api.svg",
  Authentication: "/skills/2fa.svg",
  WebSockets: "/skills/socket.svg",
  Java: "/skills/java-logo.svg",
  PHP: "/skills/php.svg",
  PostgreSQL: "/skills/postgresql-icon.svg",
  MySQL: "/skills/mysql-icon.svg",
  MongoDB: "/skills/mongodb-icon.svg",
  SQLServer: "/skills/sql-server.svg",
  Redis: "/skills/redis-icon.svg",
  Prisma: "/skills/prisma-svgrepo-com.svg",
  Docker: "/skills/docker-icon.svg",
  Postman: "/skills/postman-icon.svg",
  Figma: "/skills/figma-icon.svg",
  "VS Code": "/skills/visual-studio-code-icon.svg",
  "Git & GitHub": "/skills/git-icon.svg",
  Agile: "/skills/atlassian-jira-icon.svg",
  PyTorch: "/skills/pytorch-icon.svg",
  TensorFlow: "/skills/tensorflow-enterprise-svgrepo-com.svg",
  NumPy: "/skills/numpy-svgrepo-com.svg",
  Pandas: "/skills/pandas-svgrepo-com.svg",
  OpenAI: "/skills/chatgpt-icon.svg",
  "Hugging Face": "/skills/huggingface-icon.svg",
};

const skillInitials: Record<string, string> = {
  "REST API": "API",
  Authentication: "Auth",
  WebSockets: "WS",
  "REST API Integration": "API",
  "Authentication (JWT/OAuth)": "JWT",
  "CRUD Application": "CRUD",
  "State Management": "State",
  "Role-Based Access Control": "RBAC",
  "Image Retrieval": "IR",
  "RAG Chatbot": "RAG",
  "OpenAI API": "AI",
  "Vector Search": "Vec",
  "LLM Integration": "LLM",
  "Semantic Search": "Sem",
  "Git & GitHub": "Git",
  Agile: "Agile",
};

type SkillCardStyle = React.CSSProperties & {
  "--skill-accent": string;
};

export default function SkillCard({
  title,
  icon,
  skills,
  accent,
}: SkillCardProps) {
  return (
    <div
      className="skill-card"
      style={{ "--skill-accent": accent } as SkillCardStyle}
    >
      <div className="flex items-center gap-4">
        <div className="skill-card-heading-icon">{icon}</div>
        <p className="text-xl font-bold">{title}</p>
      </div>

      <div className="mt-5 grid grid-cols-3 gap-x-3 gap-y-5 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-3">
        {skills.map((skill) => {
          const logo = skillLogos[skill];
          const initials = skillInitials[skill] ?? skill.slice(0, 3);

          return (
            <figure key={skill} className="skill-item">
              <div className="skill-icon">
                {logo ? (
                  <Image
                    src={logo}
                    alt=""
                    width={36}
                    height={36}
                    className="h-9 w-9 object-contain"
                  />
                ) : (
                  <span className="skill-initials">
                    {initials}
                  </span>
                )}
              </div>
              <figcaption className="skill-label">{skill}</figcaption>
            </figure>
          );
        })}
      </div>
    </div>
  );
}
