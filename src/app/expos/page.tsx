import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import AnimateIn from "@/components/AnimateIn";
import Footer from "@/components/Footer";
import { expos } from "@/data/expos";

export const metadata: Metadata = {
  title: "展會總覽 — OREI Expo",
  description:
    "歐瑞會展代理展會一覽：SEA Beauty 國際美容商務媒合展、AMSC ASIA 亞洲醫學美容大會、MYCE 馬來西亞消費展，以及 FABIA VIP 專屬活動。",
  alternates: {
    canonical: "/expos",
  },
  openGraph: {
    title: "展會總覽 — OREI Expo",
    description:
      "歐瑞會展代理展會一覽：覆蓋東南亞核心美業市場的三大展會與 FABIA VIP 專屬活動。",
    images: [
      {
        url: "/images/expo-beauty.jpg",
        width: 1200,
        height: 630,
        alt: "OREI Expo 展會總覽",
      },
    ],
  },
};

export default function ExposPage() {
  return (
    <>
      <Navbar />

      {/* ═══════ Hero ═══════ */}
      <section className="relative min-h-[var(--vh-fallback,100vh)] flex items-center">
        <Image
          src="/images/event-photo-2.jpg"
          alt="OREI Expo 展會現場"
          fill
          className="object-cover"
          priority
        />
        <div className="hero-overlay" />

        <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-10 w-full pt-24 pb-16 sm:py-32">
          <div className="max-w-2xl">
            <AnimateIn variant="fadeIn">
              <p className="text-xs tracking-[0.3em] uppercase text-white/60 font-medium mb-6">
                Our Expos
              </p>
            </AnimateIn>

            <AnimateIn variant="slideUp" delay={0.08}>
              <h1 className="font-serif text-[clamp(2.5rem,5vw,4rem)] font-bold leading-[1.08] tracking-tight text-white mb-8">
                展會作為實體入口
              </h1>
            </AnimateIn>

            <AnimateIn delay={0.16}>
              <p className="text-white/60 text-lg leading-relaxed max-w-xl mb-10">
                三大展會覆蓋東南亞核心美業市場，結合 FABIA 國際商業聯盟，
                為品牌提供從展位到通路的完整國際化解決方案。
              </p>
            </AnimateIn>

            <AnimateIn delay={0.24}>
              <a href="#expos" className="btn-outline-light">
                瀏覽所有展會
              </a>
            </AnimateIn>
          </div>
        </div>

        <div className="hero-fade-bottom" />
      </section>

      {/* ═══════ Expo Cards ═══════ */}
      <section id="expos" className="py-24 lg:py-32">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <AnimateIn>
            <p className="section-label">Expos</p>
            <h2 className="font-serif text-[clamp(2rem,3.5vw,3rem)] font-bold leading-tight mb-6">
              歐瑞代理展會
            </h2>
            <p className="text-muted text-[17px] max-w-xl mb-16">
              涵蓋 B2B 商務媒合、學術研討與消費者體驗，滿足品牌多元出海需求
            </p>
          </AnimateIn>

          <AnimateIn delay={0.06}>
            <div className="mb-12 overflow-hidden">
              <Image
                src="/images/venue-booths.jpg"
                alt="展會現場展位與人流"
                width={1280}
                height={480}
                className="w-full h-[240px] sm:h-[360px] object-cover"
              />
            </div>
          </AnimateIn>

          <div className="space-y-12">
            {expos.map((expo, i) => (
              <AnimateIn key={expo.title} delay={i * 0.1}>
                <div className="card overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    {/* Image */}
                    <div className="relative h-[240px] sm:h-[300px] lg:h-full lg:min-h-[360px] overflow-hidden">
                      <Image
                        src={expo.image}
                        alt={expo.imageAlt}
                        fill
                        className={`object-cover ${
                          expo.tag === "Coming Soon" ? "grayscale-[30%]" : ""
                        }`}
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                      {expo.tag === "Coming Soon" && (
                        <div className="absolute inset-0 bg-dark/30" />
                      )}
                      <span
                        className={`absolute top-4 left-4 text-xs tracking-[0.15em] uppercase font-semibold px-3 py-1.5 ${
                          expo.tag === "Featured"
                            ? "bg-accent text-white"
                            : "bg-white/90 text-dark"
                        }`}
                      >
                        {expo.tag}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="p-6 sm:p-10 flex flex-col justify-center">
                      <h3 className="text-xl sm:text-2xl font-bold mb-1">{expo.title}</h3>
                      <p className="text-sm text-accent mb-5">{expo.subtitle}</p>
                      <p className="text-muted text-[15px] leading-relaxed mb-6">
                        {expo.descFull}
                      </p>

                      <div className="flex flex-wrap gap-x-6 gap-y-2 mb-8">
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-accent font-semibold">地點</span>
                          <span className="text-sm text-muted">{expo.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-accent font-semibold">形式</span>
                          <span className="text-sm text-muted">{expo.format}</span>
                        </div>
                      </div>

                      {expo.tag === "Featured" ? (
                        <div className="flex flex-wrap gap-4">
                          <Link href={expo.href} className="btn-primary">
                            了解更多
                          </Link>
                          <Link href="/contact" className="btn-outline">
                            立即報名
                          </Link>
                        </div>
                      ) : (
                        <span className="text-sm text-light italic">敬請期待</span>
                      )}
                    </div>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ FABIA Section ═══════ */}
      <section className="py-24 lg:py-32 bg-surface">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimateIn variant="fadeLeft">
              <p className="section-label">FABIA Global Alliance</p>
              <h2 className="font-serif text-[clamp(2rem,3.5vw,3rem)] font-bold leading-tight mb-6">
                FABIA VIP
                <br />
                Exclusive Event
              </h2>
              <p className="text-muted text-[17px] leading-relaxed mb-6">
                加入 FABIA 國際商業聯盟，享受 VIP
                專屬展位、品牌頒獎、優先商務媒合等頂級權益。跨越 12
                國的亞太商業網絡，為您的品牌開啟國際化新篇章。
              </p>
              <div className="flex flex-wrap items-baseline gap-2 sm:gap-3 mb-8">
                <span className="text-2xl sm:text-3xl font-bold font-serif">$1,500</span>
                <span className="text-muted text-xs sm:text-sm">USD / Brand Booth</span>
                <span className="text-xs text-accent font-medium border border-accent/30 px-2 sm:px-3 py-1">
                  限量名額
                </span>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="/fabia" className="btn-primary">
                  了解 FABIA 方案
                </Link>
                <Link href="/contact" className="btn-outline">
                  立即報名
                </Link>
              </div>
            </AnimateIn>

            <AnimateIn variant="fadeRight" delay={0.12}>
              <Image
                src="/images/fabia-poster.jpg"
                alt="FABIA VIP Exclusive Event"
                width={600}
                height={900}
                className="w-full max-w-[400px] mx-auto"
              />
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ═══════ CTA ═══════ */}
      <section className="py-32 bg-dark-section text-white">
        <div className="max-w-[680px] mx-auto px-6 text-center">
          <AnimateIn variant="fadeIn">
            <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-bold mb-6">
              找到最適合您的展會
            </h2>
            <p className="text-white/50 text-lg leading-relaxed mb-10">
              不確定哪個展會最適合？歐瑞會展顧問為您量身推薦最佳參展方案
            </p>
            <Link href="/contact" className="btn-accent">
              免費諮詢
            </Link>
          </AnimateIn>
        </div>
      </section>

      <Footer />
    </>
  );
}
