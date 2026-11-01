import { CtaLink } from '@/components/ui/CtaLink';
import { mailtoHref, whatsappHref } from '@/lib/contact';
import { siteConfig } from '@/lib/seo';
import s from './editorial.module.css';

const channels = [
  { id: 'email', label: 'Email', meta: siteConfig.links.email, href: mailtoHref('Project inquiry', 'Hi Lucas,\n\n'), external: false },
  siteConfig.links.whatsapp && { id: 'whatsapp', label: 'WhatsApp', meta: 'Message', href: whatsappHref, external: true },
  siteConfig.links.linkedin && { id: 'linkedin', label: 'LinkedIn', meta: 'Profile', href: siteConfig.links.linkedin, external: true },
  { id: 'github', label: 'GitHub', meta: 'Felici4no', href: siteConfig.links.github, external: true },
  { id: 'instagram', label: 'Instagram', meta: '@thelucasfeliciano', href: siteConfig.links.instagram, external: true },
].filter((c): c is { id: string; label: string; meta: string; href: string; external: boolean } => Boolean(c));

export function SiteFooter() {
  return (
    <footer className={s.footer} id="contact">
      <h2 className={s.sectionTitle}>
        <span style={{ display: 'block' }}>Get in</span>
        <span style={{ display: 'block' }}>touch</span>
      </h2>
      {siteConfig.availability && (
        <p className={s.lede} style={{ marginTop: 0, marginBottom: 32 }}>
          {siteConfig.availability}. Products, AI agents and systems that need to work.
        </p>
      )}
      <ul className={s.list}>
        {channels.map((c) => (
          <li key={c.id} className={s.row}>
            <CtaLink id={`footer-${c.id}`} href={c.href} external={c.external} className={s.rowLink}>
              <div className={s.rowText}>
                <span className={s.rowTitle}>{c.label}</span>
                <span className={s.meta}>{c.meta}</span>
              </div>
            </CtaLink>
          </li>
        ))}
      </ul>
      <div className={`${s.footerBottom} ${s.meta}`}>
        <span>São Paulo, Brasil</span>
        <span>© {new Date().getFullYear()} Lucas Feliciano</span>
      </div>
    </footer>
  );
}
