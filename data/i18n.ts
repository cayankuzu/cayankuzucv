export const locales = ["tr", "en"] as const;
export type Locale = (typeof locales)[number];

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export const siteCopy = {
  tr: {
    metadata: {
      title: "Çayan Kuzu — Ürün Tasarımı · UI/UX · Oyun Tasarımı",
      description:
        "Çayan Kuzu'nun özgeçmişi: yayında mobil uygulamalar, web MVP'leri, tarayıcı oyunları ve fizik çalışmaları. Ürün tasarımı ve UI/UX alanında staj arıyor.",
      ogAlt: "Çayan Kuzu — Ürün Tasarımı · UI/UX · Oyun Tasarımı",
    },
    ui: {
      language: "Dil",
      downloadPdf: "PDF indir",
      print: "Yazdır",
      toolbar: "Belge araçları",
      skipLink: "İçeriğe atla",
      portraitAlt: "Çayan Kuzu'nun portresi",
      openPortrait: "Fotoğrafı büyüt",
      closePortrait: "Kapat",
      credit: "MeMoDe tarafından",
    },
  },
  en: {
    metadata: {
      title: "Çayan Kuzu — Product Design · UI/UX · Game Design",
      description:
        "The CV of Çayan Kuzu: mobile apps live on the App Store, web MVPs, browser games and physics work. Seeking an internship in product design and UI/UX.",
      ogAlt: "Çayan Kuzu — Product Design · UI/UX · Game Design",
    },
    ui: {
      language: "Language",
      downloadPdf: "Download PDF",
      print: "Print",
      toolbar: "Document tools",
      skipLink: "Skip to content",
      portraitAlt: "Portrait of Çayan Kuzu",
      openPortrait: "Enlarge photo",
      closePortrait: "Close",
      credit: "by MeMoDe",
    },
  },
} as const;
