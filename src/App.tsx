function LogoMark() {
  return <span className="logo-mark" aria-hidden="true">d</span>
}

function Icon({ name }: { name: 'book' | 'bulb' | 'link' | 'file' | 'sparkles' | 'notes' }) {
  const paths = {
    book: <><path d="M12 6.5C10.5 5.5 8.5 5 5 5v14c3.5 0 5.5.5 7 1.5"/><path d="M12 6.5C13.5 5.5 15.5 5 19 5v14c-3.5 0-5.5.5-7 1.5"/><path d="M12 6.5v14"/></>,
    bulb: <><path d="M9 18h6"/><path d="M10 21h4"/><path d="M8.2 14.5a6 6 0 1 1 7.6 0c-.9.7-1.3 1.5-1.4 2.5h-4.8c-.1-1-.5-1.8-1.4-2.5Z"/></>,
    link: <><path d="M10 13a5 5 0 0 0 7.1 0l2-2A5 5 0 0 0 12 3.9l-1.1 1.1"/><path d="M14 11a5 5 0 0 0-7.1 0l-2 2A5 5 0 0 0 12 20.1l1.1-1.1"/></>,
    file: <><path d="M7 3h7l5 5v13H7z"/><path d="M14 3v5h5"/></>,
    sparkles: <><path d="m12 3 1.5 5.5L19 10l-5.5 1.5L12 17l-1.5-5.5L5 10l5.5-1.5L12 3Z"/><path d="m19 16 .7 2.3L22 19l-2.3.7L19 22l-.7-2.3L16 19l2.3-.7L19 16Z"/></>,
    notes: <><path d="M6 3h9l4 4v14H6z"/><path d="M14 3v5h5"/><path d="M9 12h7M9 16h7"/></>
  }
  return <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">{paths[name]}</svg>
}

function ProductPreview() {
  return <div className="product-preview" aria-label="Illustration showing lecture notes transformed into an explanation">
    <div className="preview-halo" />
    <div className="lecture-card">
      <div className="lecture-head"><span className="pdf-badge">PDF</span><div><strong>Machine Learning Lecture Notes</strong><small>Page 12</small></div><span className="more">•••</span></div>
      <div className="lecture-content">
        <div className="line dark short" /><div className="line long" /><div className="line mid" />
        <div className="highlight-lines"><div /><div /><div /></div>
        <div className="line long" /><div className="line mid" /><div className="line long" /><div className="line short" /><div className="line mid" />
      </div>
    </div>
    <div className="flow-arrow" aria-hidden="true">↘</div>
    <div className="tutor-card">
      <div className="tutor-head"><span className="mini-logo">d</span><strong>DocuMind Learn</strong></div>
      <div className="question">Can you explain this concept in simpler terms?</div>
      <h4>Here’s a clearer explanation</h4>
      <p>In simpler terms, gradient descent is a method for finding the best values for a model by gradually reducing the error.</p>
      <div className="example-box"><strong>💡 Example</strong><p>Think of it like hiking down a mountain — you keep taking small steps in the direction that goes downhill until you reach the lowest point.</p></div>
      <div className="source-box"><strong>Source from your notes</strong><div><Icon name="notes" /> <span>Lecture Notes, page 12</span></div><small>“Gradient descent updates the parameters in the direction of the negative gradient...”</small></div>
    </div>
    <span className="decor decor-one">✳</span><span className="decor decor-two">✳</span>
  </div>
}

export default function App() {
  return <main>
    <header className="site-header">
      <a className="brand" href="#home" aria-label="DocuMind Learn home"><LogoMark/><span>documind <i>learn</i></span></a>
      <nav aria-label="Main navigation"><a href="#how-it-works">How it works</a><a href="#benefits">Benefits</a><a href="#approach">Our approach</a><a href="#about">About</a></nav>
      <a className="header-cta" href="#how-it-works">See how it works <span>↗</span></a>
    </header>

    <section className="hero" id="home">
      <div className="hero-copy">
        <div className="eyebrow"><span className="eyebrow-dot" /> Turn your study material into understanding</div>
        <h1>Your lecture notes<br/>made clear.<br/><em>So you can learn<br/>with confidence.</em></h1>
        <p className="hero-description">Upload your lecture PDFs and get clear explanations, simple examples, summaries, and answers — all grounded in your own documents.</p>
        <div className="hero-actions"><a className="primary-button" href="#how-it-works">See how it works <span>↗</span></a><a className="secondary-button" href="#approach">Explore the approach</a></div>
        <div className="hero-points"><span><b>✓</b> Clear explanations</span><span><b>✓</b> Examples &amp; summaries</span><span><b>✓</b> Cited from your notes</span></div>
      </div>
      <ProductPreview />
    </section>

    <section className="benefits section" id="benefits">
      <div className="section-intro"><span className="section-kicker">WHY DOCUMIND LEARN</span><h2>Study smarter, not harder.</h2><p>Turn your existing study material into real understanding — with clear explanations,<br className="desktop-break"/> practical examples, and trusted sources.</p></div>
      <div className="benefit-grid">
        <article className="benefit-card"><span className="benefit-icon purple"><Icon name="book" /></span><h3>Understand difficult concepts</h3><p>Get explanations in simple, student-friendly language.</p></article>
        <article className="benefit-card"><span className="benefit-icon amber"><Icon name="bulb" /></span><h3>Learn with examples</h3><p>See real-world examples that connect theory to practice.</p></article>
        <article className="benefit-card"><span className="benefit-icon green"><Icon name="link" /></span><h3>Know where answers come from</h3><p>Every explanation is grounded in your documents, with page references.</p></article>
      </div>
    </section>

    <section className="how-section" id="how-it-works">
      <div className="section-intro"><span className="section-kicker purple-text">HOW IT WORKS</span><h2>From your notes to understanding — in three steps.</h2></div>
      <div className="steps">
        <article className="step-card"><span className="step-number">1</span><span className="step-icon"><Icon name="file" /></span><h3>Start with your study material</h3><p>Use your lecture PDFs, class notes, or other documents.</p></article>
        <span className="step-arrow">→</span>
        <article className="step-card"><span className="step-number">2</span><span className="step-icon"><Icon name="sparkles" /></span><h3>Ask your question</h3><p>Get clear explanations, summaries, or examples on any topic.</p></article>
        <span className="step-arrow">→</span>
        <article className="step-card"><span className="step-number">3</span><span className="step-icon"><Icon name="notes" /></span><h3>Learn with confidence</h3><p>See answers grounded in your documents, with page references.</p></article>
      </div>
    </section>

    <section className="audience-section" id="approach">
      <div className="audience-copy"><span className="section-kicker">BUILT FOR STUDENTS</span><h2>A better way to learn<br/>from <em>your own notes.</em></h2><p>DocuMind Learn helps you turn dense lecture notes into clear, structured explanations — so you can focus on understanding, not just memorising.</p><a className="primary-button" href="#how-it-works">See how it works <span>↗</span></a></div>
      <ul className="check-list"><li><span>✓</span> Works with your existing lecture PDFs</li><li><span>✓</span> Clear, easy-to-follow explanations</li><li><span>✓</span> Practical examples and summaries</li><li><span>✓</span> Cited sources from your documents</li><li><span>✓</span> Designed for curious minds and lifelong learners</li></ul>
    </section>

    <section className="closing" id="about"><div className="closing-mark">✳</div><span className="section-kicker">DOCUMIND LEARN</span><h2>Understand more.<br/><em>Stress a little less.</em></h2><p>A calmer, more personal way to learn from the material you already have.</p><a className="text-link" href="#home">Back to the beginning ↑</a></section>
    <footer className="site-footer"><a className="brand footer-brand" href="#home"><LogoMark/><span>documind <i>learn</i></span></a><span>Made for the joy of understanding.</span><span>© {new Date().getFullYear()} DocuMind Learn</span></footer>
  </main>
}
