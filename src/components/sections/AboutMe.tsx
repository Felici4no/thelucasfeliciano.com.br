import fs from 'node:fs';
import path from 'node:path';
import Image from 'next/image';
import { SectionHead } from '@/components/ui/SectionHead';
import { projects } from '@/data/projects';
import { events, certifications } from '@/data/learning';
import { siteConfig } from '@/lib/seo';
import styles from './AboutMe.module.css';

/** Drop a portrait at public/about/lucas.jpg and it replaces the placeholder. */
const PHOTO = 'about/lucas.jpg';
const hasPhoto = fs.existsSync(path.join(process.cwd(), 'public', PHOTO));

const facts: { value: string; label: string; href?: string }[] = [
  { value: '2×', label: 'Hackathon 1st place' },
  { value: '4', label: 'Hackathon podiums' },
  { value: '15k', label: 'Organic Instagram followers ↗', href: siteConfig.dolarizandoInstagram },
  { value: String(projects.filter((p) => /live/i.test(p.status)).length), label: 'Products live today' },
];

export function AboutMe() {
  return (
    <section id="about" className={styles.section} data-snap>
      <div className={styles.inner}>
        <SectionHead index="06" title="About me" aside="São Paulo, Brazil" />

        <div className={styles.layout}>
          <figure className={styles.portrait}>
            {hasPhoto ? (
              <Image src={`/${PHOTO}`} alt="Portrait of Lucas Feliciano" width={480} height={600} className={styles.photo} priority={false} />
            ) : (
              <span className={styles.initials} aria-hidden="true">LF</span>
            )}
            <figcaption className={styles.caption}>Lucas Feliciano · Software Engineer</figcaption>
          </figure>

          <div className={styles.copy}>
            <p className={styles.lead}>
              I&apos;m a software engineer and systems builder from São Paulo.
            </p>
            <p className={styles.text}>
              I build AI agents, web products and coordination systems, mostly in small teams and under hackathon
              pressure, and I keep working on what wins until it is something people can really use. I like problems
              where technology meets public interest: health, financial inclusion, accessibility and education.
            </p>

            <ul className={styles.facts}>
              {facts.map((f) => (
                <li key={f.label} className={styles.factItem}>
                  {f.href ? (
                    <a href={f.href} target="_blank" rel="noopener noreferrer" className={`${styles.fact} ${styles.factLink}`}>
                      <span className={styles.value}>{f.value}</span>
                      <span className={styles.factLabel}>{f.label}</span>
                    </a>
                  ) : (
                    <div className={styles.fact}>
                      <span className={styles.value}>{f.value}</span>
                      <span className={styles.factLabel}>{f.label}</span>
                    </div>
                  )}
                </li>
              ))}
            </ul>

            <div className={styles.learning}>
              <span className={styles.learningLabel}>Keeps learning</span>
              <ul className={styles.chips}>
                {[...events, ...certifications].slice(0, 8).map((e) => (
                  <li key={`${e.when}-${e.title}`} className={styles.chip}>
                    <b>{e.when}</b> {e.title}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
