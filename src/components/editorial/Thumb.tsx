import Image from 'next/image';
import s from './editorial.module.css';

export function Thumb({ src, alt, fallback }: { src?: string; alt?: string; fallback: string }) {
  return (
    <div className={s.thumb}>
      {src ? (
        <Image src={src} alt={alt ?? ''} fill sizes="(max-width: 700px) 30vw, 300px" className={s.thumbImg} />
      ) : (
        <span className={s.thumbEmpty} aria-hidden="true">{fallback}</span>
      )}
    </div>
  );
}
