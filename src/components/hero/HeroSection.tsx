"use client";

import { motion } from 'framer-motion';
import { CtaLink } from '@/components/ui/CtaLink';
import { primaryContactHref, primaryContactLabel } from '@/lib/contact';
import { siteConfig } from '@/lib/seo';
import styles from './HeroSection.module.css';

const ticker = ['AI agents', 'Web products', 'MCP servers', 'Systems design', 'Prototypes'];

export function HeroSection() {
  return (
    <section id="intro" className={styles.hero}>
      <motion.div
        className={styles.inner}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <div className={styles.eyebrow}>
          {siteConfig.availability && (
            <span className={`${styles.tag} ${styles.live}`}>
              <i className={styles.pulse} aria-hidden="true" />
              {siteConfig.availability}
            </span>
          )}
          <span className={styles.tag}>São Paulo, Brazil</span>
        </div>

        <h1 className={styles.name}>
          <span>Lucas</span>
          <span className={styles.surname}>Feliciano</span>
        </h1>

        <p className={styles.pitch}>
          I design and ship <mark>AI products, agents and web systems</mark>, from first prototype to production.
        </p>

        <div className={styles.actions}>
          <CtaLink id="hero-primary" href={primaryContactHref} className={styles.primary}>
            {primaryContactLabel} <span aria-hidden="true">→</span>
          </CtaLink>
          <a href="#selected" className={styles.secondary}>
            See projects <span aria-hidden="true">↓</span>
          </a>
          <span className={styles.proof}>2× hackathon 1st place · Founder, Talent Hack</span>
        </div>
      </motion.div>

      <div className={styles.ticker} aria-hidden="true">
        <div className={styles.track}>
          {[0, 1].map((n) => (
            <span key={n} className={styles.group}>
              {ticker.map((t) => (
                <span key={t} className={styles.item}>{t} <b>✦</b></span>
              ))}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
