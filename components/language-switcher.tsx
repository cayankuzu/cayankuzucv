"use client";

import Link from "next/link";
import { siteCopy, type Locale } from "@/data/i18n";

type LanguageSwitcherProps = {
  locale: Locale;
  path?: string;
};

const storageKey = "portfolio-locale";

export function LanguageSwitcher({ locale, path = "" }: LanguageSwitcherProps) {
  function rememberLocale(nextLocale: Locale) {
    try {
      window.localStorage.setItem(storageKey, nextLocale);
    } catch {
      // Locale navigation still works when storage is unavailable.
    }
  }

  return (
    <div className="languageSwitcher" role="group" aria-label={siteCopy[locale].common.language}>
      <Link href={`/tr${path}`} aria-current={locale === "tr" ? "page" : undefined} onClick={() => rememberLocale("tr")}>
        TR
      </Link>
      <span aria-hidden="true">/</span>
      <Link href={`/en${path}`} aria-current={locale === "en" ? "page" : undefined} onClick={() => rememberLocale("en")}>
        EN
      </Link>
    </div>
  );
}
