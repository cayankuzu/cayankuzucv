import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PortfolioShell } from "@/components/portfolio-shell";
import { isLocale, locales, siteCopy } from "@/data/i18n";

type LocalePageProps = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: LocalePageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  const copy = siteCopy[locale].metadata;
  return {
    title: copy.title,
    description: copy.description,
    alternates: {
      canonical: `/${locale}`,
      languages: {
        tr: "/tr",
        en: "/en",
      },
    },
    openGraph: {
      title: copy.title,
      description: copy.description,
      locale: locale === "tr" ? "tr_TR" : "en_US",
    },
  };
}

export default async function LocalePage({ params, searchParams }: LocalePageProps) {
  const [resolvedParams, resolvedSearchParams] = await Promise.all([params, searchParams]);
  const { locale } = resolvedParams;

  if (!isLocale(locale)) {
    notFound();
  }

  const section = Array.isArray(resolvedSearchParams.section)
    ? resolvedSearchParams.section[0]
    : resolvedSearchParams.section;

  return <PortfolioShell locale={locale} initialSection={section} />;
}
