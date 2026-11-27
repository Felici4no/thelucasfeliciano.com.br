import Link from 'next/link';
import Image from 'next/image';
import { projects } from '@/data/projects';
import { RuleRow } from '@/components/editorial/RuleRow';
import { indexLabel, projectMeta } from '@/lib/projectMeta';
import s from '@/components/editorial/editorial.module.css';
import a from './practice.module.css';

const recordings = [
  { title: 'O Lucas Feliciano', url: 'https://soundcloud.com/olucasfeliciano', platform: 'SoundCloud' },
  { title: 'By Lucas Feliciano', url: 'https://soundcloud.com/bylucasfeliciano', platform: 'SoundCloud' },
  { title: 'Im Possible Here', url: 'https://soundcloud.com/im-possible-here', platform: 'SoundCloud' },
  { title: 'Jovem Persiste', url: 'https://soundcloud.com/jovem_persiste', platform: 'SoundCloud' },
  { title: 'More Feli', url: 'https://soundcloud.com/morefeli', platform: 'SoundCloud' },
  { title: 'Felica — The Impossible', url: 'https://www.youtube.com/@Felica-The-Impossible/releases', platform: 'YouTube' },
  { title: 'YouTube archive', url: 'https://www.youtube.com/channel/UCfK1n53Tq9pkhQJdpSblkbQ', platform: 'YouTube' },
];

export default function Home() {
  const selected = projects.filter((p) => p.tier === 'selected');
  const other = projects.filter((p) => p.tier !== 'selected');

  return (
    <main className={s.page}>
      <header className={a.hero}>
        <div className={a.heroMeta}>
          <p className={a.eyebrow}>São Paulo, Brasil</p>
          <p className={a.eyebrow}>Personal archive / Independent practice</p>
        </div>
        <h1 className={a.identity} aria-label="Lucas Feliciano">
          <span className={a.firstName}>Lucas</span>
          <Image
            className={a.portrait}
            src="/practice/portrait.webp"
            alt=""
            width={900}
            height={900}
            unoptimized
            preload
          />
          <span className={a.lastName}>Feliciano</span>
        </h1>
        <div className={a.heroStatement}>
          <p className={a.eyebrow}>Sound / Space / Body / Code</p>
          <p className={a.intro}>I work across music, architecture, performance and software, exploring how we make sense of the spaces we inhabit.</p>
        </div>
      </header>
      <nav className={a.disciplines} aria-label="Fields of practice">
        {[
          ['01', 'Sound', '#sound'],
          ['02', 'Space', '#space'],
          ['03', 'Body', '#body'],
          ['04', 'Code', '#selected'],
        ].map(([n, label, href]) => <a key={n} href={href}><span>/{n}</span>{label}<span aria-hidden="true">↘</span></a>)}
      </nav>

      <section id="sound" className={a.chapter}>
        <div className={a.chapterHead}>
          <p className={a.eyebrow}>01 / Sound</p>
          <h2>Listening<br/><i>back.</i></h2>
          <p>Original music, recorded and released under different names. An archive of experiments, compositions and ideas through sound.</p>
        </div>
        <div className={a.recordings}>
          {recordings.map((record, i) => (
            <a className={a.record} key={record.url} href={record.url} target="_blank" rel="noopener noreferrer">
              <span className={a.recordNumber}>{String(i + 1).padStart(2, '0')}</span>
              <span className={a.recordDisc} aria-hidden="true"><span/></span>
              <span className={a.recordDetail}><strong>{record.title}</strong><small>{record.platform} / Archive</small></span>
              <span aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      </section>

      <section id="space" className={a.chapter}>
        <div className={a.chapterHead}>
          <p className={a.eyebrow}>02 / Space</p>
          <h2>Ways of<br/><i>inhabiting.</i></h2>
          <p>Architecture and urbanism at Escola da Cidade. A practice of reading the city, its territories and the relationships that shape everyday life.</p>
        </div>
        <article className={a.feature}>
          <div className={a.featureGraphic} aria-hidden="true">
            <svg viewBox="0 0 400 190" fill="none">
              <g stroke="currentColor" strokeWidth="1.2">
                {Array.from({length: 8}, (_, i) => <path key={i} d={`M${i*52-40} 180 L${i*52+55} 24 L${i*52+130} 24`}/>)}
                <path d="M0 70H400M0 115H400M0 160H400"/>
                <path d="M45 160V76H165V35H286V115H355V160Z" fill="var(--paper)" strokeWidth="2"/>
                <path d="M165 35V160M286 115H165M45 115H165M230 35V115"/>
              </g>
              <circle cx="165" cy="115" r="30" fill="var(--accent)"/>
            </svg>
            <span>Conceptual graphic — not a project drawing</span>
          </div>
          <div className={a.featureContent}>
            <p className={a.eyebrow}>Academic study / 2026 / São Paulo</p>
            <h3>Complexo Berbela</h3>
            <p>A design study in dialogue with the community of Paraisópolis, proposing a cultural centre that responds to the existing fabric, everyday relationships and collective life of the territory.</p>
            <p className={a.note}>Research in progress · Escola da Cidade</p>
          </div>
        </article>
      </section>

      <section id="body" className={a.chapter}>
        <div className={a.chapterHead}>
          <p className={a.eyebrow}>03 / Body</p>
          <h2>Gesture<br/><i>and presence.</i></h2>
          <p>Theatre, performance and piano: experiences that shaped how I listen, collaborate and create.</p>
        </div>
        <figure className={a.photoFeature}>
          <Image src="/practice/body-art.webp" alt="Blue and turquoise body painting resembling branching lines and stars on a person's back" width={854} height={1000} unoptimized className={a.bodyPhoto}/>
          <figcaption><span className={a.eyebrow}>Body / Visual archive</span><strong>The body as a surface.</strong><span>Colour, gesture and expression.</span></figcaption>
        </figure>
        <div className={a.bodyRows}>
          <article><p className={a.eyebrow}>Collective practice</p><h3>Theatre</h3><p>One year in a theatre group, rehearsing and performing with others.</p></article>
          <article><p className={a.eyebrow}>Musical formation</p><h3>Piano</h3><p>Second place in the Conservatório de Guarulhos competition for piano studies.</p></article>
        </div>
      </section>

      <section className={a.chapter} id="selected">
        <div className={a.chapterHead}>
          <p className={a.eyebrow}>04 / Code</p>
          <h2>Building<br/><i>systems.</i></h2>
          <p>Software engineering, digital products and technological experiments. Selected work from my practice.</p>
        </div>
        <figure className={a.photoFeature}>
          <Image src="/practice/electronics.webp" alt="Electronics workbench with Arduino boards, wires and breadboards" width={753} height={1000} unoptimized className={a.codePhoto}/>
          <figcaption><span className={a.eyebrow}>Code / Process archive</span><strong>Making things work.</strong><span>Electronics, prototypes and experimentation.</span></figcaption>
        </figure>
        <ul className={s.list}>
          {selected.map((p, i) => (
            <RuleRow key={p.id} href={p.link} title={p.name} meta={projectMeta(p)} description={p.subtitle} descWideOnly image={p.image} fallback={indexLabel(i)}/>
          ))}
        </ul>
        {other.length > 0 ? <Link className={a.indexLink} href="/portfolio">View all software projects <span aria-hidden="true">↗</span></Link> : null}
      </section>
    </main>
  );
}
