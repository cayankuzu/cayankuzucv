export const profile = {
  name: "Çayan Kuzu",
  positioning: "Ürün Tasarımı / UI/UX / Oyun Tasarımı",
  roles: ["Ürün Tasarımı", "UI/UX", "Oyun Tasarımı"],
  shortBio: "Dijital ürünler, etkileşimli deneyimler ve oyun fikirleri üzerine çalışıyorum.",
  education: {
    university: "Marmara Üniversitesi",
    program: "Fizik Bölümü",
    level: "3. sınıf öğrencisi",
  },
  phone: "0536 400 86 83",
  phoneHref: "+905364008683",
  email: "cayankuzu.0@gmail.com",
  portfolioUrl: "https://fikkis.vercel.app/",
  instagramUrl: "https://www.instagram.com/memode333/",
  cvUrl: "/cayan-kuzu-cv.pdf",
  // TODO: Add verified public profile links when available.
  githubUrl: undefined,
  linkedInUrl: undefined,
} as const;

export const skillGroups = [
  {
    title: "Product & UX",
    skills: [
      "User Experience",
      "User Flows",
      "Interaction Design",
      "Product Thinking",
      "Prototyping",
      "Design Systems",
    ],
  },
  {
    title: "UI Design",
    skills: [
      "Figma",
      "Auto Layout",
      "Components",
      "Variables",
      "Responsive Design",
      "Prototyping",
    ],
  },
  {
    title: "Game Design",
    skills: [
      "Game Mechanics",
      "Player Experience",
      "Game UI/UX",
      "Python / Pygame",
      "Browser JavaScript",
      "Three.js / WebGL",
      "React Three Fiber",
    ],
  },
  {
    title: "Tools",
    skills: [
      "Figma",
      "AI-assisted workflows",
      "Cursor",
      "GitHub",
      "Vercel",
    ],
  },
] as const;
