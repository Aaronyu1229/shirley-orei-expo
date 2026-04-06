import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import AnimateIn from "@/components/AnimateIn";
import CountUp from "@/components/CountUp";
import Footer from "@/components/Footer";

const expoOverview = [
  {
    title: "SEA Beauty Business\nMatching Expo",
    subtitle: "國際美容暨醫美商務媒合展",
    location: "越南胡志明市",
    locationEn: "Ho Chi Minh City, Vietnam",
    format: "B2B 商務媒合",
    status: "featured" as const,
  },
  {
    title: "AMSC ASIA",
    subtitle: "亞洲醫學美容暨抗衰老大會",
    location: "越南胡志明市",
    locationEn: "Ho Chi Minh City, Vietnam",
    format: "學術 + 商業大會",
    status: "coming" as const,
  },
  {
    title: "MYCE Malaysia\nConsumer Expo",
    subtitle: "馬來西亞消費展",
    location: "馬來西亞吉隆坡",
    locationEn: "Kuala Lumpur, Malaysia",
    format: "B2C 消費展覽",
    status: "coming" as const,
  },
];

const expos = [
  {
    title: "SEA Beauty Business Matching Expo",
    subtitle: "國際美容暨醫美商務媒合展",
    desc: "越南胡志明市首屆大型美容 / 醫美 B2B 對接展，為台灣品牌打開東南亞最具潛力的美業市場。",
    href: "/sea-beauty",
    tag: "Featured",
  },
  {
    title: "AMSC ASIA",
    subtitle: "亞洲醫學美容暨抗衰老大會",
    desc: "匯聚亞洲醫美抗衰頂級專家的學術與商業大會，品牌技術展示的絕佳舞台。",
    href: "#",
    tag: "Coming Soon",
  },
  {
    title: "MYCE Malaysia Consumer Expo",
    subtitle: "馬來西亞消費展",
    desc: "面向馬來西亞消費者的大型零售與體驗展會，快速建立品牌知名度。",
    href: "#",
    tag: "Coming Soon",
  },
];

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

      {/* Hero — split layout with event photo */}
      <section className="min-h-screen flex items-center pt-[72px]">
        <div className="max-w-[1120px] mx-auto px-6 w-full py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <AnimateIn>
                <p className="section-label mb-8">
                  Your Premium Gateway to Southeast Asia
                </p>
              </AnimateIn>

              <AnimateIn delay={0.08}>
                <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-[1.1] tracking-tight mb-8">
                  讓你的品牌
                  <br />
                  <span className="text-gold">走進東南亞市場</span>
                </h1>
              </AnimateIn>

              <AnimateIn delay={0.16}>
                <p className="text-muted text-lg leading-relaxed max-w-lg mb-12 text-base">
                  歐瑞會展 — 專注亞洲市場的跨國商務媒合與展會整合平台，
                  協助台灣美業與醫美品牌快速進入越南與東南亞市場。
                </p>
              </AnimateIn>

              <AnimateIn delay={0.24}>
                <div className="flex flex-wrap gap-4">
                  <Link href="/contact" className="btn-primary">
                    預約顧問諮詢
                  </Link>
                  <Link href="/sea-beauty" className="btn-ghost">
                    了解展會資訊
                  </Link>
                </div>
              </AnimateIn>
            </div>

            <AnimateIn delay={0.2}>
              <div className="relative">
                <Image
                  src="/images/event-photo-1.png"
                  alt="歐瑞會展活動現場"
                  width={800}
                  height={600}
                  className="rounded-lg w-full object-cover shadow-lg"
                  priority
                />
                <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-md p-4 border border-border">
                  <p className="text-[12px] tracking-[0.1em] uppercase text-gold font-semibold">
                    12 Countries
                  </p>
                  <p className="text-2xl font-bold text-navy">亞太商業網絡</p>
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="gradient-navy py-16">
        <div className="max-w-[1120px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <AnimateIn key={stat.label} delay={i * 0.1}>
                <div className="text-center">
                  <p className="text-[clamp(2rem,4vw,3rem)] font-bold text-white leading-none mb-2">
                    <CountUp end={stat.number} suffix={stat.suffix} />
                  </p>
                  <p className="text-white/50 text-[15px] tracking-wide">
                    {stat.label}
                  </p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-32 border-t border-border">
        <div className="max-w-[1120px] mx-auto px-6">
          {/* Section header */}
          <AnimateIn>
            <p className="section-label">Why OREI Expo</p>
            <h2 className="text-3xl md:text-[2.5rem] font-bold leading-tight mb-4">
              為什麼選擇歐瑞會展？
            </h2>
            <div className="gold-line mb-6" />
            <p className="text-muted text-base leading-relaxed max-w-2xl mb-6">
              我們不只是展會組織方。歐瑞會展整合展前市場分析、展中商務媒合、
              展後通路對接，為品牌提供完整的東南亞市場進入方案。
            </p>
          </AnimateIn>

          {/* Event photo */}
          <AnimateIn delay={0.06}>
            <Image
              src="/images/event-photo-2.png"
              alt="商務媒合現場"
              width={1120}
              height={500}
              className="rounded-lg w-full object-cover mb-16 max-h-[420px]"
            />
          </AnimateIn>

          {/* Strategy Upgrade — Past vs Present */}
          <AnimateIn delay={0.1}>
            <div className="rounded-xl overflow-hidden border border-border mb-20">
              {/* Top label */}
              <div className="gradient-navy px-8 py-5 flex items-center justify-center gap-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gold">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
                <p className="text-white font-bold text-lg tracking-wide">戰略升級</p>
                <span className="text-white/40 text-[15px] ml-1">Strategic Upgrade</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Past */}
                <div className="bg-[#f5f3ef] p-8 md:p-10 relative">
                  <p className="text-[13px] tracking-[0.2em] uppercase text-muted/60 font-semibold mb-6">
                    過去 · Past
                  </p>
                  <h3 className="text-xl font-bold mb-6 text-navy/70">一般展會網站</h3>
                  <div className="space-y-5">
                    {[
                      { label: "定位", value: "賣展位、介紹展期", note: "功能導向" },
                      { label: "受眾視角", value: "這只是一個花錢參展的型錄", note: "" },
                      { label: "最終產出", value: "租賃空間", note: "" },
                    ].map((row) => (
                      <div key={row.label} className="flex items-start gap-3">
                        <span className="text-sm font-semibold text-muted/50 min-w-[68px] mt-0.5">{row.label}</span>
                        <div>
                          <p className="text-[15px] text-navy/60 leading-relaxed">{row.value}</p>
                          {row.note && <p className="text-[13px] text-muted/40">({row.note})</p>}
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* Arrow overlay (desktop) */}
                  <div className="hidden md:flex absolute top-1/2 -right-5 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-gold items-center justify-center shadow-lg">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14" />
                      <path d="M12 5l7 7-7 7" />
                    </svg>
                  </div>
                  {/* Arrow (mobile) */}
                  <div className="flex md:hidden justify-center mt-6">
                    <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center shadow-lg">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 5v14" />
                        <path d="M5 12l7 7 7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Present */}
                <div className="bg-white p-8 md:p-10 md:pl-14">
                  <p className="text-[13px] tracking-[0.2em] uppercase text-gold font-semibold mb-6">
                    現在 · Now
                  </p>
                  <h3 className="text-xl font-bold mb-6 text-navy">高轉換成交型網站</h3>
                  <div className="space-y-5">
                    {[
                      { label: "定位", value: "賣「市場落地」、提供通路對接", note: "結果導向" },
                      { label: "受眾視角", value: "這是我進入東南亞市場的最快捷徑", note: "" },
                      { label: "最終產出", value: "國際市場進入平台", note: "International Market Entry & Expo Platform" },
                    ].map((row) => (
                      <div key={row.label} className="flex items-start gap-3">
                        <span className="text-sm font-semibold text-gold min-w-[68px] mt-0.5">{row.label}</span>
                        <div>
                          <p className="text-[15px] text-navy leading-relaxed font-medium">{row.value}</p>
                          {row.note && <p className="text-[13px] text-muted">({row.note})</p>}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom flow */}
              <div className="bg-surface border-t border-border px-8 py-5">
                <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
                  {[
                    "參加展會（入口）",
                    "進入東南亞市場",
                    "建立通路",
                    "拿到訂單",
                  ].map((step, i) => (
                    <div key={step} className="flex items-center gap-3 md:gap-4">
                      <span className="text-[15px] font-medium text-navy whitespace-nowrap">{step}</span>
                      {i < 3 && (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gold shrink-0">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[
              {
                num: "01",
                title: "跨國展會整合",
                desc: "一站式參展服務，涵蓋越南、馬來西亞等東南亞核心市場，從展位設計到現場執行全程支援。",
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gold">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M2 12h20" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                ),
              },
              {
                num: "02",
                title: "精準商務媒合",
                desc: "透過 FABIA 商業聯盟網絡，為您對接優質經銷商與代理商，每場展會平均促成 50+ 組有效對接。",
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gold">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                ),
              },
              {
                num: "03",
                title: "品牌曝光加速",
                desc: "結合展會、媒體、社群多管道曝光，讓品牌快速進入市場視野，觸及超過 10,000 名專業買家。",
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gold">
                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                  </svg>
                ),
              },
              {
                num: "04",
                title: "展後持續服務",
                desc: "展會結束不代表服務結束。我們提供展後買家追蹤、簽約輔導與市場策略報告，確保合作落地。",
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gold">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <path d="M22 4L12 14.01l-3-3" />
                  </svg>
                ),
              },
            ].map((item, i) => (
              <AnimateIn key={item.num} delay={i * 0.08}>
                <div className="bg-surface rounded-lg p-8 border border-border card-lift h-full">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-11 h-11 rounded-xl bg-gold/10 flex items-center justify-center shrink-0">
                      {item.icon}
                    </div>
                    <div className="flex items-center gap-3">
                      <h3 className="font-semibold text-lg">{item.title}</h3>
                      <span className="text-[12px] text-gold bg-gold/10 px-2 py-0.5 rounded-full font-medium">
                        {item.num}
                      </span>
                    </div>
                  </div>
                  <p className="text-muted text-[15px] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Expos — with banner image */}
      <section id="expos" className="py-32 bg-surface border-t border-border">
        <div className="max-w-[1120px] mx-auto px-6">
          <AnimateIn>
            <p className="section-label">Expos</p>
            <h2 className="text-3xl md:text-[2.5rem] font-bold leading-tight mb-4">
              展會作為實體入口
            </h2>
            <div className="gold-line mb-6" />
          </AnimateIn>

          <AnimateIn delay={0.08}>
            <div className="gradient-navy rounded-xl overflow-hidden mb-16 relative">
              {/* Decorative corner accents */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-gold/5 rounded-full translate-x-1/3 -translate-y-1/3" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gold/5 rounded-full -translate-x-1/3 translate-y-1/3" />

              {/* Header */}
              <div className="px-8 pt-8 pb-4 relative z-10">
                <p className="text-gold text-[13px] tracking-[0.25em] uppercase font-semibold mb-1">
                  Expos as Strategic Gateways
                </p>
                <p className="text-white/40 text-[15px]">
                  三大展會，覆蓋東南亞核心美業市場
                </p>
              </div>

              {/* Divider */}
              <div className="mx-8 h-px bg-white/10" />

              {/* Expo Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5 relative z-10">
                {expoOverview.map((expo, i) => (
                  <div key={expo.subtitle} className="p-8 relative group">
                    {/* Status badge */}
                    <div className="flex items-center gap-2 mb-5">
                      {expo.status === "featured" ? (
                        <span className="inline-flex items-center gap-1.5 text-[11px] tracking-[0.15em] uppercase font-semibold text-gold">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                          Featured
                        </span>
                      ) : (
                        <span className="text-[11px] tracking-[0.15em] uppercase font-semibold text-white/30">
                          Coming Soon
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="text-white font-bold text-lg leading-tight mb-1.5 whitespace-pre-line">
                      {expo.title}
                    </h3>
                    <p className="text-gold/70 text-sm mb-6">{expo.subtitle}</p>

                    {/* Info rows */}
                    <div className="space-y-3">
                      <div className="flex items-start gap-2.5">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gold/60 mt-0.5 shrink-0">
                          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                          <circle cx="12" cy="9" r="2.5" />
                        </svg>
                        <div>
                          <p className="text-white/80 text-[15px] leading-snug">{expo.location}</p>
                          <p className="text-white/30 text-[13px]">{expo.locationEn}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gold/60 shrink-0">
                          <rect x="3" y="3" width="18" height="18" rx="2" />
                          <path d="M3 9h18" />
                          <path d="M9 21V9" />
                        </svg>
                        <p className="text-white/60 text-[15px]">{expo.format}</p>
                      </div>
                    </div>

                    {/* Vertical divider (desktop) */}
                    {i < expoOverview.length - 1 && (
                      <div className="hidden md:block absolute top-8 bottom-8 right-0 w-px bg-white/8" />
                    )}
                  </div>
                ))}
              </div>

              {/* Bottom accent line */}
              <div className="h-[2px] bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
            </div>
          </AnimateIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {expos.map((expo, i) => (
              <AnimateIn key={expo.title} delay={i * 0.08}>
                <div className="bg-white rounded-lg p-8 h-full flex flex-col border border-border card-lift">
                  <span
                    className={`text-[12px] tracking-[0.12em] uppercase font-semibold mb-6 inline-flex items-center gap-2 ${
                      expo.tag === "Featured" ? "text-gold" : "text-muted"
                    }`}
                  >
                    {expo.tag === "Featured" && (
                      <span className="w-1.5 h-1.5 rounded-full bg-gold inline-block" />
                    )}
                    {expo.tag}
                  </span>
                  <h3 className="text-lg font-bold mb-1">{expo.title}</h3>
                  <p className="text-sm text-gold mb-4">{expo.subtitle}</p>
                  <p className="text-[15px] text-muted leading-relaxed flex-1">
                    {expo.desc}
                  </p>
                  {expo.tag === "Featured" ? (
                    <Link
                      href={expo.href}
                      className="mt-8 text-[15px] font-semibold text-navy hover:text-gold transition-colors inline-flex items-center gap-1.5"
                    >
                      了解更多
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M6 3l5 5-5 5" />
                      </svg>
                    </Link>
                  ) : (
                    <span className="mt-8 text-[15px] text-muted/60 italic">
                      敬請期待
                    </span>
                  )}
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* FABIA Preview — with poster image */}
      <section className="py-32 border-t border-border">
        <div className="max-w-[1120px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimateIn>
              <p className="section-label">FABIA Global Alliance</p>
              <h2 className="text-3xl md:text-[2.5rem] font-bold leading-tight mb-4">
                FABIA VIP
                <br />
                Exclusive Event
              </h2>
              <div className="gold-line mb-8" />
              <p className="text-muted text-base leading-relaxed mb-4">
                加入 FABIA 國際商業聯盟，享受 VIP
                專屬展位、品牌頒獎、優先商務媒合等頂級權益。跨越 12
                國的亞太商業網絡，為您的品牌開啟國際化新篇章。
              </p>
              <div className="flex items-center gap-3 mb-8">
                <span className="text-3xl font-bold text-gold">$1,500</span>
                <span className="text-muted text-[15px]">USD / Brand Booth</span>
                <span className="text-[12px] text-muted bg-surface px-3 py-1.5 rounded-full border border-border ml-2">
                  限量名額
                </span>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="/fabia" className="btn-primary">
                  了解 FABIA 方案
                </Link>
                <Link href="/contact" className="btn-ghost">
                  預約諮詢
                </Link>
              </div>
            </AnimateIn>

            <AnimateIn delay={0.12}>
              <Image
                src="/images/fabia-poster.png"
                alt="FABIA VIP Exclusive Event"
                width={600}
                height={900}
                className="rounded-lg w-full max-w-[420px] mx-auto shadow-lg"
              />
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Trust / Partner Marquee */}
      <section className="py-12 border-t border-border bg-surface">
        <div className="max-w-[1120px] mx-auto px-6">
          <AnimateIn>
            <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4 text-muted text-[15px] tracking-wide">
              {[
                "FABIA International Alliance",
                "Vietnam Beauty Association",
                "AMSC ASIA",
                "Taiwan External Trade Council",
                "ASEAN Business Forum",
                "Asia Beauty Summit",
              ].map((partner) => (
                <span key={partner} className="opacity-50 hover:opacity-100 transition-opacity">
                  {partner}
                </span>
              ))}
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 gradient-navy text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-gold/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 rounded-full translate-x-1/3 translate-y-1/3" />
        <div className="max-w-[680px] mx-auto px-6 text-center relative z-10">
          <AnimateIn>
            <p className="text-gold text-[13px] tracking-[0.3em] uppercase mb-6 font-semibold">
              Get Started
            </p>
            <h2 className="text-3xl md:text-[2.5rem] font-bold leading-tight mb-6">
              準備好進入
              <br />
              東南亞市場了嗎？
            </h2>
            <p className="text-white/50 text-lg leading-relaxed mb-10">
              歐瑞會展為您提供一站式展會參展、通路對接與品牌曝光服務
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gold text-white font-semibold px-8 py-3.5 rounded text-[15px] hover:opacity-90 transition-all hover:shadow-lg hover:shadow-gold/20"
              >
                立即諮詢報名
              </Link>
              <Link
                href="/sea-beauty"
                className="border border-white/20 text-white font-semibold px-8 py-3.5 rounded text-[15px] hover:bg-white/10 transition-colors"
              >
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
