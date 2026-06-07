import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import './Hero.css';
import profileImage from '../../Assests/image.png';
import resumePdf from '../../Assests/Omansh Srivastava Resume.pdf';

const Hero = () => {
  return (
    <section id="about" className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            Civil Engineering x AI
          </div>
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Omansh Srivastava</span>
          </h1>
          <h2 className="hero-subtitle">
            Bridging the gap between Physical Infrastructure and Digital Innovation.
          </h2>
          <p className="hero-description">
            I am a Civil Engineering undergraduate at Abdul Kalam Technical University, 
            passionate about leveraging Artificial Intelligence and automation to revolutionize 
            civil design, workflows, and global infrastructure.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View My Work <ArrowRight size={20} />
            </a>
            <a href={resumePdf} download="Omansh_Srivastava_Resume.pdf" className="btn btn-secondary">
              <Download size={20} /> Resume
            </a>
            <a href="mailto:omanshsrivastava2005@gmail.com" className="btn btn-secondary">
              Contact Me
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-image-container">
            <img src={profileImage} alt="Omansh Srivastava" className="hero-profile-image" />
            <div className="image-glow"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
