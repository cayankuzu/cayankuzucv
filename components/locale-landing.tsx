"use client";

import { useEffect } from "react";
import { locales, type Locale } from "@/data/i18n";

const storageKey = "portfolio-locale";

function getStoredLocale(): Locale {
  try {
    const stored = window.localStorage.getItem(storageKey);
    return locales.includes(stored as Locale) ? (stored as Locale) : "tr";
  } catch {
    return "tr";
  }
}

export function LocaleLanding() {
  useEffect(() => {
    window.location.replace(`/${getStoredLocale()}`);
  }, []);

  return null;
}
