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

export default function SEABeautyPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="pt-[72px]">
        <div className="max-w-[1120px] mx-auto px-6 py-32">
          <AnimateIn>
            <p className="text-[12px] tracking-[0.3em] uppercase text-gold mb-8">
              Featured Expo
            </p>
          </AnimateIn>

          <AnimateIn delay={0.08}>
            <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-bold leading-[1.1] tracking-tight mb-4">
              SEA Beauty Business
              <br />
              Matching Expo
            </h1>
          </AnimateIn>

          <AnimateIn delay={0.12}>
            <p className="text-gold text-lg mb-2">國際美容暨醫美商務媒合展</p>
          </AnimateIn>

          <AnimateIn delay={0.16}>
            <p className="text-muted text-lg leading-relaxed max-w-xl mb-12">
              越南胡志明市首屆大型美容 / 醫美 B2B 對接展，
              為台灣品牌打開東南亞最具潛力的美業市場。
            </p>
          </AnimateIn>

          <AnimateIn delay={0.24}>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">
                立即報名參展
              </Link>
              <a href="#process" className="btn-ghost">
                了解展會流程
              </a>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Key Info */}
      <section className="border-t border-border py-20">
        <div className="max-w-[1120px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border rounded-lg overflow-hidden">
            {[
              { label: "地點", value: "越南胡志明市", sub: "Ho Chi Minh City, Vietnam" },
              { label: "形式", value: "B2B 商務媒合", sub: "品牌展示 + 一對一媒合" },
              { label: "產業", value: "美容 / 醫美", sub: "Beauty & Medical Aesthetics" },
            ].map((info) => (
              <AnimateIn key={info.label}>
                <div className="bg-white p-10 text-center">
                  <p className="text-[11px] tracking-[0.15em] uppercase text-gold font-semibold mb-2">
                    {info.label}
                  </p>
                  <p className="text-xl font-bold mb-1">{info.value}</p>
                  <p className="text-[13px] text-muted">{info.sub}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Venue Photos */}
      <section className="py-32 border-t border-border">
        <div className="max-w-[1120px] mx-auto px-6">
          <AnimateIn>
            <p className="text-[12px] tracking-[0.2em] uppercase text-gold mb-4">
              Gallery
            </p>
            <h2 className="text-3xl font-bold mb-12">展會實景</h2>
          </AnimateIn>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <AnimateIn key={n} delay={n * 0.04}>
                <Image
                  src={`/images/venue-${n}.png`}
                  alt={`展會實景 ${n}`}
                  width={600}
                  height={400}
                  className="rounded-lg w-full h-48 object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* 3-Phase Process */}
      <section id="process" className="py-32 bg-surface border-t border-border">
        <div className="max-w-[1120px] mx-auto px-6">
          <AnimateIn>
            <p className="text-[12px] tracking-[0.2em] uppercase text-gold mb-4">
              Process
            </p>
            <h2 className="text-3xl font-bold mb-16">
              三階段全方位服務
            </h2>
          </AnimateIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {timeline.map((phase, i) => (
              <AnimateIn key={phase.phase} delay={i * 0.1}>
                <div>
                  <span className="text-[13px] font-semibold text-gold">
                    {phase.phase}
                  </span>
                  <h3 className="text-xl font-bold mt-2 mb-1">
                    {phase.title}
                  </h3>
                  <p className="text-[13px] text-muted mb-6">
                    {phase.subtitle}
                  </p>
                  <ul className="space-y-3">
                    {phase.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-[14px] leading-relaxed"
                      >
                        <span className="text-gold mt-1 text-[10px]">&#9679;</span>
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

      {/* Who Should Join */}
      <section className="py-32 border-t border-border">
        <div className="max-w-[680px] mx-auto px-6">
          <AnimateIn>
            <p className="text-[12px] tracking-[0.2em] uppercase text-gold mb-4">
              For You
            </p>
            <h2 className="text-3xl font-bold mb-12">誰適合參展？</h2>
          </AnimateIn>

          <div className="space-y-4">
            {[
              "台灣美容 / 醫美品牌想進入越南市場",
              "保養品、美容儀器、醫美設備廠商",
              "尋找東南亞經銷商 / 代理商的企業",
              "希望透過展會快速建立海外通路",
              "美業連鎖品牌、診所尋求國際合作",
            ].map((item, i) => (
              <AnimateIn key={item} delay={i * 0.06}>
                <div className="flex items-start gap-4 py-4 border-b border-border last:border-0">
                  <span className="text-gold text-[10px] mt-1.5">&#9679;</span>
                  <p className="text-[15px] leading-relaxed">{item}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-navy text-white">
        <div className="max-w-[680px] mx-auto px-6 text-center">
          <AnimateIn>
            <h2 className="text-3xl font-bold mb-6">
              搶佔越南美業市場先機
            </h2>
            <p className="text-white/60 leading-relaxed mb-10">
              名額有限，立即預約顧問諮詢，了解最適合您品牌的參展方案
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
