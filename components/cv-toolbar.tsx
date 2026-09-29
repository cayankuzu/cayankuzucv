"use client";

import { Download, Printer } from "lucide-react";
import { LanguageSwitcher } from "@/components/language-switcher";
import pdfManifest from "@/data/pdf-manifest.json";
import { siteCopy, type Locale } from "@/data/i18n";
import { profile } from "@/data/profile";

export function CvToolbar({ locale }: { locale: Locale }) {
  const ui = siteCopy[locale].ui;
  // Sürüm parametresi, içerik değişip PDF yeniden üretildiğinde tarayıcı önbelleğini aşar.
  const pdfHref = `${profile.cvUrls[locale]}?v=${pdfManifest.hash}`;

  return (
    <nav className="toolbar" aria-label={ui.toolbar}>
      <div className="toolbarInner">
        <span className="toolbarName">{profile.name}</span>
        <div className="toolbarActions">
          <LanguageSwitcher locale={locale} />
          <a className="toolButton" href={pdfHref} download={profile.cvUrls[locale].slice(1)}>
            <Download aria-hidden="true" size={16} strokeWidth={1.8} />
            <span>{ui.downloadPdf}</span>
          </a>
          <button className="toolButton" type="button" onClick={() => window.print()}>
            <Printer aria-hidden="true" size={16} strokeWidth={1.8} />
            <span>{ui.print}</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
