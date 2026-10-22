import styles from './Dino.module.css';

interface DinoProps {
  /** Where the feet start, in the city drawing's coordinates. */
  x: number;
  y: number;
  /** Walk vector over one lap, same coordinates. */
  dx: number;
  dy: number;
  /** The dinosaur breathes bigger fire while all projects are highlighted. */
  roaring?: boolean;
}

const INK = '#171414';

/**
 * A dinosaur in a scrawled, painted hand, walking down the avenue toward the viewer and breathing fire.
 * Drawn facing left in a 300x180 box with its feet on y=172; the outer group places it.
 */
export function Dino({ x, y, dx, dy, roaring }: DinoProps) {
  return (
    <g className={styles.root} transform={`translate(${x} ${y})`} aria-hidden="true">
      <g
        className={styles.walk}
        style={{ ['--dx' as string]: `${dx}px`, ['--dy' as string]: `${dy}px` }}
      >
        <g className={styles.bob} filter="url(#wob)">
          <g transform="translate(-135 -165) scale(0.96)" data-roar={roaring ? 'true' : undefined} className={styles.body}>
            {/* tail */}
            <path d="M205 92Q252 98 292 66Q272 114 214 130Z" fill="#2a7d4b" stroke={INK} strokeWidth="6" strokeLinejoin="round" />
            <path d="M232 100q16 -2 30 -14M246 108q14 -4 26 -16" fill="none" stroke={INK} strokeWidth="4" strokeLinecap="round" />

            {/* far legs, darker */}
            <g className={styles.legBack} style={{ animationDelay: '-0.3s' }}>
              <path d="M150 118Q148 150 140 160L120 164L122 172L168 172L172 150Q186 140 186 118Z" fill="#1f5c38" stroke={INK} strokeWidth="6" strokeLinejoin="round" />
            </g>
            <g className={styles.legFront} style={{ animationDelay: '-0.3s' }}>
              <path d="M88 118Q86 150 78 160L60 164L62 172L106 172L110 150Q122 140 122 118Z" fill="#1f5c38" stroke={INK} strokeWidth="6" strokeLinejoin="round" />
            </g>

            {/* body */}
            <path d="M70 80Q90 38 152 36Q220 40 228 92Q224 138 162 142Q100 144 74 118Z" fill="#2a7d4b" stroke={INK} strokeWidth="7" strokeLinejoin="round" />
            <ellipse cx="124" cy="114" rx="44" ry="22" fill="#f3c63c" opacity=".9" />
            <path d="M92 108h66M96 118h62M104 128h48" fill="none" stroke={INK} strokeWidth="3.5" strokeLinecap="round" />
            <path d="M96 58q10 12 8 26M122 52q10 14 6 30M150 50q12 14 8 30M180 54q10 14 6 30" fill="none" stroke={INK} strokeWidth="4.5" strokeLinecap="round" />

            {/* spikes */}
            <path d="M98 44L108 18L118 42M124 38L134 10L144 38M152 36L163 8L173 36M181 40L192 14L200 44M210 54L222 32L226 62" fill="#e4543a" stroke={INK} strokeWidth="5" strokeLinejoin="round" />

            {/* near legs */}
            <g className={styles.legBack}>
              <path d="M162 118Q160 150 152 160L132 164L134 172L180 172L184 150Q198 140 198 118Z" fill="#2a7d4b" stroke={INK} strokeWidth="7" strokeLinejoin="round" />
              <path d="M142 168l-4 -8M152 168l-2 -8M162 168l0 -8" stroke={INK} strokeWidth="3.5" strokeLinecap="round" />
            </g>
            <g className={styles.legFront}>
              <path d="M98 118Q96 150 88 160L70 164L72 172L116 172L120 150Q132 140 132 118Z" fill="#2a7d4b" stroke={INK} strokeWidth="7" strokeLinejoin="round" />
              <path d="M78 168l-4 -8M88 168l-2 -8M98 168l0 -8" stroke={INK} strokeWidth="3.5" strokeLinecap="round" />
            </g>

            {/* tiny arm */}
            <path d="M80 98l-22 12l10 7" fill="none" stroke={INK} strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />

            {/* head: upper jaw, open mouth, lower jaw */}
            <path d="M70 86Q56 66 46 54L40 74L82 88Z" fill="#2a7d4b" stroke={INK} strokeWidth="6" strokeLinejoin="round" />
            <path d="M26 70L86 80L82 92Q54 92 28 82Z" fill="#8f1d14" stroke={INK} strokeWidth="6" strokeLinejoin="round" />
            <path d="M22 82L84 94L80 108Q50 106 24 90Z" fill="#1f5c38" stroke={INK} strokeWidth="6" strokeLinejoin="round" />
            <path d="M16 60L62 32Q86 28 94 52L90 80L28 70Z" fill="#2a7d4b" stroke={INK} strokeWidth="7" strokeLinejoin="round" />
            <path d="M32 70l5 12l5 -10l5 12l5 -9l5 11l5 -9M30 84l4 -9l5 8l5 -9l5 9" fill="#f6efe0" stroke={INK} strokeWidth="2.6" strokeLinejoin="round" />
            <circle cx="68" cy="50" r="7.5" fill="#f6efe0" stroke={INK} strokeWidth="4" />
            <path d="M64 46l8 8M72 46l-8 8" stroke={INK} strokeWidth="3" strokeLinecap="round" />
            <path d="M40 54q8 -4 14 0" fill="none" stroke={INK} strokeWidth="3.5" strokeLinecap="round" />

            {/* crown */}
            <g transform="translate(60 30) rotate(-12)">
              <path d="M-16 2L-16 -18L-7 -9L0 -26L7 -9L16 -18L16 2Z" fill="#f3c63c" stroke={INK} strokeWidth="4" strokeLinejoin="round" />
            </g>

            {/* fire */}
            <g transform="translate(24 76) scale(1.55) translate(-24 -76)">
            <g className={styles.fire}>
              <path className={styles.flameA} d="M22 74Q-6 40 -66 62Q-26 72 -76 90Q-12 98 24 82Z" fill="#e4543a" stroke={INK} strokeWidth="4" strokeLinejoin="round" />
              <path className={styles.flameB} d="M24 76Q2 54 -40 68Q-14 76 -50 88Q0 92 26 82Z" fill="#f08a2a" />
              <path className={styles.flameC} d="M26 78Q10 66 -14 74Q4 80 -18 86Q12 88 28 82Z" fill="#f3c63c" />
              <path className={styles.scrib} d="M0 66q-14 -10 -30 -2q16 8 -4 16M-24 84q-12 4 -26 -2" fill="none" stroke={INK} strokeWidth="3" strokeLinecap="round" />
              <circle className={styles.ember} style={{ animationDelay: '0s' }} cx="-30" cy="60" r="4" fill="#f3c63c" stroke={INK} strokeWidth="2" />
              <circle className={styles.ember} style={{ animationDelay: '-0.45s' }} cx="-52" cy="76" r="3.5" fill="#e4543a" stroke={INK} strokeWidth="2" />
              <circle className={styles.ember} style={{ animationDelay: '-0.9s' }} cx="-74" cy="66" r="3" fill="#f08a2a" stroke={INK} strokeWidth="2" />
              <circle className={styles.ember} style={{ animationDelay: '-0.2s' }} cx="-62" cy="92" r="3" fill="#f3c63c" stroke={INK} strokeWidth="2" />
            </g>
            </g>
          </g>
        </g>
      </g>
    </g>
  );
}
