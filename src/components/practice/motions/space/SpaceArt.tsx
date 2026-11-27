import styles from './space.module.css';

export function SpaceArt() {
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
