import fs from 'node:fs';
import path from 'node:path';
import Image from 'next/image';
import { heroCover } from '@/lib/hero';
import { ParallaxLayer } from './ParallaxLayer';
import styles from './HeroCover.module.css';

const hasCover = fs.existsSync(path.join(process.cwd(), 'public', heroCover.file));

/** Renaissance cover behind the hero. Renders nothing until the image file exists. */
export function HeroCover() {
  if (!hasCover) return null;

  return (
    <>
      <ParallaxLayer>
        <Image
          src={`/${heroCover.file}`}
          alt=""
          fill
          priority
          quality={90}
          sizes="100vw"
          className={styles.image}
        />
      </ParallaxLayer>
      <div className={styles.veil} aria-hidden="true" />
      <p className={styles.credit}>{heroCover.credit}</p>
    </>
  );
}
