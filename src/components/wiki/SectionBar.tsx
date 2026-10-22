"use client";

import { barItems } from '@/lib/sections';
import { scrollToId, useActiveSection } from '@/hooks/useActiveSection';
import styles from './SectionBar.module.css';

/** Mobile-only glass bar pinned to the bottom of the screen. */
export function SectionBar() {
  const active = useActiveSection();

  return (
    <nav className={styles.bar} aria-label="Page sections">
      <ul className={styles.list}>
        {barItems.map((item) => {
          const on = item.ids.includes(active);
          return (
            <li key={item.label} className={styles.item}>
              <a
                href={`#${item.target}`}
                className={styles.link}
                data-active={on ? 'true' : undefined}
                aria-current={on ? 'location' : undefined}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToId(item.target);
                }}
              >
                <span>{item.label}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
