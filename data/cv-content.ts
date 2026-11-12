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
  simulab: "https://simulab-drab.vercel.app/",
  simulabGithub: "https://github.com/cayankuzu/SimuLab",
  lifeOfPhoton: "https://life-of-photon.vercel.app/",
  lifeOfPhotonGithub: "https://github.com/cayankuzu/LifeOfPhoton",
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
    updated: "Kasım 2026",
    title: "Ürün Tasarımı · UI/UX · Yaratıcı Mühendislik",
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
      "Fizik lisans öğrencisiyim. Fikirleri problem tanımından yayına kadar kullanıcı odaklı tasarlıyor; arayüz mimarisi, doğrulanmış bilimsel modelleme ve yapay zekâ destekli geliştirme disipliniyle çalışan ürünlere dönüştürüyorum. App Store ve Google Play'de yayında mobil uygulamalarım, etkileşimli 3B fizik laboratuvarlarım ve bağımsız bir fanzinim var. Ürün tasarımı ve UI/UX alanında staj veya iş birliği arıyorum.",
    experience: [
      {
        role: "Bağımsız Ürün Tasarımı ve Geliştirme",
        organization: "MeMoDe",
        period: "Devam ediyor",
        points: [
          "Mobil ürünlerde problem tanımı, kullanıcı yolculukları, Figma arayüz tasarımı ve mağaza yayın süreçlerini uçtan uca yönettim.",
          "SimuLab ve Life of a Photon ile doğrulanmış sayısal çözücüleri (RK4/DP5), özel görelilik optiğini ve WCAG 2.2 AA erişilebilirliğini 3B laboratuvar arayüzlerinde buluşturdum.",
          "UniVerse için problem tanımı, kullanıcı personası, rakip analizi ve iş modelini kapsayan 28 sayfalık yatırımcı/ürün sunumu hazırladım.",
          "SHA-256 taahhütlü el izleme arenası (beaTTer), katlanabilir kapak ekranı deneyimi (Zlip) ve 3B WebGL dünyaları tasarlayıp geliştirdim.",
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
        name: "SimuLab",
        status: "Canlı · v2.1",
        links: [
          { label: "Canlı Web", href: links.simulab },
          { label: "GitHub", href: links.simulabGithub },
        ],
        description: "Her sonucu kuramla karşılaştırılan, RK4 ve Dormand–Prince çözücülü, 14 doğrulama deneyli 3B salınım ve kaos laboratuvarı.",
        role: "Hesaplamalı fizik, sayısal doğrulama, veri görselleştirme ve WCAG 2.2 AA UI/UX tasarımı",
        stack: "Next.js 15 · React 19 · Three.js · TypeScript · KaTeX · Vitest",
      },
      {
        name: "Life of a Photon",
        status: "Canlı · v1.0",
        links: [
          { label: "Canlı Web", href: links.lifeOfPhoton },
          { label: "GitHub", href: links.lifeOfPhotonGithub },
        ],
        description: "0,99999 c'ye hızlanan gözlemcinin gördüğü caddeyi relativistik sapınç, Doppler kayması ve CIE 1931 renk bilimiyle hesaplayan simülasyon.",
        role: "Görelilik ve renk bilimi modellemesi, GLSL gölgelendiricileri, pedagojik panel ve UI/UX tasarımı",
        stack: "Next.js · React Three Fiber · WebGL 2 / GLSL · TypeScript · KaTeX",
      },
      {
        name: "beaTTer",
        status: "Canlı · v4",
        links: [
          { label: "Canlı Web", href: links.beatter },
          { label: "GitHub", href: links.beatterGithub },
        ],
        description: "Parmakların havada açılışını MediaPipe ile okuyup kararını inişten önceki karede SHA-256 ile mühürleyen Taş-Kağıt-Makas rakibi.",
        role: "Oyun teorisi, bilgisayarlı görü (GPU), kriptografik taahhüt, Arena/Rapor/Lab UI/UX tasarımı",
        stack: "MediaPipe · Web Crypto (SHA-256) · Canvas 2D · Web Audio",
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
        name: "AtKafası Fanzin",
        status: "Sayı 1–2",
        links: [
          { label: "Gumroad", href: links.atkafasiGumroad },
          { label: "Shopier", href: links.atkafasiShopier },
        ],
        description: "İki sayısı yayımlanmış, özel çıkartma ve mizanpaj kurgusuna sahip bağımsız basılı ve dijital kültür fanzini.",
        role: "Metin yazarlığı, editoryal ve görsel kimlik, sayfa mizanpajı, bağımsız yayın",
      },
    ],
    moreProjects: {
      text: "Zlip, WMatch, AudioRoom, STROLLY ve The Dream of the Photo dahil 42 üretim",
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
        items: "Problem tanımı, kullanıcı akışları, bilgi mimarisi, etkileşim tasarımı, WCAG 2.2 AA erişilebilirlik",
      },
      {
        label: "UI ve tasarım",
        items: "Figma (auto layout, component, variant, variable), tasarım sistemleri, veri görselleştirme, editoryal tasarım",
      },
      { label: "Oyun ve simülasyon", items: "Sayısal fizik çözücüleri (RK4/DP5), oyun döngüsü, sistem tasarımı, oyun UI/UX" },
      { label: "Teknik üretim", items: "React Native (Expo), Next.js, TypeScript, Three.js / WebGL / GLSL, Supabase, Kotlin" },
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
    updated: "November 2026",
    title: "Product Design · UI/UX · Creative Engineering",
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
      "Physics undergraduate combining analytical systems thinking and verified numerical modeling with user-centered product design. I design and ship digital products end-to-end: from user research and Figma design systems to published App Store & Google Play apps, interactive 3D physics laboratories, and an independent zine. Seeking an internship or collaboration in Product Design & UI/UX.",
    experience: [
      {
        role: "Independent Product Design & Development",
        organization: "MeMoDe",
        period: "Present",
        points: [
          "Led end-to-end product design, Figma UI systems, and store launch processes across mobile applications.",
          "Built SimuLab and Life of a Photon, uniting verified numerical solvers (RK4/DP5), relativistic optics, and WCAG 2.2 AA accessibility in interactive 3D laboratory interfaces.",
          "Prepared a comprehensive 28-page investor/product deck for UniVerse covering problem framing, personas, competitor analysis, and business model.",
          "Designed and engineered a SHA-256 commitment hand-tracking arena (beaTTer), foldable cover-screen UX (Zlip), and 3D WebGL experiences.",
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
        name: "SimuLab",
        status: "Live · v2.1",
        links: [
          { label: "Live Web", href: links.simulab },
          { label: "GitHub", href: links.simulabGithub },
        ],
        description: "3D oscillation and chaos laboratory with verified RK4 & Dormand–Prince solvers and 14 repeatable verification experiments.",
        role: "Computational physics, numerical verification, data visualization, WCAG 2.2 AA product & UI/UX design",
        stack: "Next.js 15 · React 19 · Three.js · TypeScript · KaTeX · Vitest",
      },
      {
        name: "Life of a Photon",
        status: "Live · v1.0",
        links: [
          { label: "Live Web", href: links.lifeOfPhoton },
          { label: "GitHub", href: links.lifeOfPhotonGithub },
        ],
        description: "First-person special relativity simulation computing what a traveller sees up to 0.99999 c via relativistic aberration, Doppler shift, and CIE 1931 color science.",
        role: "Relativity & color-science modeling, GLSL shaders, live pedagogical explainer panel & UI/UX design",
        stack: "Next.js · React Three Fiber · WebGL 2 / GLSL · TypeScript · KaTeX",
      },
      {
        name: "beaTTer",
        status: "Live · v4",
        links: [
          { label: "Live Web", href: links.beatter },
          { label: "GitHub", href: links.beatterGithub },
        ],
        description: "Rock-Paper-Scissors AI opponent reading mid-air finger motion with MediaPipe and sealing its decision with SHA-256 before the hand lands.",
        role: "Game theory, GPU computer vision, cryptographic commitment, Arena/Report/Lab UI/UX & thesis",
        stack: "MediaPipe · Web Crypto (SHA-256) · Canvas 2D · Web Audio",
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
      text: "All 42 works, including Zlip, WMatch, AudioRoom, STROLLY and The Dream of the Photo",
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
        items: "Problem framing, user flows, information architecture, interaction design, WCAG 2.2 AA accessibility",
      },
      {
        label: "UI and design",
        items: "Figma (auto layout, components, variants, variables), design systems, data visualization, editorial design",
      },
      { label: "Simulation and games", items: "Numerical physics solvers (RK4/DP5), core loops, systems design, game UI/UX" },
      { label: "Technical production", items: "React Native (Expo), Next.js, TypeScript, Three.js / WebGL / GLSL, Supabase, Kotlin" },
      {
        label: "AI-assisted production",
        items: "Cursor, Figma MCP, Figma Make, AI-assisted prototyping",
      },
    ],
    languages: [],
    emailSubject: "Internship / Collaboration — Çayan Kuzu",
  },
};
