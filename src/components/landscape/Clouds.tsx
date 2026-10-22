import styles from './Clouds.module.css';

type Lobe = readonly [x: number, y: number, r: number];

/** Three clouds in a 1000x170 sky, drawn at 0.62 scale. Lobes are relative to each cloud's own centre. */
const clouds: { id: 'a' | 'b' | 'c'; x: number; y: number; lobes: readonly Lobe[] }[] = [
  { id: 'a', x: 240, y: 104, lobes: [[-110, 10, 42], [-50, -25, 56], [25, -35, 62], [100, -10, 50], [150, 20, 34], [20, 15, 48], [-60, 25, 40]] },
  { id: 'b', x: 810, y: 92, lobes: [[-100, 15, 38], [-40, -22, 52], [30, -30, 58], [95, -5, 46], [130, 24, 30], [10, 18, 44]] },
  { id: 'c', x: 500, y: 44, lobes: [[-60, 6, 28], [-18, -14, 36], [26, -10, 34], [58, 8, 24], [0, 10, 30]] },
];

const SCALE = 0.62;

/** The upper arc of a lobe, the way the cloud outline is scribbled. */
function arc(r: number) {
  const a0 = (200 * Math.PI) / 180;
  const a1 = (345 * Math.PI) / 180;
  const p = (a: number) => `${(Math.cos(a) * r).toFixed(1)} ${(Math.sin(a) * r).toFixed(1)}`;
  return `M${p(a0)}A${r} ${r} 0 0 1 ${p(a1)}`;
}

/**
 * The sky: three clouds that drift together, merge into one grey rain cloud, rain, and part again.
 * Every lobe also swells and shrinks on its own beat, so the outline never stays the same shape.
 */
export function Clouds() {
  return (
    <svg className={styles.sky} viewBox="0 0 1000 170" preserveAspectRatio="xMidYMin meet" aria-hidden="true" focusable="false">
      {clouds.map((c) => (
        <g key={c.id} transform={`translate(${c.x} ${c.y}) scale(${SCALE})`}>
          <g className={`${styles.cloud} ${styles[c.id]}`}>
            {c.lobes.map(([x, y, r], i) => (
              <g key={i} transform={`translate(${x} ${y})`}>
                <g className={styles.lobe} style={{ animationDelay: `${-(i * 1.3 + c.x / 90).toFixed(1)}s`, animationDuration: `${5 + (i % 3) * 1.7}s` }}>
                  <circle className={styles.fill} r={r} />
                  <path className={styles.line} d={arc(r)} />
                </g>
              </g>
            ))}
            <path className={styles.base} d={`M${c.lobes[0][0] - 20} ${c.lobes[0][1] + 38}q${(c.lobes[3][0] - c.lobes[0][0]) / 2} 16 ${c.lobes[3][0] - c.lobes[0][0] + 40} -4`} />
          </g>
        </g>
      ))}

      {/* rain falls from the merged cloud */}
      <g className={styles.rain}>
        {Array.from({ length: 13 }, (_, i) => (
          <path key={i} className={styles.drop} d={`M${380 + i * 20} 118l-5 16`} style={{ animationDelay: `${-(i % 5) * 0.22}s` }} />
        ))}
      </g>
    </svg>
  );
}
