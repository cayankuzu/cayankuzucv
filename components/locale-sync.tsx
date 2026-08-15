"use client";

import { useEffect } from "react";
import { type Locale } from "@/data/i18n";

type LocaleSyncProps = {
  locale: Locale;
};

export function LocaleSync({ locale }: LocaleSyncProps) {
  useEffect(() => {
    document.documentElement.lang = locale;
    window.localStorage.setItem("portfolio-locale", locale);
  }, [locale]);

  return null;
}
