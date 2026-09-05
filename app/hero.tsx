import styles from './hero.module.css';

const links = [['Home', '#home'], ['Meaning', '#meaning-behind-astramize']];

function Arrow() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M4 12h15m-6-6 6 6-6 6" /></svg>;
}

function CapabilityIcon({ kind }: { kind: number }) {
  return <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" aria-hidden="true">
    {kind === 0 ? <><rect x="7" y="7" width="18" height="18" rx="3" /><path d="M11 2v5m5-5v5m5-5v5M11 25v5m5-5v5m5-5v5M2 11h5m-5 5h5m-5 5h5m18-10h5m-5 5h5m-5 5h5M11 21l3-10 3 10m-5-3h4m5-7v10" /></> : kind === 1 ? <><path d="m3 10 13-7 13 7-13 7-13-7Zm0 6 13 7 13-7M3 22l13 7 13-7" /></> : <><path d="M4 20h5v9H4zm10-8h5v17h-5zm10-9h5v26h-5z" /></>}
  </svg>;
}

export default function Hero() {
  return <section className={styles.hero} id="home" aria-labelledby="hero-title">
    <div className={styles.environment} aria-hidden="true">
      <picture>
        <source media="(max-width: 600px)" srcSet="/images/orbital-lounge-mobile.webp" />
        <source srcSet="/images/orbital-lounge-1280.webp 1280w, /images/orbital-lounge.webp 1672w" sizes="100vw" />
        <img src="/images/orbital-lounge.webp" alt="" width="1672" height="941" fetchPriority="high" />
      </picture>
      <div className={styles.shade} />
      <div className={styles.starlight} />
      <div className={styles.sunrise} />
      <div className={styles.orbit} />
    </div>

    <header className={styles.header}>
      <nav className={styles.nav} aria-label="Main navigation">
        <a className={styles.brand} href="#home"><span aria-hidden="true">✦</span>Astramize</a>
        <div className={styles.links}>{links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}</div>
        <a className={`${styles.button} ${styles.primary} ${styles.navCta}`} href="#meaning-behind-astramize">Start Astramizing <Arrow /></a>
        <details className={styles.menu}>
          <summary aria-label="Toggle navigation"><span /><span /></summary>
          <div>{links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}</div>
        </details>
      </nav>
    </header>

    <div className={styles.copy}>
      <p className={styles.eyebrow}>THE ERA OF ASTRAMIZING</p>
      <h1 id="hero-title">Don’t Just Automate.<span>Astramize.</span></h1>
      <p className={styles.support}>Turn ideas, workflows, and businesses into intelligent<br className={styles.desktopBreak} /> AI-powered systems that work, adapt, and scale.</p>
      <div className={styles.actions}>
        <a className={`${styles.button} ${styles.primary}`} href="#meaning-behind-astramize">Start Astramizing <Arrow /></a>
        <a className={`${styles.button} ${styles.secondary}`} href="#meaning-behind-astramize"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="m8 5 11 7-11 7V5Z" /></svg>Explore the Platform</a>
      </div>
    </div>

    <p className={`${styles.marginalia} ${styles.leftNote}`} aria-hidden="true">FROM<br />POSSIBILITY<br />TO<br />PROGRESS</p>
    <p className={`${styles.marginalia} ${styles.rightNote}`} aria-hidden="true">IDEAS<br />TO A BRIGHTER<br />TOMORROW</p>

    <div className={styles.bottom}>
      <ul className={styles.capabilities} aria-label="Platform capabilities">
        {[['AI Agents', 'Understand. Act. Execute.'], ['Automation', 'From tools to autonomous systems.'], ['Scale', 'Built for what’s next.']].map(([title, description], i) => <li key={title}><CapabilityIcon kind={i} /><div><h2>{title}</h2><p>{description}</p></div></li>)}
      </ul>
      <div className={styles.footer}>
        <span>A MORE INTELLIGENT WORLD</span>
        <a className={styles.scroll} href="#meaning-behind-astramize">SCROLL TO EXPLORE<Arrow /></a>
        <span>POWERED BY ASTRAMIZE</span>
      </div>
    </div>
  </section>;
}
