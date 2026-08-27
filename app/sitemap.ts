import type { MetadataRoute } from "next";
import { locales } from "@/data/i18n";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.map((locale) => ({
    url: `${siteUrl}/${locale}`,
    changeFrequency: "monthly",
    priority: 1,
  }));
}
