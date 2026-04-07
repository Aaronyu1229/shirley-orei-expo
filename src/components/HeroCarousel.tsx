"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

interface Slide {
  readonly src: string;
  readonly alt: string;
  readonly tag: string;
  readonly headline: string;
  readonly desc: string;
  readonly cta: { label: string; href: string };
}

const slides: readonly Slide[] = [
  {
    src: "/images/hero-city-hcmc.jpg",
    alt: "胡志明市天際線",
    tag: "Your Premium Gateway to Southeast Asia",
    headline: "讓你的品牌\n走進東南亞市場",
    desc: "歐瑞會展 — 專注亞洲市場的跨國商務媒合與展會整合平台，協助台灣美業與醫美品牌快速進入越南與東南亞市場。",
    cta: { label: "預約顧問諮詢", href: "/contact" },
  },
  {
    src: "/images/hero-conference.jpg",
    alt: "國際展會現場",
    tag: "SEA Beauty Expo",
    headline: "越南首屆\n美業商務媒合展",
    desc: "胡志明市大型美容／醫美 B2B 對接展，精準商務媒合，為品牌打開東南亞最具潛力的美業市場。",
    cta: { label: "了解展會資訊", href: "/sea-beauty" },
  },
  {
    src: "/images/hero-city-kl.jpg",
    alt: "吉隆坡雙子星塔",
    tag: "FABIA Global Alliance",
    headline: "跨越 12 國的\n亞太商業網絡",
    desc: "加入 FABIA 國際商業聯盟，開啟品牌國際化之路。USD $1,500 即享頂級 VIP 參展體驗。",
    cta: { label: "申請 VIP 方案", href: "/fabia" },
  },
  {
    src: "/images/hero-architecture.jpg",
    alt: "現代建築",
    tag: "Brand Expansion",
    headline: "從台灣出發\n佈局亞洲市場",
    desc: "從展前規劃到展後落地，提供完整的品牌出海服務鏈，一站式解決跨國參展所有需求。",
    cta: { label: "立即聯繫我們", href: "/contact" },
  },
];

const SLIDE_DURATION = 7000;

export default function HeroCarousel() {
  const [active, setActive] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  const goTo = useCallback(
    (index: number) => {
      if (index === active || isTransitioning) return;
      setIsTransitioning(true);

      // Reset progress bar instantly
      if (progressRef.current) {
        progressRef.current.style.transition = "none";
        progressRef.current.style.width = "0%";
      }

      setActive(index);
      setTimeout(() => setIsTransitioning(false), 600);
    },
    [active, isTransitioning]
  );

  // Autoplay
  useEffect(() => {
    timerRef.current = setTimeout(() => {
      const next = (active + 1) % slides.length;
      setIsTransitioning(true);

      if (progressRef.current) {
        progressRef.current.style.transition = "none";
        progressRef.current.style.width = "0%";
      }

      setActive(next);
      setTimeout(() => setIsTransitioning(false), 600);
    }, SLIDE_DURATION);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [active]);

  // Progress bar animation
  useEffect(() => {
    const el = progressRef.current;
    if (!el) return;

    // Force reflow then animate
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        el.style.transition = `width ${SLIDE_DURATION - 200}ms linear`;
        el.style.width = "100%";
      });
    });
  }, [active]);

  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden">
      {/* ── Slides ── */}
      {slides.map((slide, i) => (
        <div
          key={slide.src}
          className="absolute inset-0 transition-opacity duration-[600ms] ease-in-out"
          style={{
            opacity: i === active ? 1 : 0,
            zIndex: i === active ? 2 : 1,
          }}
          aria-hidden={i !== active}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            className={`object-cover transition-transform duration-[7000ms] ease-out ${
              i === active ? "scale-[1.07]" : "scale-100"
            }`}
            priority={i === 0}
            sizes="100vw"
          />
        </div>
      ))}

      {/* ── Overlay ── */}
      <div className="hero-overlay" style={{ zIndex: 3 }} />

      {/* ── Content ── */}
      <div
        className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-10 w-full pt-24 pb-28 sm:py-32"
        style={{ zIndex: 4 }}
      >
        <div className="max-w-2xl">
          {slides.map((slide, i) => (
            <div
              key={slide.src}
              className={`transition-all duration-700 ease-in-out ${
                i === active
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4 pointer-events-none absolute inset-0"
              }`}
              style={{
                position: i === active ? "relative" : "absolute",
                visibility: i === active ? "visible" : "hidden",
              }}
            >
              <p className="text-xs tracking-[0.3em] uppercase text-white/80 font-medium mb-4 sm:mb-6">
                {slide.tag}
              </p>

              <h1 className="font-serif text-[clamp(2.25rem,5.5vw,5rem)] font-bold leading-[1.08] tracking-tight text-white mb-5 sm:mb-8 whitespace-pre-line">
                {slide.headline}
              </h1>

              <p className="text-white/75 text-base sm:text-lg leading-relaxed max-w-lg mb-6 sm:mb-10">
                {slide.desc}
              </p>

              <div className="flex flex-wrap gap-3 sm:gap-4">
                <Link href={slide.cta.href} className="btn-accent text-sm sm:text-[0.9375rem]">
                  {slide.cta.label}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Bottom nav tabs (Bain-style) ── */}
      <div
        className="absolute bottom-0 left-0 right-0 z-10"
        style={{ zIndex: 5 }}
      >
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="hidden md:flex border-t border-white/15">
            {slides.map((slide, i) => (
              <button
                key={slide.src}
                onClick={() => goTo(i)}
                className={`relative flex-1 py-5 text-left text-sm font-medium transition-colors duration-300 ${
                  i === active ? "text-white" : "text-white/60 hover:text-white/90"
                }`}
              >
                <span className="relative z-10">{slide.tag}</span>

                {/* Progress bar */}
                {i === active && (
                  <div
                    ref={progressRef}
                    className="absolute bottom-0 left-0 h-[3px] bg-accent"
                    style={{ width: "0%" }}
                  />
                )}

                {/* Divider */}
                {i < slides.length - 1 && (
                  <span className="absolute right-0 top-1/2 -translate-y-1/2 h-4 w-px bg-white/15" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile dots */}
        <div className="flex md:hidden justify-center gap-2.5 pb-6">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`w-2 h-2 transition-all duration-300 ${
                i === active ? "bg-white w-6" : "bg-white/30"
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* ── Bottom dark gradient (for tab readability) ── */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[200px] pointer-events-none"
        style={{
          zIndex: 3,
          background: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.25) 50%, transparent 100%)",
        }}
      />
    </section>
  );
}
