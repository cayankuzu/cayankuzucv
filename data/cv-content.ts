import type { Locale } from "@/data/i18n";
import type { ProjectCategory } from "@/data/projects";
export const cvSections = ["profile", "projects", "focus", "goals"] as const;

export type CvSection = (typeof cvSections)[number];

type DetailItem = {
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
    portfolio: string;
    education: string;
    skills: string;
    overview: string;
    overviewText: string;
    educationLines: string[];
    skillGroups: SkillGroup[];
    portfolioLabel: string;
    instagramLabel: string;
    emailSubject: string;
    emailBody: string;
    openPortrait: string;
    closePortrait: string;
  };
  profile: {
    summary: string;
    note: string;
    highlights: DetailItem[];
  };
  projects: {
    intro: string;
    categories: Record<ProjectCategory, string>;
    archiveNote: string;
  };
  focus: {
    intro: string;
    items: DetailItem[];
  };
  goals: {
    intro: string;
    items: string[];
  };
};

export const cvContent: Record<Locale, CvContent> = {
  tr: {
    sections: {
      profile: "Profil",
      projects: "Projeler",
      focus: "Odak Alanlarım",
      goals: "Hedeflerim",
    },
    sidebar: {
      portraitAlt: "Çayan Kuzu portresi",
      communication: "İletişim",
      portfolio: "Portfolyo",
      education: "Eğitim",
      skills: "Yetenekler",
      overview: "Genel",
      overviewText:
        "Ürün düşüncesi, UI/UX ve hızlı prototipleme üzerine çalışıyorum; mobil ve web fikirlerini yapay zekâ destekli araştırma ve üretimle görünür deneyimlere dönüştürmeye odaklanıyorum.",
      educationLines: ["Marmara Üniversitesi", "Fizik Bölümü · 3. sınıf"],
      skillGroups: [
        {
          title: "Ürün / UI/UX",
          items: ["Figma", "Wireframing", "User flows", "UI design", "Prototyping"],
        },
        {
          title: "Oyun & Etkileşim",
          items: ["Oyun mekaniği", "Oyun UI/UX", "Etkileşimli prototipleme"],
        },
        {
          title: "Yapay Zekâ & Araçlar",
          items: ["AI destekli araştırma", "AI destekli prototipleme", "Cursor", "GitHub", "Vercel"],
        },
        {
          title: "Üretim",
          items: ["React Native", "Expo", "Supabase", "Web teknolojileri"],
        },
      ],
      portfolioLabel: "Fikkis proje arşivi",
      instagramLabel: "Proje Instagram · @memode333",
      emailSubject: "Portföyünüz Hakkında İletişim",
      emailBody: "Merhaba Çayan,\n\nPortföyünüz hakkında iletişime geçmek istiyorum.\n\n",
      openPortrait: "Profil fotoğrafını büyüt",
      closePortrait: "Profil fotoğrafını kapat",
    },
    profile: {
      summary:
        "Marmara Üniversitesi Fizik Bölümü 3. sınıf öğrencisiyim. Dijital ürünler, kullanıcı deneyimi ve oyun tasarımı üzerine çalışıyor; fikirleri araştırma, tasarım ve hızlı prototipleme yoluyla somut deneyimlere dönüştürüyorum.",
      note: "Fikirden prototipe, anlaşılır ve kullanılabilir deneyimler üretmeye odaklanıyorum.",
      highlights: [
        {
          title: "Ürün Düşüncesi",
          description: "Kullanıcı ihtiyacını, kullanım amacını ve ürün akışını birlikte ele alıyorum.",
        },
        {
          title: "UI/UX & Prototipleme",
          description: "Figma ile wireframe, arayüz, kullanıcı akışı ve etkileşimli prototipler tasarlıyorum.",
        },
        {
          title: "Oyun & Etkileşim",
          description: "Oyun mekanikleri, oyun döngüsü, seviye ve oyuncu deneyimi üzerine çalışıyorum.",
        },
      ],
    },
    projects: {
      intro: "Mobil ürün fikirleri, etkileşimli web deneyimleri, tarayıcı oyunları ve bağımsız fanzin üretimi üzerinde çalışıyorum.",
      categories: {
        mobile: "Mobil ürün fikirleri, sosyal deneyimler ve kullanıcı odaklı prototipler üzerinde çalışıyorum.",
        web: "Etkileşimli web deneyimleri, yaratıcı araçlar ve deneysel tarayıcı projeleri geliştiriyorum.",
        game: "Oyun mekanikleri, oyun döngüleri ve farklı teknolojilerle geliştirilen 2B/3B oyun prototipleri üzerine çalışıyorum.",
        content: "Yazı, görsel ve ortak üretimi bir araya getiren bağımsız fanzin üretimi.",
      },
      archiveNote: "Tüm güncel proje bağlantıları ve arşiv Fikkis üzerinde yer alıyor.",
    },
    focus: {
      intro: "Tasarım, etkileşim ve hızlı üretim pratiğimi geliştirdiğim ana çalışma alanları.",
      items: [
        { title: "Ürün Tasarımı", description: "Problemi, kullanıcı ihtiyacını ve ürün akışını birlikte düşünerek fikirleri uygulanabilir ürün deneyimlerine dönüştürmeye çalışıyorum." },
        { title: "UI/UX", description: "Arayüz, kullanıcı akışları ve etkileşimli prototipler üzerinde çalışıyorum." },
        { title: "Oyun Tasarımı", description: "Oyun mekaniği, oyun döngüsü, seviye yapısı ve oyuncu deneyimi üzerine fikirler ve prototipler geliştiriyorum." },
        { title: "Mobil Uygulamalar", description: "Mobil ürün fikirlerini kullanıcı akışları, arayüz tasarımı ve çalışan prototipler üzerinden geliştirmeye çalışıyorum." },
        { title: "Web & Etkileşim", description: "Etkileşimli web deneyimleri, yaratıcı araçlar ve deneysel tarayıcı projeleri geliştiriyorum." },
        { title: "Hızlı Prototipleme", description: "Fikirleri kısa döngülerle görünür, denenebilir ve geliştirilebilir hale getirmeye çalışıyorum." },
        { title: "Yapay Zekâ Destekli Üretim", description: "Araştırma, fikir geliştirme, prototipleme ve üretim süreçlerinde yapay zekâ araçlarından yararlanıyorum." },
        {
          title: "Fizik Eğitimi",
          description: "Fizik eğitimi, analitik düşünme, problem çözme ve sistematik yaklaşımımı destekleyen akademik altyapımı oluşturuyor.",
        },
      ],
    },
    goals: {
      intro: "Kısa vadede üretim pratiğimi gerçek projeler ve daha tutarlı tasarım kararları üzerinden güçlendirmek istiyorum.",
      items: [
        "Ürün ve UI/UX tasarımında daha güçlü ve tutarlı bir pratik geliştirmek.",
        "Oyun tasarımı ve interaktif deneyimler alanında üretmeye devam etmek.",
        "Gerçek kullanıcı ihtiyaçlarına dokunan ürünler geliştirmek.",
        "Tasarım, teknoloji ve yapay zekâ destekli üretimi bir araya getirmek.",
        "Çok disiplinli ekiplerde üretim deneyimi kazanmak.",
        "Gerçek projeler üzerinden güçlü ve dürüst bir portfolyo oluşturmak.",
      ],
    },
  },
  en: {
    sections: {
      profile: "Profile",
      projects: "Projects",
      focus: "Focus Areas",
      goals: "Goals",
    },
    sidebar: {
      portraitAlt: "Portrait of Çayan Kuzu",
      communication: "Contact",
      portfolio: "Portfolio",
      education: "Education",
      skills: "Skills",
      overview: "Overview",
      overviewText:
        "I work across product thinking, UI/UX and rapid prototyping, turning mobile and web ideas into visible experiences through AI-assisted research and making.",
      educationLines: ["Marmara University", "Physics Department · Year 3"],
      skillGroups: [
        {
          title: "Product / UI/UX",
          items: ["Figma", "Wireframing", "User flows", "UI design", "Prototyping"],
        },
        {
          title: "Games & Interaction",
          items: ["Game mechanics", "Game UI/UX", "Interactive prototyping"],
        },
        {
          title: "AI & Tools",
          items: ["AI-assisted research", "AI-assisted prototyping", "Cursor", "GitHub", "Vercel"],
        },
        {
          title: "Production",
          items: ["React Native", "Expo", "Supabase", "Web technologies"],
        },
      ],
      portfolioLabel: "Fikkis project archive",
      instagramLabel: "Project Instagram · @memode333",
      emailSubject: "Portfolio Inquiry — Çayan Kuzu",
      emailBody: "Hello Çayan,\n\nI would like to get in touch about your portfolio.\n\n",
      openPortrait: "Enlarge profile photo",
      closePortrait: "Close profile photo",
    },
    profile: {
      summary:
        "I am a third-year Physics student at Marmara University. I work on digital products, user experience and game design, turning ideas into tangible experiences through research, design and rapid prototyping.",
      note: "I focus on moving from idea to prototype with clear, usable experiences.",
      highlights: [
        {
          title: "Product Thinking",
          description: "I consider user needs, purpose and product flow together.",
        },
        {
          title: "UI/UX & Prototyping",
          description: "I design wireframes, interfaces, user flows and interactive prototypes in Figma.",
        },
        {
          title: "Game & Interaction",
          description: "I work on game mechanics, loops, levels and player experience.",
        },
      ],
    },
    projects: {
      intro: "I work on mobile product ideas, interactive web experiences, browser games and independent fanzine production.",
      categories: {
        mobile: "I work on mobile product ideas, social experiences and user-focused prototypes.",
        web: "I develop interactive web experiences, creative tools and experimental browser projects.",
        game: "I work on 2D/3D game prototypes built around game mechanics, game loops and different technologies.",
        content: "Independent fanzine production bringing together writing, visuals and collaborative making.",
      },
      archiveNote: "Current project links and the full archive are available on Fikkis.",
    },
    focus: {
      intro: "The main areas where I develop my design, interaction and rapid production practice.",
      items: [
        { title: "Product Design", description: "I try to turn ideas into workable product experiences by considering the problem, user need and product flow together." },
        { title: "UI/UX", description: "I work on interfaces, user flows and interactive prototypes." },
        { title: "Game Design", description: "I develop ideas and prototypes around game mechanics, game loops, level structure and player experience." },
        { title: "Mobile Applications", description: "I try to develop mobile product ideas through user flows, interface design and working prototypes." },
        { title: "Web & Interaction", description: "I develop interactive web experiences, creative tools and experimental browser projects." },
        { title: "Rapid Prototyping", description: "I try to make ideas visible, testable and improvable through short iterations." },
        { title: "AI-assisted Production", description: "I use AI tools in research, ideation, prototyping and production workflows." },
        {
          title: "Physics Education",
          description: "Physics education forms the academic foundation supporting my analytical thinking, problem solving and systematic approach.",
        },
      ],
    },
    goals: {
      intro: "In the near term, I want to strengthen my practice through real projects and more consistent design decisions.",
      items: [
        "Build a stronger and more consistent practice in product and UI/UX design.",
        "Keep producing in game design and interactive experiences.",
        "Develop products that respond to real user needs.",
        "Bring design, technology and AI-assisted production together.",
        "Gain production experience in multidisciplinary teams.",
        "Build a strong and honest portfolio through real projects.",
      ],
    },
  },
};
