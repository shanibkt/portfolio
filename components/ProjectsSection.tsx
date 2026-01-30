'use client';

import { useContext } from 'react';
import { ProjectModalContext } from '@/components/ProjectModal';

export function ProjectsSection() {
  const { openModal } = useContext(ProjectModalContext) || { openModal: () => {} };

  const projects = [
    {
      id: 'fees-app',
      title: 'Students & Fees Management',
      desc: 'A comprehensive mobile solution for educational institutions to track fees and student data.',
      tech: ['Flutter', 'Firebase'],
      img: 'assets/project1.png'
    },
    {
      id: 'career-app',
      title: 'Career Guidance App',
      desc: 'Full-stack web platform helping students discover their ideal career path using data-driven insights.',
      tech: ['Flutter', 'ASP.NET Core', 'MySQL'],
      img: 'assets/project2.png'
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <article
              key={project.id}
              className="project-card glass-card"
              onClick={() => openModal(project)}
            >
              <div className="card-image">
                <img src={project.img} alt={project.title} />
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.desc}</p>
                <div className="project-tech">
                  {project.tech.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
                <button className="btn-link">View Details &rarr;</button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
