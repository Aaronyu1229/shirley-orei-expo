import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import AnimateIn from "@/components/AnimateIn";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "SEA Beauty Business Matching Expo — OREI Expo",
  description:
    "越南胡志明市首屆大型美容/醫美 B2B 對接展，協助台灣品牌快速進入東南亞美業市場。",
  alternates: {
    canonical: "/sea-beauty",
  },
  openGraph: {
    title: "SEA Beauty Business Matching Expo — OREI Expo",
    description:
      "越南胡志明市首屆大型美容/醫美 B2B 對接展，協助台灣品牌快速進入東南亞美業市場。",
    images: [
      {
        url: "/images/event-photo-2.jpg",
        width: 1200,
        height: 630,
        alt: "SEA Beauty Business Matching Expo",
      },
    ],
  },
};

const timeline = [
  {
    phase: "01",
    title: "展前準備",
    subtitle: "Pre-Expo",
    items: [
      "品牌資料審核與市場定位分析",
      "客製化展位設計規劃",
      "目標買家名單配對",
      "展前行銷曝光啟動",
    ],
  },
  {
    phase: "02",
    title: "展會期間",
    subtitle: "During Expo",
    items: [
      "專屬展位品牌展示",
      "B2B 一對一商務媒合會議",
      "產品 Showcase & Demo",
      "行業論壇與專題演講",
    ],
  },
  {
    phase: "03",
    title: "展後跟進",
    subtitle: "Post-Expo",
    items: [
      "買家意向追蹤與對接",
      "經銷代理簽約輔導",
      "市場進入策略報告",
      "持續通路維護與拓展",
    ],
  },
];

const targetAudience = [
  {
    title: "美容 / 醫美品牌",
    desc: "台灣美容與醫美品牌想進入越南市場，尋找最佳落地管道",
  },
  {
    title: "保養品 & 設備廠商",
    desc: "保養品、美容儀器、醫美設備廠商，希望開拓東南亞銷售通路",
  },
  {
    title: "通路拓展企業",
    desc: "尋找東南亞經銷商 / 代理商的企業，快速建立海外合作夥伴",
  },
  {
    title: "連鎖品牌 & 診所",
    desc: "美業連鎖品牌、醫美診所尋求國際合作與品牌授權機會",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "SEA Beauty Business Matching Expo",
  description:
    "越南胡志明市首屆大型美容/醫美 B2B 對接展，協助台灣品牌快速進入東南亞美業市場。",
  location: {
    "@type": "Place",
    name: "Ho Chi Minh City, Vietnam",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Ho Chi Minh City",
      addressCountry: "VN",
    },
  },
  organizer: {
    "@type": "Organization",
    name: "歐瑞會展 OREI Expo",
    url: "https://www.oreiexpo.com",
  },
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  eventStatus: "https://schema.org/EventScheduled",
  image: "https://www.oreiexpo.com/images/event-photo-2.jpg",
};

export default function SEABeautyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      {/* ═══════ Hero ═══════ */}
      <section className="relative min-h-[60vh] sm:min-h-[70vh] flex items-center">
        <Image
          src="/images/hero-sea-beauty.jpg"
          alt="SEA Beauty 國際美容商務媒合展會場"
          fill
          className="object-cover"
          priority
        />
        <div className="hero-overlay" />

        <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-10 w-full pt-24 pb-16 sm:py-32">
          <div className="max-w-2xl">
            <AnimateIn variant="fadeIn">
              <p className="text-xs tracking-[0.3em] uppercase text-white/60 font-medium mb-6">
                Featured Expo
              </p>
            </AnimateIn>

            <AnimateIn variant="slideUp" delay={0.1}>
              <h1 className="font-serif text-[clamp(2.5rem,5vw,4rem)] font-bold leading-[1.08] tracking-tight text-white mb-4">
                SEA Beauty Business
                <br />
                Matching Expo
              </h1>
            </AnimateIn>

            <AnimateIn delay={0.2}>
              <p className="text-accent text-lg font-medium mb-8">
                國際美容暨醫美商務媒合展
              </p>
            </AnimateIn>

            <AnimateIn delay={0.3}>
              <p className="text-white/60 text-lg leading-relaxed max-w-xl mb-10">
                越南胡志明市首屆大型美容 / 醫美 B2B 對接展，
                為台灣品牌打開東南亞最具潛力的美業市場。
              </p>
            </AnimateIn>

            <AnimateIn delay={0.4}>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="btn-accent">
                  立即報名參展
                </Link>
                <a href="#process" className="btn-outline-light">
                  了解展會流程
                </a>
              </div>
            </AnimateIn>
          </div>
        </div>

        <div className="hero-fade-bottom" />
      </section>

      {/* ═══════ Key Info ═══════ */}
      <section className="py-16 border-b border-border">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { label: "地點", value: "越南胡志明市", sub: "Ho Chi Minh City, Vietnam" },
              { label: "形式", value: "B2B 商務媒合", sub: "品牌展示 + 一對一媒合" },
              { label: "產業", value: "美容 / 醫美", sub: "Beauty & Medical Aesthetics" },
            ].map((info, i) => (
              <AnimateIn key={info.label} delay={i * 0.08}>
                <div className="text-center py-4">
                  <p className="text-xs tracking-[0.2em] uppercase text-accent font-semibold mb-3">
                    {info.label}
                  </p>
                  <p className="text-xl font-bold mb-1">{info.value}</p>
                  <p className="text-sm text-muted">{info.sub}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ Gallery ═══════ */}
      <section className="py-24 lg:py-32">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <AnimateIn>
            <p className="section-label">Gallery</p>
            <h2 className="font-serif text-[clamp(2rem,3.5vw,3rem)] font-bold mb-12">
              展會實景
            </h2>
          </AnimateIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { src: "/images/venue-3.jpg", alt: "商務交流現場" },
              { src: "/images/event-photo-1.jpg", alt: "品牌展示體驗" },
              { src: "/images/event-photo-2.jpg", alt: "買家產品互動" },
              { src: "/images/venue-4.jpg", alt: "展位商務洽談" },
            ].map((photo, i) => (
              <AnimateIn key={photo.src} delay={i * 0.06}>
                <div className="relative group overflow-hidden">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    width={800}
                    height={600}
                    className="w-full h-[200px] sm:h-[300px] object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                    <p className="text-white text-sm font-medium">{photo.alt}</p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>

          <AnimateIn delay={0.12}>
            <div className="mt-4 overflow-hidden">
              <Image
                src="/images/expos-table.png"
                alt="展會一覽"
                width={1120}
                height={400}
                className="w-full object-cover"
              />
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ═══════ 3-Phase Process ═══════ */}
      <section id="process" className="py-24 lg:py-32 bg-surface">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <AnimateIn>
            <p className="section-label">Process</p>
            <h2 className="font-serif text-[clamp(2rem,3.5vw,3rem)] font-bold mb-4">
              三階段全方位服務
            </h2>
            <p className="text-muted text-[17px] max-w-lg mb-16">
              從展前規劃到展後落地，我們提供完整的品牌出海服務鏈
            </p>
          </AnimateIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {timeline.map((phase, i) => (
              <AnimateIn key={phase.phase} delay={i * 0.12}>
                <div className="card p-8 h-full">
                  <span className="text-xs tracking-[0.2em] text-accent font-semibold">
                    {phase.phase}
                  </span>
                  <h3 className="text-xl font-bold mt-3 mb-1">{phase.title}</h3>
                  <p className="text-sm text-muted mb-6">{phase.subtitle}</p>
                  <ul className="space-y-3">
                    {phase.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-[15px]">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mt-0.5 shrink-0" aria-hidden="true">
                          <path d="M5 8l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent" />
                        </svg>
                        <span className="text-muted">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ Who Should Join ═══════ */}
      <section className="py-24 lg:py-32">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <AnimateIn variant="fadeLeft">
              <p className="section-label">For You</p>
              <h2 className="font-serif text-[clamp(2rem,3.5vw,3rem)] font-bold mb-6">
                誰適合參展？
              </h2>
              <p className="text-muted text-[17px] leading-relaxed mb-8">
                無論您是美容品牌、醫美設備商、連鎖診所或通路拓展企業，
                SEA Beauty Expo 都能為您量身打造最適合的參展方案。
              </p>
              <Link href="/contact" className="btn-primary">
                免費諮詢適合方案
              </Link>
            </AnimateIn>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {targetAudience.map((item, i) => (
                <AnimateIn key={item.title} delay={i * 0.08} variant="fadeRight">
                  <div className="card p-6 h-full">
                    <span className="text-xs tracking-[0.2em] text-accent font-semibold">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-semibold text-[15px] mt-3 mb-2">{item.title}</h3>
                    <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ CTA ═══════ */}
      <section className="py-32 bg-dark-section text-white">
        <div className="max-w-[680px] mx-auto px-6 text-center">
          <AnimateIn variant="fadeIn">
            <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-bold mb-6">
              搶佔越南美業市場先機
            </h2>
            <p className="text-white/50 text-lg leading-relaxed mb-10">
              名額有限，立即預約顧問諮詢，了解最適合您品牌的參展方案
            </p>
            <Link href="/contact" className="btn-accent">
              立即報名
            </Link>
          </AnimateIn>
        </div>
      </section>

      <Footer />
    </>
  );
}
