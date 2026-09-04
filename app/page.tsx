import Image from 'next/image';

const timeline = [
  ['01', 'THE IDEA', 'A name appeared before there was a plan for it.'],
  ['02', 'THE JOURNEY', 'Ideas became products. Learning became building.'],
  ['03', 'THE DISCOVERY', 'AstraMize began to feel less like a word and more like a direction.'],
  ['04', 'THE POSSIBILITY', "Perhaps its most interesting chapter hasn't been written yet."],
];

const meanings = [
  ['✦', 'ASTRA', 'Beyond the ordinary. A symbol of exploration, ambition, and a higher horizon.'],
  ['↗', 'MAXIMIZE', 'Go further. Unlock more potential from every possibility.'],
  ['◈', 'OPTIMIZE', 'Make it better. Smarter decisions. Better systems. Better outcomes.'],
  ['✧', 'MODERNIZE', 'Move forward. Turning ideas into something ready for tomorrow.'],
];

function Mark() { return <span className="mark" aria-hidden="true">✦</span>; }
function Status({ compact = false, label = "A NAME FOR WHAT'S NEXT" }: { compact?: boolean; label?: string }) { return <span className={`status ${compact ? 'status--compact' : ''}`}><i /> {label}</span>; }
function Arrow() { return <span aria-hidden="true">↗</span>; }

function Navbar() {
  return <header className="nav-wrap"><nav className="nav" aria-label="Main navigation"><a className="brand" href="#home"><Mark /><span>AstraMize</span></a><div className="links"><a href="#home">Home</a><a href="#story">The Story</a><a href="#vision">Meaning</a><a href="#openai">Possibility</a><a href="#vaiket">Vaiket</a></div><Status /><details className="mobile-nav"><summary aria-label="Open navigation">☰</summary><div><a href="#home">Home</a><a href="#story">The Story</a><a href="#vision">Meaning</a><a href="#openai">Possibility</a><a href="#vaiket">Vaiket</a></div></details></nav></header>;
}

export default function Home() {
  return <main>
    <section className="hero" id="home"><div className="hero-art"><Image src="/images/astramize-hero.png" alt="A luminous AI profile overlooking Earth from space" fill priority sizes="100vw" /></div><div className="stars" /><Navbar /><div className="hero-inner"><div className="hero-copy"><p className="eyebrow">A NAME FOR WHAT'S NEXT.</p><h1>Astra<span>Mize</span></h1><p className="hero-lede">Some ideas arrive before their time.</p><p className="hero-support">A name inspired by possibility, progress, and what comes next.</p><p className="wordmark-line">ASTRA <b>·</b> MAXIMIZE <b>·</b> OPTIMIZE <b>·</b> MODERNIZE</p><div className="story-copy"><p><strong>astramize.com</strong></p><p>A name.<br />A possibility.<br />A future waiting to be written.</p></div><div className="signature"><span>—</span><strong>A NAME WITH POSSIBILITIES</strong><small>Independent concept by Bikas Sahu</small></div><div className="hero-actions"><a className="button button--bright" href="#story">Explore the Story <Arrow /></a><a className="button button--ghost" href="https://www.linkedin.com/in/vaiket-ai/" target="_blank" rel="noreferrer">Explore Vaiket <Arrow /></a></div></div></div><div className="scroll-cue"><span>↓</span><small>SCROLL TO EXPLORE</small></div></section>

    <section className="section story" id="story"><div className="section-head"><p className="eyebrow">THE BEGINNING OF A NAME.</p><h2>The Story</h2><p>Some names exist before their meaning becomes clear.</p></div><div className="timeline">{timeline.map(([n, title, text], i) => <article className="timeline-item" key={n}><div className={`timeline-node node-${i}`}>{i === 0 ? '◫' : i === 1 ? '</>' : i === 2 ? '✦' : '♥'}</div><p className="number">{n}</p><h3>{title}</h3><p>{text}</p></article>)}</div></section>

    <section className="section meaning" id="vision"><div className="planet-glow" /><div className="section-head"><p className="eyebrow">A NAME WITH AN IDEA.</p><h2>What Is AstraMize?</h2><p>A combination of ambition, progress, and possibility.</p></div><div className="meaning-grid">{meanings.map(([icon, title, text]) => <article className="glass-card meaning-card" key={title}><span className="card-icon">{icon}</span><h3>{title}</h3><p>{text}</p></article>)}</div><aside className="side-quote">“A name for what’s next.”<span /></aside></section>

    <section className="section openai" id="openai"><div className="section-head"><p className="eyebrow">THE FUTURE IS OPEN.</p><h2>A Possibility</h2><p>A name doesn't have to know its destination to have a direction.</p></div><div className="gift-layout"><div className="gift-grid"><article className="glass-card gift-card"><span className="card-icon">✦</span><div><h3>ASTRAMIZE</h3><p>A name for possibilities that haven’t been discovered yet.</p></div></article><article className="glass-card gift-card"><span className="card-icon">◌</span><div><h3>GO FURTHER</h3><p>Further in thought. Further in technology.</p></div></article><article className="glass-card gift-card"><span className="card-icon">↗</span><div><h3>KEEP OPEN</h3><p>Further in what we create.</p></div></article></div><blockquote>“What if we could always go<br />a little further?”<cite>— AstraMize</cite></blockquote></div><div className="domain-bar"><Mark /><div><strong>astramize.com</strong><p>OPEN TO WHAT COMES NEXT</p></div><div className="domain-mini"><strong>OPEN TO WHAT COMES NEXT</strong><span>astramize.com</span><Status compact label="OPEN TO WHAT COMES NEXT" /></div></div></section>

    <section className="vaiket section" id="vaiket"><div><p className="eyebrow">THE BUILDER BEHIND THE IDEA.</p><h2>Building What Comes Next.</h2><p>Vaiket is my ongoing journey into AI,<br />automation, products, and independent building.</p><div className="vaiket-note">AstraMize is a name.<br />Vaiket is the journey.<br />And both come from the same curiosity:<br /><strong>What can we build next?</strong></div></div><a className="button button--ghost" href="https://www.linkedin.com/in/vaiket-ai/" target="_blank" rel="noreferrer">Explore Vaiket <Arrow /></a></section>

    <section className="closing section" id="contact"><p className="eyebrow">THE NEXT CHAPTER.</p><h2>Some Names<br /><em>Find Their Meaning.</em></h2><p>Maybe AstraMize becomes something.<br />Maybe it becomes nothing.<br />Maybe it becomes something we haven’t imagined yet.<br /><br />And that’s the beauty of a name.<br />It leaves room for possibility.</p><div className="closing-domain"><strong>astramize.com</strong><Status label="OPEN TO WHAT COMES NEXT" /></div><div className="closing-signature">Bikas Sahu<br /><small>Founder, Vaiket · India</small></div></section>

    <footer className="footer"><a className="brand" href="#home"><Mark /><span>AstraMize<small>A NAME FOR WHAT'S NEXT.</small></span></a><div className="footer-links"><a href="#home">Home</a><a href="#story">Story</a><a href="#vision">Meaning</a><a href="#openai">Possibility</a><a href="#vaiket">Vaiket</a></div><p>astramize.com<br /><strong>Built around possibility.</strong><br /><span>© 2026 Bikas Sahu · Vaiket · India</span></p></footer>
  </main>;
}
