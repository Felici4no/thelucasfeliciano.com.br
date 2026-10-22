import fs from 'node:fs';
import path from 'node:path';
import Image from 'next/image';
import Link from 'next/link';
import { siteConfig } from '@/lib/seo';
import styles from './Infobox.module.css';

/** Drop a portrait at public/about/lucas.jpg and it replaces the placeholder. */
const PHOTO = 'about/lucas.jpg';
const hasPhoto = fs.existsSync(path.join(process.cwd(), 'public', PHOTO));

export function Infobox() {
  return (
    <aside className={styles.box} aria-label="Summary">
      <div className={styles.caption}>Lucas Feliciano</div>

      <div className={styles.figure}>
        {hasPhoto ? (
          <Image src={`/${PHOTO}`} alt="Portrait of Lucas Feliciano" width={300} height={375} className={styles.photo} />
        ) : (
          <span className={styles.initials} aria-hidden="true">LF</span>
        )}
      </div>

      <table className={styles.rows}>
        <tbody>
          <tr>
            <th scope="row">Occupation</th>
            <td>Software engineer, systems builder</td>
          </tr>
          <tr>
            <th scope="row">Based in</th>
            <td>São Paulo, Brazil</td>
          </tr>
          <tr>
            <th scope="row">Known for</th>
            <td>AI agents, web products, hackathon wins</td>
          </tr>
          <tr>
            <th scope="row">Notable projects</th>
            <td>
              <Link href="/projects/voculos">VOCULOS</Link>,{' '}
              <Link href="/projects/alimapa">Alimapa</Link>,{' '}
              <Link href="/projects/upay3food">UPAY3FOOD</Link>,{' '}
              <Link href="/projects/dolarizando-se">Dolarizando-se</Link>
            </td>
          </tr>
          <tr>
            <th scope="row">Audience</th>
            <td>
              <a href={siteConfig.dolarizandoInstagram} target="_blank" rel="noopener noreferrer">
                15k organic followers
              </a>{' '}
              (Dolarizando-se)
            </td>
          </tr>
          <tr>
            <th scope="row">Training</th>
            <td>Software Engineering, FIAP</td>
          </tr>
          {siteConfig.availability && (
            <tr>
              <th scope="row">Status</th>
              <td>{siteConfig.availability}</td>
            </tr>
          )}
          <tr>
            <th scope="row">Contact</th>
            <td>
              <a href={`mailto:${siteConfig.links.email}`}>{siteConfig.links.email}</a>
            </td>
          </tr>
        </tbody>
      </table>
    </aside>
  );
}
