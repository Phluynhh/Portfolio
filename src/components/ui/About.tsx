import React from "react";
import { Separator } from "@/components/ui/separator";
import { Target, Zap, Heart } from "lucide-react";
import type { Language } from "../../lib/i18n";

interface AboutProps {
  lang: Language;
}

export default function About({ lang }: AboutProps) {
  const isVi = lang === "vi";

  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 py-8">
        <h1 className="text-5xl font-bold">
          {isVi ? "Giới thiệu" : "About me"}
        </h1>
        <Separator className="data-horizontal:h-1 w-1/12! rounded-full bg-primary" />
        <div className="mx-auto flex w-full flex-col justify-between gap-12 py-8 lg:flex-row">
          <div className="w-full lg:w-2/3">
            <p>
              {isVi
                ? "Mình là một lập trình viên đa năng, đam mê xây dựng các sản phẩm số đẹp mắt và có khả năng mở rộng. Với kinh nghiệm ở frontend, backend, fullstack và AI, mình luôn mang góc nhìn toàn diện cho mỗi dự án."
                : "I'm a versatile software developer with a passion for building beautiful, scalable digital products. With expertise spanning frontend, backend, fullstack, and AI engineering, I bring a unique perspective to every project."}
            </p>
            <p className="mt-4">
              {isVi
                ? "Hành trình công nghệ của mình bắt đầu từ sự tò mò về cách mọi thứ vận hành. Mình đã dành nhiều năm để làm chủ công nghệ web hiện đại, thiết kế hệ thống backend vững chắc và khám phá giao điểm giữa AI với phát triển sản phẩm."
                : "My journey in tech started with a fascination for how things work. I've spent years mastering modern web technologies, designing robust backend systems, and exploring the intersection of AI and product development."}
            </p>
            <p className="mt-4">
              {isVi
                ? "Điều thúc đẩy mình là cơ hội giải quyết vấn đề thực tế bằng code tinh gọn. Mình tin vào những giải pháp sạch, dễ bảo trì, không chỉ chạy được mà còn mang lại trải nghiệm tốt cho người dùng."
                : "What drives me is the opportunity to solve real problems with elegant code. I believe in writing clean, maintainable solutions that don't just work, they delight users and impress technical leaders."}
            </p>
            <p className="mt-4">
              {isVi
                ? "Mình có thể làm việc độc lập hoặc theo nhóm hiệu quả, đặc biệt phù hợp với môi trường tốc độ cao, nơi cần linh hoạt nhiều vai trò và liên tục học hỏi."
                : "I'm equally comfortable working independently or in teams, and I thrive in fast-paced environments where I can wear multiple hats and learn continuously."}
            </p>
          </div>
          <div className="w-full lg:w-1/3">
            <div className="border border-primary/20 rounded-2xl p-8 bg-sidebar">
              <p className="text-primary text-xl font-bold">
                {isVi ? "Triết lý" : "Philosophy"}
              </p>
              <p className="mt-4 italic text-sm">
                {isVi
                  ? '"Làm ra sản phẩm có chất lượng. Xây dựng để mở rộng. Tư duy như một product owner. Viết code như thể bạn sẽ bảo trì nó mãi mãi."'
                  : '"Ship with quality. Build for scale. Think like a product owner. Code like you\'ll maintain it forever."'}
              </p>
            </div>

            <div className="mt-4 flex items-center gap-4 rounded-2xl bg-sidebar p-4 transition-transform duration-200 ease-out hover:scale-[1.02]">
              <div className="rounded-lg bg-primary/20 p-2">
                <Target color="#246bf6" />
              </div>
              <div>
                <p className="text-sm font-semibold">
                  {isVi ? "Giải quyết vấn đề" : "Problem Solver"}
                </p>
                <p className="text-xs mt-1">
                  {isVi
                    ? "Mình tiếp cận mọi thách thức với tư duy rõ ràng và sáng tạo."
                    : "I approach every challenge with a clear head and creative mindset."}
                </p>
              </div>
            </div>

            <div className="mt-4 flex items-center gap-4 rounded-2xl bg-sidebar p-4 transition-transform duration-200 ease-out hover:scale-[1.02]">
              <div className="rounded-lg bg-primary/20 p-2">
                <Zap color="#246bf6" />
              </div>
              <div>
                <p className="text-sm font-semibold">
                  {isVi ? "Học nhanh" : "Quick Learner"}
                </p>
                <p className="text-xs mt-1">
                  {isVi
                    ? "Công nghệ và lĩnh vực mới là cơ hội thú vị, không phải rào cản."
                    : "New technologies and domains are exciting opportunities, not obstacles."}
                </p>
              </div>
            </div>

            <div className="mt-4 flex items-center gap-4 rounded-2xl bg-sidebar p-4 transition-transform duration-200 ease-out hover:scale-[1.02]">
              <div className="rounded-lg bg-primary/20 p-2">
                <Heart color="#246bf6" />
              </div>
              <div>
                <p className="text-sm font-semibold">
                  {isVi ? "Tận tâm" : "Passionate"}
                </p>
                <p className="text-xs mt-1">
                  {isVi
                    ? "Mình thực sự quan tâm đến việc tạo ra sản phẩm có giá trị và tạo tác động tích cực."
                    : "I genuinely care about building products that matter and make an impact."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
