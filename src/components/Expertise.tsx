export default function Expertise() {
  return (
    <section id="expertise" className="expertise wrap" aria-labelledby="expertise-title">
      <div className="expertise-intro">
        <div className="eyebrow">MY SPECIALTIES</div>
        <h2 id="expertise-title">AI expertise.<br /><em>Full-stack depth.</em></h2>
        <p>Learn how intelligent features and complete applications come together, with personal guidance from idea to implementation.</p>
      </div>
      <div className="expertise-grid">
        <article className="expertise-card">
          <div className="eyebrow">01 / ARTIFICIAL INTELLIGENCE</div>
          <h3>Make AI useful in real products.</h3>
          <p>Explore AI-powered features, connect models to application workflows, and learn to evaluate their outputs. Build the judgment to decide where AI adds value and how to use it thoughtfully.</p>
          <div className="tags"><span>AI integration</span><span>Practical workflows</span><span>Output evaluation</span></div>
        </article>
        <article className="expertise-card">
          <div className="eyebrow">02 / FULL-STACK DEVELOPMENT</div>
          <h3>Understand the whole application.</h3>
          <p>Connect responsive interfaces, backend APIs, and databases into a working product. Practice debugging across layers and learn how architectural decisions shape a maintainable application.</p>
          <div className="tags"><span>Frontend & backend</span><span>APIs & data</span><span>Application architecture</span></div>
        </article>
      </div>
    </section>
  );
}
