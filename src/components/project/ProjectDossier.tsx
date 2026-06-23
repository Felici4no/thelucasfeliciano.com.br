import Link from 'next/link';
import Image from 'next/image';
import { Project, projects } from '@/data/projects';
import styles from './ProjectDossier.module.css';

export function ProjectDossier({ project }: { project: Project }) {
  const idx = projects.findIndex((p) => p.id === project.id);
  const prev = projects[idx - 1];
  const next = projects[idx + 1];
  const external = project.demo ?? project.github;
  const externalLabel = project.demo ? 'Live system ↗' : 'Source ↗';
  const result = project.result ?? project.status;
  const eyebrow =
    project.tier === 'selected'
      ? `Selected Systems / ${String(idx + 1).padStart(2, '0')}`
      : `Archive / ${String(idx + 1).padStart(2, '0')}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": project.name,
    "description": project.description,
    "creator": { "@type": "Person", "name": "Lucas Feliciano" },
    "datePublished": project.year,
  };

  return (
    <article className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className={styles.topbar}>
        <Link href="/#selected" className={styles.back}>← Back to archive</Link>
        {external && (
          <a href={external} target="_blank" rel="noopener noreferrer" className={styles.external}>
            {externalLabel}
          </a>
        )}
      </div>

      <header className={styles.head}>
        <span className={styles.eyebrow}>{eyebrow}</span>
        <h1 className={styles.title}>{project.name}</h1>
        <p className={styles.subtitle}>{project.subtitle}</p>
        <div className={styles.metaRow}>
          <span><span className={styles.metaKey}>Year</span> <span className={styles.metaVal}>{project.year}</span></span>
          <span><span className={styles.metaKey}>Role</span> <span className={styles.metaVal}>{project.role}</span></span>
          <span><span className={styles.metaKey}>Status</span> <span className={styles.metaVal}>{project.status}</span></span>
        </div>
      </header>

      {project.image && (
        <figure className={styles.lead}>
          <div className={styles.frame16}>
            <Image
              src={project.image.src}
              alt={project.image.alt}
              fill
              className={styles.img}
              sizes="(max-width: 1100px) 100vw, 1100px"
              priority
            />
          </div>
          {project.image.caption && (
            <figcaption className={styles.caption}>
              <span className={styles.figNum}>Fig. 01</span> — {project.image.caption}
            </figcaption>
          )}
        </figure>
      )}

      <div className={styles.blocks}>
        {project.problem && (
          <div className={styles.block}>
            <span className={styles.key}>Problem</span>
            <p className={styles.val}>{project.problem}</p>
          </div>
        )}
        {project.whatIBuilt && (
          <div className={styles.block}>
            <span className={styles.key}>Built</span>
            <p className={styles.val}>{project.whatIBuilt}</p>
          </div>
        )}
        <div className={styles.block}>
          <span className={styles.key}>Result</span>
          <p className={styles.val}>{result}</p>
        </div>
        <div className={styles.block}>
          <span className={styles.key}>Stack</span>
          <p className={styles.stack}>{project.stack.join(' · ')}</p>
        </div>
      </div>

      {project.gallery && project.gallery.length > 0 && (
        <div className={styles.gallery}>
          {project.gallery.map((g, i) => (
            <figure key={g.src} className={styles.galItem}>
              <div className={styles.frame43}>
                <Image
                  src={g.src}
                  alt={g.alt}
                  fill
                  className={styles.img}
                  sizes="(max-width: 700px) 100vw, 50vw"
                />
              </div>
              <figcaption className={styles.caption}>
                <span className={styles.figNum}>Fig. {String(i + 2).padStart(2, '0')}</span> — {g.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      )}

      <nav className={styles.pager}>
        {prev ? (
          <Link href={prev.link} className={styles.pagerLink}>← {prev.name}</Link>
        ) : <span />}
        {next ? (
          <Link href={next.link} className={styles.pagerLink}>Next — {next.name} →</Link>
        ) : <span />}
      </nav>
    </article>
  );
}
