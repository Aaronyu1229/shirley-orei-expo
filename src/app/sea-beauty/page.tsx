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

export default function SEABeautyPage() {
  return (
    <>
      <Navbar />

      {/* ═══════ Hero ═══════ */}
      <section className="pt-[72px] gradient-hero text-white relative overflow-hidden">
        <div className="max-w-[1120px] mx-auto px-6 py-32 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <AnimateIn variant="fadeIn">
                <p className="section-label mb-8 !text-gold/80">Featured Expo</p>
              </AnimateIn>

              <AnimateIn variant="slideUp" delay={0.1}>
                <h1 className="font-serif text-[clamp(2.5rem,5vw,4rem)] font-bold leading-[1.1] tracking-tight mb-4">
                  SEA Beauty Business
                  <br />
                  Matching Expo
                </h1>
              </AnimateIn>

              <AnimateIn delay={0.2}>
                <p className="text-gold text-lg font-medium mb-2">
                  國際美容暨醫美商務媒合展
                </p>
                <div className="gold-line mb-6" />
              </AnimateIn>

              <AnimateIn delay={0.3}>
                <p className="text-white/60 text-lg leading-relaxed max-w-xl mb-12">
                  越南胡志明市首屆大型美容 / 醫美 B2B 對接展，
                  為台灣品牌打開東南亞最具潛力的美業市場。
                </p>
              </AnimateIn>

              <AnimateIn delay={0.4}>
                <div className="flex flex-wrap gap-4">
                  <Link href="/contact" className="btn-gold">
                    立即報名參展
                  </Link>
                  <a href="#process" className="btn-outline-light">
                    了解展會流程
                  </a>
                </div>
              </AnimateIn>
            </div>

            <AnimateIn variant="scaleUp" delay={0.2}>
              <div className="relative">
                <Image
                  src="/images/event-photo-1.png"
                  alt="SEA Beauty 展會現場"
                  width={800}
                  height={600}
                  className="rounded-2xl w-full object-cover shadow-2xl relative z-10"
                  priority
                />
              </div>
            </AnimateIn>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* ═══════ Key Info ═══════ */}
      <section className="pt-8 pb-20">
        <div className="max-w-[1120px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gold">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                    <circle cx="12" cy="9" r="2.5" />
                  </svg>
                ),
                label: "地點",
                value: "越南胡志明市",
                sub: "Ho Chi Minh City, Vietnam",
              },
              {
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gold">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                ),
                label: "形式",
                value: "B2B 商務媒合",
                sub: "品牌展示 + 一對一媒合",
              },
              {
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gold">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                ),
                label: "產業",
                value: "美容 / 醫美",
                sub: "Beauty & Medical Aesthetics",
              },
            ].map((info, i) => (
              <AnimateIn key={info.label} delay={i * 0.08}>
                <div className="card-glass p-8 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-gold/10 flex items-center justify-center">
                      {info.icon}
                    </div>
                  </div>
                  <p className="text-[13px] tracking-[0.15em] uppercase text-gold font-semibold mb-2">
                    {info.label}
                  </p>
                  <p className="text-xl font-bold mb-1">{info.value}</p>
                  <p className="text-[15px] text-muted">{info.sub}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ Event Gallery ═══════ */}
      <section className="py-32 relative">
        <div className="section-divider absolute top-0 left-0 right-0" />
        <div className="max-w-[1120px] mx-auto px-6">
          <AnimateIn>
            <p className="section-label">Gallery</p>
            <h2 className="font-serif text-3xl font-bold mb-4">展會實景</h2>
            <div className="gold-line mb-12" />
          </AnimateIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { src: "/images/event-photo-1.png", alt: "展會實景 — 商務交流", caption: "商務交流現場" },
              { src: "/images/event-photo-2.png", alt: "展會實景 — 品牌展示", caption: "品牌展示體驗" },
              { src: "/images/venue-3.png", alt: "展會實景 — 買家互動", caption: "買家產品互動" },
              { src: "/images/venue-4.png", alt: "展會實景 — 展位洽談", caption: "展位商務洽談" },
            ].map((photo, i) => (
              <AnimateIn key={photo.src} delay={i * 0.08} variant={i % 2 === 0 ? "fadeLeft" : "fadeRight"}>
                <div className="relative group overflow-hidden rounded-2xl">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    width={800}
                    height={600}
                    className="w-full h-[320px] object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                    <p className="text-white text-base font-medium">{photo.caption}</p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>

          {/* Expo overview banner */}
          <AnimateIn variant="scaleUp" delay={0.12}>
            <div className="relative rounded-2xl overflow-hidden mt-6 group">
              <Image
                src="/images/expos-table.png"
                alt="展會一覽"
                width={1120}
                height={400}
                className="w-full object-cover group-hover:scale-[1.01] transition-transform duration-700"
              />
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ═══════ 3-Phase Process ═══════ */}
      <section id="process" className="py-32 bg-surface relative">
        <div className="section-divider absolute top-0 left-0 right-0" />
        <div className="max-w-[1120px] mx-auto px-6">
          <AnimateIn>
            <p className="section-label">Process</p>
            <h2 className="font-serif text-3xl font-bold mb-4">三階段全方位服務</h2>
            <p className="text-muted text-base max-w-lg mb-4">
              從展前規劃到展後落地，我們提供完整的品牌出海服務鏈
            </p>
            <div className="gold-line mb-16" />
          </AnimateIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {timeline.map((phase, i) => (
              <AnimateIn key={phase.phase} delay={i * 0.12}>
                <div className="relative">
                  {/* Phase connector line (desktop only) */}
                  {i < timeline.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-8 border-t-2 border-dashed border-gold/30 z-10" />
                  )}
                  <div className="card-glass p-8 h-full">
                    <span className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gold/10 text-sm font-bold text-gold mb-4">
                      {phase.phase}
                    </span>
                    <h3 className="text-xl font-bold mt-2 mb-1">
                      {phase.title}
                    </h3>
                    <p className="text-[15px] text-gold/70 mb-6">
                      {phase.subtitle}
                    </p>
                    <ul className="space-y-3">
                      {phase.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 text-base leading-relaxed"
                        >
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mt-0.5 shrink-0">
                            <circle cx="8" cy="8" r="8" fill="#C5A44E" fillOpacity="0.1" />
                            <path d="M5 8l2 2 4-4" stroke="#C5A44E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          <span className="text-muted">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ Who Should Join ═══════ */}
      <section className="py-32 relative">
        <div className="section-divider absolute top-0 left-0 right-0" />
        <div className="max-w-[1120px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <AnimateIn variant="fadeLeft">
              <p className="section-label">For You</p>
              <h2 className="font-serif text-3xl font-bold mb-4">誰適合參展？</h2>
              <div className="gold-line mb-8" />
              <p className="text-muted text-base leading-relaxed mb-8">
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
                  <div className="card-glass p-6 h-full">
                    <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center mb-4">
                      <span className="text-gold text-sm font-bold">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="font-semibold text-base mb-2">{item.title}</h3>
                    <p className="text-base text-muted leading-relaxed">{item.desc}</p>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ CTA ═══════ */}
      <section className="py-32 gradient-navy text-white relative overflow-hidden">
        <div className="max-w-[680px] mx-auto px-6 text-center relative z-10">
          <AnimateIn variant="scaleUp">
            <p className="text-gold text-[14px] tracking-[0.3em] uppercase mb-6 font-semibold">
              Limited Spots
            </p>
            <h2 className="font-serif text-3xl font-bold mb-6">搶佔越南美業市場先機</h2>
            <p className="text-white/50 text-lg leading-relaxed mb-10">
              名額有限，立即預約顧問諮詢，了解最適合您品牌的參展方案
            </p>
            <Link
              href="/contact"
              className="btn-gold"
            >
              立即報名
            </Link>
          </AnimateIn>
        </div>
      </section>

      <Footer />
    </>
  );
}
