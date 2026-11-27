import styles from './technology.module.css';

export function TechnologyArt() {
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
