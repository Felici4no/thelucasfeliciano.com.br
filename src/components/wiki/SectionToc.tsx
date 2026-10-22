"use client";

import { tocItems } from '@/lib/sections';
import { scrollToId, useActiveSection } from '@/hooks/useActiveSection';
import styles from './SectionToc.module.css';

export function SectionToc() {
  const active = useActiveSection();

  const link = (id: string, label: string, num?: string) => (
    <a
      href={`#${id}`}
      onClick={(e) => {
        e.preventDefault();
        scrollToId(id);
      }}
      aria-current={active === id ? 'location' : undefined}
    >
      {num && <span className={styles.num}>{num}</span>}
      {label}
    </a>
  );

  return (
    <nav className={styles.toc} aria-label="Contents">
      <h2 className={styles.title}>Contents</h2>
      <ol className={styles.list}>
        {tocItems.map((item, i) => {
          // "(Top)" is unnumbered, like on Wikipedia; sections count from 1
          const n = i;
          const open = item.children?.some((c) => c.id === active) || active === item.id;
          return (
            <li key={item.id} data-active={active === item.id || item.children?.some((c) => c.id === active) ? 'true' : undefined}>
              {link(item.id, item.label, item.id === 'lead' ? undefined : String(n))}
              {item.children && open && (
                <ol className={styles.sub}>
                  {item.children.map((c, j) => (
                    <li key={c.id} data-active={active === c.id ? 'true' : undefined}>
                      {link(c.id, c.label, `${n}.${j + 1}`)}
                    </li>
                  ))}
                </ol>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
