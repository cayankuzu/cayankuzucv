import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: "Çayan Kuzu — Ürün Tasarımı · UI/UX · Oyun Tasarımı",
  description:
    "Çayan Kuzu'nun ürün tasarımı, UI/UX, oyun tasarımı ve etkileşimli dijital deneyimler odaklı profesyonel CV ve portfolyosu.",
  keywords: [
    "Çayan Kuzu",
    "Ürün Tasarımı",
    "UI/UX",
    "Oyun Tasarımı",
    "Dijital Deneyim",
  ],
  openGraph: {
    title: "Çayan Kuzu — Ürün Tasarımı · UI/UX · Oyun Tasarımı",
    description:
      "Ürün tasarımı, UI/UX, oyun tasarımı ve etkileşimli projeler odaklı profesyonel CV ve portfolyo.",
    type: "website",
    locale: "tr_TR",
    images: [{ url: "/profile-cayan-kuzu.jpeg", alt: "Çayan Kuzu" }],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="tr" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
