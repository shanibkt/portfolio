export function ServicesSection() {
  const services = [
    {
      title: 'Flutter Development',
      desc: 'High-performance, pixel-perfect mobile applications for iOS and Android.'
    },
    {
      title: 'API Integration',
      desc: 'Seamlessly connecting front-end interfaces with robust backend services.'
    },
    {
      title: 'Full-Stack Solutions',
      desc: 'End-to-end development from database design to user interface.'
    }
  ];

  return (
    <section id="services" className="section">
      <div className="container">
        <h2 className="section-title">Services</h2>
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.title} className="service-card glass-card">
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
