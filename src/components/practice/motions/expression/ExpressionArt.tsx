import styles from './expression.module.css';

export function ExpressionArt() {
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
