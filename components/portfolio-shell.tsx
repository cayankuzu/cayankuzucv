"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  AtSign,
  Download,
  ExternalLink,
  GitBranch,
  Globe2,
  Mail,
  MapPin,
  Minus,
  Phone,
  Plus,
  X,
} from "lucide-react";
import { LanguageSwitcher } from "@/components/language-switcher";
import { LocaleSync } from "@/components/locale-sync";
import { cvContent, cvSections, type CvSection } from "@/data/cv-content";
import { siteCopy, type Locale } from "@/data/i18n";
import { FIKKIS_URL } from "@/data/projects";
import { profile } from "@/data/profile";

type PortfolioShellProps = {
  locale: Locale;
  initialSection?: string;
};

function getInitialSection(section: string | undefined): CvSection {
  if (section === "current" || section === "focus") {
    return "experience";
  }

  return cvSections.includes(section as CvSection) ? (section as CvSection) : "profile";
}

function InfoColumn({ locale }: { locale: Locale }) {
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [portraitOpen, setPortraitOpen] = useState(false);
  const portraitTriggerRef = useRef<HTMLButtonElement>(null);
  const portraitCloseRef = useRef<HTMLButtonElement>(null);
  const copy = siteCopy[locale];
  const content = cvContent[locale].sidebar;
  const mailHref = `mailto:${profile.email}?subject=${encodeURIComponent(content.emailSubject)}&body=${encodeURIComponent(content.emailBody)}`;
  const detailsId = `sidebar-details-${locale}`;

  useEffect(() => {
    if (!portraitOpen) return;

    const previousOverflow = document.body.style.overflow;
    const portraitTrigger = portraitTriggerRef.current;
    const focusFrame = window.requestAnimationFrame(() => portraitCloseRef.current?.focus());

    document.body.style.overflow = "hidden";

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setPortraitOpen(false);
      }

      if (event.key === "Tab") {
        event.preventDefault();
        portraitCloseRef.current?.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      window.cancelAnimationFrame(focusFrame);
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      portraitTrigger?.focus();
    };
  }, [portraitOpen]);

  return (
    <>
      <aside className="cvInfoColumn" aria-label={copy.profile.title}>
        <button
          ref={portraitTriggerRef}
          className="infoPortrait"
          type="button"
          aria-label={content.openPortrait}
          aria-haspopup="dialog"
          onClick={() => setPortraitOpen(true)}
        >
          <Image src="/profile-cayan-kuzu.jpeg" alt={content.portraitAlt} fill preload sizes="112px" />
        </button>

        <div className="mobileSidebarSummary">
          <strong>{profile.name}</strong>
          <span>{content.education}</span>
          {content.educationLines.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>

        <div className="sidebarDetails">
          <section className="sidebarContact">
            <h2>{content.communication}</h2>
            <a className="contactLink" href={`tel:${profile.phoneHref}`}>
              <Phone aria-hidden="true" size={14} strokeWidth={1.8} />
              {profile.phone}
            </a>
            <a className="contactLink" href={mailHref}>
              <Mail aria-hidden="true" size={14} strokeWidth={1.8} />
              {profile.email}
            </a>
            <a className="portfolioLink" href={profile.githubUrl} target="_blank" rel="noopener noreferrer">
              <GitBranch aria-hidden="true" size={14} strokeWidth={1.8} />
              {content.githubLabel}
              <ExternalLink aria-hidden="true" size={13} strokeWidth={1.8} />
            </a>
            <a className="portfolioLink" href={profile.portfolioUrl} target="_blank" rel="noopener noreferrer">
              <Globe2 aria-hidden="true" size={14} strokeWidth={1.8} />
              {content.portfolioLabel}
              <ExternalLink aria-hidden="true" size={13} strokeWidth={1.8} />
            </a>
            <a className="portfolioLink" href={profile.instagramUrl} target="_blank" rel="noopener noreferrer">
              <AtSign aria-hidden="true" size={14} strokeWidth={1.8} />
              {content.instagramLabel}
              <ExternalLink aria-hidden="true" size={13} strokeWidth={1.8} />
            </a>
          </section>

          <section className="sidebarEducation">
            <h2>{content.education}</h2>
            {content.educationLines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </section>

          <button
            className="sidebarDetailsToggle"
            type="button"
            aria-expanded={detailsOpen}
            aria-controls={detailsId}
            onClick={() => setDetailsOpen((current) => !current)}
          >
            <span>{detailsOpen ? content.hideDetails : content.showDetails}</span>
            {detailsOpen ? (
              <Minus aria-hidden="true" size={15} strokeWidth={2} />
            ) : (
              <Plus aria-hidden="true" size={15} strokeWidth={2} />
            )}
          </button>

          <div id={detailsId} className={`sidebarMoreDetails${detailsOpen ? " isOpen" : ""}`}>
            <section className="sidebarSkills">
              <h2>{content.skills}</h2>
              <ul className="skillList">
                {content.skillGroups.map((group) => (
                  <li key={group.title}>
                    <strong>{group.title}</strong>
                    <span>{group.items.join(" · ")}</span>
                  </li>
                ))}
              </ul>
            </section>

            <p className="location">
              <MapPin aria-hidden="true" size={14} strokeWidth={1.7} />
              {copy.sidebar.location}
            </p>
          </div>
        </div>
      </aside>

      {portraitOpen ? (
        <div
          className="portraitLightbox"
          onClick={(event) => {
            if (event.target === event.currentTarget) setPortraitOpen(false);
          }}
        >
          <div className="portraitModal" role="dialog" aria-modal="true" aria-label={content.portraitAlt}>
            <button
              ref={portraitCloseRef}
              className="portraitModalClose"
              type="button"
              aria-label={content.closePortrait}
              onClick={() => setPortraitOpen(false)}
            >
              <X aria-hidden="true" size={20} strokeWidth={1.8} />
            </button>
            <div className="portraitModalImage">
              <Image
                src="/profile-cayan-kuzu.jpeg"
                alt={content.portraitAlt}
                fill
                sizes="(max-width: 560px) calc(100vw - 52px), 400px"
              />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

function ProfileContent({ locale }: { locale: Locale }) {
  const content = cvContent[locale].profile;

  return (
    <div className="sectionContent profileContent">
      <div className="sectionCopy">
        <p className="leadText">{content.summary}</p>
        <div className="profileHighlights">
          {content.highlights.map((item) => (
            <article key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProjectsContent({ locale }: { locale: Locale }) {
  const content = cvContent[locale].projects;

  return (
    <div className="sectionContent projectsContent">
      <div className="sectionCopy">
        <p className="leadText">{content.intro}</p>
        <div className="projectSummaryList">
          {content.items.map((project, index) => (
            <article key={project.slug}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <header>
                  <h3>{project.title}</h3>
                  <small>{project.status}</small>
                </header>
                <p>{project.description}</p>
                <dl>
                  <div>
                    <dt>{content.platformLabel}</dt>
                    <dd>{project.platform}</dd>
                  </div>
                  <div>
                    <dt>{content.roleLabel}</dt>
                    <dd>{project.role}</dd>
                  </div>
                  <div>
                    <dt>{content.toolsLabel}</dt>
                    <dd>{project.tools}</dd>
                  </div>
                </dl>
                <Link href={`/${locale}/projects/${project.slug}`}>
                  {content.viewLabel}
                  <ArrowRight aria-hidden="true" size={14} strokeWidth={1.8} />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="projectsArchiveFooter">
          <a className="archiveCta" href={FIKKIS_URL} target="_blank" rel="noopener noreferrer">
            {content.allProjectsLabel}
            <ExternalLink aria-hidden="true" size={15} strokeWidth={1.8} />
          </a>
          <div className="printArchiveFallback">
            <strong>{content.archivePrintLabel}</strong>
            <span>fikkis.vercel.app</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function ExperienceContent({ locale }: { locale: Locale }) {
  const content = cvContent[locale].experience;

  return (
    <div className="sectionContent experienceContent">
      <div className="sectionCopy">
        <p className="leadText">{content.intro}</p>
        <div className="experienceList">
          {content.items.map((item) => (
            <article key={item.title}>
              <span>{item.label}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <small>{item.evidence}</small>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

function GoalsContent({ locale }: { locale: Locale }) {
  const content = cvContent[locale].goals;

  return (
    <div className="sectionContent goalsContent">
      <div className="sectionCopy">
        <p className="leadText">{content.intro}</p>
        <div className="goalsPanel">
          {content.items.map((goal, index) => (
            <article key={goal.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3>{goal.title}</h3>
                <p>{goal.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

function SectionContent({ locale, section }: { locale: Locale; section: CvSection }) {
  switch (section) {
    case "profile":
      return <ProfileContent locale={locale} />;
    case "projects":
      return <ProjectsContent locale={locale} />;
    case "experience":
      return <ExperienceContent locale={locale} />;
    case "goals":
      return <GoalsContent locale={locale} />;
  }
}

function ContentToggle({
  locale,
  section,
  index,
  open,
  onToggle,
}: {
  locale: Locale;
  section: CvSection;
  index: number;
  open: boolean;
  onToggle: (section: CvSection) => void;
}) {
  const contentId = `section-${section}`;
  const triggerId = `section-trigger-${section}`;

  return (
    <section className={`contentSection${open ? " isOpen" : ""}`}>
      <h2>
        <button
          id={triggerId}
          type="button"
          aria-expanded={open}
          aria-controls={contentId}
          onClick={() => onToggle(section)}
        >
          <span>{String(index + 1).padStart(2, "0")}</span>
          <strong>{cvContent[locale].sections[section]}</strong>
          <span className="toggleIcon" aria-hidden="true">
            {open ? <Minus size={16} strokeWidth={2} /> : <Plus size={16} strokeWidth={2} />}
          </span>
        </button>
      </h2>
      <div
        id={contentId}
        className={`expandedContent${open ? "" : " isCollapsed"}`}
        role="region"
        aria-labelledby={triggerId}
        aria-hidden={!open}
      >
        <SectionContent locale={locale} section={section} />
      </div>
    </section>
  );
}

export function PortfolioShell({ locale, initialSection }: PortfolioShellProps) {
  const [openSections, setOpenSections] = useState<CvSection[]>(() => [getInitialSection(initialSection)]);
  const copy = siteCopy[locale];
  const content = cvContent[locale];
  const cvUrl = profile.cvUrls[locale];

  function toggleSection(section: CvSection) {
    setOpenSections((current) =>
      current.includes(section) ? current.filter((item) => item !== section) : [...current, section],
    );
  }

  return (
    <main className="screenCvApp" lang={locale}>
      <LocaleSync locale={locale} />

      <section className="screenCanvas" aria-label={copy.profile.title}>
        <article className="screenPaper">
          <header className="paperIdentity">
            <div>
              <p>{copy.profile.eyebrow}</p>
              <h1>{profile.name}</h1>
              <span>{copy.profile.roleLine}</span>
            </div>
            <div className="identityActions">
              <div className="identitySelectors">
                <LanguageSwitcher locale={locale} />
                <span className="controlDivider" aria-hidden="true">|</span>
                <div className="documentActions">
                  <a href={cvUrl} download title={copy.common.downloadCv} aria-label={copy.common.downloadCv}>
                    <Download aria-hidden="true" size={16} strokeWidth={1.8} />
                    <span>{copy.common.downloadCv}</span>
                  </a>
                </div>
              </div>
            </div>
          </header>

          <InfoColumn locale={locale} />

          <div className="screenMainColumn">
            <div className="contentSections">
              {cvSections.map((section, index) => (
                <ContentToggle
                  key={section}
                  locale={locale}
                  section={section}
                  index={index}
                  open={openSections.includes(section)}
                  onToggle={toggleSection}
                />
              ))}
            </div>
          </div>

          <footer className="siteFooter">
            <span>© 2026 {profile.name}</span>
            <span>{content.footerCredit}</span>
          </footer>
        </article>
      </section>
    </main>
  );
}
