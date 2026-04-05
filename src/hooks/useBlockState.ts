import { useScrollProgress } from './useScrollProgress';

export function useBlockState() {
  const progress = useScrollProgress();

  let rotation = 0;
  let lightShift = 0;
  let crackIntensity = 0;
  let fragmentProgress = 0;

  if (progress > 0.1) {
    const pCrack = Math.min(Math.max((progress - 0.1) / 0.5, 0), 1);
    crackIntensity = pCrack;
    rotation = pCrack * Math.PI * 0.25; 
    lightShift = pCrack;
  }

  if (progress > 0.6) {
    const pFrag = Math.min(Math.max((progress - 0.6) / 0.4, 0), 1);
    crackIntensity = 1.0;
    fragmentProgress = pFrag;
    lightShift = 1.0;
    rotation = Math.PI * 0.25 + pFrag * Math.PI * 0.1;
  }

  return { rotation, lightShift, crackIntensity, fragmentProgress, scrollProgress: progress };
}
