import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { type Locale, siteCopy } from "@/data/i18n";
import { getRoleLabel, getStatusLabel } from "@/data/project-detail";
import { getProjectImageAlt, getProjectText } from "@/data/project-translations";
import { type Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
  locale: Locale;
  preload?: boolean;
};

export function ProjectCard({ project, locale, preload = false }: ProjectCardProps) {
  const copy = siteCopy[locale];
  const text = getProjectText(project, locale);

  return (
    <article className="archiveProjectCard">
      <Link
        href={`/${locale}/projects/${project.id}`}
        className={`archiveProjectCover${project.thumbnail ? "" : " archiveProjectCover--fikkis"}`}
        aria-label={`${project.title}: ${copy.common.viewProject}`}
      >
        {project.thumbnail ? (
          <Image
            src={project.thumbnail}
            alt={getProjectImageAlt(project, locale)}
            fill
            preload={preload}
            sizes="(max-width: 760px) 100vw, (max-width: 1160px) 50vw, 33vw"
          />
        ) : (
          <span className="fikkisWordmark" aria-hidden="true">
            fikkis<span>●</span>
          </span>
        )}
      </Link>
      <div className="archiveProjectBody">
        <div className="archiveProjectTitle">
          <div>
            <p>{copy.common[project.category]}</p>
            <h3>{project.title}</h3>
          </div>
          <Link
            href={`/${locale}/projects/${project.id}`}
            className="archiveProjectAction"
            aria-label={`${project.title}: ${copy.common.viewProject}`}
          >
            <ArrowUpRight aria-hidden="true" size={18} strokeWidth={1.7} />
          </Link>
        </div>
        <p className="archiveProjectDescription">{text.description}</p>
        <dl className="archiveProjectMeta">
          <div>
            <dt>{copy.common.role}</dt>
            <dd>{getRoleLabel(project, locale)}</dd>
          </div>
          <div>
            <dt>{copy.common.status}</dt>
            <dd>{getStatusLabel(project, locale)}</dd>
          </div>
        </dl>
      </div>
    </article>
  );
}
