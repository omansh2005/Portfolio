import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <div className="logo">
          <span className="logo-accent">O</span>mansh.
        </div>
        
        <div className="desktop-menu">
          <a href="#about" className="nav-link">About</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#experience" className="nav-link">Experience</a>
          <a href="#achievements" className="nav-link">Achievements</a>
          <a href="#certificates" className="nav-link">Certificates</a>
        </div>

        <button className="mobile-menu-btn" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="mobile-menu">
          <a href="#about" className="nav-link" onClick={toggleMenu}>About</a>
          <a href="#projects" className="nav-link" onClick={toggleMenu}>Projects</a>
          <a href="#experience" className="nav-link" onClick={toggleMenu}>Experience</a>
          <a href="#achievements" className="nav-link" onClick={toggleMenu}>Achievements</a>
          <a href="#certificates" className="nav-link" onClick={toggleMenu}>Certificates</a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
