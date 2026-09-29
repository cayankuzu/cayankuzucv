export const siteUrl = "https://cayankuzucv.vercel.app";

export const profile = {
  name: "Çayan Kuzu",
  /** Yalnızca yazdırma ve PDF çıktısında görünür; web sayfasında gizlidir. */
  phone: { tr: "0536 400 86 83", en: "+90 536 400 86 83" },
  phoneHref: "+905364008683",
  email: "cayankuzu.0@gmail.com",
  portrait: "/profile-cayan-kuzu.jpeg",
  links: [
    {
      kind: "linkedin",
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/%C3%A7ayan-kuzu-b774532a9/",
    },
    { kind: "web", label: "fikkis.vercel.app", href: "https://fikkis.vercel.app/" },
    { kind: "github", label: "github.com/cayankuzu", href: "https://github.com/cayankuzu" },
    { kind: "kaggle", label: "kaggle.com/ayankuzu", href: "https://www.kaggle.com/ayankuzu" },
  ],
  cvUrls: {
    tr: "/cayan-kuzu-cv-tr.pdf",
    en: "/cayan-kuzu-cv-en.pdf",
  },
} as const;
