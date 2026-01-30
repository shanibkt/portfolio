export function ContactSection() {
  return (
    <section id="contact" className="section">
      <div className="container contact-container">
        <h2 className="section-title">Let&apos;s Work Together</h2>
        <div className="contact-card glass-card">
          <p className="contact-lead">I am open to internships and entry-level opportunities.</p>
          <div className="contact-links">
            <a href="mailto:your.email@example.com" className="contact-btn">
              <span className="icon">✉️</span> Email
            </a>
            <a href="https://github.com/shanibkt" target="_blank" rel="noopener noreferrer" className="contact-btn">
              <span className="icon">🐙</span> GitHub
            </a>
            <a href="https://www.linkedin.com/in/shanib-k-t-/" target="_blank" rel="noopener noreferrer" className="contact-btn">
              <span className="icon">💼</span> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
