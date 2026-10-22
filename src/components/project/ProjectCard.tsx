import Link from 'next/link';
import type { Project } from '@/data/projects';
import styles from './ProjectCard.module.css';

function firstSegment(value: string) {
  return value.split('/')[0].trim();
}

function tone(status: string) {
  if (/1st place|winner|award/i.test(status)) return 'win';
  if (/live|active/i.test(status)) return 'live';
  return 'plain';
}

interface ProjectCardProps {
  project: Project;
  number: string;
  /** Anchor id so the section map can scroll to this card. */
  anchorId?: string;
}

export function ProjectCard({ project: p, number, anchorId }: ProjectCardProps) {
  return (
    <Link href={p.link} id={anchorId} className={styles.card}>
      <span className={styles.top}>
        <span className={styles.num}>{number}</span>
        <span className={styles.year}>{p.year}</span>
      </span>

      <span className={styles.body}>
        <span className={styles.name}>{p.name}</span>
        <span className={styles.subtitle}>{p.subtitle}</span>
      </span>

      <span className={styles.stack}>
        {p.stack.slice(0, 3).map((s) => (
          <span key={s} className={styles.chip}>{s}</span>
        ))}
      </span>

      <span className={styles.bottom}>
        <span className={styles.status} data-tone={tone(p.status)}>{firstSegment(p.status)}</span>
        <span className={styles.type}>{firstSegment(p.type)}</span>
        <span className={styles.arrow} aria-hidden="true">↗</span>
      </span>
    </Link>
  );
}
