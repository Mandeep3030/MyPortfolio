/**
 * Footer Component - Global site footer
 * Features: Social links, contact info, copyright
 * Responsive design with professional styling
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { contactInfo, personalInfo } from '../../data/portfolio-data';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer bg-dark" role="contentinfo">
      <div className="footer-container container">
        <div className="footer-content">
          {/* Brand Section */}
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="logo-icon">
                <span className="logo-text">MS</span>
              </div>
              <h3 className="footer-title">{personalInfo.name}</h3>
            </div>
            <p className="footer-description">
              Full Stack Developer creating innovative web solutions with modern technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-links">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-nav">
              <li><Link to="/" className="footer-link">Home</Link></li>
              <li><Link to="/about" className="footer-link">About</Link></li>
              <li><Link to="/projects" className="footer-link">Projects</Link></li>
              <li><Link to="/education" className="footer-link">Education</Link></li>
              <li><Link to="/services" className="footer-link">Services</Link></li>
              <li><Link to="/contact" className="footer-link">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-contact">
            <h4 className="footer-heading">Get In Touch</h4>
            <div className="footer-contact-info">
              <p className="footer-contact-item">
                <span className="contact-icon">📧</span>
                <a href={`mailto:${contactInfo.email}`} className="footer-link">
                  {contactInfo.email}
                </a>
              </p>
              <p className="footer-contact-item">
                <span className="contact-icon">📱</span>
                <a href={`tel:${contactInfo.phone}`} className="footer-link">
                  {contactInfo.phone}
                </a>
              </p>
              <p className="footer-contact-item">
                <span className="contact-icon">📍</span>
                <span>{contactInfo.location}</span>
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="footer-social">
            <h4 className="footer-heading">Connect</h4>
            <div className="social-links">
              <a 
                href={contactInfo.socialLinks.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                aria-label="LinkedIn Profile"
              >
                <span className="social-icon">💼</span>
                LinkedIn
              </a>
              <a 
                href={contactInfo.socialLinks.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                aria-label="GitHub Profile"
              >
                <span className="social-icon">💻</span>
                GitHub
              </a>
              <a 
                href={contactInfo.socialLinks.email}
                className="social-link"
                aria-label="Send Email"
              >
                <span className="social-icon">✉️</span>
                Email
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="footer-copyright">
              © {currentYear} {personalInfo.name}. All rights reserved.
            </p>
            <p className="footer-built">
              Built with React & Vite • Designed with ❤️
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;