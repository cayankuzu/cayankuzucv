// Paylaşım görsellerini (1200×630) üretir: public/og/cv-tr.png ve cv-en.png.
// Kullanım: npm run og
import { mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { chromium } from "playwright-core";

const root = join(import.meta.dirname, "..");
const portrait = `data:image/jpeg;base64,${readFileSync(join(root, "public", "profile-cayan-kuzu.jpeg")).toString("base64")}`;

const variants = {
  tr: { label: "Özgeçmiş", title: "Ürün Tasarımı · UI/UX · Oyun Tasarımı", note: "Staj arıyor · İstanbul" },
  en: { label: "Curriculum Vitae", title: "Product Design · UI/UX · Game Design", note: "Seeking an internship · Istanbul" },
};

const orbit = `<svg viewBox="0 0 240 200" width="300" height="250" aria-hidden="true">
  <g fill="none" stroke="currentColor" stroke-width="0.75">
    <ellipse cx="120" cy="100" rx="104" ry="38" transform="rotate(-18 120 100)"/>
    <ellipse cx="120" cy="100" rx="104" ry="38" transform="rotate(42 120 100)" opacity="0.7"/>
    <ellipse cx="120" cy="100" rx="70" ry="24" transform="rotate(-72 120 100)" opacity="0.55"/>
    <circle cx="120" cy="100" r="86" stroke-dasharray="1.5 5" opacity="0.45"/>
  </g>
  <circle cx="120" cy="100" r="3.2" fill="currentColor"/>
  <circle cx="218.5" cy="68" r="2.4" fill="currentColor"/>
</svg>`;

function html({ label, title, note }) {
  return `<!doctype html><html><head><meta charset="utf-8">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@500;600;700&family=Source+Serif+4:opsz,wght@8..60,600&display=block" rel="stylesheet">
<style>
  * { box-sizing: border-box; margin: 0; }
  body { width: 1200px; height: 630px; display: grid; grid-template-columns: 384px 1fr; font-family: Inter, sans-serif; background: #dfe2e0; }
  aside { position: relative; overflow: hidden; background: #3e4a4f; padding: 72px 56px; }
  aside img { width: 176px; height: 176px; object-fit: cover; object-position: 50% 58%; border-radius: 16px; box-shadow: 0 0 0 1px rgb(255 255 255 / 16%); }
  aside .orbit { position: absolute; left: 42px; bottom: 28px; color: rgb(255 255 255 / 30%); }
  main { background: #fbfbf8; padding: 88px 72px; display: flex; flex-direction: column; }
  .label { color: #1f6f63; font-size: 20px; font-weight: 600; letter-spacing: .16em; text-transform: uppercase; }
  h1 { margin-top: 24px; font-family: "Source Serif 4", serif; font-size: 92px; font-weight: 600; letter-spacing: -.02em; line-height: 1; color: #16191a; }
  .title { margin-top: 20px; padding-bottom: 32px; border-bottom: 2px solid #16191a; color: #434b4f; font-size: 32px; font-weight: 500; }
  .foot { margin-top: auto; display: flex; justify-content: space-between; color: #626b6f; font-size: 22px; font-weight: 500; }
  .foot b { color: #1f6f63; font-weight: 600; }
</style></head><body>
<aside><img src="${portrait}" alt=""><div class="orbit">${orbit}</div></aside>
<main><p class="label">${label}</p><h1>Çayan Kuzu</h1><p class="title">${title}</p>
<div class="foot"><span>${note}</span><b>cayankuzucv.vercel.app</b></div></main>
</body></html>`;
}

async function launch() {
  try {
    return await chromium.launch({ channel: "chrome" });
  } catch {
    return chromium.launch();
  }
}

const outDir = join(root, "public", "og");
mkdirSync(outDir, { recursive: true });
const browser = await launch();
try {
  for (const [locale, copy] of Object.entries(variants)) {
    const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
    await page.setContent(html(copy), { waitUntil: "networkidle" });
    await page.evaluate(() => document.fonts.ready);
    await page.screenshot({ path: join(outDir, `cv-${locale}.png`) });
    await page.close();
  }
} finally {
  await browser.close();
}
console.log("Paylaşım görselleri üretildi: public/og/cv-tr.png, cv-en.png");
