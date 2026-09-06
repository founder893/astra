import type { Metadata } from 'next';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Astramize — Definition, Meaning, Origin & Usage',
  description: 'A reference entry for Astramize, a modern coined verb meaning to transform an ambitious idea into reality. Definition, pronunciation, proposed origin, usage, and documentation.',
  alternates: { canonical: 'https://astramize.com/astramize' },
};

const sections = [
  ['definition', 'Definition'], ['etymology', 'Etymology'],
  ['pronunciation', 'Pronunciation'], ['usage', 'Usage'],
  ['examples', 'Examples'], ['first-recorded-use', 'First recorded use'],
  ['related-forms', 'Related forms'], ['documentation', 'Documentation'],
  ['see-also', 'See also'],
];

function Contents() {
  return <ol>{sections.map(([id, title]) => <li key={id}><a href={`#${id}`}>{title}</a></li>)}</ol>;
}

function Heading({ index }: { index: number }) {
  return <h2><span aria-hidden="true">{index + 1}.</span>{sections[index][1]}</h2>;
}

export default function AstramizePage() {
  return <main className={styles.page}>
    <div className={styles.shell}>
      <nav className={styles.breadcrumb} aria-label="Breadcrumb">
        <a href="/">Home</a><span aria-hidden="true">›</span><span aria-current="page">Astramize</span>
      </nav>

      <div className={styles.layout}>
        <nav className={styles.contents} aria-label="Article contents">
          <div><h2>Contents</h2><Contents /></div>
        </nav>

        <div className={styles.readingArea}>
          <details className={styles.mobileContents}>
            <summary>Contents</summary><nav aria-label="Article contents"><Contents /></nav>
          </details>

          <article className={styles.article} aria-labelledby="word-title">
            <header className={styles.wordHeader}>
              <p className={styles.entryLabel}>WORD REFERENCE</p>
              <h1 id="word-title">Astramize</h1>
              <p className={styles.phonetic}>/ˈæstrəmaɪz/</p>
              <p className={styles.grammar}><strong>Verb</strong><span>astramizes · astramizing · astramized</span></p>
            </header>

            <section className={styles.section} id="definition">
              <Heading index={0} />
              <ol className={styles.definitions}>
                <li>To transform an ambitious idea into reality.<q>We astramize bold ideas into real-world solutions.</q></li>
                <li>To take visionary thinking and turn it into real-world impact through innovation, execution, and consistent action.<q>It’s time to astramize your ideas.</q></li>
              </ol>
            </section>

            <aside className={styles.infobox} aria-labelledby="infobox-title">
              <h2 id="infobox-title">Astramize</h2>
              <dl>
                <div><dt>Part of speech</dt><dd>Verb</dd></div>
                <div><dt>Pronunciation</dt><dd>/ˈæstrəmaɪz/</dd></div>
                <div><dt>Meaning</dt><dd>To transform an ambitious idea into reality.</dd></div>
                <div><dt>Origin</dt><dd>Modern coined term</dd></div>
                <div><dt>First recorded use</dt><dd><a href="#first-recorded-use">September 2026</a><small>As currently claimed by this entry</small></dd></div>
                <div><dt>Related forms</dt><dd>astramizes<br />astramizing<br />astramized<br />astramization</dd></div>
              </dl>
            </aside>

            <section className={styles.section} id="etymology">
              <Heading index={1} />
              <p><dfn>Astramize</dfn> is a modern coined word. Its proposed construction combines <i>Astra</i>—evoking stars, aspiration, guidance, and a brighter future—with the ending <i>-mize</i>, intended here to suggest making, causing, or bringing about a result.</p>
              <p className={styles.note}>This describes the intended construction of the coined term, rather than an established historical derivation or a claim that “-mize” is a standard English suffix.</p>
            </section>

            <section className={styles.section} id="pronunciation">
              <Heading index={2} />
              <p className={styles.pronunciation}>/ˈæstrəmaɪz/ <span>Suggested pronunciation · stress on the first syllable</span></p>
            </section>

            <section className={styles.section} id="usage">
              <Heading index={3} />
              <p>The verb is used in contexts of innovation, entrepreneurship, and technology to describe moving an ambitious idea toward a tangible result. It emphasizes execution and transformation: turning an intention or vision into something realized through action.</p>
            </section>

            <section className={styles.section} id="examples">
              <Heading index={4} />
              <ol className={styles.examples}>
                <li>“They <strong>astramized</strong> their startup idea into a global product.”</li>
                <li>“With the right tools and mindset, you can <strong>astramize</strong> your biggest ideas.”</li>
                <li>“Our mission is to help entrepreneurs <strong>astramize</strong> their vision.”</li>
              </ol>
              <p className={styles.exampleNote}>Illustrative examples, not quotations from independently documented usage.</p>
            </section>

            <section className={styles.section} id="first-recorded-use">
              <Heading index={5} />
              <p><strong><time dateTime="2026-09">September 2026</time></strong> — the first publicly documented use currently claimed by this page, on <a href="/">Astramize.com</a>, as part of the introduction and definition of the word.</p>
              <p className={styles.note}>This is a record of the claim made here. It does not establish that no earlier private or undocumented use existed.</p>
            </section>

            <section className={styles.section} id="related-forms">
              <Heading index={6} />
              <table className={styles.forms}>
                <caption>Grammatical forms of Astramize</caption>
                <thead><tr><th scope="col">Form</th><th scope="col">Type</th></tr></thead>
                <tbody>{[
                  ['astramize', 'Base verb'], ['astramizes', 'Third-person singular'],
                  ['astramizing', 'Present participle'], ['astramized', 'Past tense / past participle'],
                  ['astramization', 'Noun — the act or process of astramizing'],
                ].map(([form, type]) => <tr key={form}><th scope="row">{form}</th><td>{type}</td></tr>)}</tbody>
              </table>
            </section>

            <section className={styles.section} id="documentation">
              <Heading index={7} />
              <p>This page serves as public documentation of the term and its intended meaning. Future independent usages may be added with their dates, sources, and context. No independent usage is cited in this entry yet.</p>
              <div className={styles.source}><span className={styles.sourceLabel}>CURRENT RECORD</span><p><time dateTime="2026-09">September 2026</time> · <a href="/astramize">Astramize.com — this entry</a></p><p className={styles.note}>Context: introduction and definition of the modern coined verb.</p></div>
            </section>

            <section className={styles.section} id="see-also">
              <Heading index={8} />
              <ul className={styles.seeAlso}>{['Innovation', 'Execution', 'Impact', 'Entrepreneurship', 'Transformation'].map(concept => <li key={concept}><a href={`https://en.wiktionary.org/wiki/${concept.toLowerCase()}#English`}>{concept}</a></li>)}</ul>
            </section>
          </article>
          <div className={styles.entryFooter}><span>ASTRAMIZE · WORD REFERENCE</span><a href="#word-title">Back to top ↑</a></div>
        </div>
      </div>
    </div>
  </main>;
}
