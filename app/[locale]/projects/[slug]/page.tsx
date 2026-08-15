import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Download, ExternalLink } from "lucide-react";
import { LanguageSwitcher } from "@/components/language-switcher";
import { LocaleSync } from "@/components/locale-sync";
import { isLocale, locales, siteCopy } from "@/data/i18n";
import { getProjectDetailSections, getRoleLabel, getStatusLabel } from "@/data/project-detail";
import { getProjectImageAlt, getProjectScreenAlt, getProjectText } from "@/data/project-translations";
import { profile } from "@/data/profile";
import { getProjectById, projects } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  return locales.flatMap((locale) => projects.map((project) => ({ locale, slug: project.id })));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const project = getProjectById(slug);

  if (!project || !isLocale(locale)) {
    return { title: "Project" };
  }

  const text = getProjectText(project, locale);
  return {
    title: `${project.title} | ${profile.name}`,
    description: text.description,
    alternates: {
      canonical: `/${locale}/projects/${project.id}`,
      languages: {
        tr: `/tr/projects/${project.id}`,
        en: `/en/projects/${project.id}`,
      },
    },
    openGraph: project.thumbnail
      ? { images: [{ url: project.thumbnail, alt: project.thumbnailAlt ?? project.title }] }
      : undefined,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { locale, slug } = await params;
  const project = getProjectById(slug);

  if (!project || !isLocale(locale)) {
    notFound();
  }

  const copy = siteCopy[locale];
  const text = getProjectText(project, locale);
  const sections = getProjectDetailSections(project, locale);
  const path = `/projects/${project.id}`;

  return (
    <main className="detailApp" lang={locale}>
      <LocaleSync locale={locale} />
      <header className="detailTopbar">
        <Link href={`/${locale}?section=projects`} className="detailBackLink">
          <ArrowLeft aria-hidden="true" size={17} strokeWidth={1.8} />
          {copy.common.backToProjects}
        </Link>
        <LanguageSwitcher locale={locale} path={path} />
      </header>

      <article className="detailPaper">
        <header className="detailHeader">
          <p>{copy.common[project.category]}</p>
          <h1>{project.title}</h1>
          <span>{text.hook}</span>
        </header>

        <div className={`detailCover${project.thumbnail ? "" : " detailCover--fikkis"}`}>
          {project.thumbnail ? (
            <Image
              src={project.thumbnail}
              alt={getProjectImageAlt(project, locale)}
              fill
              preload
              sizes="(max-width: 960px) 100vw, 820px"
            />
          ) : (
            <span className="fikkisWordmark" aria-hidden="true">
              fikkis<span>●</span>
            </span>
          )}
        </div>

        <dl className="detailMeta">
          <div>
            <dt>{copy.common.role}</dt>
            <dd>{getRoleLabel(locale)}</dd>
          </div>
          <div>
            <dt>{copy.common.status}</dt>
            <dd>{getStatusLabel(project, locale)}</dd>
          </div>
        </dl>

        <div className="detailSections">
          {sections.map((section, index) => (
            <section key={section.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h2>{section.title}</h2>
                <p>{section.body}</p>
              </div>
            </section>
          ))}
        </div>

        {project.images && project.images.length > 1 ? (
          <section className="detailScreens">
            <header>
              <p>{copy.common.selectedScreens}</p>
            </header>
            <div>
              {project.images.map((image, index) => (
                <figure key={image}>
                  <Image
                    src={image}
                    alt={getProjectScreenAlt(project, index, locale)}
                    fill
                    sizes="(max-width: 700px) 100vw, 32vw"
                  />
                </figure>
              ))}
            </div>
          </section>
        ) : null}

        <section className="detailLinks">
          <h2>{copy.common.moreLinks}</h2>
          <div>
            {project.liveUrl ? (
              <a href={project.liveUrl} target="_blank" rel="noreferrer">
                {copy.common.liveProject}
                <ExternalLink aria-hidden="true" size={16} strokeWidth={1.8} />
              </a>
            ) : null}
            {project.figmaUrl ? (
              <a href={project.figmaUrl} target="_blank" rel="noreferrer">
                {copy.common.openPrototype}
                <ExternalLink aria-hidden="true" size={16} strokeWidth={1.8} />
              </a>
            ) : null}
            {project.downloadUrl ? (
              <a href={project.downloadUrl} target="_blank" rel="noreferrer">
                {copy.common.downloadProject}
                <Download aria-hidden="true" size={16} strokeWidth={1.8} />
              </a>
            ) : null}
            {project.secondaryUrl ? (
              <a href={project.secondaryUrl} target="_blank" rel="noreferrer">
                Gumroad
                <ExternalLink aria-hidden="true" size={16} strokeWidth={1.8} />
              </a>
            ) : null}
            <a href={project.fikisUrl} target="_blank" rel="noreferrer">
              {copy.common.viewOnFikkis}
              <ArrowUpRight aria-hidden="true" size={16} strokeWidth={1.8} />
            </a>
          </div>
        </section>
      </article>
    </main>
  );
}
