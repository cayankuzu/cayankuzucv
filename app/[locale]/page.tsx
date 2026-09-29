import { notFound } from "next/navigation";
import { CvDocument } from "@/components/cv-document";
import { isLocale } from "@/data/i18n";

export default async function LocalePage({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return <CvDocument locale={locale} />;
}
