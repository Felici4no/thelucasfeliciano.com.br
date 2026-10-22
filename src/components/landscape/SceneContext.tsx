"use client";

import { createContext, useContext, useMemo, useState, type ReactNode } from 'react';

interface SceneState {
  /** The id of the tower being hovered or focused, or null. */
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
