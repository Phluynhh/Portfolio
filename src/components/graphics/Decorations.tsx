import React from "react";

export default function Decorations() {
  return (
    <div className="w-full h-140 flex items-center justify-center">
      <div className="relative w-70 h-70">
        {/* Staying square */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          style={{
            animation: "heartbeatGlow 3s ease-in-out infinite",
          }}
        >
          <div className="absolute w-[160%] h-[160%] rounded-[32px] bg-primary/30 blur-[70px]"></div>
          <div className="absolute w-[130%] h-[130%] rounded-[32px] bg-primary/35 blur-[55px]"></div>
          <div className="absolute w-[115%] h-[115%] rounded-[32px] bg-primary/40 blur-[45px]"></div>
          <div className="absolute w-full h-full rounded-[32px] bg-primary/45 blur-[35px]"></div>
        </div>

        <style>
          {`
@keyframes heartbeatGlow {
  0% {
    opacity: 0.5;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.5;
  }
}
`}
        </style>
        {/* Rotating square */}
        <div className="absolute inset-0 border-[1.25] border-primary/50 rounded-2xl animate-spin animation-duration-[15s]"></div>
      </div>
    </div>
  );
}
