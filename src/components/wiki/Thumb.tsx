import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/data/projects';
import w from './wiki.module.css';

interface ThumbProps {
  /** Project id whose cover image is shown. */
  project: string;
}

/** Floated thumbnail with a caption, like a File thumb on Wikipedia. */
export function Thumb({ project }: ThumbProps) {
  const p = projects.find((x) => x.id === project);
  if (!p?.image) return null;

  return (
    <figure className={w.thumb}>
      <Image src={p.image.src} alt={p.image.alt} width={440} height={330} sizes="220px" className={w.thumbImage} />
      <figcaption className={w.thumbCaption}>
        <Link href={p.link}>{p.name}</Link>: {p.image.caption}
      </figcaption>
    </figure>
  );
}
