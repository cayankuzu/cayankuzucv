// Derlemeden önce PDF'lerin güncel içerikten üretildiğini doğrular.
import { readFileSync } from "node:fs";
import { contentHash, manifestPath } from "./pdf-hash.mjs";

const manifest = JSON.parse(readFileSync(manifestPath, "utf8"));
const current = contentHash();

if (manifest.hash !== current) {
  console.error(
    `PDF'ler güncel değil (manifest ${manifest.hash}, içerik ${current}). "npm run dev" açıkken "npm run pdf" çalıştırıp dosyaları ekleyin.`,
  );
  process.exit(1);
}

console.log(`PDF'ler güncel · ${current}`);
