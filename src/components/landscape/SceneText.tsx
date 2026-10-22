import { CtaLink } from '@/components/ui/CtaLink';
import { whatsappHref } from '@/lib/contact';
import styles from './SceneText.module.css';

/** Name, tagline and a short text card, centred on the sky. */
export function SceneTop() {
  return (
    <>
      <div className={styles.brand}>
        <div className={styles.mark}>
          <svg className={styles.crown} viewBox="-30 -40 60 46" aria-hidden="true" focusable="false">
            <path d="M-24 2L-24 -24L-11 -11L0 -34L11 -11L24 -24L24 2Z" transform="translate(3 3)" fill="#e4543a" />
            <path d="M-24 2L-24 -24L-11 -11L0 -34L11 -11L24 -24L24 2Z" fill="#f3c63c" stroke="#171414" strokeWidth="4" strokeLinejoin="round" />
          </svg>
          <h1 className={styles.name}>Lucas Feliciano</h1>
        </div>
        <p className={styles.about}>
          Software engineer · São Paulo, Brazil
        </p>
      </div>

      <section className={styles.card} aria-label="About">
        <p>I turn ideas into working solutions through code, from early prototypes to platforms in production.</p>
        <p>First-place winner at the ElevenLabs Worldwide Hackathon in São Paulo, with top placements in other competitions.</p>
        <p className={styles.ask}>Have a project in mind?</p>
        <CtaLink id="scene-whatsapp" href={whatsappHref} className={styles.button} external>
          Let&rsquo;s build it
        </CtaLink>
      </section>
    </>
  );
}

export function SceneCopyright() {
  return <p className={styles.copyText}>©{new Date().getFullYear()} LUCAS FELICIANO. All rights reserved.</p>;
}
