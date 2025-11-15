/**
 * Home Page Component - Landing page with hero section
 * Features: Welcome message, mission statement, call-to-action button
 * Responsive design with engaging animations
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { personalInfo, missionStatement } from '../../data/portfolio-data';
import { useAuth } from '../../context/AuthContext';
import './Home.css';

const Home = () => {
  const { isAuthenticated, user } = useAuth();
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          {/* Animated background elements */}
          <div className="hero-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
          </div>
        </div>

        <div className="hero-container container">
          <div className="hero-content">
            <div className="hero-text animate-fade-in">
              {/* Welcome Message */}
              <div className="hero-greeting">
                <span className="greeting-text">Hello, I'm</span>
              </div>
              
              {isAuthenticated && (
                <div className="auth-user-greeting">Welcome, {user?.name || user?.email}</div>
              )}
              <h1 className="hero-title">
                <span className="name-highlight">{personalInfo.name}</span>
              </h1>
              
              <h2 className="hero-subtitle">
                {personalInfo.title}
              </h2>

              {/* Mission Statement */}
              <div className="hero-mission">
                <p className="mission-text">
                  {missionStatement}
                </p>
              </div>

              {/* Call to Action */}
              <div className="hero-actions">
                <Link to="/about" className="btn btn-primary hero-cta">
                  <span>Discover My Story</span>
                  <span className="cta-arrow">→</span>
                </Link>
                
                <Link to="/projects" className="btn btn-secondary">
                  View My Work
                </Link>
              </div>

              {/* Quick Stats */}
              <div className="hero-stats">
                <div className="stat-item">
                  <span className="stat-number">3+</span>
                  <span className="stat-label">Projects</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">10+</span>
                  <span className="stat-label">Technologies</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">1+</span>
                  <span className="stat-label">Years Learning</span>
                </div>
              </div>
            </div>

            {/* Hero Image/Visual Element */}
            <div className="hero-visual animate-slide-right">
              <div className="hero-card">
                <div className="card-content">
                  <div className="profile-section">
                    <div className="profile-avatar">
                      <span className="avatar-text">MS</span>
                    </div>
                    <div className="profile-info">
                      <h3>{personalInfo.name}</h3>
                      <p>{personalInfo.title}</p>
                      <div className="profile-location">
                        <span className="location-icon">📍</span>
                        <span>{personalInfo.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="tech-showcase">
                    <div className="tech-item">React</div>
                    <div className="tech-item">Node.js</div>
                    <div className="tech-item">JavaScript</div>
                    <div className="tech-item">MongoDB</div>
                  </div>
                  
                  <div className="status-indicator">
                    <div className="status-dot"></div>
                    <span>Available for opportunities</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator">
          <div className="scroll-arrow">
            <span>↓</span>
          </div>
          <span className="scroll-text">Scroll to explore</span>
        </div>
      </section>

      {/* Quick About Section */}
      <section className="home-about-section section bg-secondary">
        <div className="container">
          <div className="home-about-content">
            <div className="about-text">
              <h3 className="section-title">Passionate About Technology</h3>
              <p>
                As a Software Engineering Technology student at Centennial College, 
                I'm dedicated to creating innovative web solutions that make a difference. 
                My journey in full-stack development combines creativity with technical expertise.
              </p>
              <Link to="/about" className="btn btn-outline">
                Learn More About Me
              </Link>
            </div>
            <div className="about-highlights">
              <div className="highlight-item">
                <div className="highlight-icon">🎓</div>
                <h4>Education</h4>
                <p>Software Engineering at Centennial College</p>
              </div>
              <div className="highlight-item">
                <div className="highlight-icon">💻</div>
                <h4>Expertise</h4>
                <p>Full-Stack Web Development</p>
              </div>
              <div className="highlight-item">
                <div className="highlight-icon">🚀</div>
                <h4>Passion</h4>
                <p>Building innovative solutions</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;