import { getProjectText } from "@/data/project-translations";
import { cvContent } from "@/data/cv-content";
import { type Locale, siteCopy } from "@/data/i18n";
import { type Project } from "@/data/projects";

export type DetailSection = {
  title: string;
  body: string;
};

const selectedProjectSections: Partial<Record<string, Record<Locale, DetailSection[]>>> = {
  etkinlink: {
    tr: [
      {
        title: "Kullanıcı akışı",
        body: "Deneyim; etkinlik keşfi, katılımcı odaları, ilgi temelli eşleşme ve karşılıklı beğeni sonrası özel sohbet adımlarına odaklanıyor.",
      },
      {
        title: "Geliştirme durumu",
        body: "React Native ve Expo istemcisi, Supabase backend'iyle birlikte iOS ve Android için geliştiriliyor. Uygulama henüz mağazada yayımlanmadı; Figma prototipi ayrıca incelenebilir.",
      },
    ],
    en: [
      {
        title: "User flow",
        body: "The experience focuses on event discovery, participant rooms, interest-based matching and private chat after a mutual match.",
      },
      {
        title: "Development status",
        body: "The React Native and Expo client is being developed for iOS and Android with a Supabase backend. The app has not been released to stores yet; its Figma prototype remains available.",
      },
    ],
  },
  universe: {
    tr: [
      {
        title: "Deneyim",
        body: "Etkinlik keşfi, öğrenci ve kulüp profilleri, etkinlik albümleri, fotoğraf paylaşımı, takip, beğeni ve yorum akışları tek deneyimde buluşuyor.",
      },
      {
        title: "Yayın durumu",
        body: "Uygulama App Store ve Google Play'de yayında. Etkileşimli tasarım Figma Make üzerinden ayrıca incelenebilir.",
      },
    ],
    en: [
      {
        title: "Experience",
        body: "Event discovery, student and club profiles, event albums, photo sharing, follows, likes and comments come together in one experience.",
      },
      {
        title: "Release status",
        body: "The app is live on the App Store and Google Play. Its interactive design can also be reviewed in Figma Make.",
      },
    ],
  },
  sorita: {
    tr: [
      {
        title: "Kullanıcı deneyimi",
        body: "Kullanıcılar haritada mekân kartları oluşturabilir, yerleri herkese açık veya özel listelerde düzenleyebilir; fotoğraf, yorum, takip, beğeni ve paylaşım akışlarıyla etkileşime girebilir.",
      },
      {
        title: "Yayın durumu",
        body: "Uygulama iOS ve Android'de yayında; iki mağaza bağlantısı da doğrulanmış indirme sayfasında yer alıyor.",
      },
    ],
    en: [
      {
        title: "User experience",
        body: "Users can create place cards on a map, organise them into public or private lists, and interact through photos, comments, follows, likes and sharing.",
      },
      {
        title: "Release status",
        body: "The app is live on iOS and Android, with both store links available from the verified download page.",
      },
    ],
  },
  wmatch: {
    tr: [
      {
        title: "Ürün konsepti",
        body: "Ortak film ve diziler, favoriler ve izleme anları uyum odaklı eşleşmelere; karşılıklı beğeniler ise sohbete dönüşüyor.",
      },
      {
        title: "Mevcut durum",
        body: "18+ mobil sosyal uygulamanın iOS sürümü App Store'da yayında; Android sürümü yayın hazırlığında.",
      },
    ],
    en: [
      {
        title: "Product concept",
        body: "Shared films, series, favourites and current viewing become compatibility-based matches, while mutual likes open a chat.",
      },
      {
        title: "Current status",
        body: "The 18+ mobile social app is live on the App Store; its Android release is in preparation.",
      },
    ],
  },
  fikkis: {
    tr: [
      {
        title: "Bilgi mimarisi",
        body: "Mobil ürünler, web deneyimleri, oyunlar ve yaratıcı projeler tek bir filtrelenebilir arşiv içinde düzenleniyor.",
      },
      {
        title: "Canlı arşiv",
        body: "Fikkis canlı olarak erişilebilir ve projelerin güncel bağlantıları için ana arşiv işlevi görüyor.",
      },
    ],
    en: [
      {
        title: "Information architecture",
        body: "Mobile products, web experiences, games and creative work are organised within one filterable archive.",
      },
      {
        title: "Live archive",
        body: "Fikkis is live and serves as the main archive for current project links.",
      },
    ],
  },
  bibish: {
    tr: [
      {
        title: "Ana oyun döngüsü",
        body: "Oyuncu bir takıma katılıyor; 10 karakolu ele geçirmek, araziyi takım rengine boyamak ve açık alan savaşında üstünlük kurmak için mücadele ediyor.",
      },
      {
        title: "Çok oyunculu mimari",
        body: "Canlı sürümde NPC orduları bulunmuyor. Oyuncular WebSocket üzerinden tek global odaya bağlanıyor; oda durumu Cloudflare Durable Objects üzerinde çalışıyor.",
      },
    ],
    en: [
      {
        title: "Core loop",
        body: "The player joins a team and fights to capture ten outposts, paint the terrain in their team's colour and control the open battlefield.",
      },
      {
        title: "Multiplayer architecture",
        body: "The live runtime has no NPC armies. Players connect to one global room over WebSocket, with shared room state running on Cloudflare Durable Objects.",
      },
    ],
  },
};

export function getStatusLabel(project: Project, locale: Locale) {
  if (project.statusText) {
    return project.statusText[locale];
  }

  const labels = {
    tr: {
      Live: "Canlı",
      Development: "Geliştiriliyor",
      Prototype: "Prototip",
      MVP: "MVP",
      Available: "Erişilebilir",
    },
    en: {
      Live: "Live",
      Development: "In development",
      Prototype: "Prototype",
      MVP: "MVP",
      Available: "Available",
    },
  } as const;

  return labels[locale][project.status];
}

function getProjectPreview(project: Project, locale: Locale) {
  return cvContent[locale].projects.items.find((item) => item.slug === project.id);
}

export function getRoleLabel(project: Project, locale: Locale) {
  return getProjectPreview(project, locale)?.role ?? (locale === "tr" ? "Bağımsız proje" : "Independent project");
}

export function getPlatformLabel(project: Project, locale: Locale) {
  const preview = getProjectPreview(project, locale);

  if (preview) {
    return preview.platform;
  }

  const labels = {
    tr: { mobile: "Mobil", web: "Web", game: "Tarayıcı", content: "Yayın" },
    en: { mobile: "Mobile", web: "Web", game: "Browser", content: "Publication" },
  } as const;

  return labels[locale][project.category];
}

export function getToolsLabel(project: Project, locale: Locale) {
  return getProjectPreview(project, locale)?.tools;
}

export function getProjectDetailSections(project: Project, locale: Locale): DetailSection[] {
  const copy = siteCopy[locale].detail;
  const text = getProjectText(project, locale);
  const preview = getProjectPreview(project, locale);
  const contribution = preview
    ? [{ title: copy.myContribution, body: preview.role }]
    : [];
  const specificSections = selectedProjectSections[project.id]?.[locale];

  if (specificSections) {
    return [
      { title: copy.projectOverview, body: text.description },
      specificSections[0],
      ...contribution,
      ...specificSections.slice(1),
    ];
  }

  if (project.category === "mobile") {
    return [
      { title: copy.projectOverview, body: text.description },
      { title: copy.productFocus, body: text.hook },
      ...contribution,
      { title: copy.designOutput, body: copy.mobileOutput },
    ];
  }

  if (project.category === "web") {
    return [
      { title: copy.projectOverview, body: text.description },
      { title: copy.webConcept, body: text.hook },
      ...contribution,
      { title: copy.experienceApproach, body: copy.webOutput },
    ];
  }

  if (project.category === "game") {
    return [
      { title: copy.gameOverview, body: text.description },
      { title: copy.gameConcept, body: text.hook },
      ...contribution,
      { title: copy.gameplayFocus, body: copy.gameOutput },
    ];
  }

  return [
    { title: copy.projectOverview, body: text.description },
    { title: copy.contentFocus, body: text.hook },
    ...contribution,
    { title: copy.availability, body: copy.contentOutput },
  ];
}
