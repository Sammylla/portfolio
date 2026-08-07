"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export function Header({ alwaysVisible = false }: { alwaysVisible?: boolean }) {
  const [isVisible, setIsVisible] = useState(alwaysVisible);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (alwaysVisible) {
      return;
    }

    const hero = document.querySelector("#hero");
    if (!hero) return;

    const updateHeader = () => {
      const shouldShow = window.scrollY >= 80;
      setIsVisible(shouldShow);
      if (!shouldShow) setIsMenuOpen(false);
    };

    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, [alwaysVisible]);

  const links = [
    ["Introduction", "/#introduction"],
    ["Works", "/#works"],
    ["Contact", "/#contact"],
  ];

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 flex h-[70px] items-center justify-between border-b-4 border-double border-black bg-[#2f60ff] px-4 font-mono text-white transition-opacity duration-500 md:px-5 ${
          isVisible ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!isVisible}
      >
        <Link href="/" className="text-base font-bold tracking-tight md:text-lg">@KOPPEPAN</Link>

        <nav className="hidden gap-7 text-xl md:flex" aria-label="メインナビゲーション">
          {links.map(([label, href]) => <Link href={href} key={label}>{label}</Link>)}
        </nav>

        <button
          type="button"
          className="border border-white px-3 py-2 text-xs font-bold md:hidden"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? "CLOSE" : "MENU"}
        </button>
      </header>

      <nav
        id="mobile-navigation"
        className={`fixed inset-x-0 top-[70px] z-40 border-b-4 border-double border-black bg-[#2f60ff] px-5 font-mono text-white transition-all duration-300 md:hidden ${
          isVisible && isMenuOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-3 opacity-0"
        }`}
        aria-label="モバイルナビゲーション"
      >
        {links.map(([label, href]) => (
          <Link className="block border-b border-white/25 py-4 text-lg last:border-0" href={href} key={label} onClick={() => setIsMenuOpen(false)}>
            {label}
          </Link>
        ))}
      </nav>
    </>
  );
}
