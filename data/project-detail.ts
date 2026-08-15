import { getProjectText } from "@/data/project-translations";
import { type Locale, siteCopy } from "@/data/i18n";
import { type Project } from "@/data/projects";

export type DetailSection = {
  title: string;
  body: string;
};

export function getStatusLabel(project: Project, locale: Locale) {
  if (project.statusText) {
    return project.statusText[locale];
  }

  const labels = {
    tr: { Live: "Canlı", Prototype: "Prototip", Available: "Erişilebilir" },
    en: { Live: "Live", Prototype: "Prototype", Available: "Available" },
  } as const;

  return labels[locale][project.status];
}

export function getRoleLabel(locale: Locale) {
  return locale === "tr" ? "Bağımsız proje" : "Independent project";
}

export function getProjectDetailSections(project: Project, locale: Locale): DetailSection[] {
  const copy = siteCopy[locale].detail;
  const text = getProjectText(project, locale);

  if (project.category === "mobile") {
    return [
      { title: copy.projectOverview, body: text.description },
      { title: copy.productFocus, body: text.hook },
      { title: copy.designOutput, body: copy.mobileOutput },
    ];
  }

  if (project.category === "web") {
    return [
      { title: copy.projectOverview, body: text.description },
      { title: copy.webConcept, body: text.hook },
      { title: copy.experienceApproach, body: copy.webOutput },
    ];
  }

  if (project.category === "game") {
    return [
      { title: copy.gameOverview, body: text.description },
      { title: copy.gameConcept, body: text.hook },
      { title: copy.gameplayFocus, body: copy.gameOutput },
    ];
  }

  return [
    { title: copy.projectOverview, body: text.description },
    { title: copy.contentFocus, body: text.hook },
    { title: copy.availability, body: copy.contentOutput },
  ];
}
