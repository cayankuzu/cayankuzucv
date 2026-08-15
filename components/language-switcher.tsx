"use client";

import Link from "next/link";
import { type Locale } from "@/data/i18n";

type LanguageSwitcherProps = {
  locale: Locale;
  path?: string;
};

const storageKey = "portfolio-locale";

export function LanguageSwitcher({ locale, path = "" }: LanguageSwitcherProps) {
  function rememberLocale(nextLocale: Locale) {
    window.localStorage.setItem(storageKey, nextLocale);
  }

  return (
    <div className="languageSwitcher" aria-label={locale === "tr" ? "Dil seçimi" : "Language selector"}>
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
