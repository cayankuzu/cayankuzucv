// Çalışan siteden TR/EN PDF'lerini üretir ve içerik özetini manifeste yazar.
// Kullanım: npm run pdf            (varsayılan http://localhost:3001)
//           CV_BASE_URL=http://localhost:3000 npm run pdf
import { copyFileSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { chromium } from "playwright-core";
import { contentHash, manifestPath, root } from "./pdf-hash.mjs";

const baseUrl = (process.env.CV_BASE_URL ?? "http://localhost:3001").replace(/\/$/, "");
const locales = ["tr", "en"];

try {
  await fetch(`${baseUrl}/tr`);
} catch {
  console.error(`Site ${baseUrl} adresinde çalışmıyor. Önce "npm run dev" ile başlatın ya da CV_BASE_URL verin.`);
  process.exit(1);
}

async function launch() {
  try {
    return await chromium.launch({ channel: "chrome" });
  } catch {
    return chromium.launch();
  }
}

function countPages(file) {
  return (readFileSync(file, "latin1").match(/\/Type\s*\/Page(?!s)/g) ?? []).length;
}

const browser = await launch();
const pages = {};

try {
  for (const locale of locales) {
    const page = await browser.newPage();
    await page.goto(`${baseUrl}/${locale}`, { waitUntil: "networkidle" });
    await page.evaluate(() => document.fonts.ready);
    await page.emulateMedia({ media: "print" });
    const file = join(root, "public", `cayan-kuzu-cv-${locale}.pdf`);
    await page.pdf({ path: file, preferCSSPageSize: true, printBackground: true, tagged: true, outline: true });
    pages[locale] = countPages(file);
    await page.close();
  }
} finally {
  await browser.close();
}

// Eski bağlantılar için dil belirtmeyen kopya Türkçe sürümdür.
copyFileSync(join(root, "public", "cayan-kuzu-cv-tr.pdf"), join(root, "public", "cayan-kuzu-cv.pdf"));

const manifest = { hash: contentHash(), generatedAt: new Date().toISOString(), pages };
writeFileSync(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);
console.log(`PDF'ler üretildi: TR ${pages.tr} sayfa, EN ${pages.en} sayfa · özet ${manifest.hash}`);

if (Object.values(pages).some((count) => count > 2)) {
  console.error("Uyarı: PDF iki sayfayı aşıyor.");
  process.exit(1);
}
