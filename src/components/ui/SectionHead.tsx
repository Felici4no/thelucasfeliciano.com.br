import type { ReactNode } from 'react';
import styles from './SectionHead.module.css';

interface SectionHeadProps {
  index: string;
  title: string;
  aside?: ReactNode;
  /** Set on dark sections so the head inverts. */
  invert?: boolean;
}

export function SectionHead({ index, title, aside, invert }: SectionHeadProps) {
  return (
    <header className={styles.head} data-invert={invert ? 'true' : undefined}>
      <span className={styles.index}>{index}</span>
      <h2 className={styles.title}>{title}</h2>
      {aside && <div className={styles.aside}>{aside}</div>}
    </header>
  );
}
