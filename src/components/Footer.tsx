import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-dark-section text-white">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <Image
                src="/images/orei-icon.svg"
                alt="OREI Expo"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <span className="text-[15px] font-semibold tracking-[0.15em]">
                OREI EXPO
              </span>
            </div>
            <p className="text-sm text-white/50 leading-relaxed mb-1">
              Your Premium Gateway to Southeast Asia
            </p>
            <p className="text-sm text-white/35 leading-relaxed">
              專注亞洲市場的跨國商務媒合與展會整合平台
            </p>
          </div>

          {/* Pages */}
          <div>
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-white/30 mb-5">
              Pages
            </p>
            <div className="space-y-3">
              {[
                { label: "首頁", href: "/" },
                { label: "SEA Beauty", href: "/sea-beauty" },
                { label: "FABIA", href: "/fabia" },
                { label: "聯絡我們", href: "/contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-white/50 hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-white/30 mb-5">
              Contact
            </p>
            <div className="space-y-3 text-sm text-white/50">
              <p>Shirley Chang</p>
              <a
                href="mailto:shirley62133@gmail.com"
                className="block hover:text-white transition-colors duration-200 break-all"
              >
                shirley62133@gmail.com
              </a>
              <a
                href="tel:+886953009113"
                className="block hover:text-white transition-colors duration-200"
              >
                +886 953 009 113
              </a>
            </div>
          </div>

          {/* Social */}
          <div>
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-white/30 mb-5">
              Social
            </p>
            <div className="space-y-3 text-sm text-white/50">
              <p>LINE: ivyshirley</p>
              <p>WeChat: S141339</p>
              <a
                href="https://wa.me/886953009113"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-white transition-colors duration-200"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/25">
            &copy; 2026 OREI Expo. All rights reserved.
          </p>
          <p className="text-xs text-white/15">
            Empowering brands across Southeast Asia
          </p>
        </div>
      </div>
    </footer>
  );
}
