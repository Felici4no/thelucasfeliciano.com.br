import styles from './sound.module.css';

export function SoundArt() {
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
