import styles from './meaning-chapter.module.css';

const qualities = ['Vision', 'Exploration', 'Intelligence', 'Ambition', 'Limitless'];
const verbs = ['Optimize', 'Maximize', 'Modernize', 'Organize', 'Realize', 'Digitize', 'Energize', 'Automize'];

function QualityIcon({ index }: { index: number }) {
  return <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {index === 0 && <path d="m16 3 3.8 8.2 9 1.1-6.6 6.2 1.7 9-7.9-4.5-7.9 4.5 1.7-9-6.6-6.2 9-1.1L16 3Z" />}
    {index === 1 && <><circle cx="16" cy="16" r="11" /><ellipse cx="16" cy="16" rx="6" ry="14" transform="rotate(42 16 16)" /><circle cx="21" cy="8" r="2" fill="#bdd9f4" stroke="none" /></>}
    {index === 2 && <><path d="M16 7c-2-5-8-3-8 1-4 0-5 6-2 8-3 4 0 8 3 8 0 5 7 5 7 1V7Zm0 0c2-5 8-3 8 1 4 0 5 6 2 8 3 4 0 8-3 8 0 5-7 5-7 1" /><path d="M11 10c-2 1-2 4 0 5m-1 4c3 0 3 3 2 4m9-13c2 1 2 4 0 5m1 4c-3 0-3 3-2 4" /></>}
    {index === 3 && <><path d="m3 27 8-13 5 8 5-11 8 16H3Zm10-16 3-7 3 7M16 4v11" /><path d="m9 18 2 2 2-2m6-2 2 2 2-2" /></>}
    {index === 4 && <path d="M16 16c-4-6-6-8-9-7-7 2-6 14 1 14 3 0 6-4 8-7 4-6 6-8 9-7 7 2 6 14-1 14-3 0-6-4-8-7Z" />}
  </svg>;
}

function LightTrails() {
  return <svg className={styles.trails} viewBox="0 0 600 400" fill="none" aria-hidden="true">
    <defs><linearGradient id="meaning-trail" x1="230" y1="200" x2="600" y2="160" gradientUnits="userSpaceOnUse"><stop stopColor="#639fd2" stopOpacity="0" /><stop offset=".5" stopColor="#6aa8e0" stopOpacity=".6" /><stop offset="1" stopColor="#c3e8ff" /></linearGradient></defs>
    {[0, 1, 2, 3, 4, 5].map(i => <path key={i} d={`M 630 ${-35+i*13} C 565 ${80+i*5}, ${280-i*12} ${88+i*10}, ${298-i*10} ${143+i*6} S 565 ${202+i*9}, 660 ${350+i*13}`} stroke="url(#meaning-trail)" strokeWidth={i === 2 ? 2 : .7} opacity={i === 2 ? .95 : .5} />)}
    <path d="M630 -9C565 90 256 108 278 155S565 220 660 376" stroke="#8bc7ff" strokeWidth="12" opacity=".09" />
  </svg>;
}

function WorldArt({ className }: { className: string }) {
  return <div className={className} aria-hidden="true"><img src="/images/meaning-world-1672.webp" srcSet="/images/meaning-world-960.webp 960w, /images/meaning-world-1672.webp 1672w" sizes="100vw" width="1672" height="941" alt="" loading="lazy" decoding="async" /></div>;
}

export default function MeaningChapter() {
  return <section className={styles.chapter} id="meaning-behind-astramize" aria-labelledby="meaning-title">
    <WorldArt className={styles.space} />
    <WorldArt className={styles.landscape} />
    <div className={styles.content}>
      <header className={`${styles.intro} ${styles.reveal}`}>
        <p className={styles.eyebrow}>THE MEANING BEHIND</p>
        <h2 id="meaning-title" className={styles.title}>Astramize</h2>
        <p className={styles.subtitle}>A name built for a bigger tomorrow.</p>
        <p className={styles.introCopy}>Astramize is more than a name — it is a philosophy.<br /> A combination of vision and action. The stars, put into action.</p>
      </header>

      <div className={styles.portals}>
        <article className={`${styles.portal} ${styles.astra} ${styles.reveal}`} aria-labelledby="astra-title">
          <img className={styles.galaxy} src="/images/meaning-astra-1000.webp" srcSet="/images/meaning-astra-600.webp 600w, /images/meaning-astra-1000.webp 1000w" sizes="(max-width: 700px) 100vw, 45vw" width="1536" height="1024" alt="" loading="lazy" decoding="async" />
          <div className={styles.portalContent}>
            <p className={styles.label}>THE EXTRAORDINARY</p>
            <h3 id="astra-title">ASTRA</h3>
            <p className={styles.linguistic}>Latin for “stars” · plural of <i>astrum</i></p>
            <p className={styles.definition}>Astra represents the extraordinary: vision, exploration, intelligence, ambition, and the limitless possibilities beyond what exists today.</p>
            <ul className={styles.qualities} aria-label="What Astra represents">{qualities.map((quality, i) => <li key={quality}><QualityIcon index={i} /><span>{quality}</span></li>)}</ul>
          </div>
        </article>

        <div className={styles.connection} aria-hidden="true"><span>+</span></div>

        <article className={`${styles.portal} ${styles.ize} ${styles.reveal}`} aria-labelledby="ize-title">
          <LightTrails />
          <div className={styles.portalContent}>
            <p className={styles.label}>TURN IDEAS INTO ACTION</p>
            <h3 id="ize-title">IZE</h3>
            <p className={styles.linguistic}>verb-forming suffix</p>
            <p className={styles.definition}>The <strong>-ize</strong> ending turns an idea into an action — to make, to transform, to improve, to enable, to bring something into a new state.</p>
            <ul className={styles.wordFamily} aria-label="Words with the -ize ending">{verbs.map(word => <li key={word}>{word.slice(0, -3)}<span>{word.slice(-3)}</span></li>)}</ul>
          </div>
        </article>
      </div>

      <div className={`${styles.synthesis} ${styles.reveal}`}>
        <p className={styles.eyebrow}>TOGETHER</p>
        <p className={styles.equation}>ASTRA + IZE =</p>
        <h3 className={styles.name}>ASTRAMIZE</h3>
        <p className={styles.tagline}>The stars, put into action.</p>
        <p className={styles.philosophy}>To Astramize means to take something ordinary, complex, or limited and transform it into something smarter, more capable, more efficient, and more extraordinary.</p>
        <p className={styles.coined}>A coined brand expression. A philosophy made into a word.</p>
      </div>

      <div className={`${styles.vocabulary} ${styles.reveal}`}>
        <p className={styles.eyebrow}>AND THEN IT BECOMES A VERB.</p>
        <ol className={styles.verbForms}>
          <li><span className={styles.stage}>01 / THE ACTION</span><h3>Astramize</h3><p>To transform possibility<br />into action.</p></li>
          <li><span className={styles.stage}>02 / THE PROCESS</span><h3>Astramizing</h3><p>The act of transforming ideas,<br />systems, and businesses.</p></li>
          <li><span className={styles.stage}>03 / THE RESULT</span><h3>Astramized</h3><p>Smarter. More capable.<br />More extraordinary.</p></li>
        </ol>
      </div>

      <div className={`${styles.finale} ${styles.reveal}`}>
        <div className={styles.horizon} aria-hidden="true"><span /></div>
        <p>WE DON’T JUST AUTOMATE.<strong>WE ASTRAMIZE.</strong></p>
      </div>
    </div>
  </section>;
}
