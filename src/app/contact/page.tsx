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

type FormStatus = "idle" | "submitting" | "success" | "error";

interface FormErrors {
  company?: string;
  name?: string;
  phone?: string;
  email?: string;
}

function validateForm(data: {
  company: string;
  name: string;
  phone: string;
  email: string;
}): FormErrors {
  const errors: FormErrors = {};
  if (!data.company.trim()) errors.company = "請輸入公司名稱";
  if (!data.name.trim()) errors.name = "請輸入聯絡人姓名";
  if (!data.phone.trim()) errors.phone = "請輸入電話號碼";
  if (!data.email.trim()) {
    errors.email = "請輸入 Email";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "請輸入有效的 Email 格式";
  }
  return errors;
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    company: "",
    name: "",
    phone: "",
    email: "",
    interest: "",
    message: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error on change if field was touched
    if (touched[name] && errors[name as keyof FormErrors]) {
      const newErrors = { ...errors };
      delete newErrors[name as keyof FormErrors];
      setErrors(newErrors);
    }
  };

  const handleBlur = (
    e: React.FocusEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name } = e.target;
    setTouched({ ...touched, [name]: true });
    // Validate single field on blur
    const fieldErrors = validateForm(formData);
    if (fieldErrors[name as keyof FormErrors]) {
      setErrors({ ...errors, [name as keyof FormErrors]: fieldErrors[name as keyof FormErrors] });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate all fields
    const fieldErrors = validateForm(formData);
    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors);
      setTouched({ company: true, name: true, phone: true, email: true });
      return;
    }

    setStatus("submitting");
    setErrors({});

    try {
      // Build mailto link as fallback (no backend)
      const subject = encodeURIComponent(
        `【OREI Expo 報名】${formData.company} - ${formData.name}`
      );
      const body = encodeURIComponent(
        `公司名稱：${formData.company}\n聯絡人：${formData.name}\n電話：${formData.phone}\nEmail：${formData.email}\n感興趣項目：${formData.interest}\n補充說明：${formData.message}`
      );
      window.location.href = `mailto:shirley62133@gmail.com?subject=${subject}&body=${body}`;

      // Show success after brief delay (mailto opens email client)
      await new Promise((resolve) => setTimeout(resolve, 500));
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  const handleReset = () => {
    setFormData({
      company: "",
      name: "",
      phone: "",
      email: "",
      interest: "",
      message: "",
    });
    setStatus("idle");
    setErrors({});
    setTouched({});
  };

  const inputClass = (field?: keyof FormErrors) =>
    `w-full border rounded-xl px-4 py-3.5 text-base bg-white focus:outline-none focus:ring-2 focus:ring-gold/20 focus:border-gold transition-all placeholder:text-muted/40 hover:border-gold/30 ${
      field && errors[field] && touched[field]
        ? "border-red-400 focus:ring-red-200 focus:border-red-400"
        : "border-border/60"
    }`;

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="pt-[72px] gradient-hero text-white relative overflow-hidden">
        <div className="max-w-[1120px] mx-auto px-6 py-24 relative z-10">
          <AnimateIn>
            <p className="section-label mb-6 !text-gold/80">Contact Us</p>
            <h1 className="font-serif text-[clamp(2rem,4vw,3.5rem)] font-bold leading-[1.2] tracking-tight mb-4">
              聯絡我們
            </h1>
            <p className="text-white/50 text-lg max-w-lg">
              歐瑞會展 — 您進入東南亞市場的唯一頂級通道
            </p>
          </AnimateIn>
        </div>
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

                {status === "success" ? (
                  <div className="form-success">
                    <p className="font-semibold mb-1">感謝您的諮詢！</p>
                    <p className="text-sm mb-4">
                      您的 Email 應用程式已開啟，請確認並送出郵件。我們將在 24 小時內回覆。
                    </p>
                    <button
                      onClick={handleReset}
                      className="btn-outline text-sm px-4 py-2"
                    >
                      填寫新的表單
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                    {status === "error" && (
                      <div className="form-error">
                        <p className="font-semibold">送出失敗</p>
                        <p className="text-sm">
                          請稍後再試，或直接透過 Email / LINE 聯繫我們。
                        </p>
                      </div>
                    )}

                    <div>
                      <label htmlFor="company" className="block text-[15px] font-medium mb-1.5">
                        公司名稱 <span className="text-gold">*</span>
                      </label>
                      <input
                        id="company"
                        type="text"
                        name="company"
                        required
                        autoComplete="organization"
                        value={formData.company}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={inputClass("company")}
                        placeholder="請輸入公司名稱"
                      />
                      {errors.company && touched.company && (
                        <p className="input-error-text">{errors.company}</p>
                      )}
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="block text-[15px] font-medium mb-1.5">
                          聯絡人 <span className="text-gold">*</span>
                        </label>
                        <input
                          id="name"
                          type="text"
                          name="name"
                          required
                          autoComplete="name"
                          value={formData.name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={inputClass("name")}
                          placeholder="姓名"
                        />
                        {errors.name && touched.name && (
                          <p className="input-error-text">{errors.name}</p>
                        )}
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-[15px] font-medium mb-1.5">
                          電話 <span className="text-gold">*</span>
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          name="phone"
                          required
                          autoComplete="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={inputClass("phone")}
                          placeholder="+886..."
                        />
                        {errors.phone && touched.phone && (
                          <p className="input-error-text">{errors.phone}</p>
                        )}
                      </div>
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-[15px] font-medium mb-1.5">
                        Email <span className="text-gold">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        required
                        autoComplete="email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={inputClass("email")}
                        placeholder="email@example.com"
                      />
                      {errors.email && touched.email && (
                        <p className="input-error-text">{errors.email}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="interest" className="block text-[15px] font-medium mb-1.5">
                        感興趣的項目
                      </label>
                      <select
                        id="interest"
                        name="interest"
                        value={formData.interest}
                        onChange={handleChange}
                        className={inputClass()}
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
                      <label htmlFor="message" className="block text-[15px] font-medium mb-1.5">
                        補充說明
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className={`${inputClass()} resize-none`}
                        placeholder="請簡述您的品牌與需求..."
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="btn-gold w-full py-4 text-base disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {status === "submitting" ? "送出中..." : "送出報名 / 諮詢"}
                    </button>
                  </form>
                )}
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
