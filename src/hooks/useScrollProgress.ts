"use client";

import { useState, useEffect, useCallback } from 'react';

/**
 * Returns a normalized scroll progress value between 0 and 1,
 * measured across a specific vertical pixel range.
 * Uses vh multipliers for responsive ranges.
 * 
 * @param startVh - The viewport-height multiplier where progress begins
 * @param endVh - The viewport-height multiplier where progress completes
 */
export function useScrollProgress(startVh = 0.3, endVh = 1.4) {
  const [progress, setProgress] = useState(0);

  const onScroll = useCallback(() => {
    const vh = window.innerHeight;
    const startPx = vh * startVh;
    const endPx = vh * endVh;
    const scrollY = window.scrollY;

    if (scrollY <= startPx) {
      setProgress(0);
    } else if (scrollY >= endPx) {
      setProgress(1);
    } else {
      setProgress((scrollY - startPx) / (endPx - startPx));
    }
  }, [startVh, endVh]);

  useEffect(() => {
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [onScroll]);

  return progress;
}
