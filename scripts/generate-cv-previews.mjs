import { chromium } from "playwright-core";
import path from "node:path";

async function generate() {
  const browser = await chromium.launch({ channel: "chrome" });
  const context = await browser.newContext({
    viewport: { width: 1200, height: 1600 },
    deviceScaleFactor: 1.5,
  });
  const page = await context.newPage();
  await page.goto("http://localhost:3001/tr", { waitUntil: "networkidle" });
  await page.evaluate(() => document.fonts.ready);

  const paper = page.locator(".paper");
  await paper.waitFor({ state: "visible" });

  const box = await paper.boundingBox();
  if (!box) {
    console.error("Paper bounding box not found");
    await browser.close();
    return;
  }

  const outDir = "C:/Users/Cayan/Desktop/fikkis/public/project-previews";

  // 1. Top section of the CV (Header, Identity, Profile, Experience)
  await page.screenshot({
    path: path.join(outDir, "cayankuzu-cv.png"),
    clip: {
      x: box.x,
      y: box.y,
      width: box.width,
      height: Math.min(box.height * 0.55, 950),
    },
  });
  console.log("Generated cayankuzu-cv.png");

  // 2. Projects & Academic & Skills section of the CV
  const projectsSec = page.locator("#sec-projects");
  const pBox = await projectsSec.boundingBox();
  if (pBox) {
    await page.screenshot({
      path: path.join(outDir, "cayankuzu-cv-projects.png"),
      clip: {
        x: box.x,
        y: Math.max(box.y, pBox.y - 40),
        width: box.width,
        height: Math.min(box.height - (pBox.y - box.y) + 40, 950),
      },
    });
    console.log("Generated cayankuzu-cv-projects.png");
  }

  await browser.close();
}

generate().catch(console.error);
