import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import AnimateIn from "@/components/AnimateIn";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "FABIA VIP Exclusive Event — OREI Expo",
  description:
    "FABIA 國際商業聯盟 VIP 專屬活動。USD $1,500 即享頂級參展體驗。",
};

const benefits = [
  {
    num: "01",
    title: "Brand Booth",
    sub: "品牌展位",
    desc: "專屬 VIP 展位，頂級位置與裝潢，全方位展示您的品牌形象。",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gold">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18" />
        <path d="M9 21V9" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Product Showcase",
    sub: "產品展示與體驗",
    desc: "產品試用、Giveaway 活動，吸引目標買家關注與互動。",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gold">
        <path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Business Networking",
    sub: "商務媒合",
    desc: "精準 B2B 配對，與來自 12 國的經銷商、代理商面對面洽談。",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gold">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Awards & Certificate",
    sub: "頒獎典禮與認證",
    desc: "獲得 FABIA 國際認證，提升品牌在東南亞市場的公信力。",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gold">
        <circle cx="12" cy="8" r="7" />
        <path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12" />
      </svg>
    ),
  },
];

const countries = [
  "台灣",
  "中國",
  "越南",
  "馬來西亞",
  "新加坡",
  "印尼",
  "菲律賓",
  "汶萊",
  "日本",
  "韓國",
  "香港",
  "澳洲",
];

export default function FABIAPage() {
  return (
    <>
      <Navbar />

      {/* Hero — with FABIA poster */}
      <section className="pt-[72px]">
        <div className="max-w-[1120px] mx-auto px-6 py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <AnimateIn>
                <p className="section-label mb-8">FABIA Global Alliance</p>
              </AnimateIn>

              <AnimateIn delay={0.08}>
                <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-bold leading-[1.1] tracking-tight mb-4">
                  FABIA VIP
                  <br />
                  Exclusive Event
                </h1>
                <div className="gold-line mb-6" />
              </AnimateIn>

              <AnimateIn delay={0.12}>
                <p className="text-muted text-lg leading-relaxed max-w-xl mb-4">
                  加入 FABIA 國際商業聯盟，開啟品牌國際化之路。 跨越 12
                  國的亞太商業網絡，為您的品牌帶來最高規格的展示舞台。
                </p>
              </AnimateIn>

              <AnimateIn delay={0.16}>
                <div className="flex items-center gap-6 mb-12">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-gold">$1,500</span>
                    <span className="text-muted text-sm">USD / Brand Booth</span>
                  </div>
                  <span className="text-[12px] text-muted bg-surface px-3 py-1 rounded-full border border-border">
                    26 / 05 / 2026
                  </span>
                </div>
              </AnimateIn>

              <AnimateIn delay={0.24}>
                <div className="flex flex-wrap gap-4">
                  <Link href="/contact" className="btn-primary">
                    立即申請
                  </Link>
                  <a href="#benefits" className="btn-ghost">
                    了解 VIP 權益
                  </a>
                </div>
              </AnimateIn>
            </div>

            <AnimateIn delay={0.16}>
              <Image
                src="/images/fabia-poster.png"
                alt="FABIA VIP Exclusive Event 海報"
                width={600}
                height={900}
                className="rounded-lg w-full max-w-[420px] mx-auto shadow-xl"
                priority
              />
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="border-t border-border py-20">
        <div className="max-w-[1120px] mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-lg overflow-hidden">
            {[
              { en: "Connect with Industry Leaders", zh: "對接行業領袖" },
              { en: "Access Southeast Asia Market", zh: "進入東南亞市場" },
              { en: "Exclusive VIP Access", zh: "VIP 專屬權益" },
              { en: "Gain Recognition & Partnerships", zh: "獲得認證與合作" },
            ].map((item, i) => (
              <AnimateIn key={item.en} delay={i * 0.06}>
                <div className="bg-white p-8 text-center">
                  <p className="text-[14px] font-medium mb-1">{item.en}</p>
                  <p className="text-[12px] text-muted">{item.zh}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="py-32 border-t border-border">
        <div className="max-w-[1120px] mx-auto px-6">
          <AnimateIn>
            <p className="section-label">Benefits</p>
            <h2 className="text-3xl font-bold mb-4">VIP 專屬權益</h2>
            <p className="text-muted text-[15px] max-w-lg mb-4">
              USD $1,500 即享四大頂級權益，為您的品牌帶來最大化曝光與商機
            </p>
            <div className="gold-line mb-16" />
          </AnimateIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((item, i) => (
              <AnimateIn key={item.num} delay={i * 0.08}>
                <div className="flex gap-6 bg-surface rounded-lg p-8 border border-border card-lift">
                  <div className="shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center">
                      {item.icon}
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="font-semibold text-lg">
                        {item.title}
                      </h3>
                      <span className="text-[11px] text-gold bg-gold/10 px-2 py-0.5 rounded-full font-medium">
                        {item.num}
                      </span>
                    </div>
                    <p className="text-[13px] text-gold mb-2">{item.sub}</p>
                    <p className="text-[14px] text-muted leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Asia Beauty Summit 2026 — poster showcase */}
      <section className="py-32 bg-surface border-t border-border">
        <div className="max-w-[1120px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimateIn>
              <p className="section-label">FABIA Season 9</p>
              <h2 className="text-3xl font-bold mb-4">
                Asia Beauty & Wellness
                <br />
                Summit 2026
              </h2>
              <div className="gold-line mb-6" />
              <p className="text-muted leading-relaxed mb-4">
                第九屆亞洲美業大賽暨全球美業聯盟總裁峰會，匯聚亞太美業頂級領袖。
              </p>
              <div className="space-y-3 mb-8">
                {[
                  { label: "日期", value: "2026 年 5 月 25 - 26 日" },
                  {
                    label: "地點",
                    value: "越南下龍灣 Muong Thanh Luxury Ha Long Centre Hotel",
                  },
                  { label: "時間", value: "15:30 - 20:00" },
                ].map((info) => (
                  <div key={info.label} className="flex gap-4 items-start">
                    <span className="text-[13px] text-gold font-semibold min-w-[40px]">
                      {info.label}
                    </span>
                    <span className="text-[14px] text-muted">{info.value}</span>
                  </div>
                ))}
              </div>
              <Link href="/contact" className="btn-primary">
                了解更多
              </Link>
            </AnimateIn>

            <AnimateIn delay={0.12}>
              <Image
                src="/images/venue-5.png"
                alt="Asia Beauty & Wellness Summit 2026"
                width={600}
                height={800}
                className="rounded-lg w-full max-w-[440px] mx-auto shadow-xl"
              />
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Asian Beauty Awards */}
      <section className="py-32 border-t border-border">
        <div className="max-w-[1120px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimateIn>
              <Image
                src="/images/venue-6.png"
                alt="第九屆亞洲美業大賽 頒獎盛典"
                width={600}
                height={800}
                className="rounded-lg w-full max-w-[440px] mx-auto shadow-xl"
              />
            </AnimateIn>

            <AnimateIn delay={0.12}>
              <p className="section-label">Awards</p>
              <h2 className="text-3xl font-bold mb-4">
                第九屆亞洲美業大賽
                <br />
                頒獎盛典
              </h2>
              <div className="gold-line mb-6" />
              <p className="text-muted leading-relaxed mb-6">
                立足越南，布局亞洲，放眼全球。跨越美學交鋒、行業領袖齊聚，
                見證美業榮光，共話產業未來。越南官方主辦，下龍灣榮耀啟幕。
              </p>
              <div className="space-y-3 mb-8">
                {[
                  { label: "日期", value: "2026 年 5 月 24 - 29 日" },
                  { label: "地點", value: "越南下龍灣 Vinh Ha Long" },
                ].map((info) => (
                  <div key={info.label} className="flex gap-4 items-start">
                    <span className="text-[13px] text-gold font-semibold min-w-[40px]">
                      {info.label}
                    </span>
                    <span className="text-[14px] text-muted">{info.value}</span>
                  </div>
                ))}
              </div>
              <Link href="/contact" className="btn-primary">
                報名參加
              </Link>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Network — 12 countries */}
      <section className="py-32 bg-surface border-t border-border">
        <div className="max-w-[1120px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <AnimateIn>
              <p className="section-label">Network</p>
              <h2 className="text-3xl font-bold mb-4">
                跨越 12 國的亞太商業網絡
              </h2>
              <div className="gold-line mb-6" />
              <p className="text-muted leading-relaxed mb-8">
                FABIA 國際商業聯盟覆蓋亞太地區 12
                個國家與地區，為會員品牌提供最廣泛的商務對接網絡。
              </p>
              <div className="flex flex-wrap gap-2">
                {countries.map((c, i) => (
                  <span
                    key={c}
                    className="text-[13px] text-navy border border-border px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors cursor-default"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </AnimateIn>

            <AnimateIn delay={0.12}>
              <Image
                src="/images/fabia-countries.png"
                alt="FABIA 12 countries"
                width={800}
                height={400}
                className="rounded-lg w-full"
              />
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 gradient-navy text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-gold/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 rounded-full translate-x-1/3 translate-y-1/3" />
        <div className="max-w-[680px] mx-auto px-6 text-center relative z-10">
          <AnimateIn>
            <p className="text-gold text-[12px] tracking-[0.3em] uppercase mb-6 font-semibold">
              Apply Now
            </p>
            <h2 className="text-3xl font-bold mb-6">
              名額有限
              <br />
              立即申請 FABIA VIP
            </h2>
            <p className="text-white/50 leading-relaxed mb-4">
              2026 年 5 月 26 日，與來自 12 國的品牌領袖齊聚一堂
            </p>
            <p className="text-2xl font-bold text-gold mb-10">
              USD $1,500 / Brand Booth
            </p>
            <Link
              href="/contact"
              className="bg-gold text-white font-semibold px-8 py-3.5 rounded text-[15px] hover:opacity-90 transition-all hover:shadow-lg hover:shadow-gold/20 inline-block"
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
