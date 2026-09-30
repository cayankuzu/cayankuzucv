import type { ReactNode } from "react";
import { ArrowUpRight, ChartColumn, CodeXml, Globe, Mail, MapPin, Phone } from "lucide-react";
import { CvToolbar } from "@/components/cv-toolbar";
import { LocaleSync } from "@/components/locale-sync";
import { OrbitMark } from "@/components/orbit-mark";
import { Portrait } from "@/components/portrait";
import { cvContent } from "@/data/cv-content";
import { siteCopy, type Locale } from "@/data/i18n";
import { profile } from "@/data/profile";

/** LinkedIn işareti; lucide v1'de marka ikonları olmadığından aynı çizgi diliyle çizildi. */
function LinkedInMark({ size = 15, strokeWidth = 1.75 }: { size?: number; strokeWidth?: number }) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M8 11v5M8 8v.01M12 16v-5M12 13.5a2.5 2.5 0 0 1 5 0V16" />
    </svg>
  );
}

const linkIcons = {
  linkedin: LinkedInMark,
  web: Globe,
  github: CodeXml,
  kaggle: ChartColumn,
} as const;

function ExternalLink({ href, className, children }: { href: string; className?: string; children: ReactNode }) {
  return (
    <a className={className} href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

/** Proje ve akademik çalışmalardaki bağlantı düğmeleri; baskıda sade bağlantıya dönüşür. */
function LinkGroup({ links, className }: { links: { label: string; href: string }[]; className?: string }) {
  if (links.length === 0) return null;
  return (
    <ul className={`linkGroup${className ? ` ${className}` : ""}`}>
      {links.map((link) => (
        <li key={link.href}>
          <ExternalLink className="linkChip" href={link.href}>
            {link.label}
            <ArrowUpRight aria-hidden="true" size={13} strokeWidth={2} />
          </ExternalLink>
        </li>
      ))}
    </ul>
  );
}

function Section({ index, id, title, children }: { index: string; id: string; title: string; children: ReactNode }) {
  return (
    <section className="section" aria-labelledby={id}>
      <h2 className="sectionTitle" id={id}>
        <span className="sectionIndex" aria-hidden="true">
          {index}
        </span>
        {title}
      </h2>
      {children}
    </section>
  );
}

export function CvDocument({ locale }: { locale: Locale }) {
  const cv = cvContent[locale];
  const ui = siteCopy[locale].ui;
  const mailHref = `mailto:${profile.email}?subject=${encodeURIComponent(cv.emailSubject)}`;
  const year = cv.updated.split(" ").at(-1);

  return (
    <div className="desk">
      <a className="skipLink" href="#cv-content">
        {ui.skipLink}
      </a>
      <LocaleSync locale={locale} />
      <CvToolbar locale={locale} />

      <main className="deskMain">
        <article className="paper" aria-labelledby="cv-name">
          <header className="docHead">
            <div className="docPortrait">
              <Portrait
                src={profile.portrait}
                alt={ui.portraitAlt}
                openLabel={ui.openPortrait}
                closeLabel={ui.closePortrait}
              />
            </div>
            <div className="docIdentity">
              <p className="docLabel">
                {cv.documentLabel} · {cv.updated}
              </p>
              <h1 id="cv-name">{profile.name}</h1>
              <p className="docTitle">{cv.title}</p>
            </div>
          </header>

          <aside className="side sideTop" aria-label={`${cv.headings.contact} · ${cv.headings.education}`}>
            <section className="sideBlock">
              <h2 className="sideTitle">{cv.headings.contact}</h2>
              <ul className="contactList">
                <li>
                  <Mail aria-hidden="true" size={15} strokeWidth={1.75} />
                  <a href={mailHref}>{profile.email}</a>
                </li>
                <li className="printOnly">
                  <Phone aria-hidden="true" size={15} strokeWidth={1.75} />
                  <a href={`tel:${profile.phoneHref}`}>{profile.phone[locale]}</a>
                </li>
                {profile.links.map((link) => {
                  const Icon = linkIcons[link.kind];
                  return (
                    <li key={link.href}>
                      <Icon aria-hidden="true" size={15} strokeWidth={1.75} />
                      <ExternalLink href={link.href}>{link.label}</ExternalLink>
                    </li>
                  );
                })}
                <li>
                  <MapPin aria-hidden="true" size={15} strokeWidth={1.75} />
                  <span>{cv.location}</span>
                </li>
              </ul>
            </section>

            <section className="sideBlock">
              <h2 className="sideTitle">{cv.headings.education}</h2>
              <p className="education">
                <strong>{cv.education.school}</strong>
                <span>
                  {cv.education.degree} · {cv.education.detail}
                </span>
              </p>
            </section>
          </aside>

          <div className="mainColumn" id="cv-content" tabIndex={-1}>
            <Section index="01" id="sec-profile" title={cv.headings.profile}>
              <p className="lead">{cv.profile}</p>
            </Section>

            <Section index="02" id="sec-experience" title={cv.headings.experience}>
              {cv.experience.map((entry) => (
                <article className="entry" key={entry.role}>
                  <header className="entryHead">
                    <h3>
                      {entry.role} <span className="entryOrg">· {entry.organization}</span>
                    </h3>
                    <p className="entryPeriod">{entry.period}</p>
                  </header>
                  <ul className="points">
                    {entry.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </Section>

            <Section index="03" id="sec-projects" title={cv.headings.projects}>
              <div className="projects">
                {cv.projects.map((project) => (
                  <article className="project" key={project.name}>
                    <header className="projectHead">
                      <h3>{project.name}</h3>
                      <p className="projectStatus">{project.status}</p>
                      <LinkGroup links={project.links} className="projectLinks" />
                    </header>
                    <p className="projectDesc">{project.description}</p>
                    <p className="projectRole">
                      <span>{cv.roleLabel}:</span> {project.role}
                    </p>
                    {project.stack ? <p className="projectStack">{project.stack}</p> : null}
                  </article>
                ))}
              </div>
              <div className="moreProjects">
                <p>{cv.moreProjects.text}</p>
                <LinkGroup links={[cv.moreProjects.link]} />
              </div>
            </Section>

            <Section index="04" id="sec-academic" title={cv.headings.academic}>
              <div className="academic">
                {cv.academic.map((item) => (
                  <article className="academicItem" key={item.title}>
                    <h3>{item.title}</h3>
                    <p className="projectDesc">{item.detail}</p>
                    <LinkGroup links={item.links} className="academicLinks" />
                  </article>
                ))}
              </div>
            </Section>
          </div>

          <aside className="side sideBottom" aria-label={cv.headings.skills}>
            <section className="sideBlock">
              <h2 className="sideTitle">{cv.headings.skills}</h2>
              <dl className="skills">
                {cv.skills.map((group) => (
                  <div key={group.label}>
                    <dt>{group.label}</dt>
                    <dd>{group.items}</dd>
                  </div>
                ))}
              </dl>
            </section>

            {cv.languages.length > 0 ? (
              <section className="sideBlock">
                <h2 className="sideTitle">{cv.headings.languages}</h2>
                <ul className="languages">
                  {cv.languages.map((language) => (
                    <li key={language.name}>
                      <strong>{language.name}</strong>
                      <span>{language.level}</span>
                    </li>
                  ))}
                </ul>
              </section>
            ) : null}

            <OrbitMark />
          </aside>
        </article>
      </main>

      <footer className="deskFooter">
        <span>
          © {year} {profile.name}
        </span>
        <span aria-hidden="true">·</span>
        <span>{ui.credit}</span>
      </footer>
    </div>
  );
}
