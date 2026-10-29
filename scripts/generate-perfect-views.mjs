import { chromium } from "playwright-core";
import path from "node:path";
import fs from "node:fs";

async function run() {
  const browser = await chromium.launch({ channel: "chrome" });
  
  // High quality context
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 2,
  });

  const page = await context.newPage();
  await page.goto("http://localhost:3001/tr", { waitUntil: "networkidle" });
  await page.evaluate(() => document.fonts.ready);

  const outDir = "C:/Users/Cayan/Desktop/fikkis/public/project-previews";

  // -------------------------------------------------------------
  // View 1: Top Document View (Identity, Profile, Experience)
  // Let's ensure the paper and top toolbar look stunning and clean
  // -------------------------------------------------------------
  await page.evaluate(() => {
    window.scrollTo(0, 0);
  });
  await page.waitForTimeout(300);

  // Capture View 1 (1440 x 900 @2x)
  await page.screenshot({
    path: path.join(outDir, "cayankuzu-cv-v3.png"),
  });
  console.log("Generated cayankuzu-cv-v3.png");

  // -------------------------------------------------------------
  // View 2: Projects & Academic & Skills View
  // -------------------------------------------------------------
  await page.evaluate(() => {
    const el = document.getElementById("sec-projects");
    if (el) {
      el.scrollIntoView({ behavior: "instant", block: "start" });
      window.scrollBy(0, -64);
    }
  });
  await page.waitForTimeout(300);

  await page.screenshot({
    path: path.join(outDir, "cayankuzu-cv-projects-v3.png"),
  });
  console.log("Generated cayankuzu-cv-projects-v3.png");

  // Also overwrite the legacy filenames so old links never break
  fs.copyFileSync(
    path.join(outDir, "cayankuzu-cv-v3.png"),
    path.join(outDir, "cayankuzu-cv.png")
  );
  fs.copyFileSync(
    path.join(outDir, "cayankuzu-cv-projects-v3.png"),
    path.join(outDir, "cayankuzu-cv-projects.png")
  );
  console.log("Overwrote legacy cayankuzu-cv.png and cayankuzu-cv-projects.png");

  await browser.close();
}

run().catch(console.error);
