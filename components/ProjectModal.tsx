'use client';

import { createContext, useState, ReactNode } from 'react';

interface Project {
  id: string;
  title: string;
  desc: string;
  tech: string[];
  img: string;
}

export const ProjectModalContext = createContext<{
  openModal: (project: Project) => void;
} | null>(null);

export function ProjectModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedProject(null);
  };

  const projectDetails: Record<string, { title: string; desc: string; tech: string[] }> = {
    'fees-app': {
      title: 'Students & Fees Management Application',
      desc: 'A robust mobile application built with Flutter and Firebase designed to streamline administrative tasks for educational institutions. It features real-time database updates, secure authentication, and an intuitive dashboard for tracking fee payments and student records.',
      tech: ['Flutter', 'Firebase', 'Dart', 'State Management']
    },
    'career-app': {
      title: 'Career Guidance Application',
      desc: 'A comprehensive full-stack web solution that helps students make informed career decisions. Built using ASP.NET Core for a powerful backend API and MySQL for reliable data storage, this application analyzes user interests and provides data-driven career path recommendations.',
      tech: ['ASP.NET Core', 'MySQL', 'Flutter Web', 'REST API']
    }
  };

  const details = selectedProject ? projectDetails[selectedProject.id] : null;

  return (
    <ProjectModalContext.Provider value={{ openModal }}>
      {isOpen && (
        <div className="modal active" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={closeModal}>&times;</button>
            <div className="modal-body">
              {selectedProject && (
                <>
                  <div className="modal-image-container">
                    <img src={selectedProject.img} alt={selectedProject.title} />
                  </div>
                  <div className="modal-info">
                    <h2>{details?.title || selectedProject.title}</h2>
                    <div className="project-tech">
                      {(details?.tech || selectedProject.tech).map((tech) => (
                        <span key={tech}>{tech}</span>
                      ))}
                    </div>
                    <p>{details?.desc || selectedProject.desc}</p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </ProjectModalContext.Provider>
  );
}
