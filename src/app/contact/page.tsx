"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import AnimateIn from "@/components/AnimateIn";
import Footer from "@/components/Footer";

const contactInfo = [
  { label: "聯絡人", value: "Shirley Chang" },
  { label: "電話", value: "+886 953 009 113", href: "tel:+886953009113" },
  { label: "Email", value: "shirley62133@gmail.com", href: "mailto:shirley62133@gmail.com" },
  { label: "LINE", value: "ivyshirley" },
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
  if (!data.phone.trim()) {
    errors.phone = "請輸入電話號碼";
  } else if (!/^[+\d][\d\s\-()]{6,}$/.test(data.phone.trim())) {
    errors.phone = "請輸入有效的電話號碼格式";
  }
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
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (touched[name] && errors[name as keyof FormErrors]) {
      const newErrors = { ...errors };
      delete newErrors[name as keyof FormErrors];
      setErrors(newErrors);
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name } = e.target;
    setTouched({ ...touched, [name]: true });
    const fieldErrors = validateForm(formData);
    if (fieldErrors[name as keyof FormErrors]) {
      setErrors({ ...errors, [name as keyof FormErrors]: fieldErrors[name as keyof FormErrors] });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const fieldErrors = validateForm(formData);
    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors);
      setTouched({ company: true, name: true, phone: true, email: true });
      return;
    }

    setStatus("submitting");
    setErrors({});

    try {
      const subject = encodeURIComponent(
        `【OREI Expo 報名】${formData.company} - ${formData.name}`
      );
      const body = encodeURIComponent(
        `公司名稱：${formData.company}\n聯絡人：${formData.name}\n電話：${formData.phone}\nEmail：${formData.email}\n感興趣項目：${formData.interest}\n補充說明：${formData.message}`
      );
      window.location.href = `mailto:shirley62133@gmail.com?subject=${subject}&body=${body}`;
      await new Promise((resolve) => setTimeout(resolve, 500));
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  const handleReset = () => {
    setFormData({ company: "", name: "", phone: "", email: "", interest: "", message: "" });
    setStatus("idle");
    setErrors({});
    setTouched({});
  };

  const inputClass = (field?: keyof FormErrors) =>
    `w-full border px-4 py-3.5 text-[15px] bg-white focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all placeholder:text-muted/40 ${
      field && errors[field] && touched[field]
        ? "border-red-400 focus:ring-red-200 focus:border-red-400"
        : "border-border"
    }`;

  return (
    <>
      <Navbar />

      {/* ═══════ Hero ═══════ */}
      <section className="relative min-h-[45vh] sm:min-h-[50vh] flex items-center">
        <Image
          src="/images/venue-3.jpg"
          alt="歐瑞會展商務交流現場"
          fill
          className="object-cover"
          priority
        />
        <div className="hero-overlay" />

        <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-10 w-full pt-24 pb-16 sm:py-32">
          <div className="max-w-2xl">
            <AnimateIn variant="fadeIn">
              <p className="text-xs tracking-[0.3em] uppercase text-white/60 font-medium mb-6">
                Contact Us
              </p>
            </AnimateIn>
            <AnimateIn variant="slideUp" delay={0.1}>
              <h1 className="font-serif text-[clamp(2.5rem,5vw,4rem)] font-bold leading-[1.1] text-white mb-4">
                聯絡我們
              </h1>
            </AnimateIn>
            <AnimateIn delay={0.2}>
              <p className="text-white/50 text-lg">
                歐瑞會展 — 您進入東南亞市場的唯一頂級通道
              </p>
            </AnimateIn>
          </div>
        </div>

        <div className="hero-fade-bottom" />
      </section>

      {/* ═══════ Quick contact ═══════ */}
      <section className="py-8 border-b border-border">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { label: "電話", value: "+886 953 009 113", href: "tel:+886953009113" },
              { label: "Email", value: "shirley62133@gmail.com", href: "mailto:shirley62133@gmail.com" },
              { label: "LINE", value: "ivyshirley" },
            ].map((item) => (
              <AnimateIn key={item.label}>
                <div className="py-4 text-center">
                  <p className="text-xs tracking-[0.2em] uppercase text-muted font-medium mb-2">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="text-[15px] font-medium hover:text-accent transition-colors">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-[15px] font-medium">{item.value}</p>
                  )}
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ Form + Sidebar ═══════ */}
      <section className="py-16 sm:py-24 lg:py-32">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 sm:gap-20">
            {/* Form */}
            <div className="lg:col-span-3">
              <AnimateIn variant="fadeLeft">
                <h2 className="font-serif text-2xl font-bold mb-2">預約顧問諮詢</h2>
                <p className="text-muted text-[15px] mb-8">填寫以下表單，我們將在 24 小時內與您聯繫</p>

                {status === "success" ? (
                  <div className="form-success">
                    <p className="font-semibold mb-1">感謝您的諮詢！</p>
                    <p className="text-sm mb-4">
                      您的 Email 應用程式已開啟，請確認並送出郵件。我們將在 24 小時內回覆。
                    </p>
                    <button onClick={handleReset} className="btn-outline text-sm px-4 py-2">
                      填寫新的表單
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                    {status === "error" && (
                      <div className="form-error">
                        <p className="font-semibold">送出失敗</p>
                        <p className="text-sm">請稍後再試，或直接透過 Email / LINE 聯繫我們。</p>
                      </div>
                    )}

                    <div>
                      <label htmlFor="company" className="block text-sm font-medium mb-1.5">
                        公司名稱 <span className="text-accent">*</span>
                      </label>
                      <input
                        id="company" type="text" name="company" required autoComplete="organization"
                        value={formData.company} onChange={handleChange} onBlur={handleBlur}
                        className={inputClass("company")} placeholder="請輸入公司名稱"
                      />
                      {errors.company && touched.company && <p className="input-error-text">{errors.company}</p>}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-1.5">
                          聯絡人 <span className="text-accent">*</span>
                        </label>
                        <input
                          id="name" type="text" name="name" required autoComplete="name"
                          value={formData.name} onChange={handleChange} onBlur={handleBlur}
                          className={inputClass("name")} placeholder="姓名"
                        />
                        {errors.name && touched.name && <p className="input-error-text">{errors.name}</p>}
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium mb-1.5">
                          電話 <span className="text-accent">*</span>
                        </label>
                        <input
                          id="phone" type="tel" name="phone" required autoComplete="tel"
                          value={formData.phone} onChange={handleChange} onBlur={handleBlur}
                          className={inputClass("phone")} placeholder="+886..."
                        />
                        {errors.phone && touched.phone && <p className="input-error-text">{errors.phone}</p>}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-1.5">
                        Email <span className="text-accent">*</span>
                      </label>
                      <input
                        id="email" type="email" name="email" required autoComplete="email"
                        value={formData.email} onChange={handleChange} onBlur={handleBlur}
                        className={inputClass("email")} placeholder="email@example.com"
                      />
                      {errors.email && touched.email && <p className="input-error-text">{errors.email}</p>}
                    </div>

                    <div>
                      <label htmlFor="interest" className="block text-sm font-medium mb-1.5">
                        感興趣的項目
                      </label>
                      <select
                        id="interest" name="interest" value={formData.interest}
                        onChange={handleChange} className={inputClass()}
                      >
                        <option value="">請選擇</option>
                        <option value="SEA Beauty Expo">SEA Beauty 國際美容商務媒合展</option>
                        <option value="FABIA VIP">FABIA VIP Exclusive Event</option>
                        <option value="AMSC ASIA">AMSC ASIA 醫美大會</option>
                        <option value="MYCE">MYCE 馬來西亞消費展</option>
                        <option value="多項展會">多項展會 / 全年方案</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-1.5">
                        補充說明
                      </label>
                      <textarea
                        id="message" name="message" rows={4} value={formData.message}
                        onChange={handleChange} className={`${inputClass()} resize-none`}
                        placeholder="請簡述您的品牌與需求..."
                      />
                    </div>

                    <button
                      type="submit" disabled={status === "submitting"}
                      className="btn-accent w-full py-4 text-[15px] disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {status === "submitting" ? "送出中..." : "提交諮詢"}
                    </button>
                  </form>
                )}
              </AnimateIn>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-10">
              <AnimateIn delay={0.1} variant="fadeRight">
                <h2 className="font-serif text-2xl font-bold mb-2">聯絡資訊</h2>
                <p className="text-muted text-[15px] mb-6">多管道溝通，為您提供最便捷的聯繫方式</p>
                <div className="space-y-4">
                  {contactInfo.map((item) => (
                    <div key={item.label} className="flex items-start gap-4">
                      <span className="text-sm text-muted min-w-[72px]">{item.label}</span>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith("http") ? "_blank" : undefined}
                          rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="text-[15px] font-medium hover:text-accent transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span className="text-[15px] font-medium">{item.value}</span>
                      )}
                    </div>
                  ))}
                </div>
              </AnimateIn>

              <AnimateIn delay={0.15} variant="fadeRight">
                <div className="border border-border p-6">
                  <h3 className="text-xs font-medium tracking-[0.15em] uppercase text-muted mb-5">
                    公司資訊
                  </h3>
                  <div className="space-y-3">
                    <p className="text-[15px] font-bold">柏緯洋行有限公司</p>
                    <div className="space-y-2 text-[14px] text-muted">
                      <p>高雄市新興區民權一路251號14樓之二</p>
                      <p>
                        Email：
                        <a href="mailto:info@borways.com" className="text-dark hover:text-accent transition-colors font-medium">
                          info@borways.com
                        </a>
                      </p>
                      <p>
                        TEL：
                        <a href="tel:072231988" className="text-dark hover:text-accent transition-colors font-medium">
                          07-2231988
                        </a>
                      </p>
                      <p>統編：59307202</p>
                    </div>
                  </div>
                </div>
              </AnimateIn>

              <AnimateIn delay={0.25} variant="fadeRight">
                <div className="border border-border p-6">
                  <h3 className="text-xs font-medium tracking-[0.15em] uppercase text-muted mb-5">
                    掃碼加好友
                  </h3>
                  <div className="flex justify-center">
                    <div className="text-center">
                      <Image
                        src="/images/qr-line.jpeg"
                        alt="LINE QR Code"
                        width={160}
                        height={160}
                        className="border border-border mx-auto mb-2"
                      />
                      <p className="text-xs text-muted font-medium">LINE</p>
                    </div>
                  </div>
                </div>
              </AnimateIn>

              <AnimateIn delay={0.3} variant="fadeRight">
                <div className="bg-dark-section p-6 text-white">
                  <h3 className="font-semibold text-sm mb-4">快速了解</h3>
                  <div className="space-y-3">
                    {[
                      { label: "SEA Beauty 展會資訊", href: "/sea-beauty" },
                      { label: "FABIA VIP 方案", href: "/fabia" },
                    ].map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="flex items-center justify-between text-sm text-white/60 hover:text-white transition-colors group"
                      >
                        {link.label}
                        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:translate-x-1 transition-transform" aria-hidden="true">
                          <path d="M6 3l5 5-5 5" />
                        </svg>
                      </Link>
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
