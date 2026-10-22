import { CtaLink } from '@/components/ui/CtaLink';
import { primaryContactHref, primaryContactLabel, mailtoHref } from '@/lib/contact';
import { siteConfig } from '@/lib/seo';
import w from './wiki.module.css';

const channels = [
  siteConfig.links.booking && { id: 'booking', label: 'Book a call', href: siteConfig.links.booking },
  { id: 'email', label: siteConfig.links.email, href: mailtoHref('Project inquiry', 'Hi Lucas,\n\n') },
  siteConfig.links.linkedin && { id: 'linkedin', label: 'LinkedIn', href: siteConfig.links.linkedin },
  siteConfig.links.whatsapp && { id: 'whatsapp', label: 'WhatsApp', href: siteConfig.links.whatsapp },
  { id: 'github', label: 'GitHub (Felici4no)', href: siteConfig.links.github },
  { id: 'instagram', label: 'Instagram (@thelucasfeliciano)', href: siteConfig.links.instagram },
].filter((c): c is { id: string; label: string; href: string } => Boolean(c));

export function ContactLinks() {
  return (
    <section id="contact">
      <h2 className={w.h2}>Contact</h2>
      <p className={w.intro}>
        {siteConfig.availability ? `${siteConfig.availability}. ` : ''}Tell me what you are trying to do and I will reply
        with how I would approach it.{' '}
        <CtaLink id="contact-primary" href={primaryContactHref}>
          {primaryContactLabel} →
        </CtaLink>
      </p>
      <ul className={w.plain}>
        {channels.map((c) => (
          <li key={c.id}>
            <CtaLink id={`contact-${c.id}`} href={c.href} external={c.id !== 'email'}>
              {c.label}
            </CtaLink>
          </li>
        ))}
      </ul>
    </section>
  );
}
