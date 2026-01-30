export function SkillsSection() {
  const skills = [
    {
      icon: '📱',
      title: 'Mobile Dev',
      items: ['Flutter', 'Dart', 'State Management']
    },
    {
      icon: '⚙️',
      title: 'Backend',
      items: ['ASP.NET Core', 'Web API', 'C#']
    },
    {
      icon: '🗄️',
      title: 'Database',
      items: ['MySQL', 'Firebase Firestore', 'SQL Server']
    },
    {
      icon: '🛠️',
      title: 'Tools',
      items: ['Git & GitHub', 'Figma', 'Postman']
    }
  ];

  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">Skills & Expertise</h2>
        <div className="skills-grid">
          {skills.map((skill) => (
            <div key={skill.title} className="skill-card glass-card">
              <div className="icon-box">{skill.icon}</div>
              <h3>{skill.title}</h3>
              <ul className="skill-list">
                {skill.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
