import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-[1120px] mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-16">
          <div>
            <p className="text-[15px] font-bold tracking-[0.15em] mb-2">
              OREI EXPO
            </p>
            <p className="text-[13px] text-muted leading-relaxed max-w-xs">
              Your Premium Gateway to Southeast Asia
              <br />
              專注亞洲市場的跨國商務媒合與展會整合平台
            </p>
          </div>

          <div className="flex gap-16">
            <div>
              <p className="text-[11px] font-semibold tracking-[0.15em] text-muted uppercase mb-4">
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
                    className="block text-[13px] text-muted hover:text-navy transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <p className="text-[11px] font-semibold tracking-[0.15em] text-muted uppercase mb-4">
                Contact
              </p>
              <div className="space-y-2.5 text-[13px] text-muted">
                <p>Shirley Chang</p>
                <a
                  href="mailto:shirley62133@gmail.com"
                  className="block hover:text-navy transition-colors"
                >
                  shirley62133@gmail.com
                </a>
                <a
                  href="tel:+886953009113"
                  className="block hover:text-navy transition-colors"
                >
                  +886 953 009 113
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[12px] text-muted">
            &copy; 2026 OREI Expo. All rights reserved.
          </p>
          <div className="flex gap-6 text-[12px] text-muted">
            <span>LINE: ivyshirley</span>
            <span>WeChat: S141339</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
