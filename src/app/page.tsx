import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import AnimateIn from "@/components/AnimateIn";
import Footer from "@/components/Footer";

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

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="min-h-screen flex items-center pt-[72px]">
        <div className="max-w-[1120px] mx-auto px-6 w-full py-32">
          <AnimateIn>
            <p className="text-[12px] tracking-[0.3em] uppercase text-gold mb-8">
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
            <p className="text-muted text-lg leading-relaxed max-w-lg mb-12">
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
      </section>

      {/* About */}
      <section id="about" className="py-32 border-t border-border">
        <div className="max-w-[1120px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <AnimateIn>
              <p className="text-[12px] tracking-[0.2em] uppercase text-gold mb-4">
                Why OREI Expo
              </p>
              <h2 className="text-3xl md:text-[2.5rem] font-bold leading-tight mb-6">
                為什麼選擇歐瑞會展？
              </h2>
              <p className="text-muted leading-relaxed">
                我們不只是展會組織方。歐瑞會展整合展前市場分析、展中商務媒合、
                展後通路對接，為品牌提供完整的東南亞市場進入方案。
              </p>
            </AnimateIn>

            <div className="space-y-10">
              {[
                {
                  num: "01",
                  title: "跨國展會整合",
                  desc: "一站式參展服務，涵蓋越南、馬來西亞等東南亞核心市場。",
                },
                {
                  num: "02",
                  title: "精準商務媒合",
                  desc: "透過 FABIA 商業聯盟網絡，為您對接優質經銷商與代理商。",
                },
                {
                  num: "03",
                  title: "品牌曝光加速",
                  desc: "結合展會、媒體、社群多管道曝光，讓品牌快速進入市場視野。",
                },
              ].map((item, i) => (
                <AnimateIn key={item.num} delay={i * 0.08}>
                  <div className="flex gap-6">
                    <span className="text-[13px] font-semibold text-gold mt-0.5">
                      {item.num}
                    </span>
                    <div>
                      <h3 className="font-semibold text-lg mb-1.5">
                        {item.title}
                      </h3>
                      <p className="text-muted text-[15px] leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Expos */}
      <section id="expos" className="py-32 bg-surface border-t border-border">
        <div className="max-w-[1120px] mx-auto px-6">
          <AnimateIn>
            <p className="text-[12px] tracking-[0.2em] uppercase text-gold mb-4">
              Expos
            </p>
            <h2 className="text-3xl md:text-[2.5rem] font-bold leading-tight mb-16">
              展會作為實體入口
            </h2>
          </AnimateIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {expos.map((expo, i) => (
              <AnimateIn key={expo.title} delay={i * 0.08}>
                <div className="bg-white rounded-lg p-8 h-full flex flex-col border border-border">
                  <span
                    className={`text-[11px] tracking-[0.12em] uppercase font-semibold mb-6 ${
                      expo.tag === "Featured" ? "text-gold" : "text-muted"
                    }`}
                  >
                    {expo.tag}
                  </span>
                  <h3 className="text-lg font-bold mb-1">{expo.title}</h3>
                  <p className="text-[13px] text-muted mb-4">{expo.subtitle}</p>
                  <p className="text-[14px] text-muted leading-relaxed flex-1">
                    {expo.desc}
                  </p>
                  {expo.tag === "Featured" ? (
                    <Link
                      href={expo.href}
                      className="mt-8 text-[13px] font-semibold text-navy hover:text-gold transition-colors"
                    >
                      了解更多 &rarr;
                    </Link>
                  ) : (
                    <span className="mt-8 text-[13px] text-muted">
                      敬請期待
                    </span>
                  )}
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* FABIA Preview */}
      <section className="py-32 border-t border-border">
        <div className="max-w-[1120px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <AnimateIn>
              <p className="text-[12px] tracking-[0.2em] uppercase text-gold mb-4">
                FABIA Global Alliance
              </p>
              <h2 className="text-3xl md:text-[2.5rem] font-bold leading-tight mb-6">
                FABIA VIP
                <br />
                Exclusive Event
              </h2>
              <p className="text-muted leading-relaxed mb-8">
                加入 FABIA 國際商業聯盟，享受 VIP
                專屬展位、品牌頒獎、優先商務媒合等頂級權益。跨越 12
                國的亞太商業網絡，為您的品牌開啟國際化新篇章。
              </p>
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
                src="/images/fabia-countries.png"
                alt="FABIA 12 countries network"
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
            <h2 className="text-3xl md:text-[2.5rem] font-bold leading-tight mb-6">
              準備好進入
              <br />
              東南亞市場了嗎？
            </h2>
            <p className="text-white/60 leading-relaxed mb-10">
              歐瑞會展為您提供一站式展會參展、通路對接與品牌曝光服務
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gold text-white font-semibold px-8 py-3.5 rounded text-[15px] hover:opacity-90 transition-opacity"
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
