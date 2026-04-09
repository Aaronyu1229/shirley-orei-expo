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
  alternates: {
    canonical: "/fabia",
  },
  openGraph: {
    title: "FABIA VIP Exclusive Event — OREI Expo",
    description:
      "FABIA 國際商業聯盟 VIP 專屬活動。USD $1,500 即享頂級參展體驗。",
    images: [
      {
        url: "/images/venue-5.jpg",
        width: 1200,
        height: 630,
        alt: "FABIA VIP Exclusive Event",
      },
    ],
  },
};

const benefits = [
  {
    num: "01",
    title: "Brand Booth",
    sub: "品牌展位",
    desc: "專屬 VIP 展位，頂級位置與裝潢，全方位展示您的品牌形象。",
  },
  {
    num: "02",
    title: "Product Showcase",
    sub: "產品展示與體驗",
    desc: "產品試用、Giveaway 活動，吸引目標買家關注與互動。",
  },
  {
    num: "03",
    title: "Business Networking",
    sub: "商務媒合",
    desc: "精準 B2B 配對，與來自 12 國的經銷商、代理商面對面洽談。",
  },
  {
    num: "04",
    title: "Awards & Certificate",
    sub: "頒獎典禮與認證",
    desc: "獲得 FABIA 國際認證，提升品牌在東南亞市場的公信力。",
  },
];

const countries = [
  "台灣", "中國", "越南", "馬來西亞", "新加坡", "印尼",
  "菲律賓", "汶萊", "日本", "韓國", "香港", "澳洲",
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "FABIA VIP Exclusive Event — Asia Beauty & Wellness Summit 2026",
  description:
    "FABIA 國際商業聯盟 VIP 專屬活動。USD $1,500 即享頂級參展體驗。",
  startDate: "2026-05-25",
  endDate: "2026-05-26",
  location: {
    "@type": "Place",
    name: "Muong Thanh Luxury Ha Long Centre Hotel",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Ha Long",
      addressCountry: "VN",
    },
  },
  organizer: {
    "@type": "Organization",
    name: "歐瑞會展 OREI Expo",
    url: "https://www.oreiexpo.com",
  },
  offers: {
    "@type": "Offer",
    price: "1500",
    priceCurrency: "USD",
    availability: "https://schema.org/LimitedAvailability",
  },
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  eventStatus: "https://schema.org/EventScheduled",
  image: "https://www.oreiexpo.com/images/venue-5.jpg",
};

export default function FABIAPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      {/* ═══════ Hero ═══════ */}
      <section className="relative min-h-[var(--vh-fallback,100vh)] flex items-center">
        <Image
          src="/images/hero-fabia-gala.jpg"
          alt="FABIA VIP 頂級晚宴會場"
          fill
          className="object-cover"
          priority
        />
        <div className="hero-overlay" />

        <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-10 w-full pt-24 pb-16 sm:py-32">
          <div className="max-w-2xl">
            <AnimateIn variant="fadeIn">
              <p className="text-xs tracking-[0.3em] uppercase text-white/60 font-medium mb-6">
                FABIA Global Alliance
              </p>
            </AnimateIn>

            <AnimateIn variant="slideUp" delay={0.08}>
              <h1 className="font-serif text-[clamp(2.5rem,5vw,4rem)] font-bold leading-[1.08] tracking-tight text-white mb-8">
                FABIA VIP
                <br />
                Exclusive Event
              </h1>
            </AnimateIn>

            <AnimateIn delay={0.16}>
              <p className="text-white/60 text-lg leading-relaxed max-w-xl mb-6">
                加入 FABIA 國際商業聯盟，開啟品牌國際化之路。 跨越 12
                國的亞太商業網絡，為您的品牌帶來最高規格的展示舞台。
              </p>
            </AnimateIn>

            <AnimateIn delay={0.24}>
              <div className="flex flex-wrap items-baseline gap-3 sm:gap-4 mb-8 sm:mb-10">
                <span className="text-3xl sm:text-4xl font-bold text-white font-serif">$1,500</span>
                <span className="text-white/50 text-xs sm:text-sm">USD / Brand Booth</span>
                <span className="text-xs text-white/50 border border-white/20 px-2 sm:px-3 py-1 sm:py-1.5">
                  26 / 05 / 2026
                </span>
              </div>
            </AnimateIn>

            <AnimateIn delay={0.32}>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="btn-accent">
                  立即申請
                </Link>
                <a href="#benefits" className="btn-outline-light">
                  了解 VIP 權益
                </a>
              </div>
            </AnimateIn>
          </div>
        </div>

        <div className="hero-fade-bottom" />
      </section>

      {/* ═══════ Benefits ═══════ */}
      <section id="benefits" className="py-24 lg:py-32">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <AnimateIn>
            <p className="section-label">Benefits</p>
            <h2 className="font-serif text-[clamp(2rem,3.5vw,3rem)] font-bold mb-4">
              VIP 專屬權益
            </h2>
            <p className="text-muted text-[17px] max-w-lg mb-16">
              USD $1,500 即享四大頂級權益，為您的品牌帶來最大化曝光與商機
            </p>
          </AnimateIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
            {benefits.map((item, i) => (
              <AnimateIn key={item.num} delay={i * 0.08}>
                <div className="bg-white p-6 sm:p-10 h-full">
                  <span className="text-xs tracking-[0.2em] text-accent font-semibold">{item.num}</span>
                  <h3 className="text-lg sm:text-xl font-bold mt-3 mb-1">{item.title}</h3>
                  <p className="text-sm text-accent mb-4">{item.sub}</p>
                  <p className="text-muted text-[15px] leading-relaxed">{item.desc}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ Asia Beauty Summit 2026 ═══════ */}
      <section className="py-24 lg:py-32 bg-surface">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimateIn variant="fadeLeft">
              <p className="section-label">FABIA Season 9</p>
              <h2 className="font-serif text-[clamp(2rem,3.5vw,3rem)] font-bold leading-tight mb-6">
                Asia Beauty & Wellness
                <br />
                Summit 2026
              </h2>
              <p className="text-muted text-[17px] leading-relaxed mb-6">
                第九屆亞洲美業大賽暨全球美業聯盟總裁峰會，匯聚亞太美業頂級領袖。
              </p>
              <div className="space-y-3 mb-8">
                {[
                  { label: "日期", value: "2026 年 5 月 25 - 26 日" },
                  { label: "地點", value: "越南下龍灣 Muong Thanh Luxury Ha Long Centre Hotel" },
                  { label: "時間", value: "15:30 - 20:00" },
                ].map((info) => (
                  <div key={info.label} className="flex gap-4 items-start">
                    <span className="text-sm text-accent font-semibold min-w-[40px]">{info.label}</span>
                    <span className="text-[15px] text-muted">{info.value}</span>
                  </div>
                ))}
              </div>
              <Link href="/contact" className="btn-primary">了解更多</Link>
            </AnimateIn>

            <AnimateIn delay={0.12} variant="fadeRight">
              <Image
                src="/images/venue-5.jpg"
                alt="Asia Beauty & Wellness Summit 2026"
                width={600}
                height={800}
                className="w-full max-w-[440px] mx-auto"
              />
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ═══════ Asian Beauty Awards ═══════ */}
      <section className="py-24 lg:py-32">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimateIn variant="fadeLeft">
              <div className="space-y-4">
                <Image
                  src="/images/fabia-season9-poster.jpg"
                  alt="第九屆亞洲美業大賽 頒獎盛典海報"
                  width={600}
                  height={900}
                  className="w-full max-w-[440px] mx-auto"
                />
                <Image
                  src="/images/venue-6.jpg"
                  alt="頒獎盛典活動現場"
                  width={600}
                  height={400}
                  className="w-full max-w-[440px] mx-auto"
                />
                <Image
                  src="/images/hero-conference.jpg"
                  alt="國際商務峰會現場"
                  width={600}
                  height={400}
                  className="w-full max-w-[440px] mx-auto"
                />
              </div>
            </AnimateIn>

            <AnimateIn delay={0.12} variant="fadeRight">
              <p className="section-label">Awards</p>
              <h2 className="font-serif text-[clamp(2rem,3.5vw,3rem)] font-bold leading-tight mb-6">
                第九屆亞洲美業大賽
                <br />
                頒獎盛典
              </h2>
              <p className="text-muted text-[17px] leading-relaxed mb-6">
                立足越南，布局亞洲，放眼全球。匯聚行業領袖與美學先鋒，
                見證美業榮光，共話產業未來。越南官方主辦，下龍灣榮耀啟幕。
              </p>
              <div className="space-y-3 mb-8">
                {[
                  { label: "日期", value: "2026 年 5 月 24 - 29 日" },
                  { label: "地點", value: "越南下龍灣 Vinh Ha Long" },
                ].map((info) => (
                  <div key={info.label} className="flex gap-4 items-start">
                    <span className="text-sm text-accent font-semibold min-w-[40px]">{info.label}</span>
                    <span className="text-[15px] text-muted">{info.value}</span>
                  </div>
                ))}
              </div>
              <Link href="/contact" className="btn-primary">報名參加</Link>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ═══════ Network ═══════ */}
      <section className="py-24 lg:py-32 bg-surface">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <AnimateIn variant="fadeLeft">
              <p className="section-label">Network</p>
              <h2 className="font-serif text-[clamp(2rem,3.5vw,3rem)] font-bold leading-tight mb-6">
                跨越 12 國的亞太商業網絡
              </h2>
              <p className="text-muted text-[17px] leading-relaxed mb-8">
                FABIA 國際商業聯盟覆蓋亞太地區 12
                個國家與地區，為會員品牌提供最廣泛的商務對接網絡。
              </p>
              <div className="flex flex-wrap gap-2">
                {countries.map((c) => (
                  <span
                    key={c}
                    className="text-xs sm:text-sm text-dark border border-border px-3 sm:px-4 py-1.5 sm:py-2 hover:border-accent hover:text-accent transition-all duration-200 cursor-default"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </AnimateIn>

            <AnimateIn delay={0.12} variant="fadeRight">
              <Image
                src="/images/fabia-countries.jpg"
                alt="FABIA 12 countries"
                width={800}
                height={400}
                className="w-full"
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
              名額有限
              <br />
              立即申請 FABIA VIP
            </h2>
            <p className="text-white/50 text-lg leading-relaxed mb-4">
              2026 年 5 月 26 日，與來自 12 國的品牌領袖齊聚一堂
            </p>
            <p className="text-2xl font-bold text-white mb-10 font-serif">
              USD $1,500 / Brand Booth
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
