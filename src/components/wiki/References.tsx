import Link from 'next/link';
import { siteConfig } from '@/lib/seo';
import { WikiSection } from './WikiSection';
import w from './wiki.module.css';

const categories = [
  { label: 'Brazilian software engineers', href: '#background' },
  { label: 'Artificial intelligence people', href: '#services' },
  { label: 'Hackathon winners', href: '#recognition' },
  { label: 'People from São Paulo', href: '#lead' },
];

const edited = new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });

export function References() {
  return (
    <>
      <WikiSection id="references" title="References" className={w.refs}>
        <ol className={w.numbered}>
          <li>
            <a href={siteConfig.dolarizandoInstagram} target="_blank" rel="noopener noreferrer">
              Dolarizando-se on Instagram
            </a>
            . Audience of 15,000 followers, 100% organic.
          </li>
        </ol>
        <p className={w.muted}>Other claims are documented on the linked project pages.</p>
      </WikiSection>

      <div className={w.categories}>
        <a href="#lead">Categories</a>:{' '}
        <ul>
          {categories.map((c) => (
            <li key={c.label}>
              <a href={c.href}>{c.label}</a>
            </li>
          ))}
        </ul>
      </div>

      <footer className={w.pageFoot}>
        <p>This page was last updated on {edited}.</p>
        <p>
          © {new Date().getFullYear()} Lucas Feliciano · São Paulo, Brazil · <Link href="/portfolio">Project index</Link>
        </p>
      </footer>
    </>
  );
}
