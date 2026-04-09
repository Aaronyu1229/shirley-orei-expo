"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "關於", href: "/#about" },
  {
    label: "展會",
    href: "/#expos",
    children: [
      { label: "SEA Beauty", href: "/sea-beauty" },
      { label: "FABIA", href: "/fabia" },
    ],
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout>>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = pathname === "/";
  const isTransparent = !scrolled && isHome;

  const handleDropdownEnter = () => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setDropdownOpen(true);
  };

  const handleDropdownLeave = () => {
    dropdownTimeout.current = setTimeout(() => setDropdownOpen(false), 150);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isTransparent
          ? "bg-transparent"
          : "bg-white/95 backdrop-blur-md border-b border-border"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 h-[72px] flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/images/orei-icon.svg"
            alt="OREI Expo"
            width={32}
            height={32}
            className="w-8 h-8"
          />
          <span
            className={`text-[15px] font-semibold tracking-[0.15em] transition-colors duration-300 ${
              isTransparent ? "text-white" : "text-dark"
            }`}
          >
            OREI EXPO
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => {
            if (link.children) {
              const isChildActive = link.children.some((c) => pathname === c.href);
              return (
                <div
                  key={link.label}
                  ref={dropdownRef}
                  className="relative"
                  onMouseEnter={handleDropdownEnter}
                  onMouseLeave={handleDropdownLeave}
                >
                  <button
                    className={`text-sm tracking-wide transition-colors duration-200 flex items-center gap-1 ${
                      isChildActive
                        ? isTransparent
                          ? "text-white font-medium"
                          : "text-dark font-medium"
                        : isTransparent
                          ? "text-white/70 hover:text-white"
                          : "text-muted hover:text-dark"
                    }`}
                    aria-expanded={dropdownOpen}
                    aria-haspopup="true"
                  >
                    {link.label}
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5" className={`transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`} aria-hidden="true">
                      <path d="M2.5 4l2.5 2.5L7.5 4" />
                    </svg>
                  </button>

                  {dropdownOpen && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2">
                      <div className="bg-white border border-border shadow-lg min-w-[180px] py-2">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={`block px-5 py-2.5 text-sm transition-colors duration-200 ${
                              pathname === child.href
                                ? "text-dark font-medium bg-surface"
                                : "text-muted hover:text-dark hover:bg-surface"
                            }`}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            }

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
                className={`text-sm tracking-wide transition-colors duration-200 ${
                  isActive
                    ? isTransparent
                      ? "text-white font-medium"
                      : "text-dark font-medium"
                    : isTransparent
                      ? "text-white/70 hover:text-white"
                      : "text-muted hover:text-dark"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className={`text-sm font-medium px-5 py-2.5 transition-all duration-200 ${
              isTransparent
                ? "bg-white text-dark hover:bg-white/90"
                : "bg-dark text-white hover:bg-black"
            }`}
          >
            聯繫我們
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
            className={`transition-colors duration-300 ${
              isTransparent ? "text-white" : "text-dark"
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
        <nav className="md:hidden bg-white border-t border-border px-6 py-6 space-y-1">
          {navLinks.map((link) => {
            if (link.children) {
              return (
                <div key={link.label}>
                  <span className="block text-[15px] text-muted py-3 border-b border-border/50 text-xs tracking-[0.15em] uppercase font-medium">
                    {link.label}
                  </span>
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={() => setOpen(false)}
                      className={`block text-[15px] py-3 pl-4 hover:text-accent transition-colors border-b border-border/50 ${
                        pathname === child.href ? "text-dark font-medium" : "text-dark"
                      }`}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              );
            }
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block text-[15px] text-dark py-3 hover:text-accent transition-colors border-b border-border/50 last:border-0"
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="block text-[15px] bg-dark text-white text-center px-5 py-3.5 mt-4 font-medium"
          >
            聯繫我們
          </Link>
        </nav>
      )}
    </header>
  );
}
