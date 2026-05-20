import React from "react";
import Image from "next/image";

type SkillCardProps = {
  title: string;
  icon: React.ReactNode;
  skills: string[];
  accent: string;
};

const iconBaseUrl = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";
const simpleIconBaseUrl =
  "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons";

const skillLogos: Record<string, string> = {
  HTML5: `${iconBaseUrl}/html5/html5-original.svg`,
  CSS3: `${iconBaseUrl}/css3/css3-original.svg`,
  JavaScript: `${iconBaseUrl}/javascript/javascript-original.svg`,
  TypeScript: `${iconBaseUrl}/typescript/typescript-original.svg`,
  React: `${iconBaseUrl}/react/react-original.svg`,
  "Next.js": `${iconBaseUrl}/nextjs/nextjs-original.svg`,
  "Tailwind CSS": `${iconBaseUrl}/tailwindcss/tailwindcss-original.svg`,
  "React Native": `${iconBaseUrl}/react/react-original.svg`,
  Python: `${iconBaseUrl}/python/python-original.svg`,
  "Node.js": `${iconBaseUrl}/nodejs/nodejs-original.svg`,
  "Express.js": `${iconBaseUrl}/express/express-original.svg`,
  "REST API": `${simpleIconBaseUrl}/swagger.svg`,
  Authentication: `${simpleIconBaseUrl}/auth0.svg`,
  WebSockets: `${simpleIconBaseUrl}/socketdotio.svg`,
  Java: `${iconBaseUrl}/java/java-original.svg`,
  PHP: `${iconBaseUrl}/php/php-original.svg`,
  PostgreSQL: `${iconBaseUrl}/postgresql/postgresql-original.svg`,
  MySQL: `${iconBaseUrl}/mysql/mysql-original.svg`,
  MongoDB: `${iconBaseUrl}/mongodb/mongodb-original.svg`,
  SQLServer: `${iconBaseUrl}/microsoftsqlserver/microsoftsqlserver-original.svg`,
  Redis: `${iconBaseUrl}/redis/redis-original.svg`,
  Prisma: `${iconBaseUrl}/prisma/prisma-original.svg`,
  Docker: `${iconBaseUrl}/docker/docker-original.svg`,
  Postman: `${iconBaseUrl}/postman/postman-original.svg`,
  Figma: `${iconBaseUrl}/figma/figma-original.svg`,
  "VS Code": `${iconBaseUrl}/vscode/vscode-original.svg`,
  "Git & GitHub": `${iconBaseUrl}/git/git-original.svg`,
  Agile: `${iconBaseUrl}/jira/jira-original.svg`,
  PyTorch: `${iconBaseUrl}/pytorch/pytorch-original.svg`,
  TensorFlow: `${iconBaseUrl}/tensorflow/tensorflow-original.svg`,
  NumPy: `${iconBaseUrl}/numpy/numpy-original.svg`,
  Pandas: `${iconBaseUrl}/pandas/pandas-original.svg`,
  OpenCV: `${iconBaseUrl}/opencv/opencv-original.svg`,
  "Scikit-learn": `${iconBaseUrl}/scikitlearn/scikitlearn-original.svg`,
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
                    unoptimized
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
