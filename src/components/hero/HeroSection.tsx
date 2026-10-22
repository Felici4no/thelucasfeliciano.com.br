"use client";

import type { ReactNode } from 'react';
import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { CtaLink } from '@/components/ui/CtaLink';
import { primaryContactHref, primaryContactLabel } from '@/lib/contact';
import { siteConfig } from '@/lib/seo';
import styles from './HeroSection.module.css';

const ticker = ['AI agents', 'Web products', 'MCP servers', 'Systems design', 'Prototypes'];

export function HeroSection({ cover }: { cover?: ReactNode }) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  // the text drifts up faster than the page and fades as the hero leaves
  const y = useTransform(scrollYProgress, [0, 1], [0, -90]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section id="intro" ref={ref} className={styles.hero}>
      {cover}
      <motion.div className={styles.drift} style={reduce ? undefined : { y, opacity }}>
      <motion.div
        className={styles.inner}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <div className={styles.eyebrow}>
          {siteConfig.availability && (
            <span className={styles.tag}>
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
          <span className={styles.proof}>
            2× hackathon 1st place ·{' '}
            <a href={siteConfig.dolarizandoInstagram} target="_blank" rel="noopener noreferrer" className={styles.proofLink}>
              15k organic followers ↗
            </a>
          </span>
        </div>
      </motion.div>
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
