import type { Metadata } from "next";
import { Noto_Sans_TC } from "next/font/google";
import "./globals.css";

const notoSansTC = Noto_Sans_TC({
  variable: "--font-noto-sans-tc",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
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
  openGraph: {
    title: "歐瑞會展 OREI Expo — Your Gateway to International Markets",
    description:
      "專注亞洲市場的跨國商務媒合與展會整合平台，協助品牌快速進入東南亞市場。",
    type: "website",
    locale: "zh_TW",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW" className={`${notoSansTC.variable} antialiased`}>
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
