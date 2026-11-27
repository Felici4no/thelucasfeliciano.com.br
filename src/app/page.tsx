import Link from 'next/link';
import Image from 'next/image';
import { projects } from '@/data/projects';
import { RuleRow } from '@/components/editorial/RuleRow';
import { MotionPlate } from '@/components/practice/MotionPlate';
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
      <div className={a.hero}>
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
          <div className={a.identityNote}>
            <span className={a.stamp} aria-hidden="true">✳</span>
            <div><p className={a.eyebrow}>Creative practice</p><p className={a.location}>São Paulo, Brasil</p></div>
          </div>
          <p className={a.intro}>I explore ideas through architecture, visual expression, music and technology. Different tools, one curiosity.</p>
        </div>
      </div>
      <nav className={a.disciplines} aria-label="Fields of practice">
        {[
          ['01', 'Space', '#space', '⌑'],
          ['02', 'Expression', '#body', '✳'],
          ['03', 'Sound', '#sound', '♪'],
          ['04', 'Technology', '#selected', '↗'],
        ].map(([n, label, href, mark]) => (
          <a key={n} href={href}><span className={a.navIndex}>/{n}</span><span className={a.navMark} aria-hidden="true">{mark}</span><span className={a.navLabel}>{label}</span><span className={a.navArrow} aria-hidden="true">↘</span></a>
        ))}
      </nav>

      <section id="space" className={a.chapter}>
        <div className={a.chapterHead}>
          <p className={a.eyebrow}>01 / Space</p>
          <h2>Ways of<br/><i>inhabiting.</i></h2>
          <p>Architecture and urbanism at Escola da Cidade. A practice of reading the city, its territories and the relationships that shape everyday life.</p>
        </div>
        <MotionPlate kind="space"/>
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
          <p className={a.eyebrow}>02 / Expression</p>
          <h2>Gesture<br/><i>and presence.</i></h2>
          <p>Theatre, visual expression and performance: ways of exploring the body, imagination and collective creation.</p>
        </div>
        <MotionPlate kind="expression"/>
        <figure className={a.photoFeature}>
          <Image src="/practice/body-art.webp" alt="Blue and turquoise body painting resembling branching lines and stars on a person's back" width={854} height={1000} unoptimized className={a.bodyPhoto}/>
          <figcaption><span className={a.eyebrow}>Body / Visual archive</span><strong>The body as a surface.</strong><span>Colour, gesture and expression.</span></figcaption>
        </figure>
        <div className={a.bodyRows}>
          <article><p className={a.eyebrow}>Collective practice</p><h3>Theatre</h3><p>One year in a theatre group, rehearsing and performing with others.</p></article>
          <article><p className={a.eyebrow}>Creative exploration</p><h3>Visual expression</h3><p>Colour, gesture and the relationship between the body and its surroundings.</p></article>
        </div>
      </section>

      <section id="sound" className={a.chapter}>
        <div className={a.chapterHead}>
          <p className={a.eyebrow}>03 / Sound</p>
          <h2>Listening<br/><i>back.</i></h2>
          <p>Musical performance and original compositions. An archive of experiments, recordings and ideas through sound.</p>
        </div>
        <MotionPlate kind="sound"/>
        <div className={a.bodyRows}>
          <article><p className={a.eyebrow}>Musical formation</p><h3>Violin</h3><p>Performed on violin in a concert in Guarulhos.</p></article>
          <article><p className={a.eyebrow}>Musical formation</p><h3>Piano</h3><p>Second place in the Conservatório de Guarulhos competition for piano studies.</p></article>
        </div>
        <p className={a.archiveLabel}>Recorded work / Music archive</p>
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

      <section className={a.chapter} id="selected">
        <div className={a.chapterHead}>
          <p className={a.eyebrow}>04 / Technology</p>
          <h2>Building<br/><i>systems.</i></h2>
          <p>Software engineering, digital products and technological experiments. Selected work from my practice.</p>
        </div>
        <MotionPlate kind="technology"/>
        <figure className={a.photoFeature}>
          <Image src="/practice/electronics.webp" alt="Electronics workbench with Arduino boards, wires and breadboards" width={753} height={1000} unoptimized className={a.codePhoto}/>
          <figcaption><span className={a.eyebrow}>Technology / Process archive</span><strong>Making things work.</strong><span>Electronics, prototypes and experimentation.</span></figcaption>
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
