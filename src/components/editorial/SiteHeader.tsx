'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { primaryContactHref } from '@/lib/contact';
import s from './editorial.module.css';

const items = [
  { href: '/', label: 'Work', match: (p: string) => p === '/' || p.startsWith('/projects') },
  { href: '/portfolio', label: 'Index', match: (p: string) => p.startsWith('/portfolio') },
  { href: '/about', label: 'About', match: (p: string) => p.startsWith('/about') },
  { href: '/logbook', label: 'Logbook', match: (p: string) => p.startsWith('/logbook') },
];

export function SiteHeader() {
  const pathname = usePathname() ?? '/';
  return (
    <header className={s.header}>
      <Link href="/" className={s.brand}>Lucas Feliciano</Link>
      <nav className={s.nav} aria-label="Main">
        {items.map((i) => {
          const active = i.match(pathname);
          return (
            <Link
              key={i.href}
              href={i.href}
              className={`${s.navLink} ${active ? s.navActive : ''}`}
              aria-current={active ? 'page' : undefined}
            >
              {i.label}
            </Link>
          );
        })}
        <a href={primaryContactHref} className={s.navLink}>Contact</a>
      </nav>
    </header>
  );
}
