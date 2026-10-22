"use client";

import type { ReactNode } from 'react';
import { track } from '@vercel/analytics';

interface CtaLinkProps {
  /** Stable name for the analytics event, e.g. "hero-primary". */
  id: string;
  href: string;
  className?: string;
  children: ReactNode;
  external?: boolean;
}

/** Anchor that reports a `cta_click` event so we can see what converts. */
export function CtaLink({ id, href, className, children, external }: CtaLinkProps) {
  return (
    <a
      href={href}
      className={className}
      onClick={() => track('cta_click', { id })}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {children}
    </a>
  );
}
