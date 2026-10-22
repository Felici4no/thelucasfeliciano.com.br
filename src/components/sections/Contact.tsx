"use client";

import { useState, useEffect } from 'react';
import { SectionHead } from '@/components/ui/SectionHead';
import { CtaLink } from '@/components/ui/CtaLink';
import { primaryContactHref } from '@/lib/contact';
import { siteConfig } from '@/lib/seo';
import styles from './Contact.module.css';

const channels = [
  siteConfig.links.linkedin && { id: 'linkedin', label: 'LinkedIn', href: siteConfig.links.linkedin, external: true },
  siteConfig.links.whatsapp && { id: 'whatsapp', label: 'WhatsApp', href: siteConfig.links.whatsapp, external: true },
  { id: 'github', label: 'GitHub', href: siteConfig.links.github, external: true },
  { id: 'instagram', label: 'Instagram', href: siteConfig.links.instagram, external: true },
].filter((c): c is { id: string; label: string; href: string; external: boolean } => Boolean(c));

export function Contact() {
  const [mounted, setMounted] = useState(false);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <footer id="contact" className={styles.footer} data-snap>
      <div className={styles.container}>
        <SectionHead index="07" title="Let's build" invert aside={siteConfig.availability ?? 'Contact'} />

        <p className={styles.lead}>
          Have a product, an agent or a messy system that needs to work? Tell me what you&apos;re trying to do and I&apos;ll
          reply with how I&apos;d approach it.
        </p>

        <CtaLink id="contact-primary" href={primaryContactHref} className={styles.primary}>
          {siteConfig.links.booking ? 'Book a call' : 'Email me'} <span aria-hidden="true">→</span>
        </CtaLink>
        <span className={styles.address}>{siteConfig.links.email}</span>

        <div className={styles.linksGrid}>
          {channels.map((c) => (
            <CtaLink key={c.id} id={`contact-${c.id}`} href={c.href} className={styles.link} external={c.external}>
              <span className={styles.linkText}>{c.label}</span>
              <span aria-hidden="true">↗</span>
            </CtaLink>
          ))}
        </div>

        <div className={styles.bottom}>
          <div className={styles.coord}>
            <span>COORD: 23.5505° S, 46.6333° W</span>
            <span>SAO PAULO / BR</span>
          </div>
          <div className={styles.copyright}>
            © {mounted ? currentYear : '2024'} LUCAS FELICIANO. ALL RIGHTS RESERVED.
          </div>
        </div>
      </div>
    </footer>
  );
}
