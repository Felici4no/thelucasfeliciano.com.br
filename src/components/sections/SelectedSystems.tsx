import Link from 'next/link';
import { projects } from '@/data/projects';
import styles from './SelectedSystems.module.css';

function firstSegment(value: string) {
  return value.split('/')[0].trim();
}

export function SelectedSystems() {
  const selected = projects.filter((p) => p.tier === 'selected');
  const other = projects.filter((p) => p.tier === 'other');

  return (
    <section id="selected" className={styles.section}>
      <div className={styles.bar}>
        <h2 className={styles.barTitle}>Selected Systems</h2>
        <Link href="/portfolio" className={styles.barMeta}>Full index →</Link>
      </div>

      <ol className={styles.list}>
        {selected.map((p, i) => (
          <li key={p.id}>
            <Link href={p.link} className={styles.row}>
              <span className={styles.num} data-lead={i === 0 ? 'true' : undefined}>
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className={styles.main}>
                <span className={styles.name}>{p.name}</span>
                <span className={styles.subtitle}>{p.subtitle}</span>
              </span>
              <span className={styles.meta}>
                <span className={styles.metaType}>{p.year} / {firstSegment(p.type)}</span>
                <span className={styles.metaStatus}>{firstSegment(p.status)}</span>
              </span>
            </Link>
          </li>
        ))}
      </ol>

      <div className={styles.other}>
        <span className={styles.otherLabel}>Other Works</span>
        <div className={styles.otherList}>
          {other.map((p, i) => (
            <Link key={p.id} href={p.link} className={styles.otherItem}>
              {String(selected.length + i + 1).padStart(2, '0')} — {p.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
