"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "關於", href: "/#about" },
  { label: "展會", href: "/#expos" },
  { label: "SEA Beauty", href: "/sea-beauty" },
  { label: "FABIA", href: "/fabia" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = pathname === "/";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm"
          : isHome
            ? "bg-transparent"
            : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-[1120px] mx-auto px-6 h-[72px] flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/images/orei-icon.svg"
            alt="OREI Expo"
            width={36}
            height={36}
            className="w-9 h-9"
          />
          <div className="flex flex-col">
            <span
              className={`text-[16px] font-bold tracking-[0.12em] leading-tight transition-colors duration-500 ${
                !scrolled && isHome ? "text-white" : "text-navy"
              }`}
            >
              OREI EXPO
            </span>
            <span
              className={`text-[12px] tracking-wide leading-tight transition-colors duration-500 ${
                !scrolled && isHome ? "text-white/60" : "text-muted"
              }`}
            >
              歐瑞會展
            </span>
          </div>
        </Link>

        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href.startsWith("/") &&
                !link.href.includes("#") &&
                pathname.startsWith(link.href) &&
                link.href !== "/");
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[15px] tracking-wide transition-colors duration-300 ${
                  isActive
                    ? !scrolled && isHome
                      ? "text-gold font-semibold"
                      : "text-navy font-semibold"
                    : !scrolled && isHome
                      ? "text-white/70 hover:text-white"
                      : "text-muted hover:text-navy"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className={`text-[15px] tracking-wide font-medium px-5 py-2.5 rounded-lg transition-all duration-300 ${
              !scrolled && isHome
                ? "bg-gold text-white hover:bg-gold-light"
                : "bg-navy text-white hover:opacity-85"
            }`}
          >
            立即報名
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className={`transition-colors duration-500 ${
              !scrolled && isHome ? "text-white" : "text-navy"
            }`}
          >
            {open ? (
              <path d="M4 4l12 12M16 4L4 16" />
            ) : (
              <path d="M3 6h14M3 10h14M3 14h14" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="md:hidden bg-white/95 backdrop-blur-md border-t border-border px-6 py-6 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block text-base text-navy py-2.5 hover:text-gold transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="block text-base bg-navy text-white text-center px-5 py-3 rounded-lg mt-4 font-medium"
          >
            立即報名
          </Link>
        </nav>
      )}
    </header>
  );
}
