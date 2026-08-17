"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AtSign, Download, ExternalLink, GitBranch, Globe2, Mail, MapPin, Minus, Phone, Plus, X } from "lucide-react";
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
  const [portraitOpen, setPortraitOpen] = useState(false);
  const [detailsOpen, setDetailsOpen] = useState(false);
  const portraitTriggerRef = useRef<HTMLButtonElement>(null);
  const portraitCloseRef = useRef<HTMLButtonElement>(null);
  const copy = siteCopy[locale];
  const content = cvContent[locale].sidebar;
  const mailHref = `mailto:${profile.email}?subject=${encodeURIComponent(content.emailSubject)}&body=${encodeURIComponent(content.emailBody)}`;

  useEffect(() => {
    if (!portraitOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    const portraitTrigger = portraitTriggerRef.current;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setPortraitOpen(false);
      }
    }

    document.body.style.overflow = "hidden";
    portraitCloseRef.current?.focus();
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
      portraitTrigger?.focus();
    };
  }, [portraitOpen]);

  function closePortrait() {
    setPortraitOpen(false);
  }

  function keepFocusInDialog(event: React.KeyboardEvent<HTMLDivElement>) {
    if (event.key === "Tab") {
      event.preventDefault();
      portraitCloseRef.current?.focus();
    }
  }

  return (
    <>
      <aside className="cvInfoColumn" aria-label={copy.profile.title}>
        <button
          ref={portraitTriggerRef}
          className="infoPortrait"
          type="button"
          onClick={() => setPortraitOpen(true)}
          aria-label={content.openPortrait}
          aria-expanded={portraitOpen}
        >
          <Image src="/profile-cayan-kuzu.jpeg" alt={content.portraitAlt} fill preload sizes="112px" />
        </button>

        <button
          className="sidebarDetailsToggle"
          type="button"
          aria-expanded={detailsOpen}
          aria-controls="sidebar-details"
          onClick={() => setDetailsOpen((current) => !current)}
        >
          {detailsOpen ? content.hideDetails : content.showDetails}
          {detailsOpen ? <Minus aria-hidden="true" size={15} /> : <Plus aria-hidden="true" size={15} />}
        </button>

        <div id="sidebar-details" className={`sidebarDetails${detailsOpen ? " isOpen" : ""}`}>
          <section>
            <h2>{content.communication}</h2>
            <a className="contactLink" href={`tel:${profile.phoneHref}`}>
              <Phone aria-hidden="true" size={14} strokeWidth={1.8} />
              {profile.phone}
            </a>
            <a className="contactLink" href={mailHref}>
              <Mail aria-hidden="true" size={14} strokeWidth={1.8} />
              {profile.email}
            </a>
            <a className="portfolioLink" href={profile.githubUrl} target="_blank" rel="noreferrer">
              <GitBranch aria-hidden="true" size={14} strokeWidth={1.8} />
              {content.githubLabel}
              <ExternalLink aria-hidden="true" size={13} strokeWidth={1.8} />
            </a>
            <a className="portfolioLink" href={profile.portfolioUrl} target="_blank" rel="noreferrer">
              <Globe2 aria-hidden="true" size={14} strokeWidth={1.8} />
              {content.portfolioLabel}
              <ExternalLink aria-hidden="true" size={13} strokeWidth={1.8} />
            </a>
            <a className="portfolioLink" href={profile.instagramUrl} target="_blank" rel="noreferrer">
              <AtSign aria-hidden="true" size={14} strokeWidth={1.8} />
              {content.instagramLabel}
              <ExternalLink aria-hidden="true" size={13} strokeWidth={1.8} />
            </a>
          </section>

          <section>
            <h2>{content.education}</h2>
            {content.educationLines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </section>

          <section>
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
      </aside>

      {portraitOpen
        ? createPortal(
            <div className="portraitLightbox" role="presentation" onClick={(event) => event.currentTarget === event.target && closePortrait()}>
              <div
                className="portraitModal"
                role="dialog"
                aria-modal="true"
                aria-label={content.portraitAlt}
                onKeyDown={keepFocusInDialog}
              >
                <button ref={portraitCloseRef} className="portraitModalClose" type="button" aria-label={content.closePortrait} onClick={closePortrait}>
                  <X aria-hidden="true" size={19} strokeWidth={1.8} />
                </button>
                <div className="portraitModalImage">
                  <Image src="/profile-cayan-kuzu.jpeg" alt={content.portraitAlt} fill sizes="(max-width: 640px) 84vw, 420px" />
                </div>
              </div>
            </div>,
            document.body,
          )
        : null}
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
        <p className="profileNote">{content.note}</p>
      </div>
    </div>
  );
}

function ProjectsContent({ locale }: { locale: Locale }) {
  const copy = siteCopy[locale];
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
                </dl>
                <Link href={`/${locale}/projects/${project.slug}`}>
                  {content.viewLabel}
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
        <p className="archiveNote">{content.archiveNote}</p>
        <a className="archiveLink" href={FIKKIS_URL} target="_blank" rel="noreferrer">
          {copy.common.viewFullArchive}
          <ExternalLink aria-hidden="true" size={16} strokeWidth={1.8} />
        </a>
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

  return (
    <section className={`contentSection${open ? " isOpen" : ""}`}>
      <h2>
        <button
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
      {open ? (
        <div id={contentId} className="expandedContent" role="region" aria-label={cvContent[locale].sections[section]}>
          <SectionContent locale={locale} section={section} />
        </div>
      ) : null}
    </section>
  );
}

export function PortfolioShell({ locale, initialSection }: PortfolioShellProps) {
  const [openSections, setOpenSections] = useState<CvSection[]>(() =>
    initialSection ? [getInitialSection(initialSection)] : [],
  );
  const copy = siteCopy[locale];

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
          <InfoColumn locale={locale} />

          <div className="screenMainColumn">
            <header className="paperIdentity">
              <div>
                <p>{copy.profile.eyebrow}</p>
                <h1>{profile.name}</h1>
                <span>{copy.profile.roleLine}</span>
              </div>
              <div className="identityActions">
                <LanguageSwitcher locale={locale} />
                {profile.cvUrl ? (
                  <a href={profile.cvUrl} download title={copy.common.downloadCv} aria-label={copy.common.downloadCv}>
                    <Download aria-hidden="true" size={17} strokeWidth={1.8} />
                    <span>{copy.common.downloadCv}</span>
                  </a>
                ) : null}
              </div>
            </header>

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
            <div className="siteFooterMeta">
              <span>VERSION {profile.version}</span>
              <span>{locale === "tr" ? "MeMoDe tarafından" : "Powered by MeMoDe"}</span>
            </div>
          </footer>
        </article>
      </section>
    </main>
  );
}
