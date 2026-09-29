"use client";

import { useEffect } from "react";
import { type Locale } from "@/data/i18n";

/** Son görüntülenen dili çereze yazar; kök adres (/) bir sonraki ziyarette bu dile yönlenir. */
export function LocaleSync({ locale }: { locale: Locale }) {
  useEffect(() => {
    document.cookie = `cv-locale=${locale}; path=/; max-age=31536000; samesite=lax`;
  }, [locale]);

  return null;
}
