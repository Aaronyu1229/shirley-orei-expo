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
    "w-full border border-border rounded px-4 py-3 text-[14px] bg-white focus:outline-none focus:ring-1 focus:ring-navy focus:border-navy transition-colors placeholder:text-muted/50";

  return (
    <>
      <Navbar />

      <section className="pt-[72px]">
        <div className="max-w-[1120px] mx-auto px-6 py-32">
          <AnimateIn>
            <p className="text-[12px] tracking-[0.3em] uppercase text-gold mb-8">
              Contact
            </p>
            <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-bold leading-[1.1] tracking-tight mb-4">
              聯絡我們
            </h1>
            <p className="text-muted text-lg max-w-lg">
              歐瑞會展 — 您進入東南亞市場的唯一頂級通道
            </p>
          </AnimateIn>
        </div>
      </section>

      <section className="border-t border-border pb-32">
        <div className="max-w-[1120px] mx-auto px-6 pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-20">
            {/* Form */}
            <div className="lg:col-span-3">
              <AnimateIn>
                <h2 className="text-xl font-bold mb-8">預約顧問諮詢</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-[13px] font-medium mb-1.5">
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
                      <label className="block text-[13px] font-medium mb-1.5">
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
                      <label className="block text-[13px] font-medium mb-1.5">
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
                    <label className="block text-[13px] font-medium mb-1.5">
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
                    <label className="block text-[13px] font-medium mb-1.5">
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
                    <label className="block text-[13px] font-medium mb-1.5">
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
                  <button type="submit" className="btn-primary w-full py-4">
                    送出報名 / 諮詢
                  </button>
                </form>
              </AnimateIn>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-12">
              <AnimateIn delay={0.1}>
                <h2 className="text-xl font-bold mb-6">聯絡資訊</h2>
                <div className="space-y-4">
                  {contactInfo.map((item) => (
                    <div key={item.label} className="flex items-start gap-4">
                      <span className="text-[13px] text-muted min-w-[72px]">
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
                          className="text-[14px] font-medium hover:text-gold transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span className="text-[14px] font-medium">
                          {item.value}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </AnimateIn>

              <AnimateIn delay={0.2}>
                <h3 className="text-[13px] font-semibold tracking-[0.1em] uppercase text-muted mb-4">
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
                        className="rounded border border-border mx-auto mb-2"
                      />
                      <p className="text-[11px] text-muted">{qr.label}</p>
                    </div>
                  ))}
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
