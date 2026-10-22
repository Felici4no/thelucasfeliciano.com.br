import { CtaLink } from '@/components/ui/CtaLink';
import { primaryContactHref, primaryContactLabel, mailtoHref } from '@/lib/contact';
import { siteConfig } from '@/lib/seo';
import { WikiSection } from './WikiSection';

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
    <WikiSection id="contact" title="Contact">
      <p>
        {siteConfig.availability ? `${siteConfig.availability}. ` : ''}Messages that describe the problem get a reply
        with a proposed approach.{' '}
        <CtaLink id="contact-primary" href={primaryContactHref}>
          {primaryContactLabel} →
        </CtaLink>
      </p>
      <ul>
        {channels.map((c) => (
          <li key={c.id}>
            <CtaLink id={`contact-${c.id}`} href={c.href} external={c.id !== 'email'}>
              {c.label}
            </CtaLink>
          </li>
        ))}
      </ul>
    </WikiSection>
  );
}
