import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/data/projects';
import w from './wiki.module.css';

const picks: { project: string; file?: string }[] = [
  { project: 'voculos' },
  { project: 'ecosimulator', file: 'award.jpg' },
  { project: 'alimapa', file: 'event.jpg' },
  { project: 'talent-hack', file: 'judging.jpg' },
  { project: 'upay3food' },
];

/** A <gallery> of project photos with captions. */
export function Gallery() {
  const items = picks.flatMap(({ project, file }) => {
    const p = projects.find((x) => x.id === project);
    const img = file ? p?.gallery?.find((g) => g.src.endsWith(file)) : p?.image;
    return p && img ? [{ p, img }] : [];
  });

  return (
    <ul className={w.gallery}>
      {items.map(({ p, img }) => (
        <li key={img.src} className={w.galleryItem}>
          <Image src={img.src} alt={img.alt} width={340} height={255} sizes="(max-width: 560px) 45vw, 170px" className={w.thumbImage} />
          <span className={w.thumbCaption}>
            <Link href={p.link}>{p.name}</Link>: {img.caption}
          </span>
        </li>
      ))}
    </ul>
  );
}
