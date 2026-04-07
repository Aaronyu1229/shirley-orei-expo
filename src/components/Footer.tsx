import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      {/* Gold accent line */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="max-w-[1120px] mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-16">
          <div className="max-w-xs">
            <div className="mb-4 flex items-center gap-3">
              <Image
                src="/images/orei-icon.svg"
                alt="OREI Expo"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <div>
                <p className="text-[17px] font-bold tracking-[0.15em] leading-tight">
                  OREI EXPO
                </p>
                <p className="text-[14px] text-gold tracking-[0.1em] leading-tight">
                  歐瑞會展
                </p>
              </div>
            </div>
            <p className="text-base text-muted leading-relaxed">
              Your Premium Gateway to Southeast Asia
            </p>
            <p className="text-base text-muted leading-relaxed">
              專注亞洲市場的跨國商務媒合與展會整合平台
            </p>
          </div>

          <div className="flex gap-16">
            <div>
              <p className="text-[13px] font-semibold tracking-[0.15em] text-muted uppercase mb-4">
                Pages
              </p>
              <div className="space-y-2.5">
                {[
                  { label: "首頁", href: "/" },
                  { label: "SEA Beauty", href: "/sea-beauty" },
                  { label: "FABIA", href: "/fabia" },
                  { label: "聯絡我們", href: "/contact" },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block text-base text-muted hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <p className="text-[13px] font-semibold tracking-[0.15em] text-muted uppercase mb-4">
                Contact
              </p>
              <div className="space-y-2.5 text-base text-muted">
                <p>Shirley Chang</p>
                <a
                  href="mailto:shirley62133@gmail.com"
                  className="block hover:text-gold transition-colors"
                >
                  shirley62133@gmail.com
                </a>
                <a
                  href="tel:+886953009113"
                  className="block hover:text-gold transition-colors"
                >
                  +886 953 009 113
                </a>
              </div>
            </div>

            <div>
              <p className="text-[13px] font-semibold tracking-[0.15em] text-muted uppercase mb-4">
                Social
              </p>
              <div className="space-y-2.5 text-base text-muted">
                <p>LINE: ivyshirley</p>
                <p>WeChat: S141339</p>
                <a
                  href="https://wa.me/886953009113"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:text-gold transition-colors"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[14px] text-muted">
            &copy; 2026 OREI Expo. All rights reserved.
          </p>
          <p className="text-[14px] text-muted/50">
            Empowering brands across Southeast Asia
          </p>
        </div>
      </div>
    </footer>
  );
}
