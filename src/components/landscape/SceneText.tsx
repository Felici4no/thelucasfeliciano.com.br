import Link from 'next/link';
import { CtaLink } from '@/components/ui/CtaLink';
import { mailtoHref } from '@/lib/contact';
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
        <p>
          Builds AI agents, web products and coordination systems, from hackathon prototypes to platforms in
          production. First place at the ElevenLabs Worldwide Hackathon São Paulo and at Devs de Impacto Rio.
        </p>
        <p>
          Open to projects.{' '}
          <CtaLink id="scene-email" href={mailtoHref('Project inquiry', 'Hi Lucas,\n\n')} className={styles.cardLink}>
            Say hello
          </CtaLink>
          .
        </p>
      </section>
    </>
  );
}

export function SceneLegal() {
  return (
    <>
      <Link href="/portfolio" className={styles.legalLink}>Project index</Link>
      <Link href="/logbook" className={styles.legalLink}>Logbook</Link>
    </>
  );
}

export function SceneCopyright() {
  return <p className={styles.copyText}>©{new Date().getFullYear()} LUCAS FELICIANO. All rights reserved.</p>;
}
