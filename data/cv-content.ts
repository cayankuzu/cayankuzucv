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
    note: string;
    highlights: ProfileHighlight[];
  };
  projects: {
    intro: string;
    platformLabel: string;
    roleLabel: string;
    viewLabel: string;
    items: ProjectPreview[];
    archiveNote: string;
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
      educationLines: ["Marmara Üniversitesi", "Fizik Bölümü", "3. sınıf"],
      skillGroups: [
        {
          title: "Genel",
          items: ["Ürün düşüncesi", "UI/UX", "Prototipleme", "AI destekli üretim"],
        },
        {
          title: "Ürün & UX",
          items: ["Figma", "Wireframe", "User flow", "Bilgi mimarisi", "Etkileşim tasarımı", "Prototipleme"],
        },
        {
          title: "Oyun & Etkileşim",
          items: ["Oyun mekaniği", "Oyun döngüsü", "Oyun UI/UX", "Oyun prototipleme"],
        },
        {
          title: "Uygulama & Web",
          items: ["React Native", "Expo", "Supabase", "Web teknolojileri"],
        },
        {
          title: "AI & Teslim",
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
      showDetails: "CV bilgilerini göster",
      hideDetails: "CV bilgilerini gizle",
    },
    profile: {
      summary:
        "Marmara Üniversitesi Fizik Bölümü 3. sınıf öğrencisiyim. Dijital ürünler, kullanıcı deneyimi ve oyun tasarımı üzerine çalışıyor; fikirleri araştırma, tasarım ve hızlı prototipleme yoluyla somut deneyimlere dönüştürmeye odaklanıyorum.",
      note: "Fizik eğitiminden gelen analitik ve sistematik yaklaşımı, ürün ve deneyim tasarımı pratiğimde kullanıyorum.",
      highlights: [
        {
          title: "Ürün Düşüncesi",
          description: "Kullanıcı ihtiyacını, ürünün amacını ve temel akışı birlikte ele alıyorum.",
        },
        {
          title: "UI/UX & Prototipleme",
          description: "Figma ile kullanıcı akışları, arayüzler ve test edilebilir prototipler geliştiriyorum.",
        },
        {
          title: "Oyun & Etkileşim",
          description: "Mekanik, oyun döngüsü ve oyuncu geri bildirimi üzerinden etkileşim tasarlıyorum.",
        },
      ],
    },
    projects: {
      intro: "Ürün düşüncesi, kullanıcı akışları, arayüz tasarımı ve çalışan prototipler üzerinden geliştirdiğim seçili projeler.",
      platformLabel: "Platform",
      roleLabel: "Rol",
      viewLabel: "Projeyi incele",
      items: [
        {
          slug: "etkinlink",
          title: "EtkinLink",
          description: "Etkinlik keşfi, katılımcı odaları ve ilgi temelli eşleşmeyi bir araya getiren mobil ürün prototipi.",
          platform: "Mobil · Figma",
          status: "Prototip",
          role: "Ürün fikri · Kullanıcı akışları · UI/UX · Prototipleme",
        },
        {
          slug: "universe",
          title: "UniVerse",
          description: "Kampüs akışı, topluluklar ve etkinlikleri tek deneyimde buluşturan üniversite odaklı mobil ürün.",
          platform: "Mobil · Figma Make",
          status: "iOS'ta mevcut",
          role: "Ürün tasarımı · UI/UX · Prototipleme",
        },
        {
          slug: "sorita",
          title: "SoRita",
          description: "Mekânları, anıları ve insanları rota, liste ve paylaşım akışlarıyla buluşturan sosyal şehir deneyimi.",
          platform: "Mobil · Figma Make",
          status: "iOS + Android'de yayında",
          role: "Ürün tasarımı · Kullanıcı akışları · UI/UX",
        },
        {
          slug: "wmatch",
          title: "WMatch",
          description: "İzleme alışkanlıklarından zevk profili çıkararak ortak yapımlar etrafında eşleşme öneren ürün fikri.",
          platform: "Mobil · Figma Make",
          status: "MVP · Test sürecinde",
          role: "Ürün fikri · Akış tasarımı · UI/UX · Prototipleme",
        },
        {
          slug: "fikkis",
          title: "Fikkis",
          description: "Mobil ürünleri, web deneyimlerini, oyunları ve yaratıcı denemeleri bir araya getiren proje arşivi.",
          platform: "Web",
          status: "Yayında",
          role: "Bilgi mimarisi · Proje sunumu · Web deneyimi",
        },
        {
          slug: "bibish",
          title: "Bibish",
          description: "Alan kontrolü, takım kaleleri ve NPC orduları üzerine kurulu birinci şahıs web oyunu.",
          platform: "Web oyunu",
          status: "Yayında",
          role: "Oyun tasarımı · Mekanikler · Etkileşim · Prototipleme",
        },
      ],
      archiveNote: "Tüm güncel proje bağlantıları ve arşiv Fikkis üzerinde yer alıyor.",
    },
    experience: {
      intro: "Bağımsız projelerde üstlendiğim roller ve fikirleri çalışan deneyimlere dönüştürürken geliştirdiğim üretim pratiği.",
      items: [
        {
          label: "Mobil Ürün",
          title: "Ürün tasarımı ve çalışan prototipler",
          description: "EtkinLink, UniVerse, SoRita ve WMatch için problem çerçevesi, kullanıcı akışları, arayüzler ve etkileşimli prototipler geliştirdim.",
          evidence: "EtkinLink · UniVerse · SoRita · WMatch",
        },
        {
          label: "Oyun & Etkileşim",
          title: "Mekanikten oynanabilir deneyime",
          description: "Pygame ve tarayıcı teknolojileriyle oyun döngüsü, seviye yapısı, oyuncu geri bildirimi ve etkileşim sistemleri üzerinde çalıştım.",
          evidence: "Bibish · Merbut · Battleship · Son 40 Saniye",
        },
        {
          label: "Web Deneyimi",
          title: "Etkileşimli anlatılar ve yaratıcı araçlar",
          description: "Müzik, anlatı, üç boyutlu mekân ve yaratıcı araç fikirlerini erişilebilir web deneyimlerine dönüştürdüm.",
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
      intro: "Hedefim; ürün, kullanıcı deneyimi ve oyun tasarımı pratiğimi gerçek kullanıcılarla doğrulanan projeler ve ekip çalışması içinde geliştirmek.",
      items: [
        {
          title: "Ürün & UI/UX pratiği",
          description: "Problem tanımı, kullanıcı akışı, arayüz ve test kararlarında daha güçlü ve tutarlı bir yaklaşım geliştirmek.",
        },
        {
          title: "Oyun & interaktif deneyimler",
          description: "Oyun mekanikleri, sistemler ve oyuncu deneyimi üzerine yeni, oynanabilir prototipler üretmeye devam etmek.",
        },
        {
          title: "Gerçek kullanıcılarla doğrulama",
          description: "Ürünleri varsayımlar yerine kullanıcı geri bildirimi ve testlerle geliştirmek.",
        },
        {
          title: "Hızlı prototipleme ve AI destekli üretim",
          description: "Tasarım ve teknik araçları kullanarak fikirleri daha hızlı test edilebilir prototiplere dönüştürmek.",
        },
        {
          title: "Ekip içinde gerçek ürün deneyimi",
          description: "Çok disiplinli ekiplerde ürün süreçlerine katılarak staj/junior seviyede gerçek çalışma deneyimi kazanmak.",
        },
      ],
    },
  },
  en: {
    sections: {
      profile: "Profile",
      projects: "Projects",
      experience: "Project Experience",
      goals: "Goals",
    },
    sidebar: {
      portraitAlt: "Portrait of Çayan Kuzu",
      communication: "Contact",
      education: "Education",
      skills: "Skills",
      educationLines: ["Marmara University", "Physics Department", "Year 3"],
      skillGroups: [
        {
          title: "General",
          items: ["Product thinking", "UI/UX", "Prototyping", "AI-assisted production"],
        },
        {
          title: "Product & UX",
          items: ["Figma", "Wireframe", "User flow", "Information architecture", "Interaction design", "Prototyping"],
        },
        {
          title: "Games & Interaction",
          items: ["Game mechanics", "Game loops", "Game UI/UX", "Game prototyping"],
        },
        {
          title: "Application & Web",
          items: ["React Native", "Expo", "Supabase", "Web technologies"],
        },
        {
          title: "AI & Delivery",
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
      showDetails: "Show CV details",
      hideDetails: "Hide CV details",
    },
    profile: {
      summary:
        "I am a third-year Physics student at Marmara University. I work on digital products, user experience and game design, turning ideas into tangible experiences through research, design and rapid prototyping.",
      note: "I bring the analytical and systematic approach of my physics education into my product and experience design practice.",
      highlights: [
        {
          title: "Product Thinking",
          description: "I consider user needs, product purpose and the core flow together.",
        },
        {
          title: "UI/UX & Prototyping",
          description: "I use Figma to develop user flows, interfaces and testable prototypes.",
        },
        {
          title: "Games & Interaction",
          description: "I design interactions through mechanics, game loops and player feedback.",
        },
      ],
    },
    projects: {
      intro: "Selected projects developed through product thinking, user flows, interface design and working prototypes.",
      platformLabel: "Platform",
      roleLabel: "Role",
      viewLabel: "View project",
      items: [
        {
          slug: "etkinlink",
          title: "EtkinLink",
          description: "A mobile product prototype combining event discovery, participant rooms and interest-based matching.",
          platform: "Mobile · Figma",
          status: "Prototype",
          role: "Product concept · User flows · UI/UX · Prototyping",
        },
        {
          slug: "universe",
          title: "UniVerse",
          description: "A university-focused mobile product bringing campus feeds, communities and events into one experience.",
          platform: "Mobile · Figma Make",
          status: "Available on iOS",
          role: "Product design · UI/UX · Prototyping",
        },
        {
          slug: "sorita",
          title: "SoRita",
          description: "A social city experience connecting places, memories and people through routes, lists and sharing flows.",
          platform: "Mobile · Figma Make",
          status: "Live on iOS + Android",
          role: "Product design · User flows · UI/UX",
        },
        {
          slug: "wmatch",
          title: "WMatch",
          description: "A product concept that builds taste profiles from viewing habits and suggests matches around shared titles.",
          platform: "Mobile · Figma Make",
          status: "MVP · In testing",
          role: "Product concept · Flow design · UI/UX · Prototyping",
        },
        {
          slug: "fikkis",
          title: "Fikkis",
          description: "A project archive bringing mobile products, web experiences, games and creative experiments together.",
          platform: "Web",
          status: "Live",
          role: "Information architecture · Project presentation · Web experience",
        },
        {
          slug: "bibish",
          title: "Bibish",
          description: "A first-person web game built around area control, team forts and NPC armies.",
          platform: "Web game",
          status: "Live",
          role: "Game design · Mechanics · Interaction · Prototyping",
        },
      ],
      archiveNote: "Current project links and the full archive are available on Fikkis.",
    },
    experience: {
      intro: "The roles I take across independent projects and the production practice I have developed while turning ideas into working experiences.",
      items: [
        {
          label: "Mobile Product",
          title: "Product design and working prototypes",
          description: "I developed problem framing, user flows, interfaces and interactive prototypes for EtkinLink, UniVerse, SoRita and WMatch.",
          evidence: "EtkinLink · UniVerse · SoRita · WMatch",
        },
        {
          label: "Games & Interaction",
          title: "From mechanics to playable experiences",
          description: "Using Pygame and browser technologies, I worked on game loops, level structures, player feedback and interaction systems.",
          evidence: "Bibish · Merbut · Battleship · Last 40 Seconds",
        },
        {
          label: "Web Experience",
          title: "Interactive narratives and creative tools",
          description: "I turned ideas involving music, narrative, three-dimensional spaces and creative tools into accessible web experiences.",
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
      intro: "My goal is to develop my product, user experience and game design practice through projects validated with real users and through teamwork.",
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
          description: "Develop products through user feedback and testing rather than assumptions.",
        },
        {
          title: "Rapid prototyping & AI-assisted production",
          description: "Use design and technical tools to turn ideas into testable prototypes more quickly.",
        },
        {
          title: "Real product experience in teams",
          description: "Take part in product processes within multidisciplinary teams and gain real internship/junior-level work experience.",
        },
      ],
    },
  },
};
