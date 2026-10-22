"use client";

import { motion, useTransform, type MotionValue } from 'framer-motion';
import { cars, landmarks, links, UNIT } from './landmarks';
import { useScene } from './SceneContext';
import styles from './CityOverlay.module.css';

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

      <g fill="none" aria-hidden="true">
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
            <circle className={styles.hit} cx={m.x} cy={m.y} r="34" />
            <circle className={styles.pulse} cx={m.x} cy={m.y} r="9" />
            <circle className={styles.dot} cx={m.x} cy={m.y} r="5" />
            <g className={styles.tag} transform={`translate(${m.x} ${m.y - 26})`}>
              <rect x={-(m.name.length * 4.6 + 12)} y="-17" width={m.name.length * 9.2 + 24} height="24" rx="5" />
              <text textAnchor="middle" y="0">{m.name}</text>
            </g>
          </a>
        );
      })}
    </svg>
  );
}
