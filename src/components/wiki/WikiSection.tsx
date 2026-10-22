"use client";

import { useState, type ReactNode } from 'react';
import { ChevronDown } from 'lucide-react';
import w from './wiki.module.css';

interface WikiSectionProps {
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
}

/**
 * A level-2 section. On phones the heading is a button that folds the section,
 * like the mobile site; from tablet up the heading is static.
 */
export function WikiSection({ id, title, children, className }: WikiSectionProps) {
  const [open, setOpen] = useState(true);
  const bodyId = `${id}-body`;

  return (
    <section id={id} className={className}>
      <h2 className={w.h2}>
        <button
          type="button"
          className={w.h2Button}
          aria-expanded={open}
          aria-controls={bodyId}
          onClick={() => setOpen((v) => !v)}
        >
          <ChevronDown size={14} className={w.chevron} aria-hidden="true" />
          {title}
        </button>
      </h2>
      <div id={bodyId} data-open={open ? 'true' : 'false'} className={w.sectionBody}>
        {children}
      </div>
    </section>
  );
}
