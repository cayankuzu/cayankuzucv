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
  universe: "https://apps.apple.com/tr/app/universe-app/id6761912452",
  universePlay: "https://play.google.com/store/apps/details?id=com.ogrencisosyalagi.app",
  beatter: "https://beatter.vercel.app/",
  beatterGithub: "https://github.com/cayankuzu/beaTTer",
  sorita: "https://apps.apple.com/tr/app/sorita-app/id6762198781",
  soritaPlay: "https://play.google.com/store/apps/details?id=com.cayan.sorita.socialmap",
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
    updated: "Ekim 2026",
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
      "Fizik lisans öğrencisiyim. Fikirleri problem tanımından yayına kadar kullanıcı odaklı tasarlıyor; modern arayüz mimarisi ve yapay zekâ destekli geliştirme disipliniyle çalışan dijital ürünlere dönüştürüyorum. App Store ve Google Play'de onaylı mobil uygulamalarım, biyomekanik ve 3B web deneyimlerim ile bağımsız bir fanzinim bulunuyor. Ürün tasarımı ve UI/UX alanında staj / iş birliği arıyorum.",
    experience: [
      {
        role: "Bağımsız Ürün Tasarımı ve Geliştirme",
        organization: "MeMoDe",
        period: "Devam ediyor",
        points: [
          "Mobil ürünlerde problem tanımı, kullanıcı yolculukları, arayüz tasarımı ve mağaza yayın onay süreçlerini uçtan uca yönettim.",
          "UniVerse için problem tanımı, kullanıcı personası, rakip analizi ve iş modelini kapsayan 28 sayfalık yatırımcı/ürün sunumu hazırladım.",
          "Biyomekanik erken tendon sezimi (-140ms), yapay zekâ sanal prova ve 3B iç mekân editörü gibi deneysel sistemler tasarlayıp geliştirdim.",
          "Çok oyunculu WebGL ve tarayıcı deneyimlerinde oyun döngüsü, sistem ve etkileşim tasarımı yaptım.",
        ],
      },
    ],
    projects: [
      {
        name: "UniVerse",
        status: "Yayında",
        links: [
          { label: "App Store", href: links.universe },
          { label: "Google Play", href: links.universePlay },
        ],
        description: "Öğrencileri ve üniversite kulüplerini etkinlikler ve sosyal akış etrafında buluşturan çift taraflı kampüs platformu.",
        role: "Problem tanımı, kullanıcı akışları, Figma arayüz tasarımı, mobil geliştirme, mağaza yayını",
        stack: "Figma Make · React Native · Expo · Supabase",
      },
      {
        name: "beaTTer",
        status: "Canlı",
        links: [
          { label: "Canlı Web", href: links.beatter },
          { label: "GitHub", href: links.beatterGithub },
        ],
        description: "Parmak tendon ivmesini havada erken sezerek (-140ms) karşı hamleyi fırlatan Taş-Kağıt-Makas arenası ve robot kol entegrasyonu.",
        role: "Biyomekanik modelleme, bilgisayarlı görü (CV), oyun teorisi, arayüz ve etkileşim tasarımı",
        stack: "MediaPipe · TensorFlow · Arduino · Web Audio · Canvas 2D",
      },
      {
        name: "SoRita",
        status: "Yayında",
        links: [
          { label: "App Store", href: links.sorita },
          { label: "Google Play", href: links.soritaPlay },
        ],
        description: "Harita üzerinde mekân keşfi, kişisel listeler ve deneyim notlarını bir araya getiren sosyal harita uygulaması.",
        role: "Ürün kurgusu, coğrafi etkileşim mimarisi, arayüz tasarımı ve mağaza yayını",
        stack: "Figma Make · React Native · Expo · Supabase · React Native Maps",
      },
      {
        name: "AudioRoom",
        status: "Canlı demo",
        links: [{ label: "Demo", href: links.audioroom }],
        description: "Müzik albümlerini gezilebilir ve dinlenebilir 3B dünyalara dönüştüren bağımsız deneyim kütüphanesi.",
        role: "Konsept, uzamsal ses kurgusu, 3B sahneleme ve arayüz tasarımı",
        stack: "Three.js · WebGL · Web Audio",
      },
      {
        name: "AtKafası Fanzin",
        status: "1. ve 2. sayı",
        links: [
          { label: "Gumroad", href: links.atkafasiGumroad },
          { label: "Shopier", href: links.atkafasiShopier },
        ],
        description: "Yazılarından görsel diline, 18 parçalık sticker serisinden sayfa mizanpajına kadar bağımsız hazırladığım kültür fanzini.",
        role: "Yazılar, editoryal ve görsel kimlik, sayfa tasarımı, yayın",
      },
    ],
    moreProjects: {
      text: "Zlip, WMatch, trAI, Merbut, sTressT, STROLLY ve bilim çalışmaları dahil tüm üretimler",
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
    updated: "October 2026",
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
      "Physics undergraduate combining analytical systems thinking with user-centered product design. I design and ship digital products end-to-end: from user research and interactive Figma prototypes to published App Store / Google Play apps, biomechanical CV systems and 3D web experiences. Seeking an internship or junior role in Product Design & UI/UX.",
    experience: [
      {
        role: "Independent Product Design & Development",
        organization: "MeMoDe",
        period: "Present",
        points: [
          "Led end-to-end product design and store launch processes across mobile applications.",
          "Prepared a comprehensive 28-page investor/product deck for UniVerse covering problem, personas, competitor analysis and business model.",
          "Designed and built experimental systems including early tendon gesture sensing (-140ms), AI virtual try-on and 3D interior editors.",
          "Designed core loops, game UI/UX and systems architecture for multiplayer WebGL games.",
        ],
      },
    ],
    projects: [
      {
        name: "UniVerse",
        status: "Live",
        links: [
          { label: "App Store", href: links.universe },
          { label: "Google Play", href: links.universePlay },
        ],
        description: "A two-sided campus mobile platform connecting students and university clubs around events and community feeds.",
        role: "Problem framing, user journeys, Figma UI design, mobile engineering, store releases",
        stack: "Figma Make · React Native · Expo · Supabase",
      },
      {
        name: "beaTTer",
        status: "Live",
        links: [
          { label: "Live Web", href: links.beatter },
          { label: "GitHub", href: links.beatterGithub },
        ],
        description: "A game-theoretic arena anticipating human hand gesture trajectory (-140ms early tendon detection) with physical/digital robot arm integration.",
        role: "Biomechanical modeling, computer vision, game theory, UI/UX & real-time interaction",
        stack: "MediaPipe · TensorFlow · Arduino · Web Audio · Canvas 2D",
      },
      {
        name: "SoRita",
        status: "Live",
        links: [
          { label: "App Store", href: links.sorita },
          { label: "Google Play", href: links.soritaPlay },
        ],
        description: "A social map application combining geographic place discovery, personal lists and user experience reviews.",
        role: "Product concept, geographic UX architecture, UI design and store releases",
        stack: "Figma Make · React Native · Expo · Supabase · React Native Maps",
      },
      {
        name: "AudioRoom",
        status: "Live demo",
        links: [{ label: "Demo", href: links.audioroom }],
        description: "A creative web experience turning musical albums into explorable, interactive 3D worlds.",
        role: "Concept, spatial audio direction, 3D scene design & interface",
        stack: "Three.js · WebGL · Web Audio",
      },
      {
        name: "AtKafası Fanzin",
        status: "Issues 1–2",
        links: [
          { label: "Gumroad", href: links.atkafasiGumroad },
          { label: "Shopier", href: links.atkafasiShopier },
        ],
        description: "An independent print & digital cultural zine with two published issues, custom stickers and editorial layout.",
        role: "Writing, editorial & visual identity, layout design, publishing",
      },
    ],
    moreProjects: {
      text: "All projects, including Zlip, WMatch, trAI, Merbut, sTressT, STROLLY and science work",
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
