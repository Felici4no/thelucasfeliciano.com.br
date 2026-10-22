"use client";

import { useMemo, useRef, useState } from 'react';
import { Search } from 'lucide-react';
import { scrollToId } from '@/hooks/useActiveSection';
import styles from './HeaderSearch.module.css';

export interface SearchEntry {
  label: string;
  hint: string;
  id: string;
}

/** Searches the page's own sections and projects, and jumps to the match. */
export function HeaderSearch({ entries }: { entries: SearchEntry[] }) {
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return entries
      .filter((e) => e.label.toLowerCase().includes(q) || e.hint.toLowerCase().includes(q))
      .sort((a, b) => Number(b.label.toLowerCase().startsWith(q)) - Number(a.label.toLowerCase().startsWith(q)))
      .slice(0, 7);
  }, [query, entries]);

  const go = (entry: SearchEntry | undefined) => {
    if (!entry) return;
    scrollToId(entry.id);
    setOpen(false);
    setQuery('');
    inputRef.current?.blur();
  };

  const showList = open && query.trim() !== '';

  return (
    <form
      className={styles.search}
      role="search"
      onSubmit={(e) => {
        e.preventDefault();
        go(results[index]);
      }}
    >
      <label className={styles.box}>
        <Search size={15} aria-hidden="true" className={styles.icon} />
        <span className="sr-only" style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0 0 0 0)' }}>
          Search this portfolio
        </span>
        <input
          ref={inputRef}
          type="search"
          value={query}
          placeholder="Search this portfolio"
          autoComplete="off"
          role="combobox"
          aria-expanded={showList}
          aria-controls="search-results"
          aria-autocomplete="list"
          onChange={(e) => {
            setQuery(e.target.value);
            setIndex(0);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          onBlur={() => setTimeout(() => setOpen(false), 120)}
          onKeyDown={(e) => {
            if (e.key === 'ArrowDown') {
              e.preventDefault();
              setIndex((i) => Math.min(i + 1, results.length - 1));
            } else if (e.key === 'ArrowUp') {
              e.preventDefault();
              setIndex((i) => Math.max(i - 1, 0));
            } else if (e.key === 'Escape') {
              setOpen(false);
              setQuery('');
            }
          }}
        />
      </label>

      {showList && (
        <ul id="search-results" role="listbox" className={styles.list}>
          {results.length === 0 && <li className={styles.empty}>No matches on this page</li>}
          {results.map((r, i) => (
            <li key={r.id} role="option" aria-selected={i === index}>
              <button
                type="button"
                className={styles.option}
                data-active={i === index ? 'true' : undefined}
                onMouseDown={(e) => {
                  e.preventDefault();
                  go(r);
                }}
              >
                <span>{r.label}</span>
                <span className={styles.hint}>{r.hint}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </form>
  );
}
