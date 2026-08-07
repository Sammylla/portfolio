"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import type { Work } from "@/data/works";

export function WorksCarousel({ works }: { works: Work[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStart = useRef<number | null>(null);

  const move = (direction: number) => {
    setActiveIndex((current) => (current + direction + works.length) % works.length);
  };

  const handleTouchEnd = (clientX: number) => {
    if (touchStart.current === null) return;
    const distance = clientX - touchStart.current;
    if (Math.abs(distance) > 40) move(distance > 0 ? -1 : 1);
    touchStart.current = null;
  };

  return (
    <div
      className="relative flex h-full w-full items-center overflow-hidden font-mono"
      onTouchStart={(event) => { touchStart.current = event.touches[0].clientX; }}
      onTouchEnd={(event) => handleTouchEnd(event.changedTouches[0].clientX)}
      aria-roledescription="carousel"
    >
      <div className="absolute left-[-8%] top-[19%] h-2 w-[116%] -rotate-[6deg] bg-[#2f60ff] md:left-[-5%] md:top-[21%] md:h-3 md:w-[110%]" aria-hidden="true" />
      <h2 className="absolute left-1/2 top-[14%] z-20 -translate-x-1/2 text-4xl font-bold uppercase md:top-[18%] md:text-5xl">Works</h2>

      <button className="absolute left-[2vw] top-[calc(27vh+26.667vw)] z-30 -translate-y-1/2 md:left-[7%] md:top-1/2" onClick={() => move(-1)} aria-label="前の作品">
        <Image src="/top/Group 16.png" alt="" width={95} height={105} className="h-auto w-9 sm:w-11 md:w-[76px]" />
      </button>
      <button className="absolute right-[2vw] top-[calc(27vh+26.667vw)] z-30 -translate-y-1/2 md:right-[7%] md:top-1/2" onClick={() => move(1)} aria-label="次の作品">
        <Image src="/top/Group 17.png" alt="" width={95} height={105} className="h-auto w-9 sm:w-11 md:w-[76px]" />
      </button>

      <div
        className="flex h-full w-full transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {works.map((work) => (
          <div className="flex w-full shrink-0 items-start justify-center px-[10vw] pt-[27vh] md:px-[22vw] md:pt-[32vh] lg:px-[25vw] lg:pt-[34vh]" key={work.slug}>
            <Link href={`/works/${work.slug}`} className="group w-full max-w-[760px]" aria-label={`${work.title}の詳細を見る`}>
              <div className="relative">
                <div
                  className="absolute -bottom-4 -right-4 left-5 top-3 bg-[linear-gradient(rgba(47,96,255,.9)_1px,transparent_1px),linear-gradient(90deg,rgba(47,96,255,.9)_1px,transparent_1px)] bg-[size:9px_9px] md:-bottom-7 md:-right-9 md:left-8 md:top-4 md:bg-[size:12px_12px]"
                  aria-hidden="true"
                />
                <div className="relative aspect-[3/2] overflow-hidden bg-mainbg">
                  <Image className="object-cover transition-transform duration-500 group-hover:scale-[1.02]" src={work.image} alt={work.title} fill sizes="(max-width: 767px) 80vw, (max-width: 1023px) 56vw, 50vw" />
                  <div className="absolute inset-0 bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <span className="absolute bottom-3 right-4 translate-y-2 text-sm text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 md:bottom-4 md:right-5 md:text-lg">
                    see more &gt;
                  </span>
                </div>
              </div>
              <h3 className="mt-9 text-center text-lg font-bold text-transparent [-webkit-text-stroke:1px_white] md:mt-14 md:text-2xl lg:mt-16 lg:text-3xl">{work.title}</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
