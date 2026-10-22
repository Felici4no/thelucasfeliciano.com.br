import Link from 'next/link';
import { projects } from '@/data/projects';
import { SectionHead } from '@/components/ui/SectionHead';
import { ProjectCard } from '@/components/project/ProjectCard';
import styles from './SelectedSystems.module.css';

export function SelectedSystems() {
  const selected = projects.filter((p) => p.tier === 'selected');
  const other = projects.filter((p) => p.tier === 'other');

  return (
    <>
      <section id="selected" className={styles.section} data-snap>
        <div className={styles.inner}>
          <SectionHead
            index="02"
            title="Selected Systems"
            aside={<Link href="/portfolio" className={styles.more}>Full index →</Link>}
          />
          <ol className={styles.grid}>
            {selected.map((p, i) => (
              <li key={p.id}>
                <ProjectCard project={p} number={String(i + 1).padStart(2, '0')} anchorId={`sel-${p.id}`} />
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="other-works" className={styles.section} data-tint="true" data-snap>
        <div className={styles.inner}>
          <SectionHead index="03" title="Other Works" aside={`${other.length} more`} />
          <ol className={styles.grid}>
            {other.map((p, i) => (
              <li key={p.id}>
                <ProjectCard project={p} number={String(selected.length + i + 1).padStart(2, '0')} />
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
