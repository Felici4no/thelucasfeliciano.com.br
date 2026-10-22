"use client";

import Link from 'next/link';
import { createContext, useContext, useMemo, useState, type ReactNode } from 'react';

interface SceneState {
  /** A project id, "all", or null. The menu and the city both read and write it. */
  active: string | null;
  setActive: (id: string | null) => void;
}

const SceneContext = createContext<SceneState>({ active: null, setActive: () => {} });

export function SceneProvider({ children }: { children: ReactNode }) {
  const [active, setActive] = useState<string | null>(null);
  const value = useMemo(() => ({ active, setActive }), [active]);
  return <SceneContext.Provider value={value}>{children}</SceneContext.Provider>;
}

export const useScene = () => useContext(SceneContext);

/** A menu link that lights up its tower in the city while hovered or focused. */
export function ProjectLink({
  id,
  href,
  className,
  children,
}: {
  id: string;
  href: string;
  className?: string;
  children: ReactNode;
}) {
  const { setActive } = useScene();
  return (
    <Link
      href={href}
      className={className}
      onMouseEnter={() => setActive(id)}
      onMouseLeave={() => setActive(null)}
      onFocus={() => setActive(id)}
      onBlur={() => setActive(null)}
    >
      {children}
    </Link>
  );
}
