import { createHash } from "node:crypto";
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative, sep } from "node:path";

export const root = join(import.meta.dirname, "..");
export const manifestPath = join(root, "data", "pdf-manifest.json");

/** PDF çıktısını etkileyen kaynaklar: veri, bileşenler, sayfa, stil ve portre. */
const sources = ["data", "components", join("app", "[locale]"), join("app", "globals.css"), join("public", "profile-cayan-kuzu.jpeg")];

function collect(path) {
  const stats = statSync(path);
  if (stats.isFile()) return [path];
  return readdirSync(path).flatMap((name) => collect(join(path, name)));
}

/** İçerik özeti; satır sonları normalize edilir ki Windows ve Linux aynı sonucu üretsin. */
export function contentHash() {
  const hash = createHash("sha256");
  const files = sources
    .flatMap((source) => collect(join(root, source)))
    .filter((file) => file !== manifestPath)
    .sort();

  for (const file of files) {
    const name = relative(root, file).split(sep).join("/");
    const data = readFileSync(file);
    const body = /\.(tsx?|css|json|mjs)$/.test(file) ? data.toString("utf8").replace(/\r\n/g, "\n") : data;
    hash.update(name).update("\0").update(body).update("\0");
  }

  return hash.digest("hex").slice(0, 12);
}
