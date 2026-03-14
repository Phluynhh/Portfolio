import React from "react";
import Image from "next/image";
import { Database, Code, Star } from "lucide-react";

export default function Decorations() {
  return (
    <div className="w-full h-140 flex items-center justify-center">
      <div className="relative w-70 h-70">
        {/* Staying square */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none heartbeat-glow">
          <div className="absolute w-[160%] h-[160%] rounded-[32px] bg-primary/30 blur-[70px]"></div>
          <div className="absolute w-[130%] h-[130%] rounded-[32px] bg-primary/35 blur-[55px]"></div>
          <div className="absolute w-[115%] h-[115%] rounded-[32px] bg-primary/40 blur-[45px]"></div>
          <div className="absolute w-full h-full rounded-[32px] bg-primary/45 blur-[35px]"></div>
        </div>
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <div className="relative h-60 w-60">
            <Image
              src="/avatar.png"
              alt="Avatar"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 160px, 180px"
              priority
            />
          </div>
        </div>
        {/* Rotating square */}
        <div className="absolute inset-0 border-[1.25] border-primary/50 rounded-2xl animate-spin animation-duration-[15s]"></div>
        {/* FE icon */}
        <div className="absolute -left-10 bottom-2 text-primary/45 icon-bounce">
          <Database size={44} strokeWidth={1.8} />
        </div>

        {/* BE icon */}
        <div className="absolute left-1/2 -translate-x-1/2 -top-18 text-primary/45 icon-bounce icon-bounce-delay-1">
          <Code size={44} strokeWidth={1.8} />
        </div>

        {/* AI icon */}
        <div className="absolute -right-12 bottom-1 text-primary/45 icon-bounce icon-bounce-delay-2">
          <Star size={44} strokeWidth={1.8} />
        </div>

        {/* FE card */}
        <div className="absolute -left-30 bottom-20 w-28 rounded-2xl bg-white/90 shadow-[0_8px_20px_rgba(0,0,0,0.12)] px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-primary"></div>
            <p className="text-sm font-semibold text-neutral-800">React</p>
          </div>
          <p className="mt-2 text-sm text-neutral-500">Frontend</p>
        </div>

        {/* BE card */}
        <div className="absolute -right-24 -top-8 w-32 rounded-2xl bg-white/90 shadow-[0_8px_20px_rgba(0,0,0,0.12)] px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-primary"></div>
            <p className="text-sm font-semibold text-neutral-800">Node.js</p>
          </div>
          <p className="mt-2 text-sm text-neutral-500">Backend</p>
        </div>

        {/* AI card */}
        <div className="absolute -right-4 -bottom-16 w-32 rounded-2xl bg-white/90 shadow-[0_8px_20px_rgba(0,0,0,0.12)] px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-primary"></div>
            <p className="text-sm font-semibold text-neutral-800">AI/LLM</p>
          </div>
          <p className="mt-2 text-sm text-neutral-500">Innovation</p>
        </div>
      </div>
    </div>
  );
}
