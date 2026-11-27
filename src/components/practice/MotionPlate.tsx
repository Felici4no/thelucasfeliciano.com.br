'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './motion-plate.module.css';

type Kind = 'space' | 'expression' | 'sound' | 'technology';

const plateDetails = {
  space: { number: '01', label: 'Space', title: 'Drawing a city', caption: 'Points, lines, structures and the space between.' },
  expression: { number: '02', label: 'Expression', title: 'Gesture in motion', caption: 'A study of movement, marks and presence.' },
  sound: { number: '03', label: 'Sound', title: 'A visual rhythm', caption: 'An imagined rhythm in motion — no audio plays.' },
  technology: { number: '04', label: 'Technology', title: 'A living circuit', caption: 'Connections, signals and the act of making.' },
} as const;

function SpaceArt() {
  return (
    <>
      <g className={styles.planGrid} fill="none" stroke="#f9df33" strokeWidth="1" opacity=".6">
        {[190, 245, 300, 355, 410, 465, 520, 575, 630, 685].map(x => <path key={x} d={`M${x} 55V270`}/>)}
        {[65, 115, 165, 215, 265].map(y => <path key={y} d={`M165 ${y}H730`}/>)}
      </g>
      <g className={styles.blocks} stroke="#f9df33" strokeWidth="2" fill="#1736a6">
        <path d="M235 186V100L340 64 440 116V202L338 241Z M235 100 338 140 440 116M338 140V241"/>
        <path d="M420 208V128L528 92 629 143V223L526 263Z M420 128 526 166 629 143M526 166V263" fill="#d60000"/>
        <path d="M535 111V60L622 29 701 72V124L620 151Z M535 60 620 94 701 72M620 94V151"/>
      </g>
      <g className={styles.traces} fill="none" stroke="#fff" strokeWidth="2" strokeDasharray="10 7">
        <path d="M185 280H746M185 280V45M208 290H701M230 174H701"/>
      </g>
      <circle className={styles.spacePoint} cx="526" cy="166" r="12" fill="#f9df33"/>
      <path d="M748 91h50M773 66v50" stroke="#f9df33" strokeWidth="3"/>
    </>
  );
}

function ExpressionArt() {
  return (
    <>
      <g className={styles.gesture} stroke="#ffe43c" strokeWidth="2.5" fill="none">
        <path d="M230 252Q256 67 387 104T568 222T732 68"/>
        <path d="M208 192Q345 34 477 160T751 187"/>
        <path d="M294 272Q365 174 383 113T501 62T638 264"/>
      </g>
      <g className={styles.cutout}>
        <path d="M368 58 459 84 491 33 525 98 656 80 585 162 663 231 540 213 496 283 457 210 335 230 397 144 303 100Z" fill="#1736b6"/>
        <path d="M401 157Q489 76 582 157Q497 234 401 157Z" fill="#f8edb7" stroke="#101010" strokeWidth="3"/>
        <circle cx="494" cy="157" r="34" fill="#cf0000"/>
        <circle cx="501" cy="146" r="10" fill="#101010"/>
      </g>
      <g className={styles.sketch} stroke="#f9df33" strokeWidth="3" fill="none">
        <ellipse cx="505" cy="58" rx="92" ry="18" transform="rotate(-13 505 58)"/>
        <path d="M262 100l23 25m-35 0 45-27M670 197l47 47m-52-7 48-43M704 98l40-24m-23 7 6-23M219 245l20-28 12 36"/>
      </g>
      <g fill="#ffed34"><circle cx="210" cy="83" r="5"/><circle cx="687" cy="47" r="6"/><circle cx="750" cy="261" r="4"/></g>
    </>
  );
}

function SoundArt() {
  return (
    <>
      <g className={styles.record} style={{ transformOrigin: '450px 160px' }}>
        <circle cx="450" cy="160" r="132" fill="#142eab" stroke="#111" strokeWidth="3"/>
        {[35, 53, 71, 89, 108, 124].map(r => <circle key={r} cx="450" cy="160" r={r} fill="none" stroke="#f8e5dd" strokeWidth="1" opacity=".7"/>)}
        <path d="M450 28A132 132 0 0 1 582 160" fill="none" stroke="#ffe237" strokeWidth="6"/>
        <path d="M450 36V70M574 160H540M450 284V250M326 160H360" stroke="#ffe237" strokeWidth="2"/>
        <circle cx="450" cy="160" r="31" fill="#ffe237"/>
        <circle cx="450" cy="160" r="7" fill="#101010"/>
      </g>
      <g className={styles.wave} stroke="#fff1c3" strokeWidth="4" fill="none">
        <path d="M140 160h22l13-40 23 85 26-110 20 142 22-94 20 38 22-21h28m228 0h28l20-21 19 60 24-98 25 120 24-85 20 24h23"/>
      </g>
      <g fill="#ffe237">
        {[24, 49, 82, 61, 35, 74, 50, 24, 43, 80, 54, 25].map((height, i) => <rect key={i} className={styles.bar} x={210 + i*10} y={300-height/3} width="4" height={height/3} style={{ animationDelay: `${i * .07}s`, transformOrigin: 'center 300px' }}/>)}
      </g>
      <path d="M676 75 590 145 607 164 700 105Z" fill="#ffe237" stroke="#111" strokeWidth="2"/>
    </>
  );
}

function TechnologyArt() {
  return (
    <>
      <g className={styles.circuit} fill="none" stroke="#f9df33" strokeWidth="2.5" strokeLinecap="square">
        <path d="M220 80h138l42 42h80l45-45h145"/>
        <path d="M220 241h138l42-42h80l45 45h145"/>
        <path d="M220 150h102l52 50h150l52-50h144"/>
        <path d="M220 109h105l45 44h145l60-44h145M220 211h105l45-44h145l60 44h145"/>
        <path d="M450 44v66M450 210v66"/>
      </g>
      <g className={styles.chip}>
        <rect x="388" y="104" width="124" height="112" fill="#c9ed34" stroke="#141414" strokeWidth="3"/>
        <rect x="405" y="121" width="90" height="78" fill="#142eab" stroke="#141414" strokeWidth="2"/>
        <path d="m426 148-14 12 14 12m48-24 14 12-14 12m-17-30-15 36" stroke="#c9ed34" strokeWidth="4" fill="none"/>
      </g>
      {[220,670].map(x => [80, 109, 150, 211, 241].map((y, i) => <circle key={`${x}-${y}`} className={styles.node} cx={x === 670 && i === 2 ? 720 : x} cy={y} r="6" fill="#f9df33" style={{animationDelay:`${i*.16}s`}}/>))}
      <circle className={styles.signal} cx="220" cy="80" r="8" fill="#ff4915"/>
      <rect x="580" y="37" width="155" height="26" fill="#c9ed34" transform="rotate(-5 580 37)"/>
      <text x="588" y="55" fontSize="14" fontWeight="700" fontFamily="monospace" fill="#101010" transform="rotate(-5 580 37)">signal://live</text>
    </>
  );
}

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
    <figure ref={ref} className={`${styles.plate} ${styles[kind]} ${active && !reduced ? styles.playing : ''}`} data-motion-plate={kind}>
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
