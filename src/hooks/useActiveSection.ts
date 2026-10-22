"use client";

import { useEffect, useState } from 'react';
import { orderedIds } from '@/lib/sections';

export function scrollToId(id: string) {
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

/** Scroll spy: the last section whose top has passed ~35% of the viewport. */
export function useActiveSection() {
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

  return active;
}
