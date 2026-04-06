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

export default function FABIAPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="pt-[72px]">
        <div className="max-w-[1120px] mx-auto px-6 py-32">
          <AnimateIn>
            <p className="text-[12px] tracking-[0.3em] uppercase text-gold mb-8">
              FABIA Global Alliance
            </p>
          </AnimateIn>

          <AnimateIn delay={0.08}>
            <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-bold leading-[1.1] tracking-tight mb-6">
              FABIA VIP
              <br />
              Exclusive Event
            </h1>
          </AnimateIn>

          <AnimateIn delay={0.12}>
            <p className="text-muted text-lg leading-relaxed max-w-xl mb-4">
              加入 FABIA 國際商業聯盟，開啟品牌國際化之路。
              跨越 12 國的亞太商業網絡，為您的品牌帶來最高規格的展示舞台。
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
      </section>

      {/* Highlights */}
      <section className="border-t border-border py-20">
        <div className="max-w-[1120px] mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-lg overflow-hidden">
            {[
              "Connect with Industry Leaders",
              "Access Southeast Asia Market",
              "Exclusive VIP Access",
              "Gain Recognition & Partnerships",
            ].map((item) => (
              <AnimateIn key={item}>
                <div className="bg-white p-8 text-center">
                  <p className="text-[14px] font-medium">{item}</p>
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
            <p className="text-[12px] tracking-[0.2em] uppercase text-gold mb-4">
              Benefits
            </p>
            <h2 className="text-3xl font-bold mb-16">VIP 專屬權益</h2>
          </AnimateIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
            {benefits.map((item, i) => (
              <AnimateIn key={item.num} delay={i * 0.08}>
                <div className="flex gap-6">
                  <span className="text-[13px] font-semibold text-gold mt-0.5">
                    {item.num}
                  </span>
                  <div>
                    <h3 className="font-semibold text-lg mb-0.5">
                      {item.title}
                    </h3>
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

      {/* Network */}
      <section className="py-32 bg-surface border-t border-border">
        <div className="max-w-[1120px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <AnimateIn>
              <p className="text-[12px] tracking-[0.2em] uppercase text-gold mb-4">
                Network
              </p>
              <h2 className="text-3xl font-bold mb-6">
                跨越 12 國的亞太商業網絡
              </h2>
              <p className="text-muted leading-relaxed mb-8">
                FABIA 國際商業聯盟覆蓋亞太地區 12
                個國家與地區，為會員品牌提供最廣泛的商務對接網絡。
              </p>
              <div className="flex flex-wrap gap-2">
                {countries.map((c) => (
                  <span
                    key={c}
                    className="text-[13px] text-muted border border-border px-3 py-1.5 rounded-full"
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
      <section className="py-32 bg-navy text-white">
        <div className="max-w-[680px] mx-auto px-6 text-center">
          <AnimateIn>
            <h2 className="text-3xl font-bold mb-6">
              名額有限
              <br />
              立即申請 FABIA VIP
            </h2>
            <p className="text-white/60 leading-relaxed mb-10">
              2026 年 5 月 26 日，與來自 12 國的品牌領袖齊聚一堂
            </p>
            <Link
              href="/contact"
              className="bg-gold text-white font-semibold px-8 py-3.5 rounded text-[15px] hover:opacity-90 transition-opacity inline-block"
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
