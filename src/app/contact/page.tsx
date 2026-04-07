"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import AnimateIn from "@/components/AnimateIn";
import Footer from "@/components/Footer";

const contactInfo = [
  { label: "聯絡人", value: "Shirley Chang" },
  { label: "電話", value: "+886 953 009 113", href: "tel:+886953009113" },
  {
    label: "Email",
    value: "shirley62133@gmail.com",
    href: "mailto:shirley62133@gmail.com",
  },
  { label: "LINE", value: "ivyshirley" },
  { label: "WeChat", value: "S141339" },
  {
    label: "WhatsApp",
    value: "+886 953 009 113",
    href: "https://wa.me/886953009113",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    company: "",
    name: "",
    phone: "",
    email: "",
    interest: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `【OREI Expo 報名】${formData.company} - ${formData.name}`
    );
    const body = encodeURIComponent(
      `公司名稱：${formData.company}\n聯絡人：${formData.name}\n電話：${formData.phone}\nEmail：${formData.email}\n感興趣項目：${formData.interest}\n補充說明：${formData.message}`
    );
    window.location.href = `mailto:shirley62133@gmail.com?subject=${subject}&body=${body}`;
  };

  const inputClass =
    "w-full border border-border/60 rounded-xl px-4 py-3.5 text-base bg-white focus:outline-none focus:ring-2 focus:ring-gold/20 focus:border-gold transition-all placeholder:text-muted/40 hover:border-gold/30";

  return (
    <>
      <Navbar />

      {/* Hero — dark immersive */}
      <section className="pt-[72px] gradient-hero text-white relative overflow-hidden">
        <div className="dot-grid" />
        <div className="max-w-[1120px] mx-auto px-6 py-24 relative z-10">
          <AnimateIn>
            <p className="text-gold text-[14px] tracking-[0.3em] uppercase mb-6 font-semibold flex items-center gap-3">
              <span className="w-8 h-[1.5px] bg-gold inline-block" />
              Contact Us
            </p>
            <h1 className="font-serif text-[clamp(2rem,4vw,3.5rem)] font-bold leading-[1.2] tracking-tight mb-4">
              聯絡我們
            </h1>
            <p className="text-white/50 text-lg max-w-lg">
              歐瑞會展 — 您進入東南亞市場的唯一頂級通道
            </p>
          </AnimateIn>
        </div>
        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Quick contact strip */}
      <section className="py-6">
        <div className="max-w-[1120px] mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gold">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                ),
                label: "電話",
                value: "+886 953 009 113",
                href: "tel:+886953009113",
              },
              {
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gold">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                ),
                label: "Email",
                value: "shirley62133@gmail.com",
                href: "mailto:shirley62133@gmail.com",
              },
              {
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gold">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                  </svg>
                ),
                label: "LINE",
                value: "ivyshirley",
              },
            ].map((item) => (
              <AnimateIn key={item.label} variant="fadeUp">
                <div className="card-glass rounded-2xl py-5 px-6 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[13px] text-muted uppercase tracking-wider">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-base font-medium hover:text-gold transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-base font-medium">{item.value}</p>
                    )}
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-32">
        <div className="max-w-[1120px] mx-auto px-6 pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-20">
            {/* Form */}
            <div className="lg:col-span-3">
              <AnimateIn variant="fadeLeft">
                <h2 className="font-serif text-2xl font-bold mb-2">預約顧問諮詢</h2>
                <p className="text-muted text-base mb-8">填寫以下表單，我們將在 24 小時內與您聯繫</p>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-[15px] font-medium mb-1.5">
                      公司名稱 <span className="text-gold">*</span>
                    </label>
                    <input
                      type="text"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder="請輸入公司名稱"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[15px] font-medium mb-1.5">
                        聯絡人 <span className="text-gold">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className={inputClass}
                        placeholder="姓名"
                      />
                    </div>
                    <div>
                      <label className="block text-[15px] font-medium mb-1.5">
                        電話 <span className="text-gold">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className={inputClass}
                        placeholder="+886..."
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[15px] font-medium mb-1.5">
                      Email <span className="text-gold">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder="email@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-[15px] font-medium mb-1.5">
                      感興趣的項目
                    </label>
                    <select
                      name="interest"
                      value={formData.interest}
                      onChange={handleChange}
                      className={inputClass}
                    >
                      <option value="">請選擇</option>
                      <option value="SEA Beauty Expo">
                        SEA Beauty 國際美容商務媒合展
                      </option>
                      <option value="FABIA VIP">
                        FABIA VIP Exclusive Event
                      </option>
                      <option value="AMSC ASIA">AMSC ASIA 醫美大會</option>
                      <option value="MYCE">MYCE 馬來西亞消費展</option>
                      <option value="多項展會">多項展會 / 全年方案</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[15px] font-medium mb-1.5">
                      補充說明
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className={`${inputClass} resize-none`}
                      placeholder="請簡述您的品牌與需求..."
                    />
                  </div>
                  <button type="submit" className="btn-gold w-full py-4 text-base">
                    送出報名 / 諮詢
                  </button>
                </form>
              </AnimateIn>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-10">
              <AnimateIn delay={0.1} variant="fadeRight">
                <h2 className="font-serif text-2xl font-bold mb-2">聯絡資訊</h2>
                <p className="text-muted text-base mb-6">多管道溝通，為您提供最便捷的聯繫方式</p>
                <div className="space-y-4">
                  {contactInfo.map((item) => (
                    <div key={item.label} className="flex items-start gap-4">
                      <span className="text-[15px] text-muted min-w-[72px]">
                        {item.label}
                      </span>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={
                            item.href.startsWith("http")
                              ? "_blank"
                              : undefined
                          }
                          rel={
                            item.href.startsWith("http")
                              ? "noopener noreferrer"
                              : undefined
                          }
                          className="text-base font-medium hover:text-gold transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span className="text-base font-medium">
                          {item.value}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </AnimateIn>

              <AnimateIn delay={0.2} variant="fadeRight">
                <div className="card-glass rounded-2xl p-6">
                  <h3 className="text-[15px] font-semibold tracking-[0.1em] uppercase text-muted mb-4">
                    掃碼加好友
                  </h3>
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { src: "/images/qr-line.jpeg", label: "LINE" },
                      { src: "/images/qr-wechat.jpeg", label: "WeChat" },
                      { src: "/images/qr-whatsapp.jpeg", label: "WhatsApp" },
                    ].map((qr) => (
                      <div key={qr.label} className="text-center">
                        <Image
                          src={qr.src}
                          alt={`${qr.label} QR Code`}
                          width={120}
                          height={120}
                          className="rounded-xl border border-border/40 mx-auto mb-2 hover:scale-105 transition-transform duration-300"
                        />
                        <p className="text-[13px] text-muted font-medium">{qr.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimateIn>

              {/* Quick links */}
              <AnimateIn delay={0.3} variant="fadeRight">
                <div className="gradient-navy rounded-2xl p-6 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full translate-x-1/3 -translate-y-1/3" />
                  <h3 className="font-serif font-semibold mb-4 relative z-10">快速了解</h3>
                  <div className="space-y-3 relative z-10">
                    {[
                      { label: "SEA Beauty 展會資訊", href: "/sea-beauty" },
                      { label: "FABIA VIP 方案", href: "/fabia" },
                    ].map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        className="flex items-center justify-between text-base text-white/70 hover:text-gold transition-colors group"
                      >
                        {link.label}
                        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:translate-x-1 transition-transform">
                          <path d="M6 3l5 5-5 5" />
                        </svg>
                      </a>
                    ))}
                  </div>
                </div>
              </AnimateIn>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
