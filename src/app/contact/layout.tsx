import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "聯絡我們 — 歐瑞會展 OREI Expo",
  description:
    "預約顧問諮詢，歐瑞會展協助您的品牌進入東南亞市場。電話、Email、LINE 多管道聯繫。",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "聯絡我們 — 歐瑞會展 OREI Expo",
    description:
      "預約顧問諮詢，歐瑞會展協助您的品牌進入東南亞市場。",
    images: ["/images/venue-3.jpg"],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
