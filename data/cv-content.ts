import type { Locale } from "@/data/i18n";

type Link = { label: string; href: string };

type Experience = {
  role: string;
  organization: string;
  period: string;
  points: string[];
};

type Project = {
  name: string;
  status: string;
  links: Link[];
  description: string;
  role: string;
  /** Teknoloji satırı; yayın gibi teknik olmayan işlerde boş bırakılır. */
  stack?: string;
};

type Academic = {
  title: string;
  detail: string;
  links: Link[];
};

type SkillGroup = { label: string; items: string };

type Language = { name: string; level: string };

export type CvDocument = {
  documentLabel: string;
  updated: string;
  title: string;
  location: string;
  headings: {
    contact: string;
    education: string;
    skills: string;
    languages: string;
    profile: string;
    experience: string;
    projects: string;
    academic: string;
  };
  roleLabel: string;
  profile: string;
  experience: Experience[];
  projects: Project[];
  /** Seçili projelerin altında tüm arşive (Fikkis) yönlendiren satır. */
  moreProjects: { text: string; link: Link };
  academic: Academic[];
  education: { school: string; degree: string; detail: string };
  skills: SkillGroup[];
  /** Yalnızca doğrulanmış diller girilir; liste boşsa bölüm çizilmez. */
  languages: Language[];
  emailSubject: string;
};

const links = {
  sorita: "https://apps.apple.com/tr/app/sorita-app/id6762198781",
  soritaPlay: "https://play.google.com/store/apps/details?id=com.cayan.sorita.socialmap",
  universe: "https://apps.apple.com/tr/app/universe-app/id6761912452",
  universePlay: "https://play.google.com/store/apps/details?id=com.ogrencisosyalagi.app",
  merbut: "https://merbut.vercel.app/",
  atkafasiGumroad: "https://atkafasifanzin.gumroad.com/",
  atkafasiShopier: "https://www.shopier.com/atkafasifanzin",
  audioroom: "https://audio-room-ecru.vercel.app/",
  fikkis: "https://fikkis.vercel.app/",
  dysonRing: "https://fikkis.vercel.app/dokuman/dyson-ring",
  dysonRingPage: "https://fikkis.vercel.app/#proje-dyson-ring",
  dampedOscillatorPoster: "https://fikkis.vercel.app/dokuman/sonumlu-harmonik-osilator",
  dampedOscillatorPage: "https://fikkis.vercel.app/#proje-damped-oscillator",
  jumpHeightPage: "https://fikkis.vercel.app/#proje-jump-analysis",
  dampedOscillator: "https://colab.research.google.com/drive/1a92EXyocbfkpLH3iyxbnAxZeQoYBid02?usp=sharing",
  jumpHeight: "https://canva.link/9uou0pjp4wumn1g",
};

export const cvContent: Record<Locale, CvDocument> = {
  tr: {
    documentLabel: "Özgeçmiş",
    updated: "Eylül 2026",
    title: "Ürün Tasarımı · UI/UX · Oyun Tasarımı",
    location: "İstanbul, Türkiye",
    headings: {
      contact: "İletişim",
      education: "Eğitim",
      skills: "Yetkinlikler",
      languages: "Diller",
      profile: "Profil",
      experience: "Deneyim",
      projects: "Seçili Projeler",
      academic: "Akademik Çalışmalar",
    },
    roleLabel: "Rolüm",
    profile:
      "Fizik lisans öğrencisiyim. Dijital ürünleri fikir aşamasından yayına kadar tasarlıyor, geliştirmeyi yapay zekâ araçlarıyla yürütüyorum. App Store'da yayında üç mobil uygulamam (ikisi Google Play'de de), web MVP'lerim, tarayıcı oyunlarım ve bağımsız bir fanzinim var. Ürün tasarımı ve UI/UX alanında staj arıyorum.",
    experience: [
      {
        role: "Bağımsız Ürün Tasarımı ve Geliştirme",
        organization: "MeMoDe",
        period: "Devam ediyor",
        points: [
          "Mobil uygulamalarda problem tanımından kullanıcı akışlarına, arayüz tasarımından yayına kadar uçtan uca çalıştım.",
          "Yapay zekâ destekli sanal prova, harita tabanlı sosyal oyun ve 3B iç mekân editörü gibi web MVP'lerini tasarlayıp yayına aldım.",
          "Tarayıcı oyunlarında (gerçek zamanlı çok oyunculu bir FPS dahil) oyun döngüsü ve sistem tasarımı yaptım.",
          "UniVerse için problemi, çözümü, rakip analizini ve iş modelini kapsayan bir yatırımcı sunumu hazırladım.",
        ],
      },
    ],
    projects: [
      {
        name: "SoRita",
        status: "Yayında",
        links: [
          { label: "App Store", href: links.sorita },
          { label: "Google Play", href: links.soritaPlay },
        ],
        description: "Harita üzerinde mekân keşfi, kişisel listeler ve sosyal paylaşımı bir araya getiren sosyal harita uygulaması.",
        role: "Ürün kurgusu, kullanıcı akışları, arayüz tasarımı, yayın",
        stack: "Figma Make · React Native · Expo · Supabase",
      },
      {
        name: "UniVerse",
        status: "Yayında",
        links: [
          { label: "App Store", href: links.universe },
          { label: "Google Play", href: links.universePlay },
        ],
        description: "Öğrencileri ve kulüpleri etkinlikler etrafında buluşturan kampüs uygulaması.",
        role: "Ürün kurgusu, kullanıcı akışları, arayüz tasarımı, yayın",
        stack: "Figma Make · React Native · Expo · Supabase",
      },
      {
        name: "AudioRoom",
        status: "Canlı demo",
        links: [{ label: "Demo", href: links.audioroom }],
        description: "Albümleri gezilebilir 3B dünyalara dönüştüren bağımsız müzik deneyimi.",
        role: "Konsept, deneyim ve arayüz tasarımı",
        stack: "Three.js · WebGL",
      },
      {
        name: "Merbut",
        status: "Oynanabilir",
        links: [{ label: "Oyna", href: links.merbut }],
        description: "Yerel iki oyunculu 2.5D aksiyon oyunu: her biri kendi mekaniğine sahip on diyar ve üç evreli bir final. Resmi olmayan bir hayran oyunu.",
        role: "Oyun tasarımı; savaş, ilerleme ve boss sistemleri",
        stack: "React Three Fiber · Three.js",
      },
      {
        name: "AtKafası Fanzin",
        status: "1. ve 2. sayı",
        links: [
          { label: "Gumroad", href: links.atkafasiGumroad },
          { label: "Shopier", href: links.atkafasiShopier },
        ],
        description: "İçeriğini ve tasarımını büyük ölçüde kendim hazırladığım, iki sayısı yayımlanan bağımsız fanzin.",
        role: "Yazılar, editoryal ve görsel kimlik, sayfa tasarımı, yayın",
      },
    ],
    moreProjects: {
      text: "Diğer mobil uygulamalar, web MVP'leri, oyunlar ve bilim çalışmaları dahil tüm projeler",
      link: { label: "fikkis.vercel.app", href: links.fikkis },
    },
    academic: [
      {
        title: "TÜBİTAK 2209-A araştırma önerisi",
        detail:
          "Dyson halkasının teknik ve ekonomik fizibilitesi; literatür taraması, simülasyon ve prototip iş paketleri. Danışman: Caner Değer. Başvuru olarak hazırlandı.",
        links: [
          { label: "Belge", href: links.dysonRing },
          { label: "Proje sayfası", href: links.dysonRingPage },
        ],
      },
      {
        title: "Sönümlü harmonik osilatörün sayısal incelemesi",
        detail:
          "COMP2083 Bilimsel Programlama ders projesi, dört kişilik ekip. Hareket denkleminin Python'da Euler yöntemiyle çözümü; parametrelerin konum, hız ve enerjiye etkisinin analizi ve bilimsel poster.",
        links: [
          { label: "Poster", href: links.dampedOscillatorPoster },
          { label: "Kod (Colab)", href: links.dampedOscillator },
          { label: "Proje sayfası", href: links.dampedOscillatorPage },
        ],
      },
      {
        title: "Sıçrama yüksekliği tahmini",
        detail: "Gradient Boosting, Random Forest ve KNN modellerinin karşılaştırmalı analizi.",
        links: [
          { label: "Sunum", href: links.jumpHeight },
          { label: "Proje sayfası", href: links.jumpHeightPage },
        ],
      },
    ],
    education: {
      school: "Marmara Üniversitesi",
      degree: "Fizik (Lisans)",
      detail: "Devam ediyor",
    },
    skills: [
      {
        label: "Ürün ve UX",
        items: "Problem tanımı, kullanıcı akışları, bilgi mimarisi, etkileşim tasarımı, prototipleme",
      },
      {
        label: "UI ve tasarım",
        items: "Figma (auto layout, component, variant, variable), tasarım sistemleri, editoryal tasarım",
      },
      { label: "Oyun ve etkileşim", items: "Oyun döngüsü, sistem tasarımı, oyun UI/UX, etkileşimli prototipleme" },
      { label: "Teknik üretim", items: "React Native (Expo), Next.js, Supabase, Three.js" },
      {
        label: "Yapay zekâ destekli üretim",
        items: "Cursor, Figma MCP, Figma Make, yapay zekâ destekli prototipleme",
      },
    ],
    languages: [],
    emailSubject: "Staj / İş Birliği — Çayan Kuzu",
  },
  en: {
    documentLabel: "Curriculum Vitae",
    updated: "September 2026",
    title: "Product Design · UI/UX · Game Design",
    location: "Istanbul, Türkiye",
    headings: {
      contact: "Contact",
      education: "Education",
      skills: "Skills",
      languages: "Languages",
      profile: "Profile",
      experience: "Experience",
      projects: "Selected Projects",
      academic: "Academic Work",
    },
    roleLabel: "My role",
    profile:
      "Physics undergraduate who designs digital products from first idea to release and builds them with AI development tools. I have three mobile apps live on the App Store (two also on Google Play), several web MVPs, browser games and an independent zine. Seeking an internship in product design and UI/UX.",
    experience: [
      {
        role: "Independent Product Design & Development",
        organization: "MeMoDe",
        period: "Present",
        points: [
          "Worked end to end on mobile apps, from problem framing and user flows to interface design and release.",
          "Designed and launched web MVPs, including an AI virtual try-on, a map-based social game and a 3D interior editor.",
          "Designed core loops and game systems for browser games, including a real-time multiplayer FPS.",
          "Prepared an investor deck for UniVerse covering the problem, solution, competitor analysis and business model.",
        ],
      },
    ],
    projects: [
      {
        name: "SoRita",
        status: "Live",
        links: [
          { label: "App Store", href: links.sorita },
          { label: "Google Play", href: links.soritaPlay },
        ],
        description: "A social map app that brings place discovery, personal lists and social sharing together.",
        role: "Product concept, user flows, interface design, release",
        stack: "Figma Make · React Native · Expo · Supabase",
      },
      {
        name: "UniVerse",
        status: "Live",
        links: [
          { label: "App Store", href: links.universe },
          { label: "Google Play", href: links.universePlay },
        ],
        description: "A campus app that brings students and clubs together around events.",
        role: "Product concept, user flows, interface design, release",
        stack: "Figma Make · React Native · Expo · Supabase",
      },
      {
        name: "AudioRoom",
        status: "Live demo",
        links: [{ label: "Demo", href: links.audioroom }],
        description: "An independent music experience that turns albums into explorable 3D worlds.",
        role: "Concept, experience and interface design",
        stack: "Three.js · WebGL",
      },
      {
        name: "Merbut",
        status: "Playable",
        links: [{ label: "Play", href: links.merbut }],
        description: "A local two-player 2.5D action game: ten realms, each with its own mechanic, and a three-phase finale. An unofficial fan game.",
        role: "Game design; combat, progression and boss systems",
        stack: "React Three Fiber · Three.js",
      },
      {
        name: "AtKafası Fanzin",
        status: "Issues 1–2",
        links: [
          { label: "Gumroad", href: links.atkafasiGumroad },
          { label: "Shopier", href: links.atkafasiShopier },
        ],
        description: "An independent zine with two published issues, most of whose writing and design I produced myself.",
        role: "Writing, editorial and visual identity, layout, publishing",
      },
    ],
    moreProjects: {
      text: "All projects, including more mobile apps, web MVPs, games and science work",
      link: { label: "fikkis.vercel.app", href: links.fikkis },
    },
    academic: [
      {
        title: "TÜBİTAK 2209-A research proposal",
        detail:
          "Technical and economic feasibility of a Dyson ring, structured as literature review, simulation and prototype work packages. Advisor: Caner Değer. Prepared as an application.",
        links: [
          { label: "Document", href: links.dysonRing },
          { label: "Project page", href: links.dysonRingPage },
        ],
      },
      {
        title: "Numerical study of a damped harmonic oscillator",
        detail:
          "COMP2083 Scientific Programming course project, team of four. Solved the equation of motion in Python with Euler's method, analysed how each parameter affects position, velocity and energy, and presented the results as a scientific poster.",
        links: [
          { label: "Poster", href: links.dampedOscillatorPoster },
          { label: "Code (Colab)", href: links.dampedOscillator },
          { label: "Project page", href: links.dampedOscillatorPage },
        ],
      },
      {
        title: "Jump height prediction",
        detail: "A comparative analysis of Gradient Boosting, Random Forest and KNN models.",
        links: [
          { label: "Slides", href: links.jumpHeight },
          { label: "Project page", href: links.jumpHeightPage },
        ],
      },
    ],
    education: {
      school: "Marmara University",
      degree: "BSc Physics",
      detail: "In progress",
    },
    skills: [
      {
        label: "Product and UX",
        items: "Problem framing, user flows, information architecture, interaction design, prototyping",
      },
      {
        label: "UI and design",
        items: "Figma (auto layout, components, variants, variables), design systems, editorial design",
      },
      { label: "Games and interaction", items: "Core loops, systems design, game UI/UX, interactive prototyping" },
      { label: "Technical production", items: "React Native (Expo), Next.js, Supabase, Three.js" },
      {
        label: "AI-assisted production",
        items: "Cursor, Figma MCP, Figma Make, AI-assisted prototyping",
      },
    ],
    languages: [],
    emailSubject: "Internship / Collaboration — Çayan Kuzu",
  },
};
