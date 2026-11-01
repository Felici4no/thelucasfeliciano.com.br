import Link from 'next/link';
import type { ReactNode } from 'react';
import { Thumb } from './Thumb';
import s from './editorial.module.css';

interface RuleRowProps {
  title: string;
  meta: string[];
  href?: string;
  external?: boolean;
  description?: ReactNode;
  image?: { src: string; alt: string };
  /** Shown in the thumbnail block when there is no image. Pass null to drop the thumbnail. */
  fallback?: string | null;
  /** Hide the description on phones, keeping the bare reference layout there. */
  descWideOnly?: boolean;
}

/** A ruled list row: uppercase title, small two-line meta, thumbnail on the right. */
export function RuleRow({ title, meta, href, external, description, image, fallback, descWideOnly }: RuleRowProps) {
  const body = (
    <>
      <div className={s.rowText}>
        <div>
          <h2 className={s.rowTitle}>{title}</h2>
          {description && <p className={`${s.rowDesc} ${descWideOnly ? s.wideOnly : ''}`} style={{ marginTop: 14 }}>{description}</p>}
        </div>
        <p className={s.meta}>
          {meta.filter(Boolean).map((m) => (
            <span key={m}>{m}</span>
          ))}
        </p>
      </div>
      {fallback !== null && (image || fallback) && (
        <Thumb src={image?.src} alt={image?.alt} fallback={fallback ?? ''} />
      )}
    </>
  );

  return (
    <li className={s.row}>
      {href ? (
        external ? (
          <a href={href} className={s.rowLink} target="_blank" rel="noopener noreferrer">{body}</a>
        ) : (
          <Link href={href} className={s.rowLink}>{body}</Link>
        )
      ) : (
        <div className={s.rowLink}>{body}</div>
      )}
    </li>
  );
}
