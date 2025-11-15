/**
 * About Page Component - Personal information and biography
 * Features: Professional photo placeholder, bio, resume download link
 * Includes skills showcase and personal highlights
 */

import React from 'react';
import { personalInfo, bio, skills } from '../../data/portfolio-data';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero section">
        <div className="container">
          <div className="about-hero-content">
            <div className="about-image animate-slide-left">
              {/* Professional Photo Placeholder */}
              <div className="profile-image">
                <div className="profile-placeholder">
                  <span className="profile-initials">MS</span>
                </div>
                <div className="image-decoration">
                  <div className="decoration-circle"></div>
                  <div className="decoration-square"></div>
                </div>
              </div>
            </div>
            
            <div className="about-intro animate-slide-right">
              <h1 className="about-title">About {personalInfo.name}</h1>
              <h2 className="about-subtitle">{personalInfo.title}</h2>
              
              <div className="about-bio">
                {bio.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="bio-paragraph">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Contact Info */}
              <div className="about-contact">
                <div className="contact-item">
                  <span className="contact-icon">📧</span>
                  <a href={`mailto:${personalInfo.email}`} className="contact-link">
                    {personalInfo.email}
                  </a>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📱</span>
                  <a href={`tel:${personalInfo.phone}`} className="contact-link">
                    {personalInfo.phone}
                  </a>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📍</span>
                  <span>{personalInfo.location}</span>
                </div>
              </div>

              {/* Resume Download */}
              <div className="about-actions">
                <a 
                  href={personalInfo.resumePDF} 
                  download="Mandeep_Singh_Resume.pdf"
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="btn-icon">📄</span>
                  Download Resume
                </a>
                <a 
                  href={personalInfo.linkedIn} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  <span className="btn-icon">💼</span>
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills-section section bg-secondary">
        <div className="container">
          <h2 className="section-title">Technical Skills</h2>
          
          <div className="skills-grid">
            {/* Frontend Skills */}
            <div className="skill-category card">
              <div className="category-header">
                <span className="category-icon">🎨</span>
                <h3>Frontend Development</h3>
              </div>
              <div className="skills-list">
                {skills.frontend.map((skill, index) => (
                  <span key={index} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Backend Skills */}
            <div className="skill-category card">
              <div className="category-header">
                <span className="category-icon">⚙️</span>
                <h3>Backend Development</h3>
              </div>
              <div className="skills-list">
                {skills.backend.map((skill, index) => (
                  <span key={index} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools & Technologies */}
            <div className="skill-category card">
              <div className="category-header">
                <span className="category-icon">🔧</span>
                <h3>Tools & Technologies</h3>
              </div>
              <div className="skills-list">
                {skills.tools.map((skill, index) => (
                  <span key={index} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Programming Languages */}
            <div className="skill-category card">
              <div className="category-header">
                <span className="category-icon">💻</span>
                <h3>Programming Languages</h3>
              </div>
              <div className="skills-list">
                {skills.languages.map((skill, index) => (
                  <span key={index} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Highlights */}
      <section className="highlights-section section">
        <div className="container">
          <h2 className="section-title">What Drives Me</h2>
          
          <div className="highlights-grid">
            <div className="highlight-card animate-fade-in">
              <div className="highlight-icon">🚀</div>
              <h3>Innovation</h3>
              <p>
                I'm passionate about exploring new technologies and finding creative 
                solutions to complex problems. Every project is an opportunity to learn 
                and push boundaries.
              </p>
            </div>

            <div className="highlight-card animate-fade-in">
              <div className="highlight-icon">🎯</div>
              <h3>Quality</h3>
              <p>
                I believe in writing clean, maintainable code and creating user 
                experiences that are not just functional, but delightful and 
                accessible to everyone.
              </p>
            </div>

            <div className="highlight-card animate-fade-in">
              <div className="highlight-icon">🤝</div>
              <h3>Collaboration</h3>
              <p>
                I thrive in team environments and enjoy sharing knowledge with others. 
                The best solutions come from diverse perspectives and open communication.
              </p>
            </div>

            <div className="highlight-card animate-fade-in">
              <div className="highlight-icon">📚</div>
              <h3>Learning</h3>
              <p>
                Technology evolves rapidly, and I'm committed to continuous learning. 
                I stay updated with the latest trends and best practices in web development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="about-cta section bg-primary">
        <div className="container">
          <div className="cta-content text-center">
            <h2 className="cta-title">Ready to Work Together?</h2>
            <p className="cta-description">
              I'm always interested in discussing new opportunities and exciting projects. 
              Let's connect and see how we can create something amazing together.
            </p>
            <div className="cta-actions">
              <a href="/contact" className="btn btn-outline btn-light">
                Get In Touch
              </a>
              <a href="/projects" className="btn btn-secondary">
                View My Projects
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;