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
        title: "Prototip",
        body: "Mevcut çıktı, Figma üzerinden incelenebilen bir UI/UX tasarımı ve etkileşimli prototip.",
      },
    ],
    en: [
      {
        title: "User flow",
        body: "The experience focuses on event discovery, participant rooms, interest-based matching and private chat after a mutual match.",
      },
      {
        title: "Prototype",
        body: "The current output is a UI/UX design and interactive prototype available in Figma.",
      },
    ],
  },
  universe: {
    tr: [
      {
        title: "Deneyim",
        body: "Kampüs akışı, topluluklar ve etkinlikler öğrencilerin üniversite deneyimini daha görünür ve bağlantılı kılmak için tek akışta buluşuyor.",
      },
      {
        title: "Yayın durumu",
        body: "Uygulama iOS'ta yayında. Etkileşimli tasarım Figma Make üzerinden incelenebilir.",
      },
    ],
    en: [
      {
        title: "Experience",
        body: "Campus feeds, communities and events come together in one flow to make university life more visible and connected.",
      },
      {
        title: "Release status",
        body: "The app is live on iOS. Its interactive design can also be reviewed in Figma Make.",
      },
    ],
  },
  sorita: {
    tr: [
      {
        title: "Kullanıcı deneyimi",
        body: "Kullanıcılar rota oluşturabilir, yerleri listeler hâlinde düzenleyebilir ve şehir deneyimlerini arkadaşlarıyla paylaşabilir.",
      },
      {
        title: "Yayın durumu",
        body: "Uygulama iOS ve Android'de yayında; iki mağaza bağlantısı da doğrulanmış indirme sayfasında yer alıyor.",
      },
    ],
    en: [
      {
        title: "User experience",
        body: "Users can create routes, organise places into lists and share their city experiences with friends.",
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
        body: "İzleme alışkanlıkları bir zevk profiline dönüşüyor; ortak yapımlar ve türler yeni eşleşmeler için başlangıç noktası oluşturuyor.",
      },
      {
        title: "Mevcut durum",
        body: "MVP test sürecinde. Henüz mağaza yayını bulunmadığı için çalışma ürün fikri ve prototip olarak sunuluyor.",
      },
    ],
    en: [
      {
        title: "Product concept",
        body: "Viewing habits become a taste profile, while shared titles and genres provide the starting point for new matches.",
      },
      {
        title: "Current status",
        body: "The MVP is in testing. As there is no store release yet, the work is presented as a product concept and prototype.",
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
        body: "Oyuncu bir takıma katılıyor, kaleleri ele geçiriyor ve açık alan savaşında takımının alan kontrolünü ilerletiyor.",
      },
      {
        title: "Oyuncu deneyimi",
        body: "Alan boyama, takım kaleleri, farklı biyomlar ve NPC orduları tarayıcıda oynanabilen canlı bir deneyimde birleşiyor.",
      },
    ],
    en: [
      {
        title: "Core loop",
        body: "The player joins a team, captures forts and advances their team's area control across an open-field battle.",
      },
      {
        title: "Player experience",
        body: "Territory painting, team forts, varied biomes and NPC armies come together in a live browser-playable experience.",
      },
    ],
  },
};

export function getStatusLabel(project: Project, locale: Locale) {
  if (project.statusText) {
    return project.statusText[locale];
  }

  const labels = {
    tr: { Live: "Canlı", Prototype: "Prototip", MVP: "MVP", Available: "Erişilebilir" },
    en: { Live: "Live", Prototype: "Prototype", MVP: "MVP", Available: "Available" },
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
