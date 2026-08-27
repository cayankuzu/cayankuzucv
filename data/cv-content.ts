import type { Locale } from "@/data/i18n";
export const cvSections = ["profile", "projects", "experience", "goals"] as const;

export type CvSection = (typeof cvSections)[number];

type ExperienceItem = {
  label: string;
  title: string;
  description: string;
  evidence: string;
};

type ProfileHighlight = {
  title: string;
  description: string;
};

type ProjectPreview = {
  slug: string;
  title: string;
  description: string;
  platform: string;
  status: string;
  role: string;
  tools: string;
};

type GoalItem = {
  title: string;
  description: string;
};

type SkillGroup = {
  title: string;
  items: string[];
};

type CvContent = {
  footerCredit: string;
  sections: Record<CvSection, string>;
  sidebar: {
    portraitAlt: string;
    communication: string;
    education: string;
    skills: string;
    educationLines: string[];
    skillGroups: SkillGroup[];
    portfolioLabel: string;
    instagramLabel: string;
    githubLabel: string;
    emailSubject: string;
    emailBody: string;
    openPortrait: string;
    closePortrait: string;
    showDetails: string;
    hideDetails: string;
  };
  profile: {
    summary: string;
    highlights: ProfileHighlight[];
  };
  projects: {
    intro: string;
    platformLabel: string;
    roleLabel: string;
    toolsLabel: string;
    viewLabel: string;
    allProjectsLabel: string;
    archivePrintLabel: string;
    items: ProjectPreview[];
  };
  experience: {
    intro: string;
    items: ExperienceItem[];
  };
  goals: {
    intro: string;
    items: GoalItem[];
  };
};

export const cvContent: Record<Locale, CvContent> = {
  tr: {
    footerCredit: "MeMoDe tarafından",
    sections: {
      profile: "Profil",
      projects: "Projeler",
      experience: "Üretim Deneyimi",
      goals: "Hedeflerim",
    },
    sidebar: {
      portraitAlt: "Çayan Kuzu portresi",
      communication: "İletişim",
      education: "Eğitim",
      skills: "Yetenekler",
      educationLines: ["Marmara Üniversitesi — Fizik Bölümü, 4. sınıf"],
      skillGroups: [
        {
          title: "Genel",
          items: ["Ürün düşüncesi", "UI/UX", "Prototipleme", "AI destekli üretim"],
        },
        {
          title: "Ürün & UX",
          items: ["Figma", "Wireframing", "Kullanıcı akışı", "Bilgi mimarisi", "Etkileşim tasarımı", "Prototipleme"],
        },
        {
          title: "Oyun & Etkileşim",
          items: ["Oyun mekanikleri", "Oyun döngüleri", "Oyun UI/UX", "Etkileşimli prototipleme"],
        },
        {
          title: "Uygulama & Web",
          items: ["React Native", "Expo", "Supabase", "Web teknolojileri"],
        },
        {
          title: "AI & Araçlar",
          items: ["AI destekli araştırma", "AI destekli prototipleme", "Cursor", "GitHub", "Vercel"],
        },
      ],
      portfolioLabel: "Fikkis proje arşivi",
      instagramLabel: "Proje Instagram · @memode333",
      githubLabel: "GitHub · @cayankuzu",
      emailSubject: "Portföyünüz Hakkında İletişim",
      emailBody: "Merhaba Çayan,\n\nPortföyünüz hakkında iletişime geçmek istiyorum.\n\n",
      openPortrait: "Profil fotoğrafını büyüt",
      closePortrait: "Profil fotoğrafını kapat",
      showDetails: "Detayları Göster",
      hideDetails: "Detayları Gizle",
    },
    profile: {
      summary:
        "Marmara Üniversitesi Fizik Bölümü 4. sınıf öğrencisiyim. Dijital ürünler, kullanıcı deneyimi ve oyun tasarımı üzerine çalışıyorum; fikirleri araştırma, tasarım ve hızlı prototipleme yoluyla somut deneyimlere dönüştürmeye odaklanıyorum.",
      highlights: [
        {
          title: "Ürün Düşüncesi",
          description: "Kullanıcı ihtiyacını, ürünün amacını ve temel akışı birlikte ele alıyorum.",
        },
        {
          title: "UI/UX & Prototipleme",
          description: "Varsayımları erken prototiplerle sınayıp geri bildirimle sadeleştiriyorum.",
        },
        {
          title: "Oyun & Etkileşim",
          description: "Oyun mekanikleri, oyun döngüsü ve oyuncu deneyimi üzerinden etkileşim tasarlıyorum.",
        },
      ],
    },
    projects: {
      intro: "Ürün düşüncesi, kullanıcı akışları, arayüz tasarımı ve çalışan prototipler üzerinden geliştirdiğim bazı projeler.",
      platformLabel: "Platform",
      roleLabel: "Rol",
      toolsLabel: "Araçlar",
      viewLabel: "Projeyi incele",
      allProjectsLabel: "Tüm projeleri görüntüle",
      archivePrintLabel: "Fikkis Proje Arşivi",
      items: [
        {
          slug: "etkinlink",
          title: "EtkinLink",
          description: "Etkinlik keşfi, katılımcı odaları ve ilgi temelli eşleşmeyi bir araya getiren mobil ürün prototipi.",
          platform: "Mobil",
          status: "Prototip",
          role: "Ürün fikri · Kullanıcı akışları · UI/UX · Prototipleme",
          tools: "Figma",
        },
        {
          slug: "universe",
          title: "UniVerse",
          description: "Kampüs akışı, topluluklar ve etkinlikleri tek deneyimde buluşturan üniversite odaklı mobil ürün.",
          platform: "iOS",
          status: "Yayında",
          role: "Ürün tasarımı · UI/UX · Prototipleme",
          tools: "Figma Make",
        },
        {
          slug: "sorita",
          title: "SoRita",
          description: "Mekânları, anıları ve insanları rota, liste ve paylaşım akışlarıyla buluşturan sosyal şehir deneyimi.",
          platform: "iOS / Android",
          status: "Yayında",
          role: "Ürün tasarımı · Kullanıcı akışları · UI/UX",
          tools: "Figma Make",
        },
        {
          slug: "remember-you-must-die",
          title: "Remember You Must Die",
          description: "Müzik, ışık ve mekânı fanilik teması etrafında birleştiren atmosferik, etkileşimli web deneyimi.",
          platform: "Web",
          status: "Canlı",
          role: "Deneyim tasarımı · Etkileşim · Görsel anlatı",
          tools: "Three.js · WebGL",
        },
        {
          slug: "fikkis",
          title: "Fikkis",
          description: "Mobil ürünleri, web deneyimlerini, oyunları ve yaratıcı projeleri bir araya getiren kişisel proje arşivi.",
          platform: "Web",
          status: "Canlı",
          role: "Bilgi mimarisi · Proje sunumu · Web deneyimi",
          tools: "Next.js · Vercel",
        },
        {
          slug: "bibish",
          title: "Bibish",
          description: "Alan kontrolü, takım kaleleri ve NPC orduları üzerine kurulu birinci şahıs web oyunu.",
          platform: "Tarayıcı · Masaüstü",
          status: "Canlı",
          role: "Oyun tasarımı · Mekanikler · Etkileşim · Prototipleme",
          tools: "Three.js · WebGL2",
        },
      ],
    },
    experience: {
      intro: "Mobil ürün, oyun, web ve bağımsız yayın projelerinde geliştirdiğim üretim pratiği.",
      items: [
        {
          label: "Mobil Ürün",
          title: "Ürün tasarımı ve çalışan prototipler",
          description: "Mobil ürün fikirlerini problem tanımı, kullanıcı akışları, arayüz tasarımı ve etkileşimli prototip adımlarıyla geliştirdim.",
          evidence: "EtkinLink · UniVerse · SoRita · WMatch",
        },
        {
          label: "Oyun & Etkileşim",
          title: "Mekanikten oynanabilir deneyime",
          description: "Oyun projelerinde döngü, seviye yapısı, oyuncu geri bildirimi ve etkileşim sistemleri üzerinde çalıştım.",
          evidence: "Bibish · Merbut · Battleship · Son 40 Saniye",
        },
        {
          label: "Web Deneyimi",
          title: "Etkileşimli anlatılar ve yaratıcı araçlar",
          description: "Müzik, anlatı, üç boyutlu mekân ve yaratıcı araçları etkileşimli web deneyimlerinde bir araya getirdim.",
          evidence: "Fikkis · desAIn · AudioRoom · Remember You Must Die",
        },
        {
          label: "Bağımsız Yayın",
          title: "AtKafası Fanzin",
          description: "Yazı, görsel dil ve dijital satış akışını bir araya getiren bağımsız yayın projesini tasarladım ve yayımladım.",
          evidence: "İçerik üretimi · Görsel kimlik · Yayınlama",
        },
      ],
    },
    goals: {
      intro: "Ürün, kullanıcı deneyimi ve oyun tasarımı pratiğimi kullanıcı geri bildirimi ve ekip çalışmasıyla geliştirmeyi hedefliyorum.",
      items: [
        {
          title: "Ürün & UI/UX pratiği",
          description: "Problem tanımı, kullanıcı akışı, arayüz ve test kararlarında daha güçlü ve tutarlı bir yaklaşım geliştirmek.",
        },
        {
          title: "Oyun & Etkileşimli Deneyimler",
          description: "Oyun mekanikleri, sistemler ve oyuncu deneyimi üzerine yeni, oynanabilir prototipler üretmeye devam etmek.",
        },
        {
          title: "Gerçek kullanıcılarla doğrulama",
          description: "Ürünleri varsayımlar yerine kullanıcı geri bildirimi ve kullanılabilirlik testleriyle geliştirmek.",
        },
        {
          title: "Hızlı prototipleme ve AI destekli üretim",
          description: "Tasarım ve teknik araçları kullanarak fikirleri test edilebilir prototiplere daha hızlı dönüştürmek.",
        },
        {
          title: "Ekip İçinde Ürün Geliştirme",
          description: "Çok disiplinli ekiplerde ürün geliştirme süreçlerine katılarak profesyonel deneyim kazanmak.",
        },
      ],
    },
  },
  en: {
    footerCredit: "By MeMoDe",
    sections: {
      profile: "Profile",
      projects: "Projects",
      experience: "Production Experience",
      goals: "Goals",
    },
    sidebar: {
      portraitAlt: "Portrait of Çayan Kuzu",
      communication: "Contact",
      education: "Education",
      skills: "Skills",
      educationLines: ["Marmara University — Physics, 4th Year"],
      skillGroups: [
        {
          title: "General",
          items: ["Product thinking", "UI/UX", "Prototyping", "AI-assisted production"],
        },
        {
          title: "Product & UX",
          items: ["Figma", "Wireframing", "User flows", "Information architecture", "Interaction design", "Prototyping"],
        },
        {
          title: "Games & Interaction",
          items: ["Game mechanics", "Game loops", "Game UI/UX", "Interactive prototyping"],
        },
        {
          title: "Apps & Web",
          items: ["React Native", "Expo", "Supabase", "Web technologies"],
        },
        {
          title: "AI & Tools",
          items: ["AI-assisted research", "AI-assisted prototyping", "Cursor", "GitHub", "Vercel"],
        },
      ],
      portfolioLabel: "Fikkis project archive",
      instagramLabel: "Project Instagram · @memode333",
      githubLabel: "GitHub · @cayankuzu",
      emailSubject: "Portfolio Inquiry — Çayan Kuzu",
      emailBody: "Hello Çayan,\n\nI would like to get in touch about your portfolio.\n\n",
      openPortrait: "Enlarge profile photo",
      closePortrait: "Close profile photo",
      showDetails: "Show Details",
      hideDetails: "Hide Details",
    },
    profile: {
      summary:
        "I am a fourth-year Physics student at Marmara University. I work on digital products, user experience and game design, focusing on turning ideas into tangible experiences through research, design and rapid prototyping.",
      highlights: [
        {
          title: "Product Thinking",
          description: "I consider user needs, the product’s purpose, and the core flow together.",
        },
        {
          title: "UI/UX & Prototyping",
          description: "I test assumptions with early prototypes and simplify them through feedback.",
        },
        {
          title: "Games & Interaction",
          description: "I design interactions through game mechanics, game loops and player experience.",
        },
      ],
    },
    projects: {
      intro: "A selection of projects I developed through product thinking, user flows, interface design and working prototypes.",
      platformLabel: "Platform",
      roleLabel: "Role",
      toolsLabel: "Tools",
      viewLabel: "View project",
      allProjectsLabel: "View all projects",
      archivePrintLabel: "Fikkis Project Archive",
      items: [
        {
          slug: "etkinlink",
          title: "EtkinLink",
          description: "A mobile product prototype combining event discovery, participant rooms and interest-based matching.",
          platform: "Mobile",
          status: "Prototype",
          role: "Product concept · User flows · UI/UX · Prototyping",
          tools: "Figma",
        },
        {
          slug: "universe",
          title: "UniVerse",
          description: "A university-focused mobile product bringing campus feeds, communities and events into one experience.",
          platform: "iOS",
          status: "Live",
          role: "Product design · UI/UX · Prototyping",
          tools: "Figma Make",
        },
        {
          slug: "sorita",
          title: "SoRita",
          description: "A social city experience connecting places, memories and people through routes, lists and sharing flows.",
          platform: "iOS / Android",
          status: "Live",
          role: "Product design · User flows · UI/UX",
          tools: "Figma Make",
        },
        {
          slug: "remember-you-must-die",
          title: "Remember You Must Die",
          description: "An atmospheric interactive web experience combining music, light and space around the theme of mortality.",
          platform: "Web",
          status: "Live",
          role: "Experience design · Interaction · Visual narrative",
          tools: "Three.js · WebGL",
        },
        {
          slug: "fikkis",
          title: "Fikkis",
          description: "A personal project archive bringing mobile products, web experiences, games and creative work together.",
          platform: "Web",
          status: "Live",
          role: "Information architecture · Project presentation · Web experience",
          tools: "Next.js · Vercel",
        },
        {
          slug: "bibish",
          title: "Bibish",
          description: "A first-person web game built around area control, team forts and NPC armies.",
          platform: "Browser · Desktop",
          status: "Live",
          role: "Game design · Mechanics · Interaction · Prototyping",
          tools: "Three.js · WebGL2",
        },
      ],
    },
    experience: {
      intro: "My production practice across mobile products, games, web experiences, and independent publishing.",
      items: [
        {
          label: "Mobile Product",
          title: "Product design and working prototypes",
          description: "I developed mobile product ideas through problem framing, user flows, interface design, and interactive prototyping.",
          evidence: "EtkinLink · UniVerse · SoRita · WMatch",
        },
        {
          label: "Games & Interaction",
          title: "From mechanics to playable experiences",
          description: "Across game projects, I worked on game loops, level structures, player feedback and interaction systems.",
          evidence: "Bibish · Merbut · Battleship · Last 40 Seconds",
        },
        {
          label: "Web Experience",
          title: "Interactive narratives and creative tools",
          description: "I combined music, narrative, three-dimensional spaces, and creative tools in interactive web experiences.",
          evidence: "Fikkis · desAIn · AudioRoom · Remember You Must Die",
        },
        {
          label: "Independent Publishing",
          title: "AtKafası Fanzine",
          description: "I designed and published an independent publication combining writing, visual language and a digital sales flow.",
          evidence: "Content production · Visual identity · Publishing",
        },
      ],
    },
    goals: {
      intro: "I want to develop my product, user experience, and game design practice through user feedback and teamwork.",
      items: [
        {
          title: "Product & UI/UX practice",
          description: "Build a stronger, more consistent approach to problem framing, user flows, interfaces and testing decisions.",
        },
        {
          title: "Games & interactive experiences",
          description: "Keep creating new, playable prototypes focused on game mechanics, systems and player experience.",
        },
        {
          title: "Validation with real users",
          description: "Develop products through user feedback and usability testing rather than assumptions.",
        },
        {
          title: "Rapid prototyping & AI-assisted production",
          description: "Use design and technical tools to turn ideas into testable prototypes more quickly.",
        },
        {
          title: "Product Development in Teams",
          description: "Take part in product development within multidisciplinary teams and gain professional experience.",
        },
      ],
    },
  },
};
