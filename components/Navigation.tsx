'use client';

import { useState } from 'react';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = '';
  };

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <a href="#hero" className="logo">
          MS<span>.</span>
        </a>

        <ul className={`nav-links ${isMenuOpen ? 'nav-active' : ''}`}>
          <li><a href="#about" onClick={closeMenu}>About</a></li>
          <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
          <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
          <li><a href="#services" onClick={closeMenu}>Services</a></li>
          <li><a href="#contact" className="btn-primary" onClick={closeMenu}>Contact</a></li>
        </ul>

        <button
          className="mobile-menu-btn"
          aria-label="Toggle navigation"
          onClick={toggleMenu}
        >
          <span style={isMenuOpen ? { transform: 'rotate(45deg) translate(5px, 6px)' } : {}}></span>
          <span style={isMenuOpen ? { opacity: 0 } : {}}></span>
          <span style={isMenuOpen ? { transform: 'rotate(-45deg) translate(5px, -6px)' } : {}}></span>
        </button>
      </div>
    </nav>
  );
}
