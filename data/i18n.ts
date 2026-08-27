export const locales = ["tr", "en"] as const;
export type Locale = (typeof locales)[number];

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function otherLocale(locale: Locale): Locale {
  return locale === "tr" ? "en" : "tr";
}

export const navigationIds = [
  "profile",
  "about",
  "communication",
  "education",
  "experience",
  "skills",
  "projects",
  "certificates",
  "contact",
] as const;

export type NavigationId = (typeof navigationIds)[number];

export const siteCopy = {
  tr: {
    metadata: {
      title: "Çayan Kuzu — Ürün Tasarımı · UI/UX · Oyun Tasarımı",
      description:
        "Çayan Kuzu'nun ürün tasarımı, UI/UX, oyun tasarımı ve etkileşimli dijital deneyimler odaklı profesyonel CV ve portfolyosu.",
    },
    nav: {
      profile: "Profil",
      about: "Hakkımda",
      communication: "İletişim Bilgileri",
      education: "Eğitim",
      experience: "Deneyim",
      skills: "Yetenekler",
      projects: "Projeler",
      certificates: "Sertifikalar",
      contact: "İletişim",
      menu: "Menü",
      openMenu: "Menüyü aç",
      closeMenu: "Menüyü kapat",
    },
    common: {
      role: "Rol",
      status: "Durum",
      platform: "Platform",
      tools: "Araçlar",
      language: "Dil",
      downloadCv: "CV'yi İndir",
      viewProject: "Projeyi incele",
      viewOnFikkis: "Fikkis'te görüntüle",
      liveProject: "Canlı projeyi aç",
      openPrototype: "Prototipi aç",
      downloadProject: "İndirme sayfasını aç",
      moreLinks: "Proje bağlantıları",
      backToProjects: "Projelere dön",
      selectedScreens: "Öne çıkan ekranlar",
      noCertificates: "Henüz doğrulanmış sertifika eklenmedi.",
      linkPending: "Bağlantı eklenecek",
      all: "Tümü",
      mobile: "Mobil Uygulamalar",
      web: "Web",
      game: "Oyunlar",
      content: "İçerik",
      details: "Detaylar",
      lessDetails: "Detayları kapat",
    },
    sidebar: {
      title: "Ürün, UI/UX ve Oyun Tasarımı",
      location: "İstanbul, Türkiye",
      profileLabel: "Profil görünümü",
      available: "İletişime açık",
    },
    profile: {
      eyebrow: "Kişisel CV ve portfolyo",
      title: "Çayan Kuzu",
      roleLine: "Ürün Tasarımı · UI/UX · Oyun Tasarımı",
      intro:
        "Dijital ürünler, etkileşimli deneyimler ve oyun fikirleri üzerine çalışan bağımsız bir tasarım adayıyım.",
      educationLabel: "Eğitim",
      educationValue: "Marmara Üniversitesi — Fizik Bölümü, 4. sınıf",
      focusLabel: "Odak alanları",
      focus: ["Dijital ürünler", "Etkileşimli deneyimler", "Oyun tasarımı"],
      goalLabel: "Kariyer yönü",
      goal:
        "Ürün tasarımı, UI/UX ve oyun tasarımı alanlarında proje üreterek gelişiyorum. Amacım, fikirleri anlaşılır ve anlamlı dijital deneyimlere dönüştürmek.",
    },
    communication: {
      eyebrow: "İletişim bilgileri",
      title: "Profesyonel bağlantılar.",
      description:
        "Doğrulanmış bağlantılar aktif tutulur; eksik profiller sahte bilgi eklememek için beklemede gösterilir.",
    },
    about: {
      eyebrow: "Hakkımda",
      title: "Tasarım odağı analitik merakla buluşuyor.",
      paragraphs: [
        "Marmara Üniversitesi'nde Fizik eğitimi alırken mobil ürünler, web deneyimleri ve oyun projeleri üzerinde çalışıyorum. Fikirleri açık akışlara ve anlaşılır arayüzlere dönüştürmeye odaklanıyorum.",
        "Figma ile arayüz, akış ve prototipleme pratiğimi geliştiriyor; oyun tasarımını Python/Pygame kökenli ve web tabanlı denemeler üzerinden çalışıyorum. Yapay zekâ araçlarını üretim sürecinde destekleyici olarak kullanıyorum.",
      ],
      approachTitle: "Tasarım yaklaşımı",
      approach: [
        ["Açık problem tanımı", "Önce deneyimin neyi iyileştireceğini tanımlamak."],
        ["Düşünülmüş akışlar", "Kullanıcının sıradaki adımını anlaşılır kılmak."],
        ["İteratif üretim", "Fikirleri prototip ve çalışan deneyimlerle görünür hâle getirmek."],
      ],
    },
    skills: {
      eyebrow: "Yetenekler",
      title: "Tasarım, oyun ve üretim araçları.",
      description:
        "Seviye iddiası yerine, aktif olarak üzerinde çalıştığım yetkinlik alanları.",
      groups: [
        ["Tasarım", ["Figma", "UI/UX tasarımı", "Prototipleme", "Tasarım sistemleri", "Kullanıcı akışları"]],
        ["Oyun", ["Oyun mekaniği", "Oyun kullanıcı deneyimi", "Python / Pygame", "Tarayıcı JavaScript", "Three.js / WebGL", "React Three Fiber"]],
        ["Yapay zekâ ve araçlar", ["Yapay zekâ destekli araştırma", "Yapay zekâ destekli prototipleme", "Cursor", "GitHub", "Vercel"]],
      ],
    },
    projects: {
      eyebrow: "Projeler",
      title: "Ürünler, deneyimler ve oyunlar.",
      description:
        "Her proje önce kısa bir özet sunar; ayrıntı sayfasında kapak, ilgili bilgi başlıkları ve doğrulanmış bağlantılar yer alır.",
      pinnedLabel: "Proje koleksiyonu",
      pinnedTitle: "Fikkis",
      pinnedDescription:
        "Tüm üretimlerin güncel vitrini. Canlı projelere ve prototiplere buradan da erişebilirsiniz.",
      archiveLabel: "Proje arşivi",
      archiveTitle: "Tüm projeler",
      archiveDescription:
        "Fikkis'te yer alan çalışmalar burada kategori bazında özetlenir. Kartlar dış siteye değil, bu portfolyodaki proje detaylarına açılır.",
      selectedTitle: "Proje sayfaları",
      selectedDescription:
        "Mobil ürün fikirleri, web deneyimleri ve oyun projeleri için kısa, doğrulanabilir proje kayıtları.",
      indexTitle: "Fikkis proje indeksi",
      indexDescription:
        "Daha fazla proje için görsel kalabalık yaratmadan kategori bazlı kısa liste.",
    },
    experience: {
      eyebrow: "Deneyim",
      title: "Bağımsız üretim ve öğrenme süreci.",
      entries: [
        [
          "Bağımsız ürün ve oyun projeleri",
          "Mobil uygulama fikirleri, etkileşimli web deneyimleri, oyun prototipleri ve ürün tasarımı üzerine kişisel projeler.",
        ],
        [
          "Tasarım pratiği",
          "Figma ile arayüz, prototipleme ve tasarım sistemi; Python/Pygame kökenli ve web tabanlı oyun prototipleri üzerinden devam eden üretim pratiği.",
        ],
      ],
      note: "Doğrulanmış kurumsal deneyim bilgisi eklendiğinde bu alan güncellenecek.",
    },
    education: {
      eyebrow: "Eğitim",
      title: "Marmara Üniversitesi",
      program: "Fizik Bölümü",
      level: "4. sınıf öğrencisi",
      dateLabel: "Tarih",
      dateValue: "Eklenecek",
      note:
        "Tasarım, kullanıcı deneyimi ve oyun tasarımı pratiği akademik eğitimle eş zamanlı sürüyor.",
    },
    certificates: {
      eyebrow: "Sertifikalar",
      title: "Doğrulanmış kayıtlar.",
      description:
        "Sertifika bilgileri tamamlandığında sağlayıcı, tarih ve doğrulama bağlantılarıyla burada listelenecek.",
    },
    resume: {
      eyebrow: "CV",
      title: "Web özeti",
      description:
        "Bu alan, indirilebilir CV PDF'inin kısa ve güncel web sürümüdür.",
      labels: ["Profil", "Eğitim", "Deneyim", "Projeler", "Araçlar", "Sertifikalar"],
      values: [
        "Ürün tasarımı, UI/UX, etkileşimli deneyimler ve oyun tasarımı.",
        "Marmara Üniversitesi — Fizik Bölümü, 4. sınıf.",
        "Bağımsız ürün, web ve oyun projeleri.",
        "Mobil uygulama, web, oyun ve içerik kategorilerinde Fikkis proje arşivi.",
        "Figma, Cursor, GitHub, Vercel ve yapay zekâ destekli üretim akışları.",
        "Henüz doğrulanmış sertifika eklenmedi.",
      ],
    },
    contact: {
      eyebrow: "İletişim",
      title: "Yeni bir dijital deneyim üzerine konuşalım.",
      description:
        "Staj, junior roller, proje iş birlikleri veya fikir paylaşımı için e-posta üzerinden ulaşabilirsiniz.",
      email: "E-posta",
      portfolio: "Portfolyo",
      github: "GitHub",
      linkedIn: "LinkedIn",
    },
    detail: {
      projectOverview: "Genel bakış",
      productFocus: "Amaç",
      designOutput: "UX/UI çıktısı",
      webConcept: "Fikir",
      experienceApproach: "Etkileşim",
      gameOverview: "Genel bakış",
      gameConcept: "Oyun konsepti",
      gameplayFocus: "Oynanış odağı",
      contentFocus: "Konsept",
      availability: "Yayın",
      myContribution: "Rolüm ve katkım",
      currentStatus: "Mevcut durum",
      mobileOutput:
        "Mevcut çıktı; proje sayfası, uygun olduğunda etkileşimli prototip bağlantısı ve doğrulanmış indirme bağlantısından oluşur.",
      webOutput:
        "Mevcut çıktı, projenin canlı bağlantısı üzerinden incelenebilen web deneyimidir.",
      gameOutput:
        "Mevcut çıktı, projenin canlı demo bağlantısı üzerinden deneyimlenebilen oynanabilir bir web oyunudur.",
      contentOutput:
        "Mevcut çıktı, erişilebilir yayın ve satış bağlantılarından oluşur.",
      statusText: "Bu çalışma bağımsız bir proje olarak sunuluyor. Güncel durum aşağıdaki bağlantılardan doğrulanabilir.",
    },
  },
  en: {
    metadata: {
      title: "Çayan Kuzu — Product Design · UI/UX · Game Design",
      description:
        "Çayan Kuzu's professional CV and portfolio focused on product design, UI/UX, digital experiences and game design.",
    },
    nav: {
      profile: "Profile",
      about: "About",
      communication: "Communication",
      education: "Education",
      experience: "Experience",
      skills: "Skills",
      projects: "Projects",
      certificates: "Certificates",
      contact: "Contact",
      menu: "Menu",
      openMenu: "Open menu",
      closeMenu: "Close menu",
    },
    common: {
      role: "Role",
      status: "Status",
      platform: "Platform",
      tools: "Tools",
      language: "Language",
      downloadCv: "Download CV",
      viewProject: "View project",
      viewOnFikkis: "View on Fikkis",
      liveProject: "Open live project",
      openPrototype: "Open prototype",
      downloadProject: "Open download page",
      moreLinks: "Project links",
      backToProjects: "Back to projects",
      selectedScreens: "Selected screens",
      noCertificates: "No verified certificates have been added yet.",
      linkPending: "Link to be added",
      all: "All",
      mobile: "Mobile Apps",
      web: "Web",
      game: "Games",
      content: "Content",
      details: "Details",
      lessDetails: "Close details",
    },
    sidebar: {
      title: "Product, UI/UX & Game Design",
      location: "Istanbul, Turkey",
      profileLabel: "Profile view",
      available: "Open to contact",
    },
    profile: {
      eyebrow: "Personal CV & portfolio",
      title: "Çayan Kuzu",
      roleLine: "Product Design · UI/UX · Game Design",
      intro:
        "An independent design candidate working on digital products, interactive experiences and game ideas.",
      educationLabel: "Education",
      educationValue: "Marmara University — Physics, 4th Year",
      focusLabel: "Focus areas",
      focus: ["Digital products", "Interactive experiences", "Game design"],
      goalLabel: "Career direction",
      goal:
        "I am growing through projects in product design, UI/UX and game design. My goal is to turn ideas into clear and meaningful digital experiences.",
    },
    communication: {
      eyebrow: "Communication",
      title: "Professional links.",
      description:
        "Verified links are kept active; missing profiles are shown as pending rather than filled with invented information.",
    },
    about: {
      eyebrow: "About",
      title: "Design focus meets analytical curiosity.",
      paragraphs: [
        "While studying Physics at Marmara University, I work on mobile products, web experiences and game projects. I focus on turning ideas into clear flows and understandable interfaces.",
        "I am developing my practice in interface design, flows and prototyping with Figma, while exploring game design through Python/Pygame-origin and web-based experiments. I use AI tools as support in my production process.",
      ],
      approachTitle: "Design approach",
      approach: [
        ["Clear problem framing", "Defining what the experience needs to improve first."],
        ["Considered flows", "Making the next step clear for the user."],
        ["Iterative making", "Making ideas tangible through prototypes and working experiences."],
      ],
    },
    skills: {
      eyebrow: "Skills",
      title: "Design, game and production tools.",
      description:
        "Areas I actively practise, presented without overstating proficiency levels.",
      groups: [
        ["Design", ["Figma", "UI/UX design", "Prototyping", "Design systems", "User flows"]],
        ["Games", ["Game mechanics", "Game UX", "Python / Pygame", "Browser JavaScript", "Three.js / WebGL", "React Three Fiber"]],
        ["AI & tools", ["AI-assisted research", "AI prototyping", "Cursor", "GitHub", "Vercel"]],
      ],
    },
    projects: {
      eyebrow: "Projects",
      title: "Products, experiences and games.",
      description:
        "Each project starts with a short overview. Its detail page includes a cover, relevant notes and verified links.",
      pinnedLabel: "Project collection",
      pinnedTitle: "Fikkis",
      pinnedDescription:
        "The current showcase for all work. Live projects and prototypes are also available from there.",
      archiveLabel: "Project archive",
      archiveTitle: "All projects",
      archiveDescription:
        "Work from Fikkis is summarised here by category. Cards open project details in this portfolio, not an external site.",
      selectedTitle: "Project pages",
      selectedDescription:
        "Short, verifiable records for mobile product ideas, web experiences and game projects.",
      indexTitle: "Fikkis project index",
      indexDescription:
        "A compact category list for more projects without filling the CV page with screenshots.",
    },
    experience: {
      eyebrow: "Experience",
      title: "Independent work and learning in progress.",
      entries: [
        [
          "Independent product and game projects",
          "Personal projects across mobile product ideas, interactive web experiences, game prototypes and product design.",
        ],
        [
          "Design practice",
          "Ongoing practice in interface design, prototyping and design systems with Figma; game work through Python/Pygame-origin and web-based prototypes.",
        ],
      ],
      note: "This section will be updated when verified professional experience is available.",
    },
    education: {
      eyebrow: "Education",
      title: "Marmara University",
      program: "Physics Department",
      level: "4th Year student",
      dateLabel: "Date",
      dateValue: "To be added",
      note:
        "Practice in design, user experience and game design continues alongside academic studies.",
    },
    certificates: {
      eyebrow: "Certificates",
      title: "Verified records.",
      description:
        "Certificate details will be listed here with provider, date and verification links when available.",
    },
    resume: {
      eyebrow: "Resume",
      title: "Web summary",
      description:
        "This section is the concise, current web version of the downloadable CV PDF.",
      labels: ["Profile", "Education", "Experience", "Projects", "Tools", "Certificates"],
      values: [
        "Product design, UI/UX, interactive experiences and game design.",
        "Marmara University — Physics, 4th Year.",
        "Independent product, web and game projects.",
        "Fikkis project archive across mobile, web, game and content categories.",
        "Figma, Cursor, GitHub, Vercel and AI-assisted production workflows.",
        "No verified certificates have been added yet.",
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Let's discuss a new digital experience.",
      description:
        "For internships, junior roles, project collaborations or an exchange of ideas, please get in touch by email.",
      email: "Email",
      portfolio: "Portfolio",
      github: "GitHub",
      linkedIn: "LinkedIn",
    },
    detail: {
      projectOverview: "Overview",
      productFocus: "Purpose",
      designOutput: "UX/UI output",
      webConcept: "Idea",
      experienceApproach: "Interaction",
      gameOverview: "Overview",
      gameConcept: "Game concept",
      gameplayFocus: "Gameplay focus",
      contentFocus: "Concept",
      availability: "Publication",
      myContribution: "My role and contribution",
      currentStatus: "Current status",
      mobileOutput:
        "The current output includes a project page, an interactive prototype link where available and verified download links where they exist.",
      webOutput:
        "The current output is a web experience available through the project's live link.",
      gameOutput:
        "The current output is a playable web game available through the project's live demo link.",
      contentOutput:
        "The current output is available through the publication and sales links.",
      statusText:
        "This work is presented as an independent project. Its current status can be verified from the links below.",
    },
  },
} as const;
