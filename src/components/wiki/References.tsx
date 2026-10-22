import { siteConfig } from '@/lib/seo';
import w from './wiki.module.css';

export function References() {
  return (
    <section id="references" className={w.refs}>
      <h2 className={w.h2}>References</h2>
      <ol className={w.numbered}>
        <li>
          <a href={siteConfig.dolarizandoInstagram} target="_blank" rel="noopener noreferrer">
            Dolarizando-se on Instagram
          </a>
          . Audience of 15,000 followers, 100% organic.
        </li>
      </ol>
      <p className={w.muted}>Other claims are documented on the linked project pages.</p>
      <p className={w.pageFoot}>
        © {new Date().getFullYear()} Lucas Feliciano · São Paulo, Brazil
      </p>
    </section>
  );
}
