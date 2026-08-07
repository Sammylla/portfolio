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

      <div className={`grid grid-cols-[auto_1fr] gap-x-3 gap-y-1 transition-opacity duration-500 ${isReady ? "opacity-100" : "opacity-0"}`} aria-hidden={!isReady}>
        <span>title:</span><p>{title.toLowerCase()}</p>
        <span>date:</span><p>{period}</p>
        <span>info:</span><p className="whitespace-pre-line text-white/90">{description}</p>
      </div>
    </div>
  );
}
