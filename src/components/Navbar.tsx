"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "關於", href: "/#about" },
  { label: "展會", href: "/#expos" },
  { label: "SEA Beauty", href: "/sea-beauty" },
  { label: "FABIA", href: "/fabia" },
  { label: "聯絡", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm">
      <div className="max-w-[1120px] mx-auto px-6 h-[72px] flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/orei-logo.png"
            alt="OREI Expo Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
          <div className="flex flex-col">
            <span className="text-[16px] font-bold tracking-[0.12em] text-navy leading-tight">
              OREI EXPO
            </span>
            <span className="text-[11px] text-muted tracking-wide leading-tight">歐瑞會展</span>
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
                className={`text-[14px] tracking-wide transition-colors ${
                  isActive
                    ? "text-navy font-semibold"
                    : "text-muted hover:text-navy"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="text-[14px] tracking-wide bg-navy text-white px-5 py-2.5 rounded font-medium hover:opacity-85 transition-opacity"
          >
            立即報名
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2"
          aria-label="Toggle menu"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-navy"
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
        <nav className="md:hidden bg-white border-t border-border px-6 py-6 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block text-[15px] text-navy py-2.5 hover:text-gold transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="block text-[15px] bg-navy text-white text-center px-5 py-2.5 rounded mt-4 font-medium"
          >
            立即報名
          </Link>
        </nav>
      )}
    </header>
  );
}
