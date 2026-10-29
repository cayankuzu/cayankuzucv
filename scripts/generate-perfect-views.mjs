import { chromium } from "playwright-core";
import fs from "node:fs";
import path from "node:path";

const outDir = "C:/Users/Cayan/Desktop/fikkis/public/project-previews";

async function run() {
  console.log("Starting high-resolution mockups generation...");
  const browser = await chromium.launch({ channel: "chrome" });

  // -------------------------------------------------------------------------
  // 1. CAPTURE SOURCE ASSETS FROM LOCAL CV (port 3001)
  // -------------------------------------------------------------------------

  // A. Desktop top view (1400 x 860 @2x)
  const deskPage = await browser.newPage({
    viewport: { width: 1400, height: 860 },
    deviceScaleFactor: 2,
  });
  await deskPage.goto("http://localhost:3001/tr", { waitUntil: "networkidle" });
  await deskPage.evaluate(() => document.fonts.ready);
  const deskShot = await deskPage.screenshot();
  await deskPage.close();
  const deskBase64 = deskShot.toString("base64");
  console.log("Captured desktop source.");

  // B. A4 Print Pages 1 & 2 (794 x 1123 @2x each)
  const printPage = await browser.newPage({
    viewport: { width: 794, height: 2300 },
    deviceScaleFactor: 2,
  });
  await printPage.goto("http://localhost:3001/tr", { waitUntil: "networkidle" });
  await printPage.evaluate(() => document.fonts.ready);
  await printPage.emulateMedia({ media: "print" });
  
  const p1Buf = await printPage.screenshot({
    clip: { x: 0, y: 0, width: 794, height: 1123 },
  });
  const p2Buf = await printPage.screenshot({
    clip: { x: 0, y: 1123, width: 794, height: 1123 },
  });
  await printPage.close();
  const p1Base64 = p1Buf.toString("base64");
  const p2Base64 = p2Buf.toString("base64");
  console.log("Captured A4 print pages 1 & 2.");

  // C. Mobile views (390 x 780 @2x each)
  const m1Page = await browser.newPage({
    viewport: { width: 390, height: 780 },
    deviceScaleFactor: 2,
  });
  await m1Page.goto("http://localhost:3001/tr", { waitUntil: "networkidle" });
  await m1Page.evaluate(() => document.fonts.ready);
  const m1Buf = await m1Page.screenshot();
  await m1Page.close();

  const m2Page = await browser.newPage({
    viewport: { width: 390, height: 780 },
    deviceScaleFactor: 2,
  });
  await m2Page.goto("http://localhost:3001/tr", { waitUntil: "networkidle" });
  await m2Page.evaluate(() => document.fonts.ready);
  await m2Page.evaluate(() => {
    const el = document.getElementById("sec-projects");
    if (el) el.scrollIntoView({ behavior: "instant", block: "start" });
  });
  const m2Buf = await m2Page.screenshot();
  await m2Page.close();
  const m1Base64 = m1Buf.toString("base64");
  const m2Base64 = m2Buf.toString("base64");
  console.log("Captured mobile sources.");

  // -------------------------------------------------------------------------
  // 2. RENDER 16:10 STUDIO MOCKUPS (1600 x 1000 @2x)
  // -------------------------------------------------------------------------
  const canvasPage = await browser.newPage({
    viewport: { width: 1600, height: 1000 },
    deviceScaleFactor: 2,
  });

  // Common CSS
  const commonCss = `
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      width: 1600px;
      height: 1000px;
      background: radial-gradient(circle at 50% 30%, #202527 0%, #101213 100%);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      overflow: hidden;
      -webkit-font-smoothing: antialiased;
    }
    .header-pill {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 6px 16px;
      border-radius: 999px;
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.1);
      color: #9ad6c9;
      font-size: 13px;
      font-weight: 600;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      margin-bottom: 20px;
    }
    .dot {
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background: #2dd4bf;
      box-shadow: 0 0 10px #2dd4bf;
    }
  `;

  // --- MOCKUP 1: Desktop Browser Mockup ---
  const deskHtml = `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8">
    <style>
      ${commonCss}
      .browser-frame {
        width: 1400px;
        height: 870px;
        border-radius: 12px;
        overflow: hidden;
        background: #1e2324;
        border: 1px solid rgba(255, 255, 255, 0.14);
        box-shadow: 0 32px 80px -16px rgba(0, 0, 0, 0.8), 0 2px 10px rgba(0,0,0,0.4);
        display: flex;
        flex-direction: column;
      }
      .browser-bar {
        height: 42px;
        background: #181c1d;
        border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        display: flex;
        align-items: center;
        padding: 0 16px;
        position: relative;
      }
      .traffic-lights {
        display: flex;
        gap: 8px;
      }
      .tl {
        width: 12px;
        height: 12px;
        border-radius: 50%;
      }
      .tl-red { background: #ff5f56; }
      .tl-yellow { background: #ffbd2e; }
      .tl-green { background: #27c93f; }
      .address-bar {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        background: rgba(255, 255, 255, 0.06);
        border: 1px solid rgba(255, 255, 255, 0.08);
        border-radius: 6px;
        padding: 4px 18px;
        font-size: 12px;
        color: #b0b8ba;
        display: flex;
        align-items: center;
        gap: 6px;
      }
      .lock-icon {
        font-size: 11px;
        color: #2dd4bf;
      }
      .browser-body {
        flex: 1;
        overflow: hidden;
        position: relative;
      }
      .browser-body img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: top center;
        display: block;
      }
    </style>
  </head>
  <body>
    <div class="header-pill"><span class="dot"></span> Canlı Web Arayüzü · Çayan Kuzu CV</div>
    <div class="browser-frame">
      <div class="browser-bar">
        <div class="traffic-lights">
          <div class="tl tl-red"></div>
          <div class="tl tl-yellow"></div>
          <div class="tl tl-green"></div>
        </div>
        <div class="address-bar">
          <span class="lock-icon">🔒</span> cayankuzucv.vercel.app
        </div>
      </div>
      <div class="browser-body">
        <img src="data:image/png;base64,${deskBase64}" />
      </div>
    </div>
  </body>
  </html>
  `;
  await canvasPage.setContent(deskHtml);
  await canvasPage.screenshot({ path: path.join(outDir, "cayankuzu-cv-v4.png") });
  console.log("Saved cayankuzu-cv-v4.png");

  // --- MOCKUP 2: Dual-page A4 Spread Mockup ---
  const spreadHtml = `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8">
    <style>
      ${commonCss}
      .spread {
        display: flex;
        gap: 36px;
        align-items: center;
        justify-content: center;
      }
      .page-card {
        width: 615px;
        height: 870px;
        border-radius: 6px;
        overflow: hidden;
        box-shadow: 0 28px 65px -12px rgba(0, 0, 0, 0.75), 0 2px 10px rgba(0,0,0,0.3);
        border: 1px solid rgba(255, 255, 255, 0.14);
        background: #fbfbf8;
        position: relative;
      }
      .page-card img {
        width: 100%;
        height: 100%;
        display: block;
        object-fit: cover;
      }
    </style>
  </head>
  <body>
    <div class="header-pill"><span class="dot"></span> 2 Sayfalık A4 Baskı ve PDF Mimarisi · Çayan Kuzu</div>
    <div class="spread">
      <div class="page-card">
        <img src="data:image/png;base64,${p1Base64}" />
      </div>
      <div class="page-card">
        <img src="data:image/png;base64,${p2Base64}" />
      </div>
    </div>
  </body>
  </html>
  `;
  await canvasPage.setContent(spreadHtml);
  await canvasPage.screenshot({ path: path.join(outDir, "cayankuzu-cv-spread-v4.png") });
  console.log("Saved cayankuzu-cv-spread-v4.png");

  // --- MOCKUP 3: Mobile Responsive Spread Mockup ---
  const mobileHtml = `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8">
    <style>
      ${commonCss}
      .spread {
        display: flex;
        gap: 60px;
        align-items: center;
        justify-content: center;
      }
      .phone-frame {
        width: 390px;
        height: 780px;
        border-radius: 44px;
        overflow: hidden;
        background: #000;
        border: 10px solid #282f31;
        box-shadow: 0 32px 70px -16px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(255, 255, 255, 0.1);
        position: relative;
      }
      .notch {
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 120px;
        height: 24px;
        background: #000;
        border-bottom-left-radius: 14px;
        border-bottom-right-radius: 14px;
        z-index: 10;
      }
      .phone-frame img {
        width: 100%;
        height: 100%;
        display: block;
        object-fit: cover;
      }
    </style>
  </head>
  <body>
    <div class="header-pill"><span class="dot"></span> Responsive Mobil Mimari · Tek Sütun Akışı</div>
    <div class="spread">
      <div class="phone-frame">
        <div class="notch"></div>
        <img src="data:image/png;base64,${m1Base64}" />
      </div>
      <div class="phone-frame">
        <div class="notch"></div>
        <img src="data:image/png;base64,${m2Base64}" />
      </div>
    </div>
  </body>
  </html>
  `;
  await canvasPage.setContent(mobileHtml);
  await canvasPage.screenshot({ path: path.join(outDir, "cayankuzu-cv-mobile-v4.png") });
  console.log("Saved cayankuzu-cv-mobile-v4.png");

  // Also overwrite the legacy files so old links / direct paths always resolve to the new visuals
  fs.copyFileSync(
    path.join(outDir, "cayankuzu-cv-v4.png"),
    path.join(outDir, "cayankuzu-cv-v3.png")
  );
  fs.copyFileSync(
    path.join(outDir, "cayankuzu-cv-spread-v4.png"),
    path.join(outDir, "cayankuzu-cv-projects-v3.png")
  );
  fs.copyFileSync(
    path.join(outDir, "cayankuzu-cv-v4.png"),
    path.join(outDir, "cayankuzu-cv.png")
  );
  fs.copyFileSync(
    path.join(outDir, "cayankuzu-cv-spread-v4.png"),
    path.join(outDir, "cayankuzu-cv-projects.png")
  );
  console.log("Overwrote legacy cayankuzu-cv.png and cayankuzu-cv-projects.png.");

  await canvasPage.close();
  await browser.close();
  console.log("All views generated successfully!");
}

run().catch((err) => {
  console.error("Error generating views:", err);
  process.exit(1);
});
