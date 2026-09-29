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
  link: Link;
  description: string;
  role: string;
  stack: string;
};

type Academic = {
  title: string;
  detail: string;
  link?: Link;
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
  universe: "https://apps.apple.com/tr/app/universe-app/id6761912452",
  etkinlink:
    "https://www.figma.com/proto/RLPPToWydcFxLtnlvTr0mi/EtkinLink?node-id=32-1772&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=97%3A386&page-id=12%3A8",
  trai: "https://trai-theta.vercel.app/",
  audioroom: "https://audio-room-ecru.vercel.app/",
  fikkis: "https://fikkis.vercel.app/",
  dysonRing: "https://fikkis.vercel.app/dokuman/dyson-ring",
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
      "Fizik lisans öğrencisiyim. Dijital ürünleri fikir aşamasından yayına kadar tasarlıyor, yapay zekâ destekli geliştirme süreçlerini yöneterek çalışan ürünlere dönüştürüyorum. App Store'da yayında üç mobil uygulamam (ikisi Google Play'de de), web MVP'lerim ve 13 tarayıcı oyunum var. Ürün tasarımı ve UI/UX alanında staj arıyorum.",
    experience: [
      {
        role: "Bağımsız Ürün Tasarımcısı",
        organization: "MeMoDe",
        period: "Devam ediyor",
        points: [
          "Mobil uygulamaları problem tanımı, kullanıcı akışları ve arayüz tasarımından başlayarak, yapay zekâ destekli geliştirme süreçlerini yöneterek yayına aldım.",
          "Yapay zekâ destekli sanal prova, harita tabanlı sosyal oyun ve 3B iç mekân editörü gibi web MVP'lerini tasarlayıp yayına aldım.",
          "Tarayıcı oyunlarında (gerçek zamanlı çok oyunculu bir FPS dahil) oyun döngüsü ve sistem tasarımı yaptım.",
          "Bağımsız AtKafası Fanzin'in (2 sayı) editoryal ve görsel kimliğini oluşturdum.",
          "UniVerse için problemi, rakip analizini ve iş modelini anlatan 28 sayfalık bir yatırımcı sunumu hazırladım.",
        ],
      },
    ],
    projects: [
      {
        name: "SoRita",
        status: "Yayında",
        link: { label: "App Store", href: links.sorita },
        description: "Harita üzerinde mekân keşfi, kişisel listeler ve sosyal paylaşımı bir araya getiren sosyal harita uygulaması.",
        role: "Ürün kurgusu, kullanıcı akışları, arayüz tasarımı, yayın",
        stack: "Figma Make · React Native · Expo · Supabase",
      },
      {
        name: "UniVerse",
        status: "Yayında",
        link: { label: "App Store", href: links.universe },
        description: "Öğrencileri ve kulüpleri etkinlikler etrafında buluşturan kampüs uygulaması.",
        role: "Ürün kurgusu, kullanıcı akışları, arayüz tasarımı, yayın",
        stack: "Figma Make · React Native · Expo · Supabase",
      },
      {
        name: "AudioRoom",
        status: "Canlı demo",
        link: { label: "Demo", href: links.audioroom },
        description: "Albümleri gezilebilir 3B dünyalara dönüştüren bağımsız müzik deneyimi.",
        role: "Konsept, deneyim ve arayüz tasarımı",
        stack: "Three.js · WebGL",
      },
      {
        name: "trAI",
        status: "Canlı demo",
        link: { label: "Demo", href: links.trai },
        description: "Kıyafeti kullanıcının kendi fotoğrafında gösteren yapay zekâ destekli sanal prova.",
        role: "Ürün kurgusu, arayüz tasarımı, yapay zekâ entegrasyonu",
        stack: "Next.js · Supabase · fal.ai",
      },
      {
        name: "EtkinLink",
        status: "Figma prototipi",
        link: { label: "Prototip", href: links.etkinlink },
        description: "Etkinlik keşfini, etkinlik odalarını ve aynı etkinliğe katılanlar arasındaki eşleşmeyi bir araya getiren sosyal etkinlik uygulaması.",
        role: "Ürün kurgusu, kullanıcı akışları ve tasarım sistemi; ekran üretiminde Figma MCP ile yapay zekâ destekli akış",
        stack: "Figma · Figma MCP",
      },
    ],
    moreProjects: {
      text: "Oyunlar, web deneyimleri, bilim ve tasarım işleri dahil tüm projeler",
      link: { label: "fikkis.vercel.app", href: links.fikkis },
    },
    academic: [
      {
        title: "TÜBİTAK 2209-A araştırma önerisi",
        detail:
          "Dyson halkasının teknik ve ekonomik fizibilitesi; literatür taraması, simülasyon ve prototip iş paketleri. Danışman: Caner Değer. Başvuru olarak hazırlandı.",
        link: { label: "Belge", href: links.dysonRing },
      },
      {
        title: "Sönümlü harmonik osilatörün sayısal incelemesi",
        detail:
          "COMP2083 Bilimsel Programlama ders projesi, dört kişilik ekip. Hareket denkleminin Python'da Euler yöntemiyle çözümü; parametrelerin konum, hız ve enerjiye etkisinin analizi ve bilimsel poster.",
        link: { label: "Colab", href: links.dampedOscillator },
      },
      {
        title: "Sıçrama yüksekliği tahmini",
        detail: "Gradient Boosting, Random Forest ve KNN modellerinin karşılaştırmalı analizi.",
        link: { label: "Sunum", href: links.jumpHeight },
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
        items: "Problem tanımı, kullanıcı akışları, bilgi mimarisi, wireframe, prototipleme",
      },
      {
        label: "Arayüz",
        items: "Figma (component, variant, auto layout, variable), tasarım sistemleri, Figma Make, Figma MCP",
      },
      { label: "Oyun", items: "Oyun döngüsü, sistem tasarımı, oyun UI/UX" },
      {
        label: "Yapay zekâ destekli üretim",
        items: "Cursor ile yapay zekâ destekli geliştirme, React Native (Expo), Next.js, Supabase, Three.js",
      },
      { label: "Yayın", items: "GitHub, Vercel, App Store ve Google Play yayın süreci" },
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
      "Physics undergraduate who designs digital products from first idea to release and turns them into working products by directing AI-assisted development. I have three mobile apps live on the App Store (two also on Google Play), several web MVPs and 13 browser games. Seeking an internship in product design and UI/UX.",
    experience: [
      {
        role: "Independent Product Designer",
        organization: "MeMoDe",
        period: "Present",
        points: [
          "Took mobile apps from problem framing, user flows and interface design to release, directing an AI-assisted development process.",
          "Designed and launched web MVPs, including an AI virtual try-on, a map-based social game and a 3D interior editor.",
          "Designed core loops and game systems for browser games, including a real-time multiplayer FPS.",
          "Created the editorial and visual identity of AtKafası, an independent zine (two issues).",
          "Produced a 28-page investor deck for UniVerse covering the problem, competitor analysis and business model.",
        ],
      },
    ],
    projects: [
      {
        name: "SoRita",
        status: "Live",
        link: { label: "App Store", href: links.sorita },
        description: "A social map app that brings place discovery, personal lists and social sharing together.",
        role: "Product concept, user flows, interface design, release",
        stack: "Figma Make · React Native · Expo · Supabase",
      },
      {
        name: "UniVerse",
        status: "Live",
        link: { label: "App Store", href: links.universe },
        description: "A campus app that brings students and clubs together around events.",
        role: "Product concept, user flows, interface design, release",
        stack: "Figma Make · React Native · Expo · Supabase",
      },
      {
        name: "AudioRoom",
        status: "Live demo",
        link: { label: "Demo", href: links.audioroom },
        description: "An independent music experience that turns albums into explorable 3D worlds.",
        role: "Concept, experience and interface design",
        stack: "Three.js · WebGL",
      },
      {
        name: "trAI",
        status: "Live demo",
        link: { label: "Demo", href: links.trai },
        description: "An AI virtual try-on that shows garments on the user's own photo.",
        role: "Product concept, interface design, AI integration",
        stack: "Next.js · Supabase · fal.ai",
      },
      {
        name: "EtkinLink",
        status: "Figma prototype",
        link: { label: "Prototype", href: links.etkinlink },
        description: "A social events app that combines event discovery, event rooms and matching between people attending the same event.",
        role: "Product concept, user flows and design system; AI-assisted screen production with Figma MCP",
        stack: "Figma · Figma MCP",
      },
    ],
    moreProjects: {
      text: "All projects, including games, web experiences, science and design work",
      link: { label: "fikkis.vercel.app", href: links.fikkis },
    },
    academic: [
      {
        title: "TÜBİTAK 2209-A research proposal",
        detail:
          "Technical and economic feasibility of a Dyson ring, structured as literature review, simulation and prototype work packages. Advisor: Caner Değer. Prepared as an application.",
        link: { label: "Document", href: links.dysonRing },
      },
      {
        title: "Numerical study of a damped harmonic oscillator",
        detail:
          "COMP2083 Scientific Programming course project, team of four. Solved the equation of motion in Python with Euler's method, analysed how each parameter affects position, velocity and energy, and presented the results as a scientific poster.",
        link: { label: "Colab", href: links.dampedOscillator },
      },
      {
        title: "Jump height prediction",
        detail: "A comparative analysis of Gradient Boosting, Random Forest and KNN models.",
        link: { label: "Slides", href: links.jumpHeight },
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
        items: "Problem framing, user flows, information architecture, wireframing, prototyping",
      },
      {
        label: "Interface",
        items: "Figma (components, variants, auto layout, variables), design systems, Figma Make, Figma MCP",
      },
      { label: "Games", items: "Core loops, systems design, game UI/UX" },
      {
        label: "AI-assisted building",
        items: "AI-assisted development with Cursor, React Native (Expo), Next.js, Supabase, Three.js",
      },
      { label: "Shipping", items: "GitHub, Vercel, App Store and Google Play release process" },
    ],
    languages: [],
    emailSubject: "Internship / Collaboration — Çayan Kuzu",
  },
};
