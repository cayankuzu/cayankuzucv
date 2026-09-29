import Link from "next/link";
import { locales, siteCopy, type Locale } from "@/data/i18n";

export function LanguageSwitcher({ locale }: { locale: Locale }) {
  return (
    <div className="languageSwitcher" role="group" aria-label={siteCopy[locale].ui.language}>
      {locales.map((item) => (
        <Link
          key={item}
          href={`/${item}`}
          hrefLang={item}
          lang={item}
          aria-current={item === locale ? "page" : undefined}
        >
          {item.toUpperCase()}
        </Link>
      ))}
    </div>
  );
}
