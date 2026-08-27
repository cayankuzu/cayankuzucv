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
      intro: "Ürün geliştirme, UI/UX, etkileşimli web ve oyun sistemleri alanlarındaki en güçlü çalışmalarım.",
      platformLabel: "Platform",
      roleLabel: "Rol",
      toolsLabel: "Araçlar",
      allProjectsLabel: "Tüm projelerimi Fikkis portfolyo sitemde incele",
      archivePrintLabel: "Tüm projelerimi Fikkis portfolyo sitemde incele",
      items: [
        {
          slug: "sorita",
          title: "SoRita",
          description: "Haritada mekân kartları ve listeler oluşturmayı; kişi, yer ve medya keşfiyle takip, beğeni, yorum ve paylaşımı birleştiren sosyal uygulama.",
          platform: "iOS · Android",
          status: "Yayında",
          role: "Bağımsız ürün geliştirme · UI/UX · Mobil ve backend geliştirme",
          tools: "Figma Make · React Native · Expo · TypeScript · Supabase · Google Maps",
        },
        {
          slug: "universe",
          title: "UniVerse",
          description: "Öğrencileri ve kulüpleri etkinlikler, kampüs akışı, etkinlik albümleri, takip ve sosyal etkileşimler çevresinde buluşturan mobil uygulama.",
          platform: "iOS · Android",
          status: "Yayında",
          role: "Bağımsız ürün geliştirme · UI/UX · Mobil ve backend geliştirme",
          tools: "Figma Make · React Native · Expo · TypeScript · Supabase",
        },
        {
          slug: "wmatch",
          title: "WMatch",
          description: "Ortak film ve dizileri, favorileri ve izleme anlarını uyum odaklı eşleşmelere; karşılıklı beğenileri ise sohbete dönüştüren 18+ mobil sosyal uygulama. Android sürümü yayın hazırlığında.",
          platform: "iOS · Android",
          status: "iOS'ta yayında",
          role: "Bağımsız ürün geliştirme · UI/UX · Mobil ve backend geliştirme",
          tools: "Figma Make · React Native · Expo · TypeScript · Supabase · TMDB",
        },
        {
          slug: "audioroom",
          title: "AudioRoom",
          description: "Albüm ve single'ları özgün etkileşim döngüleri ve dinleme akışları sunan oynanabilir 3B dünyalara dönüştüren; 4 canlı evren ve 2 yaklaşan kayıt içeren müzik deneyimi.",
          platform: "Web · Masaüstü öncelikli",
          status: "Canlı · Geliştiriliyor",
          role: "Yaratıcı geliştirici · Ürün ve etkileşim tasarımı",
          tools: "TypeScript · Three.js/WebGL · Vite · YouTube IFrame API · Vercel",
        },
        {
          slug: "merbut",
          title: "Merbut",
          description: "Hz. Ali ve Samuray Jack'i aynı klavyede buluşturan; yedi biyom, yaratık dalgaları ve Aku boss savaşları üzerinden ilerleyen yerel iki oyunculu 2.5D aksiyon oyunu.",
          platform: "Web · Masaüstü · Yerel iki oyunculu",
          status: "Canlı",
          role: "Bağımsız geliştirici · Oyun tasarımı ve sistemler",
          tools: "React · TypeScript · Vite · React Three Fiber · Three.js · Zustand",
        },
        {
          slug: "bibish",
          title: "Bibish",
          description: "İki takımın 10 karakol ve boyanabilir arazi için savaştığı, gerçek zamanlı tek global odalı birinci şahıs çok oyunculu WebGL oyunu.",
          platform: "Masaüstü tarayıcı",
          status: "Canlı",
          role: "Oyun tasarımı · Sistemler · 3B geliştirme · Gerçek zamanlı backend",
          tools: "Three.js · WebGL2 · Vite · WebSocket · Cloudflare Durable Objects · Vercel",
        },
      ],
    },
    experience: {
      intro: "Mobil ürünler, oynanabilir sistemler, web ürünleri ve bağımsız yayınlar boyunca fikirleri akışlara, arayüzlere, prototiplere ve çalışan çıktılara dönüştürdüm.",
      items: [
        {
          label: "Mobil Ürünler",
          title: "Fikirden yayına uzanan ürün geliştirme",
          description: "Sosyal keşif, kampüs, şehir ve eşleşme ürünlerinde problem çerçevesi, kullanıcı akışları, arayüz, mobil istemci ve backend katmanlarını geliştirdim.",
          evidence: "EtkinLink · UniVerse · SoRita · WMatch",
        },
        {
          label: "Oyun Sistemleri",
          title: "Mekaniklerden kapsamlı oyun akışlarına",
          description: "Çok oyunculu FPS, yerel co-op, zaman baskılı karar ve sinematik bilgi oyunlarında temel döngü, kontrol, bölüm/boss, geri bildirim ve performans sistemleri geliştirdim.",
          evidence: "Bibish · Merbut · Son 40 Saniye · Asmaca",
        },
        {
          label: "Kart & Arcade",
          title: "Klasik mekaniklerden çalışan web oyunlarına",
          description: "Kart, strateji, refleks ve klasik oyun mekaniklerini bilgisayar rakibi, değişken zorluk, skor, klavye ve dokunmatik kontrollerle çalışan oyunlara dönüştürdüm.",
          evidence: "Card Race Game · Battleship · Papaz Kaçtı · Tic Tac Toe · Monster Wrangler · Catch the Clown · Snake · Burger Dog · Feed the Dragon",
        },
        {
          label: "Web & Yaratıcı Araçlar",
          title: "Ürünlerden etkileşimli anlatı ve araçlara",
          description: "Yapay zekâ, 3B anlatı, müzik arşivi, iç mekân tasarımı ve portfolyo sunumunu çalışan web deneyimlerine dönüştürdüm.",
          evidence: "trAI · desAIn · AudioRoom · Remember You Must Die · Çayan Kuzu CV · Fikkis",
        },
        {
          label: "Bağımsız Yayın",
          title: "İçerik, görsel dil ve dağıtım",
          description: "Yazı, görsel kimlik ve dijital satış/dağıtımı bir araya getiren bağımsız yayını tasarladım ve yayımladım.",
          evidence: "AtKafası Fanzin",
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
      intro: "My strongest work across product development, UI/UX, interactive web experiences and game systems.",
      platformLabel: "Platform",
      roleLabel: "Role",
      toolsLabel: "Tools",
      allProjectsLabel: "Explore all my projects on my Fikkis portfolio",
      archivePrintLabel: "Explore all my projects on my Fikkis portfolio",
      items: [
        {
          slug: "sorita",
          title: "SoRita",
          description: "A social app for creating place cards and lists on a map, then discovering people, places and media through follows, likes, comments and sharing.",
          platform: "iOS · Android",
          status: "Live",
          role: "Independent product development · UI/UX · Mobile and backend development",
          tools: "Figma Make · React Native · Expo · TypeScript · Supabase · Google Maps",
        },
        {
          slug: "universe",
          title: "UniVerse",
          description: "A mobile app connecting students and clubs through events, a campus feed, event albums, following and social interactions.",
          platform: "iOS · Android",
          status: "Live",
          role: "Independent product development · UI/UX · Mobile and backend development",
          tools: "Figma Make · React Native · Expo · TypeScript · Supabase",
        },
        {
          slug: "wmatch",
          title: "WMatch",
          description: "An 18+ mobile social app that turns shared films, series, favourites and current viewing into compatibility-based matches and chat after mutual likes. Its Android release is in preparation.",
          platform: "iOS · Android",
          status: "Live on iOS",
          role: "Independent product development · UI/UX · Mobile and backend development",
          tools: "Figma Make · React Native · Expo · TypeScript · Supabase · TMDB",
        },
        {
          slug: "audioroom",
          title: "AudioRoom",
          description: "A browser-based music experience that turns albums and singles into playable 3D worlds with distinct interaction loops and listening flows; four worlds are live and two more are upcoming.",
          platform: "Web · Desktop-first",
          status: "Live · Evolving",
          role: "Creative developer · Product and interaction design",
          tools: "TypeScript · Three.js/WebGL · Vite · YouTube IFrame API · Vercel",
        },
        {
          slug: "merbut",
          title: "Merbut",
          description: "A local two-player 2.5D browser action game that brings Hz. Ali and Samurai Jack to the same keyboard through seven biomes, enemy waves and boss battles against Aku.",
          platform: "Web · Desktop · Local two-player",
          status: "Live",
          role: "Independent developer · Game design and systems",
          tools: "React · TypeScript · Vite · React Three Fiber · Three.js · Zustand",
        },
        {
          slug: "bibish",
          title: "Bibish",
          description: "A real-time multiplayer WebGL FPS where two teams fight for ten outposts and paintable terrain in one global room.",
          platform: "Desktop browser",
          status: "Live",
          role: "Game design · Systems · 3D development · Realtime backend",
          tools: "Three.js · WebGL2 · Vite · WebSocket · Cloudflare Durable Objects · Vercel",
        },
      ],
    },
    experience: {
      intro: "Across mobile products, playable systems, web products and independent publishing, I turn ideas into flows, interfaces, prototypes and working outputs.",
      items: [
        {
          label: "Mobile Products",
          title: "Product development from concept to release",
          description: "For products focused on social discovery, campus life, cities and matching, I developed problem framing, user flows, interfaces, mobile clients and backend layers.",
          evidence: "EtkinLink · UniVerse · SoRita · WMatch",
        },
        {
          label: "Game Systems",
          title: "From mechanics to complete game flows",
          description: "Across a multiplayer FPS, local co-op, timed decision game and cinematic knowledge game, I developed core loops, controls, level and boss flows, feedback and performance systems.",
          evidence: "Bibish · Merbut · Son 40 Saniye · Asmaca",
        },
        {
          label: "Card & Arcade",
          title: "From classic mechanics to working web games",
          description: "I turned card, strategy, reflex and classic game mechanics into playable projects with computer opponents, variable difficulty, scoring, keyboard and touch controls.",
          evidence: "Card Race Game · Battleship · Papaz Kaçtı · Tic Tac Toe · Monster Wrangler · Catch the Clown · Snake · Burger Dog · Feed the Dragon",
        },
        {
          label: "Web & Creative Tools",
          title: "From products to interactive narratives and tools",
          description: "I built working web experiences spanning AI, 3D narratives, music archives, interior design and portfolio presentation.",
          evidence: "trAI · desAIn · AudioRoom · Remember You Must Die · Çayan Kuzu CV · Fikkis",
        },
        {
          label: "Independent Publishing",
          title: "Content, visual language and distribution",
          description: "I designed and published an independent publication combining writing, visual identity, and digital sales and distribution.",
          evidence: "AtKafası Fanzin",
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
