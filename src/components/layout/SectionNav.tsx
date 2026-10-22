"use client";

import { useEffect, useState } from 'react';
import { projects } from '@/data/projects';
import styles from './SectionNav.module.css';

interface NavItem {
  id: string;
  label: string;
  children?: NavItem[];
  /** Mobile bar: label to use there; omit to leave the item off the bar. */
  bar?: string;
  /** Mobile bar: other section ids that should light up this item. */
  also?: string[];
}

const items: NavItem[] = [
  { id: 'intro', label: 'Intro', bar: 'Intro' },
  { id: 'evidence', label: 'Evidence', also: ['intro'] },
  { id: 'services', label: 'What I do', bar: 'Services' },
  {
    id: 'selected',
    label: 'Selected Systems',
    bar: 'Work',
    children: [
      ...projects
        .filter((p) => p.tier === 'selected')
        .map((p) => ({ id: `sel-${p.id}`, label: p.name })),
      { id: 'other-works', label: 'Other Works' },
    ],
  },
  { id: 'process', label: 'How I work', also: ['about'] },
  { id: 'about', label: 'About', bar: 'About' },
  { id: 'contact', label: 'Contact', bar: 'Contact' },
];

/** Every target in document order, used to decide which one is active. */
const orderedIds = items.flatMap((item) => [item.id, ...(item.children?.map((c) => c.id) ?? [])]);

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const header = document.querySelector('header');
  const offset = (header?.getBoundingClientRect().height ?? 0) + 8;
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  window.scrollTo({
    top: el.getBoundingClientRect().top + window.scrollY - offset,
    behavior: reduce ? 'auto' : 'smooth',
  });
}

function Bend({ direction }: { direction: 'in' | 'out' }) {
  const d = direction === 'in' ? 'M0.5 0 C0.5 9 14.5 9 14.5 18' : 'M14.5 0 C14.5 9 0.5 9 0.5 18';
  return (
    <li className={styles.bend} aria-hidden="true">
      <svg width="16" height="18" viewBox="0 0 16 18" fill="none">
        <path d={d} stroke="currentColor" strokeWidth="1" />
      </svg>
    </li>
  );
}

export function SectionNav() {
  const [active, setActive] = useState(orderedIds[0]);

  useEffect(() => {
    const compute = () => {
      const line = window.innerHeight * 0.35;
      let current = orderedIds[0];
      for (const id of orderedIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= line) current = id;
        else break;
      }
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
      if (atBottom) current = orderedIds[orderedIds.length - 1];
      setActive(current);
    };

    const initial = setTimeout(compute, 0);
    window.addEventListener('scroll', compute, { passive: true });
    window.addEventListener('resize', compute);
    return () => {
      clearTimeout(initial);
      window.removeEventListener('scroll', compute);
      window.removeEventListener('resize', compute);
    };
  }, []);

  const renderRow = (item: NavItem, level: 'top' | 'child', first = false, last = false) => (
    <a
      href={`#${item.id}`}
      className={`${styles.row} ${level === 'top' ? styles.top : styles.child}`}
      data-active={active === item.id ? 'true' : undefined}
      data-first={first ? 'true' : undefined}
      data-last={last ? 'true' : undefined}
      aria-current={active === item.id ? 'location' : undefined}
      onClick={(e) => {
        e.preventDefault();
        scrollToId(item.id);
      }}
    >
      <span className={styles.dot} />
      <span className={styles.label}>{item.label}</span>
    </a>
  );

  return (
    <>
    <nav className={styles.bar} aria-label="Page sections (mobile)">
      <ul className={styles.barList}>
        {items.filter((item) => item.bar).map((item) => {
          const absorbed = items.filter((o) => !o.bar && o.also?.includes(item.id)).map((o) => o.id);
          const on =
            active === item.id ||
            absorbed.includes(active) ||
            !!item.children?.some((c) => c.id === active);
          return (
            <li key={item.id} className={styles.barItem}>
              <a
                href={`#${item.id}`}
                className={styles.barLink}
                data-active={on ? 'true' : undefined}
                aria-current={on ? 'location' : undefined}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToId(item.id);
                }}
              >
                <span>{item.bar}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
    <nav className={styles.nav} aria-label="Page sections">
      <ol className={styles.list}>
        {items.map((item, i) => {
          const isFirst = i === 0;
          const isLast = i === items.length - 1;
          const open = item.children
            ? active === item.id || item.children.some((c) => c.id === active)
            : false;

          return (
            <li key={item.id} className={styles.item}>
              {renderRow(item, 'top', isFirst, isLast)}
              {item.children && (
                <div className={styles.group} data-open={open ? 'true' : undefined}>
                  <ol className={styles.groupInner}>
                    <Bend direction="in" />
                    {item.children.map((child) => (
                      <li key={child.id}>{renderRow(child, 'child')}</li>
                    ))}
                    <Bend direction="out" />
                  </ol>
                </div>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
    </>
  );
}
