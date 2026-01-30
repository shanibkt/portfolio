import Image from 'next/image';

export function HeroSection() {
  return (
    <section id="hero" className="hero-section">
      <div className="container hero-container">
        <div className="hero-content">
          <span className="greeting-badge">👋 Hello, I&apos;m</span>
          <h1 className="name">Mohammed <br /> Shanib K T</h1>
          <h2 className="role">Flutter & ASP.NET <br /> <span className="gradient-text">Full-Stack Developer</span></h2>
          <p className="tagline">Crafting robust backend systems and beautiful mobile experiences.</p>
          <div className="cta-group">
            <a href="#projects" className="btn-primary">View Projects</a>
            <a href="#contact" className="btn-secondary">Contact Me</a>
          </div>
        </div>
        <div className="hero-image">
          <div className="image-wrapper">
            <img
              src="https://github.com/shanibkt.png"
              alt="Mohammed Shanib K T"
              width={350}
              height={350}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
