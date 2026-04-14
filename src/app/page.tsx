import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import AnimateIn from "@/components/AnimateIn";
import CountUp from "@/components/CountUp";
import HeroCarousel from "@/components/HeroCarousel";
import Footer from "@/components/Footer";
import { expos } from "@/data/expos";

const stats = [
  { number: 12, suffix: "", label: "亞太合作國家" },
  { number: 500, suffix: "+", label: "品牌展商" },
  { number: 10000, suffix: "+", label: "專業買家人次" },
  { number: 8, suffix: "", label: "年深耕經驗" },
];

export default function Home() {
  return (
    <>
      <Navbar />

      {/* ═══════ Hero Carousel ═══════ */}
      <HeroCarousel />

      {/* ═══════ Stats bar ═══════ */}
      <section className="py-16 border-b border-border">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <AnimateIn key={stat.label}>
                <div className="text-center">
                  <p className="text-[clamp(2rem,4vw,3rem)] font-bold text-dark leading-none mb-2">
                    <CountUp end={stat.number} suffix={stat.suffix} />
                  </p>
                  <p className="text-muted text-sm tracking-wide">
                    {stat.label}
                  </p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ About ═══════ */}
      <section id="about" className="py-24 lg:py-32">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <AnimateIn variant="fadeLeft">
              <p className="section-label">Why OREI Expo</p>
              <h2 className="font-serif text-[clamp(2rem,3.5vw,3rem)] font-bold leading-tight mb-6">
                為什麼選擇歐瑞會展？
              </h2>
              <p className="text-muted text-[17px] leading-relaxed mb-8">
                我們不只是展會組織方。歐瑞會展整合展前市場分析、展中商務媒合、
                展後通路對接，為品牌提供完整的東南亞市場進入方案。
              </p>
              <Link href="/contact" className="btn-primary">
                了解更多
              </Link>
            </AnimateIn>

            <AnimateIn variant="fadeRight" delay={0.1}>
              <Image
                src="/images/event-photo-2.jpg"
                alt="商務媒合現場"
                width={640}
                height={440}
                className="w-full object-cover"
              />
            </AnimateIn>
          </div>

          {/* Strategy Upgrade */}
          <AnimateIn delay={0.1}>
            <div className="border border-border overflow-hidden mb-24">
              <div className="bg-dark-section px-5 sm:px-8 py-4 sm:py-5 flex items-center gap-3">
                <h3 className="text-white font-semibold text-base sm:text-lg tracking-wide">戰略升級</h3>
                <span className="text-white/40 text-xs sm:text-sm">Strategic Upgrade</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="bg-surface p-5 sm:p-8 md:p-10 relative">
                  <p className="text-xs tracking-[0.2em] uppercase text-muted font-semibold mb-6">
                    過去 · Past
                  </p>
                  <h4 className="text-lg font-bold mb-6 text-dark/50">一般展會網站</h4>
                  <div className="space-y-4">
                    {[
                      { label: "定位", value: "賣展位、介紹展期", note: "功能導向" },
                      { label: "受眾視角", value: "這只是一個花錢參展的型錄" },
                      { label: "最終產出", value: "租賃空間" },
                    ].map((row) => (
                      <div key={row.label} className="flex items-start gap-3">
                        <span className="text-sm font-medium text-muted min-w-[60px]">{row.label}</span>
                        <div>
                          <p className="text-[15px] text-dark/50">{row.value}</p>
                          {row.note && <p className="text-xs text-muted">({row.note})</p>}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="hidden md:flex absolute top-1/2 -right-4 -translate-y-1/2 z-10 w-8 h-8 bg-accent items-center justify-center">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12h14" />
                      <path d="M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>

                <div className="bg-white p-5 sm:p-8 md:p-10 border-t md:border-t-0 md:border-l border-border">
                  <p className="text-xs tracking-[0.2em] uppercase text-accent font-semibold mb-6">
                    現在 · Now
                  </p>
                  <h4 className="text-lg font-bold mb-6">高轉換成交型網站</h4>
                  <div className="space-y-4">
                    {[
                      { label: "定位", value: "賣「市場落地」、提供通路對接", note: "結果導向" },
                      { label: "受眾視角", value: "這是我進入東南亞市場的最快捷徑" },
                      { label: "最終產出", value: "國際市場進入平台" },
                    ].map((row) => (
                      <div key={row.label} className="flex items-start gap-3">
                        <span className="text-sm font-medium text-accent min-w-[60px]">{row.label}</span>
                        <div>
                          <p className="text-[15px] text-dark font-medium">{row.value}</p>
                          {row.note && <p className="text-xs text-muted">({row.note})</p>}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-surface border-t border-border px-4 sm:px-8 py-4">
                <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-2 sm:gap-5">
                  {["參加展會（入口）", "進入東南亞市場", "建立通路", "拿到訂單"].map((step, i) => (
                    <div key={step} className="flex items-center gap-2 sm:gap-5">
                      <span className="text-xs sm:text-sm font-medium whitespace-nowrap">{step}</span>
                      {i < 3 && (
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent shrink-0 hidden sm:block" aria-hidden="true">
                          <path d="M5 12h14" />
                          <path d="M12 5l7 7-7 7" />
                        </svg>
                        )}
                      {i < 3 && (
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent shrink-0 sm:hidden rotate-90" aria-hidden="true">
                          <path d="M5 12h14" />
                          <path d="M12 5l7 7-7 7" />
                        </svg>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimateIn>

          {/* 4 Benefits */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border">
            {[
              {
                num: "01",
                title: "跨國展會整合",
                desc: "一站式參展服務，涵蓋越南、馬來西亞等東南亞核心市場，從展位設計到現場執行全程支援。",
              },
              {
                num: "02",
                title: "精準商務媒合",
                desc: "透過 FABIA 商業聯盟網絡，為您對接優質經銷商與代理商，每場展會平均促成 50+ 組有效對接。",
              },
              {
                num: "03",
                title: "品牌曝光加速",
                desc: "結合展會、媒體、社群多管道曝光，讓品牌快速進入市場視野，觸及超過 10,000 名專業買家。",
              },
              {
                num: "04",
                title: "展後持續服務",
                desc: "展會結束不代表服務結束。我們提供展後買家追蹤、簽約輔導與市場策略報告，確保合作落地。",
              },
            ].map((item, i) => (
              <AnimateIn key={item.num} delay={i * 0.08}>
                <div className="bg-white p-6 sm:p-10 h-full">
                  <span className="text-xs tracking-[0.2em] text-accent font-semibold">{item.num}</span>
                  <h3 className="text-lg sm:text-xl font-bold mt-3 mb-4">{item.title}</h3>
                  <p className="text-muted text-[15px] leading-relaxed">{item.desc}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ Expos Teaser ═══════ */}
      <section id="expos" className="py-24 lg:py-32 bg-surface">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <AnimateIn>
            <p className="section-label">Expos</p>
            <h2 className="font-serif text-[clamp(2rem,3.5vw,3rem)] font-bold leading-tight mb-6">
              2026 展會
            </h2>
            <p className="text-muted text-[17px] max-w-xl mb-16">
              三大展會覆蓋東南亞核心美業市場，結合 FABIA 國際商業聯盟，為品牌提供完整國際化解決方案
            </p>
          </AnimateIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {expos.map((expo, i) => (
              <AnimateIn key={expo.title} delay={i * 0.1}>
                <div className="card h-full flex flex-col overflow-hidden">
                  <div className="relative h-[200px] overflow-hidden">
                    <Image
                      src={expo.image}
                      alt={expo.imageAlt}
                      fill
                      className={`object-cover ${
                        expo.tag === "Coming Soon" ? "grayscale-[30%]" : ""
                      }`}
                      sizes="(max-width: 768px) 100vw, 33vw"
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
                  <div className="p-5 sm:p-8 flex flex-col flex-1">
                    <h3 className="text-lg font-bold mb-1">{expo.title}</h3>
                    <p className="text-sm text-accent mb-3">{expo.subtitle}</p>
                    <p className="text-muted text-[15px] leading-relaxed flex-1 line-clamp-2">
                      {expo.desc}
                    </p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>

          <AnimateIn delay={0.3}>
            <div className="text-center">
              <Link
                href="/expos"
                className="inline-flex items-center gap-2 text-sm font-medium text-dark hover:text-accent transition-colors group"
              >
                查看所有展會
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:translate-x-1 transition-transform" aria-hidden="true">
                  <path d="M6 3l5 5-5 5" />
                </svg>
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ═══════ Partners ═══════ */}
      <section className="py-16 border-y border-border">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <AnimateIn variant="fadeIn">
            <p className="text-center text-xs tracking-[0.25em] uppercase text-muted font-medium mb-8">
              Trusted Partners
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:flex md:flex-wrap items-center justify-center gap-x-14 gap-y-3 sm:gap-y-4 text-xs sm:text-sm text-muted tracking-wide text-center">
              {[
                "FABIA International Alliance",
                "Vietnam Beauty Association",
                "AMSC ASIA",
                "Taiwan External Trade Council",
                "ASEAN Business Forum",
                "Asia Beauty Summit",
              ].map((partner) => (
                <span key={partner} className="opacity-50 hover:opacity-100 transition-opacity duration-300">
                  {partner}
                </span>
              ))}
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ═══════ CTA ═══════ */}
      <section className="py-32 bg-dark-section text-white relative overflow-hidden">
        <div className="max-w-[680px] mx-auto px-6 text-center relative z-10">
          <AnimateIn variant="fadeIn">
            <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-bold leading-tight mb-6">
              準備好進入
              <br />
              東南亞市場了嗎？
            </h2>
            <p className="text-white/50 text-lg leading-relaxed mb-10">
              歐瑞會展為您提供一站式展會參展、通路對接與品牌曝光服務
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center items-center">
              <Link href="/contact" className="btn-accent w-full sm:w-auto">
                立即報名
              </Link>
              <Link href="/expos" className="btn-outline-light w-full sm:w-auto">
                瀏覽展會資訊
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>

      <Footer />
    </>
  );
}
