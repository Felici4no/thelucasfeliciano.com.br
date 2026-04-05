import { useState, useEffect } from 'react';

export function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = Math.max(
        document.body.scrollHeight - window.innerHeight,
        1
      );
      
      const targetProgress = Math.min(Math.max(scrollY / maxScroll, 0), 1);
      setProgress(targetProgress);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return progress;
}
