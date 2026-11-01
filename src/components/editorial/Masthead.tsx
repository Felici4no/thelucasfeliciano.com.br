import type { ReactNode } from 'react';
import s from './editorial.module.css';

/** Heavy uppercase page title, one word per line like the reference. */
export function Masthead({ lines, lede }: { lines: string[]; lede?: ReactNode }) {
  return (
    <header className={s.masthead}>
      <h1 className={s.display}>
        {lines.map((l, i) => (
          <span key={l} style={{ display: 'block' }}>
            {l}
            {i < lines.length - 1 ? ' ' : ''}
          </span>
        ))}
      </h1>
      {lede && <p className={s.lede}>{lede}</p>}
    </header>
  );
}
