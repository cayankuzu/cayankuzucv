export const FIKKIS_URL = "https://fikkis.vercel.app/";

export const projectCategories = ["mobile", "web", "game", "content"] as const;
export type ProjectCategory = (typeof projectCategories)[number];

export const categoryLabels: Record<ProjectCategory, string> = {
  mobile: "Mobile Apps",
  web: "Web",
  game: "Games",
  content: "Content",
};

export type CaseStudySection = {
  title: string;
  body: string;
};

export type Project = {
  id: string;
  title: string;
  category: ProjectCategory;
  hook: string;
  description: string;
  role: string;
  status: "Live" | "Development" | "Prototype" | "MVP" | "Available";
  statusText?: {
    tr: string;
    en: string;
  };
  thumbnail?: string;
  thumbnailAlt?: string;
  images?: string[];
  featured?: boolean;
  liveUrl?: string;
  figmaUrl?: string;
  downloadUrl?: string;
  appStoreUrl?: string;
  googlePlayUrl?: string;
  secondaryUrl?: string;
  fikisUrl: string;
  caseStudy: CaseStudySection[];
};

const onFikkis = FIKKIS_URL;

export const projects: Project[] = [
  {
    id: "etkinlink",
    title: "EtkinLink",
    category: "mobile",
    hook: "Bir etkinlik keşfet; aynı heyecanı paylaşacağın insanlarla tanış.",
    description:
      "Şehir etkinliklerini keşfetme, katılımcı odaları, ilgi temelli eşleşme ve karşılıklı beğeni sonrası özel sohbet akışlarını birleştiren iOS/Android uygulaması.",
    role: "Independent project",
    status: "Development",
    statusText: {
      tr: "Geliştiriliyor",
      en: "In development",
    },
    thumbnail: "/projects/etkinlink-1.png",
    thumbnailAlt: "EtkinLink mobil uygulama ekranları",
    images: [
      "/projects/etkinlink-1.png",
      "/projects/etkinlink-2.png",
      "/projects/etkinlink-3.png",
      "/projects/etkinlink-4.png",
    ],
    featured: true,
    liveUrl: "https://cayankuzu.github.io/EtkinLink_web/",
    figmaUrl:
      "https://www.figma.com/proto/RLPPToWydcFxLtnlvTr0mi/EtkinLink?node-id=32-1772&viewport=-607%2C-758%2C0.69&t=BmlrdaiaacIsarlK-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=97%3A386&show-proto-sidebar=1&page-id=12%3A8",
    fikisUrl: onFikkis,
    caseStudy: [
      {
        title: "Overview",
        body: "EtkinLink, şehir etkinliklerini keşfetmeyi; etkinlik odalarında sosyalleşmeyi ve ortak ilgi alanları üzerinden yeni insanlarla tanışmayı bir araya getiren iOS/Android uygulaması.",
      },
      {
        title: "Product focus",
        body: "Akış; etkinlik keşfi, katılımcı odaları ve karşılıklı beğeni sonrasında özel sohbet adımlarına odaklanıyor.",
      },
      {
        title: "Implementation",
        body: "React Native ve Expo istemcisi; Supabase üzerinde PostgreSQL, RLS, Edge Functions, Auth ve Storage katmanlarıyla geliştiriliyor. Henüz mağazada yayımlanmadı.",
      },
    ],
  },
  {
    id: "universe",
    title: "UniVerse",
    category: "mobile",
    hook: "Üniversite hayatının tamamı tek bir dijital evrende.",
    description:
      "Öğrencileri ve kulüpleri etkinlikler, kampüs akışı, etkinlik albümleri, takip ve sosyal etkileşimler çevresinde buluşturan iOS/Android uygulaması.",
    role: "Independent project",
    status: "Live",
    statusText: {
      tr: "Yayında",
      en: "Live",
    },
    thumbnail: "/projects/universe-1.png",
    thumbnailAlt: "UniVerse mobil uygulama ekranları",
    images: [
      "/projects/universe-1.png",
      "/projects/universe-2.png",
      "/projects/universe-3.png",
    ],
    featured: true,
    liveUrl: "https://cayankuzu.github.io/uniVerse_web/",
    figmaUrl:
      "https://www.figma.com/make/PifHMriFM6plYxEBFp0ziW/%C3%96%C4%9Frenci-Sosyal-A%C4%9F%C4%B1?fullscreen=1&t=z4tqXaqRw3iPsSzE-1&code-node-id=0-9",
    appStoreUrl: "https://apps.apple.com/tr/app/universe-app/id6761912452",
    googlePlayUrl: "https://play.google.com/store/apps/details?id=com.ogrencisosyalagi.app",
    fikisUrl: onFikkis,
    caseStudy: [
      {
        title: "Overview",
        body: "UniVerse, öğrencileri ve kulüpleri kampüs yaşamına odaklanan tek bir mobil sosyal ağda buluşturuyor.",
      },
      {
        title: "Experience",
        body: "Etkinlik keşfi, öğrenci ve kulüp profilleri, etkinlik albümleri, fotoğraf paylaşımı, takip, beğeni ve yorum akışları aynı deneyimde birleşiyor.",
      },
      {
        title: "Release",
        body: "React Native, Expo ve Supabase ile geliştirilen uygulama App Store ve Google Play'de yayımlanıyor; Figma Make tasarımı da ayrıca incelenebiliyor.",
      },
    ],
  },
  {
    id: "sorita",
    title: "SoRita",
    category: "mobile",
    hook: "Şehir artık yalnızca bir harita değil, birlikte yazılan sosyal bir hikâye.",
    description:
      "Haritada mekân kartları ve listeler oluşturmayı; kişi, yer ve medya keşfiyle takip, beğeni, yorum ve paylaşımı birleştiren iOS/Android sosyal uygulaması.",
    role: "Independent project",
    status: "Live",
    statusText: {
      tr: "Yayında",
      en: "Live",
    },
    thumbnail: "/projects/sorita-1.png",
    thumbnailAlt: "SoRita mobil uygulama ekranları",
    images: [
      "/projects/sorita-1.png",
      "/projects/sorita-2.png",
      "/projects/sorita-3.png",
    ],
    featured: true,
    liveUrl: "https://cayankuzu.github.io/SoRita_web/",
    figmaUrl:
      "https://www.figma.com/make/xFI0Mxo8e6GdMVNfWu0eSm/SoRita?fullscreen=1&t=a9Aa6ncfv0vyOC9N-1&code-node-id=0-9",
    appStoreUrl: "https://apps.apple.com/tr/app/sorita-app/id6762198781?l=tr",
    googlePlayUrl: "https://play.google.com/store/apps/details?id=com.cayan.sorita.socialmap",
    fikisUrl: onFikkis,
    caseStudy: [
      {
        title: "Overview",
        body: "SoRita, mekânları harita üzerinde keşfetme, kaydetme ve paylaşma etrafında kurulan bir sosyal uygulama.",
      },
      {
        title: "Product focus",
        body: "Kullanıcılar herkese açık veya özel mekân listeleri oluşturabilir; fotoğraf ve yorum ekleyebilir, diğer kullanıcıları takip edebilir ve içeriklerle etkileşime girebilir.",
      },
      {
        title: "Release",
        body: "React Native, Expo, Supabase ve Google Maps ile geliştirilen uygulama App Store ve Google Play'de yayımlanıyor.",
      },
    ],
  },
  {
    id: "fikkis",
    title: "Fikkis",
    category: "web",
    hook: "Bir şeyler deniyorum.",
    description:
      "Web deneyimlerini, mobil ürünleri, oyunları ve yayınları filtrelenebilir bir arşivde toplayıp doğrudan canlı bağlantılara yönlendiren proje vitrini.",
    role: "Independent project",
    status: "Live",
    featured: true,
    liveUrl: FIKKIS_URL,
    fikisUrl: FIKKIS_URL,
    caseStudy: [
      {
        title: "Overview",
        body: "Fikkis; web, oyun, mobil ve yayın projelerini kategori bazında bir araya getiren kişisel proje vitrini.",
      },
      {
        title: "Information architecture",
        body: "Web siteleri, oyunlar, mobil uygulamalar ve içerik üretimleri tek bir filtreleme sistemi üzerinden keşfedilebiliyor.",
      },
      {
        title: "Final website",
        body: "Fikkis, projelerin canlı bağlantılarına ulaşmak için güncel kaynak olarak kullanılmaya devam ediyor.",
      },
    ],
  },
  {
    id: "wmatch",
    title: "WMatch",
    category: "mobile",
    hook: "Ne izlediğin, kiminle eşleşeceğini söylesin.",
    description:
      "Ortak film ve dizileri, favorileri ve izleme anlarını uyum odaklı eşleşmelere; karşılıklı beğenileri ise sohbete dönüştüren 18+ iOS/Android mobil sosyal uygulaması.",
    role: "Independent project",
    status: "Live",
    thumbnail: "/projects/wmatch-1.png",
    thumbnailAlt: "WMatch mobil uygulama ekranları",
    images: [
      "/projects/wmatch-1.png",
      "/projects/wmatch-2.png",
      "/projects/wmatch-3.png",
      "/projects/wmatch-4.png",
    ],
    statusText: {
      tr: "iOS'ta yayında · Android hazırlanıyor",
      en: "Live on iOS · Android in preparation",
    },
    appStoreUrl: "https://apps.apple.com/tr/app/wmatch/id6779453259",
    fikisUrl: onFikkis,
    caseStudy: [
      {
        title: "Overview",
        body: "WMatch, ortak film ve dizi zevklerini uyum odaklı eşleşmelere; karşılıklı beğenileri ise sohbete dönüştüren 18+ mobil sosyal uygulama.",
      },
      {
        title: "Release status",
        body: "iOS sürümü App Store'da yayında; Android sürümü yayın hazırlığında.",
      },
    ],
  },
  {
    id: "remember-you-must-die",
    title: "Remember You Must Die",
    category: "web",
    hook: "Ölümü hatırlatan bir dünyanın içinde yürümeye cesaret et.",
    description:
      "Ouroboros, kurukafa, DNA, kum saati ve galaksi modellerini müzik, ışık ayarları ve serbest kamera etkileşimiyle birleştiren 3B memento mori deneyimi.",
    role: "Independent project",
    status: "Live",
    thumbnail: "/projects/remember-ouroboros.png",
    thumbnailAlt: "Remember You Must Die web deneyimi",
    liveUrl: "https://remember-you-must-die-web.vercel.app/",
    fikisUrl: onFikkis,
    caseStudy: [
      {
        title: "Overview",
        body: "Müzik ve ayarlanabilir ışıklarla kurulan, memento mori temalı etkileşimli bir 3B web deneyimi.",
      },
      {
        title: "Experience",
        body: "Kullanıcı; ouroboros, kurukafa, DNA, kum saati ve galaksi modelleri arasında serbest kamerayla dolaşıyor, sahne ışıklarını ve müzik oynatıcıyı kontrol ediyor.",
      },
    ],
  },
  {
    id: "desain",
    title: "desAIn",
    category: "web",
    hook: "Bir odayı ölç; birkaç dokunuşla üç boyutlu bir tasarıma dönüştür.",
    description:
      "İç mekânları tarayıcıda planlamayı ve görselleştirmeyi kolaylaştıran yaratıcı bir 3B araç. Ölçüler, yerleşim ve sahne önizlemesi aynı çalışma alanında buluşur.",
    role: "Independent project",
    status: "Live",
    thumbnail: "/projects/desain.png",
    thumbnailAlt: "desAIn üç boyutlu iç mekân tasarım aracı",
    liveUrl: "https://des-ai-n.vercel.app/",
    fikisUrl: onFikkis,
    caseStudy: [
      {
        title: "Overview",
        body: "İç mekânları tarayıcıda planlamayı ve görselleştirmeyi kolaylaştıran yaratıcı bir 3B araç.",
      },
      {
        title: "Workspace",
        body: "Ölçüler, yerleşim ve sahne önizlemesi aynı çalışma alanında buluşuyor.",
      },
    ],
  },
  {
    id: "audioroom",
    title: "AudioRoom",
    category: "web",
    hook: "Bir albümü yalnızca dinleme; onun dünyasının içinde dolaş.",
    description:
      "Albüm ve single'ları özgün etkileşim döngüleri ve dinleme akışları sunan oynanabilir 3B dünyalara dönüştüren; dört canlı evren ve iki yaklaşan kayıt içeren masaüstü öncelikli web deneyimi.",
    role: "Independent project",
    status: "Live",
    thumbnail: "/projects/audioroom-mukemmel-bosluk.png",
    thumbnailAlt: "AudioRoom müzik deneyimi",
    liveUrl: "https://audio-room-ecru.vercel.app/",
    fikisUrl: onFikkis,
    caseStudy: [
      {
        title: "Overview",
        body: "AudioRoom; Hayko, Henry the Lee ve Redd kayıtlarını kendine özgü etkileşimlere sahip oynanabilir 3B müzik dünyalarına dönüştüren canlı bir deneyim merkezi.",
      },
      {
        title: "Current catalogue",
        body: "Dört dünya canlı; Redd'in 21 albümü ile Pink Floyd dünyası yaklaşan kayıtlar arasında. Deneyim masaüstü öncelikli olarak geliştirilmeye devam ediyor.",
      },
    ],
  },
  {
    id: "bibish",
    title: "Bibish",
    category: "game",
    hook: "İki ordudan birine katıl; kaleleri ele geçir, araziyi boya ve açık alan savaşına yön ver.",
    description:
      "İki takımın 10 karakol ve boyanabilir arazi için savaştığı, gerçek zamanlı tek global odalı birinci şahıs çok oyunculu WebGL oyunu.",
    role: "Independent project",
    status: "Live",
    thumbnail: "/projects/bibish.png",
    thumbnailAlt: "Bibish oyun sahnesi",
    liveUrl: "https://bibish-iota.vercel.app/",
    fikisUrl: onFikkis,
    caseStudy: [
      {
        title: "Game overview",
        body: "Kırmızı ve mavi takımları Bibish Adası'nda 10 karakol için karşı karşıya getiren gerçek zamanlı çok oyunculu birinci şahıs web oyunu.",
      },
      {
        title: "Core loop",
        body: "Oyuncular karakolları ele geçirir, araziyi takım rengine boyar ve tüfek, kılıç ile kalkan kullanarak tek global WebSocket odasında savaşır.",
      },
    ],
  },
  {
    id: "merbut",
    title: "Merbut",
    category: "game",
    hook: "İki kahraman, yedi biyom ve Aku'ya uzanan tek bir karanlık kader.",
    description:
      "Hz. Ali ve Samuray Jack'i aynı klavyede buluşturan; yedi biyom, yaratık dalgaları ve Aku boss savaşları üzerinden ilerleyen yerel iki oyunculu 2.5D aksiyon oyunu.",
    role: "Independent project",
    status: "Live",
    thumbnail: "/projects/merbut.png",
    thumbnailAlt: "Merbut oyun sahnesi",
    liveUrl: "https://merbut.vercel.app/",
    fikisUrl: onFikkis,
    caseStudy: [
      {
        title: "Game overview",
        body: "İki oyuncuyu aynı klavyede buluşturan, yedi biyom boyunca ilerleyen yerel iki oyunculu 2.5D aksiyon oyunu.",
      },
      {
        title: "Player experience",
        body: "Biyom kapılarını açmak, Aku'nun lejyonuna karşı birlikte savaşmak ve hareketli zaman portalına ulaşmak üzerine kurulu ortak bir mücadele.",
      },
    ],
  },
  {
    id: "card-race-game",
    title: "Card Race Game",
    category: "game",
    hook: "Dört as, dört şerit ve her kart çekiminde değişen bir yarış.",
    description:
      "İskambil destesini olasılık tabanlı bir yarış pistine dönüştüren oyun. Aslar kendi sembollerinde ilerler, ceza kartları dengeleri bozar ve son çekiliş kazananı belirler.",
    role: "Independent project",
    status: "Live",
    thumbnail: "/projects/card-race.png",
    thumbnailAlt: "Card Race Game arayüzü",
    liveUrl: "https://card-race-game.vercel.app/",
    fikisUrl: onFikkis,
    caseStudy: [
      {
        title: "Game overview",
        body: "İskambil destesini olasılık tabanlı bir yarış pistine dönüştüren bir oyun.",
      },
    ],
  },
  {
    id: "battleship",
    title: "Battleship",
    category: "game",
    hook: "Klasik deniz savaşını müzik, ses ve sürükle-bırak kontrolüyle yeniden oyna.",
    description:
      "Pygame ile geliştirilen 10x10 deniz savaşı; gemi yerleşimi, bilgisayar rakibi, isabet animasyonları, skor takibi ve bağımsız müzik/SFX kontrolleri içerir.",
    role: "Independent project",
    status: "Live",
    thumbnail: "/projects/battleship.png",
    thumbnailAlt: "Battleship oyun arayüzü",
    liveUrl: "https://battleship-pygame.vercel.app/",
    fikisUrl: onFikkis,
    caseStudy: [
      {
        title: "Game overview",
        body: "Klasik deniz savaşı; gemi yerleşimi, bilgisayar rakibi, skor takibi ve ses kontrolleriyle yeniden yorumlanıyor.",
      },
    ],
  },
  {
    id: "papaz-kacti",
    title: "Papaz Kaçtı",
    category: "game",
    hook: "Sağındaki elden kapalı bir kart seç; eşsiz papaz sende kalmasın.",
    description:
      "Üç bilgisayar rakibine karşı oynanan dört kişilik kart oyunu. Çiftler açılır, seçilen kart görünür ve rakiplerin aldığı kartlar gizli kalır.",
    role: "Independent project",
    status: "Live",
    thumbnail: "/projects/old-maid.png",
    thumbnailAlt: "Papaz Kaçtı kart oyunu",
    liveUrl: "https://old-maid-card-game.vercel.app/",
    fikisUrl: onFikkis,
    caseStudy: [
      {
        title: "Game overview",
        body: "Üç bilgisayar rakibine karşı oynanan dört kişilik kart oyunu.",
      },
    ],
  },
  {
    id: "tic-tac-toe",
    title: "Tic Tac Toe",
    category: "game",
    hook: "Tahtanı seç; üçlüden beşli çizgiye uzanan rekabeti kazan.",
    description:
      "İki oyunculu web sürümü; 3x3, 4x4, 5x5 veya 6x6 tahtada farklı hizalama hedefleriyle seri skorunu korumaya odaklanır.",
    role: "Independent project",
    status: "Live",
    thumbnail: "/projects/tictactoe.png",
    thumbnailAlt: "Tic Tac Toe oyun arayüzü",
    liveUrl: "https://tic-tac-toe-game-delta-jade.vercel.app/",
    fikisUrl: onFikkis,
    caseStudy: [
      {
        title: "Game overview",
        body: "Değişken tahta boyutları ve hizalama hedefleriyle iki oyunculu web oyunu.",
      },
    ],
  },
  {
    id: "son-40-saniye",
    title: "Son 40 Saniye",
    category: "game",
    hook: "Öleceğin kesin; 33 kaydı ayıklayıp itibarını korumak için 40 saniyen var.",
    description:
      "Rastgele seçilen arama kayıtlarını inceleyip masum olanları korumaya, riskli olanları kaydırarak silmeye dayalı zaman baskılı bir karar oyunu.",
    role: "Independent project",
    status: "Live",
    thumbnail: "/projects/son-40-saniye.png",
    thumbnailAlt: "Son 40 Saniye oyun arayüzü",
    liveUrl: "https://google-history-clear-game.vercel.app/",
    fikisUrl: onFikkis,
    caseStudy: [
      {
        title: "Game overview",
        body: "Zaman baskısı altında arama kayıtları hakkında karar vermeye dayalı bir oyun.",
      },
    ],
  },
  {
    id: "asmaca",
    title: "Asmaca",
    category: "game",
    hook: "Bilgi kaderi belirler; verdiğin her cevap sahnedeki hükmü değiştirir.",
    description:
      "Kaynaklı bilgi sorularını sinematik bir 3B adam asmaca düzeniyle birleştiren web oyunu; mod, karakter ve zorluk seçenekleri içerir.",
    role: "Independent project",
    status: "Live",
    thumbnail: "/projects/asmaca-idle.png",
    thumbnailAlt: "Asmaca oyun sahnesi",
    liveUrl: "https://hangman.vercel.app/",
    fikisUrl: onFikkis,
    caseStudy: [
      {
        title: "Game overview",
        body: "Kaynaklı bilgi sorularını sinematik bir 3B adam asmaca düzeniyle birleştiren web oyunu.",
      },
    ],
  },
  {
    id: "monster-wrangler",
    title: "Monster Wrangler",
    category: "game",
    hook: "Hedefteki rengi yakala; yanlış canavar bir canına mal olsun.",
    description:
      "Hareketli canavarlar arasından ekranda gösterilen hedefi bulduğun hızlı yakalama oyunu. Turlar ilerledikçe kalabalık ve karar baskısı artar.",
    role: "Independent project",
    status: "Live",
    thumbnail: "/projects/monster-wrangler.png",
    thumbnailAlt: "Monster Wrangler oyun sahnesi",
    liveUrl: "https://monster-wrangler.vercel.app/",
    fikisUrl: onFikkis,
    caseStudy: [
      {
        title: "Game overview",
        body: "Renk hedefi ve hareketli nesneler üzerinden hız ile doğruluğu dengeleyen bir yakalama oyunu.",
      },
    ],
  },
  {
    id: "catch-the-clown",
    title: "Catch the Clown",
    category: "game",
    hook: "Palyaçoyu yakaladıkça hız artar; her ıskada bir can gider.",
    description:
      "Orijinal Pygame mekaniğini tarayıcıya taşıyan hızlı hedef yakalama oyunu. Oyuncu hız artarken beş canı bitmeden en yüksek skora ulaşmaya çalışır.",
    role: "Independent project",
    status: "Live",
    thumbnail: "/projects/catch-the-clown-gameplay.png",
    thumbnailAlt: "Catch the Clown oyun sahnesi",
    liveUrl: "https://catch-the-clown.vercel.app/",
    fikisUrl: onFikkis,
    caseStudy: [
      {
        title: "Game overview",
        body: "Hızın sürekli arttığı bir hedef yakalama oyunu.",
      },
    ],
  },
  {
    id: "snake",
    title: "Snake",
    category: "game",
    hook: "Her elma seni büyütür; daralan alan bir sonraki dönüşünü belirler.",
    description:
      "Klasik yılan oyununu klavye, dokunmatik yön tuşları ve kaydırma hareketleriyle yeniden kuran web sürümü.",
    role: "Independent project",
    status: "Live",
    thumbnail: "/projects/snake-gameplay.png",
    thumbnailAlt: "Snake oyun sahnesi",
    liveUrl: "https://snake-game-seven-gray.vercel.app/",
    fikisUrl: onFikkis,
    caseStudy: [
      {
        title: "Game overview",
        body: "Klavye ve dokunmatik kontrollerle oynanabilen klasik yılan oyununun web yorumu.",
      },
    ],
  },
  {
    id: "burger-dog",
    title: "Burger Dog",
    category: "game",
    hook: "Burger hızlanıyor, köpek acıkıyor; kaçırdığın her lokma bir can götürüyor.",
    description:
      "Düşen burgerleri yere değmeden yakalamaya dayanan refleks oyunu. Başarılı yakalayışlar skor ve düşüş hızını artırır.",
    role: "Independent project",
    status: "Live",
    thumbnail: "/projects/burger-dog-gameplay.png",
    thumbnailAlt: "Burger Dog oyun sahnesi",
    liveUrl: "https://burger-dog.vercel.app/",
    fikisUrl: onFikkis,
    caseStudy: [
      {
        title: "Game overview",
        body: "Düşen burgerleri yakalamaya dayalı, giderek hızlanan bir refleks oyunu.",
      },
    ],
  },
  {
    id: "feed-the-dragon",
    title: "Feed the Dragon",
    category: "game",
    hook: "Her altın ejderhayı besler, oyunu hızlandırır ve bir sonraki hamleyi zorlaştırır.",
    description:
      "Ejderhayı yukarı ve aşağı yönlendirerek yaklaşan altınları yakaladığın arcade oyunu. Artan hız ile ritim ve konumlama öne çıkar.",
    role: "Independent project",
    status: "Live",
    thumbnail: "/projects/feed-the-dragon-gameplay.png",
    thumbnailAlt: "Feed the Dragon oyun sahnesi",
    liveUrl: "https://feed-the-dragon.vercel.app/",
    fikisUrl: onFikkis,
    caseStudy: [
      {
        title: "Game overview",
        body: "Yaklaşan altınları toplarken giderek artan hıza uyum sağlamaya dayalı arcade oyunu.",
      },
    ],
  },
  {
    id: "atkafasi-fanzin",
    title: "AtKafası Fanzin",
    category: "content",
    hook: "Düşüncelerin birbirine çarptığı bağımsız bir fanzin alanı.",
    description:
      "Yazı, görsel ve ortak üretimi bir araya getiren bağımsız yayın denemesi. Shopier ve Gumroad üzerinden erişilebilir.",
    role: "Independent project",
    status: "Available",
    thumbnail: "/projects/atkafasi.png",
    thumbnailAlt: "AtKafası Fanzin kapağı",
    liveUrl: "https://www.shopier.com/atkafasifanzin",
    secondaryUrl: "https://atkafasifanzin.gumroad.com/",
    fikisUrl: onFikkis,
    caseStudy: [
      {
        title: "Overview",
        body: "Yazı, görsel ve ortak üretimi bir araya getiren bağımsız yayın denemesi.",
      },
      {
        title: "Availability",
        body: "Fanzin Shopier ve Gumroad üzerinden erişilebilir.",
      },
    ],
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export function getProjectById(id: string) {
  return projects.find((project) => project.id === id);
}
