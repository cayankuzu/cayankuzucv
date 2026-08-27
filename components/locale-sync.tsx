"use client";

import { useEffect } from "react";
import { type Locale } from "@/data/i18n";

type LocaleSyncProps = {
  locale: Locale;
};

export function LocaleSync({ locale }: LocaleSyncProps) {
  useEffect(() => {
    document.documentElement.lang = locale;
    try {
      window.localStorage.setItem("portfolio-locale", locale);
    } catch {
      // Language routing continues to work when storage is unavailable.
    }
  }, [locale]);

  return null;
}
