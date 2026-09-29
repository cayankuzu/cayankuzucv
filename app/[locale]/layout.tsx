import type { Metadata, Viewport } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import { isLocale, locales, siteCopy, type Locale } from "@/data/i18n";
import { siteUrl } from "@/data/profile";
import "../globals.css";

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const serif = Source_Serif_4({
  variable: "--font-serif",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

function resolveLocale(value: string): Locale {
  return isLocale(value) ? value : "tr";
}

export async function generateMetadata({ params }: LayoutProps<"/[locale]">): Promise<Metadata> {
  const locale = resolveLocale((await params).locale);
  const copy = siteCopy[locale].metadata;
  const ogImage = { url: `/og/cv-${locale}.png`, width: 1200, height: 630, alt: copy.ogAlt };

  return {
    metadataBase: new URL(siteUrl),
    title: copy.title,
    description: copy.description,
    authors: [{ name: "Çayan Kuzu", url: siteUrl }],
    alternates: {
      canonical: `/${locale}`,
      languages: { tr: "/tr", en: "/en", "x-default": "/tr" },
    },
    openGraph: {
      type: "profile",
      url: `/${locale}`,
      siteName: "Çayan Kuzu",
      title: copy.title,
      description: copy.description,
      locale: locale === "tr" ? "tr_TR" : "en_US",
      alternateLocale: locale === "tr" ? ["en_US"] : ["tr_TR"],
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: copy.title,
      description: copy.description,
      images: [ogImage],
    },
  };
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#dfe2e0" },
    { media: "(prefers-color-scheme: dark)", color: "#1b1f20" },
  ],
};

export default async function LocaleLayout({ children, params }: LayoutProps<"/[locale]">) {
  const locale = resolveLocale((await params).locale);

  return (
    <html lang={locale} className={`${sans.variable} ${serif.variable}`}>
      <body>{children}</body>
    </html>
  );
}
