'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './motion-plate.module.css';
import { SpaceArt } from './motions/space/SpaceArt';
import { ExpressionArt } from './motions/expression/ExpressionArt';
import { SoundArt } from './motions/sound/SoundArt';
import { TechnologyArt } from './motions/technology/TechnologyArt';

type Kind = 'space' | 'expression' | 'sound' | 'technology';

const plateDetails = {
  space: { number: '01', label: 'Space', title: 'Drawing a city', caption: 'Points, lines, structures and the space between.' },
  expression: { number: '02', label: 'Expression', title: 'Gesture in motion', caption: 'A study of movement, marks and presence.' },
  sound: { number: '03', label: 'Sound', title: 'A visual rhythm', caption: 'An imagined rhythm in motion — no audio plays.' },
  technology: { number: '04', label: 'Technology', title: 'A living circuit', caption: 'Connections, signals and the act of making.' },
} as const;

export function MotionPlate({ kind }: { kind: Kind }) {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(false);
  const [replay, setReplay] = useState(0);
  const [reduced, setReduced] = useState(false);
  const detail = plateDetails[kind];

  useEffect(() => {
    const element = ref.current;
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const syncPreference = () => setReduced(preference.matches);
    syncPreference();
    preference.addEventListener('change', syncPreference);
    if (!element || !('IntersectionObserver' in window)) {
      return () => preference.removeEventListener('change', syncPreference);
    }
    const observer = new IntersectionObserver(([entry]) => setActive(entry.isIntersecting), { threshold: 0.3 });
    observer.observe(element);
    return () => {
      observer.disconnect();
      preference.removeEventListener('change', syncPreference);
    };
  }, []);

  return (
    <figure ref={ref} className={`${styles.plate} ${styles[kind]}`} data-motion-plate={kind} data-motion-playing={active && !reduced}>
      <svg className={styles.art} key={replay} viewBox="0 0 900 320" aria-hidden="true" focusable="false">
        <defs>
          <pattern id={`grain-${kind}`} width="6" height="6" patternUnits="userSpaceOnUse">
            <circle cx="1.5" cy="1.5" r=".65" fill="#111" opacity=".27"/>
            <circle cx="4.5" cy="4.5" r=".45" fill="#fff" opacity=".22"/>
          </pattern>
        </defs>
        <rect width="900" height="320" fill={`url(#grain-${kind})`}/>
        <g fill="currentColor" fontFamily="monospace" fontSize="14" letterSpacing="2">
          <text x="30" y="35">FIG. {detail.number}</text>
          <text x="30" y="56">{detail.label.toUpperCase()}</text>
          <text x="870" y="35" textAnchor="end">LF / STUDIES</text>
          <text x="870" y="291" textAnchor="end">FORM · MOTION</text>
        </g>
        <path d="M30 72v195M870 72v195" stroke="currentColor" strokeOpacity=".5" strokeDasharray="3 7"/>
        {kind === 'space' ? <SpaceArt/> : kind === 'expression' ? <ExpressionArt/> : kind === 'sound' ? <SoundArt/> : <TechnologyArt/>}
      </svg>
      <figcaption className={styles.caption}>
        <div><span>Motion study {detail.number} / {detail.label}</span><strong>{detail.title}</strong><p>{detail.caption}</p></div>
        {!reduced ? <button type="button" className={styles.replay} onClick={() => {setActive(true); setReplay(n => n + 1);}} aria-label={`Replay ${detail.label} animation`}>↻ <span>Replay</span></button> : null}
      </figcaption>
    </figure>
  );
}
