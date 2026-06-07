import React from 'react';
import { Mail, Linkedin, MapPin, Phone } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>Omansh Srivastava</h3>
            <p>Bridging Civil Engineering and AI.</p>
          </div>
          
          <div className="footer-contact">
            <a href="mailto:omanshsrivastava2005@gmail.com" className="contact-link">
              <Mail size={18} />
              omanshsrivastava2005@gmail.com
            </a>
            <a href="tel:+916306484423" className="contact-link">
              <Phone size={18} />
              +91 6306484423
            </a>
            <span className="contact-link">
              <MapPin size={18} />
              Lucknow, India
            </span>
            <a href="https://linkedin.com/in/omansh-srivastava" target="_blank" rel="noreferrer" className="contact-link">
              <Linkedin size={18} />
              LinkedIn Profile
            </a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Omansh Srivastava. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
