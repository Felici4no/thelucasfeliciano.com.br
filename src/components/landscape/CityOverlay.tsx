"use client";

import { motion, useTransform, type MotionValue } from 'framer-motion';
import { cars, landmarks, links, ISO, ORIGIN, UNIT } from './landmarks';
import { useScene } from './SceneContext';
import styles from './CityOverlay.module.css';

/** Ground point (grid units) to drawing coordinates, same projection as the city. */
const P = (gx: number, gy: number) => ({
  x: ORIGIN.x + (gx - gy) * ISO.kx,
  y: ORIGIN.y + (gx + gy) * ISO.ky,
});

/** A word written beside each tower, crossed out the way the painter did. */
const scrawl: Record<string, { word: string; dx: number; dy: number; rot: number }> = {
  upay3food: { word: 'FOOD', dx: 46, dy: -6, rot: -6 },
  voculos: { word: 'EYES', dx: 46, dy: -10, rot: 5 },
  'dolarizando-se': { word: '$ USD', dx: 48, dy: -4, rot: -4 },
  bvm12: { word: 'GREEN', dx: 50, dy: -8, rot: 6 },
};

/** Writing on the asphalt, laid along the avenue like paint on the road. */
const road = [
  { t: 'AVENUE', ...P(13.95, 11.5), size: 25 },
  { t: 'AVENUE', ...P(18.1, 27.5), size: 25 },
];

/** How far a car travels along the avenue, in drawing units (about 22 blocks of road). */
const TRAVEL = 22;

/**
 * Lives inside the city layer, in the drawing's own coordinates, so every mark stays glued to its
 * building while the layer moves. Dotted lines link the four towers across the avenue and draw
 * themselves as the page scrolls. Cars drive along the lanes.
 */
export function CityOverlay({ progress }: { progress: MotionValue<number> }) {
  const { active, setActive } = useScene();
  const drawn = useTransform(progress, [0, 0.55], [0.3, 1]);

  return (
    <svg className={styles.overlay} viewBox="0 0 2000 780" preserveAspectRatio="xMidYMax slice" aria-label="Project map">
      <defs>
        <filter id="wob" x="-5%" y="-5%" width="110%" height="110%">
          <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="2" seed="3" result="n" />
          <feDisplacementMap in="SourceGraphic" in2="n" scale="4" />
        </filter>
      </defs>

      <g className={styles.road} aria-hidden="true" filter="url(#wob)">
        {road.map((w, i) => (
          <g key={i} transform={`matrix(0.866 -0.5 0.866 0.5 ${w.x} ${w.y})`}>
            <text className={styles.roadBack} x="2" y="2" textAnchor="middle" style={{ fontSize: w.size }}>{w.t}</text>
            <text className={styles.roadText} textAnchor="middle" style={{ fontSize: w.size }}>{w.t}</text>
          </g>
        ))}
      </g>

      <g className={styles.cars} aria-hidden="true">
        {cars.map((c, i) => (
          <g
            key={i}
            className={styles.car}
            style={{
              animationDuration: `${c.dur}s`,
              animationDelay: `${c.delay}s`,
              animationDirection: c.dir === 1 ? 'normal' : 'reverse',
              ['--dx' as string]: `${UNIT.x * TRAVEL}px`,
              ['--dy' as string]: `${UNIT.y * TRAVEL}px`,
            }}
            dangerouslySetInnerHTML={{ __html: c.d }}
          />
        ))}
      </g>

      <g fill="none" aria-hidden="true" filter="url(#wob)">
        {links.map((d, i) => {
          const hot =
            active === 'all' || active === landmarks[i].id || active === landmarks[i + 1]?.id;
          return (
            <g key={i}>
              <motion.path d={d} className={styles.line} data-hot={hot ? 'true' : undefined} style={{ pathLength: drawn }} />
              <path d={d} className={styles.flow} data-hot={hot ? 'true' : undefined} />
            </g>
          );
        })}
      </g>

      {landmarks.map((m) => {
        const hot = active === m.id || active === 'all';
        return (
          <a
            key={m.id}
            href={`/projects/${m.id}`}
            className={styles.mark}
            data-hot={hot ? 'true' : undefined}
            onMouseEnter={() => setActive(m.id)}
            onMouseLeave={() => setActive(null)}
            onFocus={() => setActive(m.id)}
            onBlur={() => setActive(null)}
            aria-label={`${m.name}, open project`}
          >
            <circle className={styles.hit} cx={m.x} cy={m.y - 14} r="40" />
            <circle className={styles.pulse} cx={m.x} cy={m.y} r="12" />
            <g transform={`translate(${m.x} ${m.y})`} filter="url(#wob)">
              <g className={styles.crownBox}>
                <path className={styles.crownBack} d="M-24 2L-24 -24L-11 -11L0 -34L11 -11L24 -24L24 2Z" transform="translate(3 3)" />
                <path className={styles.crown} d="M-24 2L-24 -24L-11 -11L0 -34L11 -11L24 -24L24 2Z" />
                <path className={styles.crownLine} d="M-18 -4H18" />
              </g>
            </g>
            <g className={styles.scrawl} transform={`translate(${m.x + scrawl[m.id].dx} ${m.y + scrawl[m.id].dy}) rotate(${scrawl[m.id].rot})`} filter="url(#wob)">
              <text textAnchor="middle">{scrawl[m.id].word}</text>
              <path d={`M${-scrawl[m.id].word.length * 7} -6L${scrawl[m.id].word.length * 7} -14`} />
            </g>
            <g className={styles.tag} transform={`translate(${m.x} ${m.y - 48})`}>
              <rect x={-(m.name.length * 5.4 + 12)} y="-19" width={m.name.length * 10.8 + 24} height="28" rx="2" />
              <text textAnchor="middle" y="1">{m.name}</text>
            </g>
          </a>
        );
      })}
    </svg>
  );
}
