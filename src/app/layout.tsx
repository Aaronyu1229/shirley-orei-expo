import type { Metadata } from "next";
import { Inter, Noto_Sans_TC, Noto_Serif_TC, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const notoSansTC = Noto_Sans_TC({
  variable: "--font-noto-sans-tc",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const notoSerifTC = Noto_Serif_TC({
  variable: "--font-noto-serif-tc",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.oreiexpo.com"),
  title: "歐瑞會展 OREI Expo — 您進入東南亞市場的頂級通道",
  description:
    "歐瑞會展專注亞洲市場的跨國商務媒合與展會整合平台，協助台灣美業與醫美品牌快速進入越南與東南亞市場。提供展會參展、通路對接、品牌曝光一站式服務。",
  keywords: [
    "歐瑞會展",
    "OREI Expo",
    "東南亞展會",
    "越南美業",
    "醫美展會",
    "商務媒合",
    "SEA Beauty Expo",
    "FABIA",
    "台灣品牌出海",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "歐瑞會展 OREI Expo — Your Gateway to International Markets",
    description:
      "專注亞洲市場的跨國商務媒合與展會整合平台，協助品牌快速進入東南亞市場。",
    type: "website",
    locale: "zh_TW",
    images: [
      {
        url: "/images/hero-conference.jpg",
        width: 1200,
        height: 630,
        alt: "歐瑞會展 OREI Expo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "歐瑞會展 OREI Expo — 您進入東南亞市場的頂級通道",
    description:
      "專注亞洲市場的跨國商務媒合與展會整合平台，協助品牌快速進入東南亞市場。",
    images: ["/images/hero-conference.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-TW"
      className={`${inter.variable} ${notoSansTC.variable} ${notoSerifTC.variable} ${playfairDisplay.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "歐瑞會展 OREI Expo",
              url: "https://www.oreiexpo.com",
              logo: "https://www.oreiexpo.com/images/orei-logo.png",
              description:
                "專注亞洲市場的跨國商務媒合與展會整合平台，協助台灣美業與醫美品牌快速進入越南與東南亞市場。",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+886-953-009-113",
                contactType: "customer service",
                availableLanguage: ["zh-TW", "en"],
              },
              sameAs: ["https://wa.me/886953009113"],
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
