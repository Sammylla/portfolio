"use client";

import { useEffect, useState } from "react";

type TerminalDescriptionProps = {
  title: string;
  period: string;
  description: string;
};

export function TerminalDescription({ title, period, description }: TerminalDescriptionProps) {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsReady(true), 1200);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-[112px] w-[82vw] max-w-[780px] rounded-2xl border border-[#2f60ff]/80 bg-mainbg/90 px-5 py-4 text-xs leading-relaxed md:w-[60vw] md:px-7 md:text-sm">
      <p className={`absolute inset-x-5 top-4 text-white/70 transition-opacity duration-500 md:inset-x-7 ${isReady ? "opacity-0" : "opacity-100"}`}>
        starting shell...
      </p>

      <div className={`transition-opacity duration-500 ${isReady ? "opacity-100" : "opacity-0"}`} aria-hidden={!isReady}>
        <p><span className="text-[#2f60ff]">$</span> {title} / {period}</p>
        <p className="mt-2 text-white/80">{description}</p>
      </div>
    </div>
  );
}
