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
const stroke = { stroke: INK, strokeLinecap: 'round', strokeLinejoin: 'round', fill: 'none' } as const;

/**
 * A skeletal, scrawled dinosaur: exposed ribs and spine, a blocky skull with big square teeth,
 * bone legs, flat colour printed off-register under thick black line, and a word crossed out on its side.
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
          <g transform="translate(-140 -172) scale(1.02)" data-roar={roaring ? 'true' : undefined} className={styles.body}>
            {/* flat colour, shifted off the line like a misregistered print */}
            <path d="M44 62L96 46L140 34L196 46L248 74L292 60L250 98L196 126L130 122L78 102Z" fill="#f6efe0" transform="translate(7 6)" />
            <path d="M150 52L196 52L204 96L160 104Z" fill="#2f6fd0" transform="translate(-4 4)" opacity=".9" />
            <path d="M100 70L128 66L132 100L106 104Z" fill="#f3c63c" transform="translate(5 3)" />
            <path d="M18 70L34 52L64 38L96 44L100 68L82 90L42 90L20 80Z" fill="#e4543a" transform="translate(-5 6)" />
            <path d="M214 84L292 60L270 98L226 112Z" fill="#e4543a" transform="translate(5 5)" />

            {/* far legs: thin bones */}
            <g className={styles.legBack} style={{ animationDelay: '-0.31s' }}>
              <path d="M150 120L142 148L122 160L112 172M122 160L134 172" {...stroke} strokeWidth="8" opacity=".7" />
            </g>
            <g className={styles.legFront} style={{ animationDelay: '-0.31s' }}>
              <path d="M96 112L92 142L72 158L62 172M72 158L84 172" {...stroke} strokeWidth="8" opacity=".7" />
            </g>

            {/* tail with vertebrae */}
            <path d="M232 70L270 62L296 40L284 70L252 98L214 112" {...stroke} strokeWidth="7" />
            <path d="M240 72l4 -10M254 70l5 -11M268 64l5 -11M222 90l9 5M238 98l8 5M254 88l8 6" {...stroke} strokeWidth="3.5" />

            {/* spine and back, ragged */}
            <path d="M62 40L92 44L112 26L128 44L150 22L168 46L192 28L208 52L236 70" {...stroke} strokeWidth="7" />
            <path d="M104 44l4 12M132 44l2 12M160 46l-2 12M190 50l-6 10M216 58l-8 8" {...stroke} strokeWidth="3.5" />
            {/* belly */}
            <path d="M52 92L84 108L128 124L176 128L214 112" {...stroke} strokeWidth="7" />

            {/* ribs */}
            <path d="M118 46Q100 78 112 116M138 44Q122 80 134 124M158 48Q144 84 156 128M178 52Q166 84 176 126M198 60Q192 88 198 118" {...stroke} strokeWidth="4.5" />
            <path d="M118 62Q132 60 140 66M116 80Q134 80 146 84M118 98Q136 98 150 104" {...stroke} strokeWidth="2.5" opacity=".7" />

            {/* near legs: bone, knee, claw */}
            <g className={styles.legBack}>
              <path d="M170 124L182 150L160 164L152 172M160 164L174 172M182 150L196 158" {...stroke} strokeWidth="11" />
              <circle cx="182" cy="150" r="6" fill="#f6efe0" stroke={INK} strokeWidth="3.5" />
              <path d="M146 170l-5 -6M156 172l-2 -8M166 172l1 -8" {...stroke} strokeWidth="3.5" />
            </g>
            <g className={styles.legFront}>
              <path d="M104 114L108 144L86 158L76 172M86 158L98 172M108 144L122 150" {...stroke} strokeWidth="11" />
              <circle cx="108" cy="144" r="6" fill="#f6efe0" stroke={INK} strokeWidth="3.5" />
              <path d="M70 170l-5 -6M80 172l-2 -8M90 172l1 -8" {...stroke} strokeWidth="3.5" />
            </g>

            {/* tiny clawed arm */}
            <path d="M84 98L64 108L72 118M64 108L56 104" {...stroke} strokeWidth="6" />

            {/* skull: blocky, jaw hanging open, big square teeth */}
            <path d="M14 66L30 50L64 36L96 42L102 68L82 90L40 90L18 80Z" fill="none" stroke={INK} strokeWidth="8" strokeLinejoin="round" />
            <path d="M16 76L96 70L84 94L36 92Z" fill="#8f1d14" stroke={INK} strokeWidth="6" strokeLinejoin="round" />
            <path d="M18 70h10v14h-10zM30 70h10v16h-10zM42 70h10v14h-10zM54 70h10v16h-10zM66 70h10v14h-10zM78 70h10v16h-10z" fill="#f6efe0" stroke={INK} strokeWidth="2.6" strokeLinejoin="round" />
            <path d="M22 92h10v-12h-10zM34 94h10v-14h-10zM46 94h10v-12h-10zM58 92h10v-12h-10zM70 92h10v-12h-10z" fill="#f6efe0" stroke={INK} strokeWidth="2.6" strokeLinejoin="round" />
            <circle cx="66" cy="52" r="10" fill="#f6efe0" stroke={INK} strokeWidth="5" />
            <path d="M60 52q6 -8 12 0q-6 8 -12 0M58 46L74 58M74 46L58 58" fill="none" stroke={INK} strokeWidth="3" strokeLinecap="round" />
            <path d="M32 56l10 -3M30 64l8 -2" {...stroke} strokeWidth="3.5" />

            {/* crown */}
            <g transform="translate(56 30) rotate(-12)">
              <path d="M-16 2L-16 -18L-7 -9L0 -26L7 -9L16 -18L16 2Z" fill="#f3c63c" stroke={INK} strokeWidth="4.5" strokeLinejoin="round" />
              <path d="M-12 -2H12" {...stroke} strokeWidth="2.5" />
            </g>

            {/* a word written on its side, struck through */}
            <g transform="translate(150 94) rotate(-5)" className={styles.word}>
              <text textAnchor="middle">DINO</text>
              <path d="M-38 -6L38 -12" {...stroke} strokeWidth="4" />
            </g>

            {/* fire: jagged, painted */}
            <g transform="translate(18 76) scale(1.5) translate(-18 -76)">
              <g className={styles.fire}>
                <path className={styles.flameA} d="M18 74L-8 54L-14 66L-40 46L-42 62L-72 50L-60 72L-86 74L-58 84L-80 100L-44 94L-52 110L-22 96L-4 100L20 84Z" fill="#e4543a" stroke={INK} strokeWidth="4.5" strokeLinejoin="round" />
                <path className={styles.flameB} d="M18 76L-4 64L-10 72L-30 60L-34 72L-56 66L-42 80L-60 88L-30 86L-34 96L-8 88L20 82Z" fill="#f08a2a" />
                <path className={styles.flameC} d="M18 78L2 72L-6 78L-20 72L-16 82L-30 86L-6 86L20 82Z" fill="#f3c63c" />
                <path className={styles.scrib} d="M-8 62l-14 -8l10 -2l-12 -10M-34 100l-14 4l12 6M-60 66l-12 -6" {...stroke} strokeWidth="3.5" />
                <circle className={styles.ember} style={{ animationDelay: '0s' }} cx="-30" cy="58" r="4" fill="#f3c63c" stroke={INK} strokeWidth="2" />
                <circle className={styles.ember} style={{ animationDelay: '-0.45s' }} cx="-52" cy="78" r="3.5" fill="#e4543a" stroke={INK} strokeWidth="2" />
                <circle className={styles.ember} style={{ animationDelay: '-0.9s' }} cx="-74" cy="66" r="3" fill="#f08a2a" stroke={INK} strokeWidth="2" />
                <circle className={styles.ember} style={{ animationDelay: '-0.2s' }} cx="-62" cy="96" r="3" fill="#f3c63c" stroke={INK} strokeWidth="2" />
              </g>
            </g>
          </g>
        </g>
      </g>
    </g>
  );
}
