/**
 * Services Page Component - Professional services offered
 * Features: Service cards with icons, descriptions, and technologies
 * Includes pricing approach and service process information
 */

import React from 'react';
import { services } from '../../data/portfolio-data';
import './Services.css';

const Services = () => {
  return (
    <div className="services-page">
      {/* Page Header */}
      <section className="services-header section">
        <div className="container">
          <div className="header-content text-center">
            <h1 className="page-title animate-fade-in">My Services</h1>
            <p className="page-subtitle animate-fade-in">
              I offer comprehensive web development services, from frontend design to 
              full-stack solutions. Let's build something amazing together.
            </p>
          </div>
          
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-grid-section section">
        <div className="container">
          <div className="services-grid">
            {services.map((service, index) => (
              <div 
                key={service.id} 
                className={`service-card card animate-fade-in`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="service-header">
                  <div className="service-icon">
                    <span>{service.icon}</span>
                  </div>
                  <h3 className="service-title">{service.title}</h3>
                </div>
                
                <div className="service-content">
                  <p className="service-description">{service.description}</p>
                  
                  <div className="service-technologies">
                    <h4>Technologies Used:</h4>
                    <div className="tech-list">
                      {service.technologies.map((tech, idx) => (
                        <span key={idx} className="tech-badge">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="service-features">
                    <h4>What You Get:</h4>
                    <ul className="features-list">
                      {service.id === 1 && (
                        <>
                          <li>Responsive & mobile-first design</li>
                          <li>Cross-browser compatibility</li>
                          <li>Performance optimization</li>
                          <li>SEO-friendly markup</li>
                        </>
                      )}
                      {service.id === 2 && (
                        <>
                          <li>RESTful API development</li>
                          <li>Database design & optimization</li>
                          <li>Security best practices</li>
                          <li>Scalable architecture</li>
                        </>
                      )}
                      {service.id === 3 && (
                        <>
                          <li>Complete project planning</li>
                          <li>Frontend & backend integration</li>
                          <li>Testing & quality assurance</li>
                          <li>Deployment & maintenance</li>
                        </>
                      )}
                      {service.id === 4 && (
                        <>
                          <li>Performance auditing</li>
                          <li>SEO optimization</li>
                          <li>Accessibility improvements</li>
                          <li>Code refactoring</li>
                        </>
                      )}
                    </ul>
                  </div>
                </div>

                <div className="service-action">
                  <a href="/contact" className="btn btn-primary service-btn">
                    Discuss This Service
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section section bg-secondary">
        <div className="container">
          <h2 className="section-title">My Development Process</h2>
          <p className="process-intro text-center">
            I follow a structured approach to ensure high-quality results and clear communication throughout the project.
          </p>
          
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">01</div>
              <div className="step-content">
                <h3>Discovery & Planning</h3>
                <p>
                  Understanding your requirements, target audience, and project goals. 
                  We'll define the scope, timeline, and technical approach together.
                </p>
              </div>
            </div>

            <div className="process-step">
              <div className="step-number">02</div>
              <div className="step-content">
                <h3>Design & Prototyping</h3>
                <p>
                  Creating wireframes and prototypes to visualize the user experience. 
                  This phase ensures we're aligned on the design direction before development.
                </p>
              </div>
            </div>

            <div className="process-step">
              <div className="step-number">03</div>
              <div className="step-content">
                <h3>Development & Testing</h3>
                <p>
                  Building your application with clean, maintainable code. 
                  Regular testing ensures quality and performance throughout development.
                </p>
              </div>
            </div>

            <div className="process-step">
              <div className="step-number">04</div>
              <div className="step-content">
                <h3>Review & Launch</h3>
                <p>
                  Final review, feedback implementation, and deployment. 
                  I provide documentation and support for a smooth launch.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Me */}
      <section className="why-choose-section section">
        <div className="container">
          <h2 className="section-title">Why Work With Me</h2>
          
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">🎓</div>
              <h3>Academic Foundation</h3>
              <p>
                Strong theoretical background in software engineering principles, 
                ensuring robust and well-architected solutions.
              </p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">⚡</div>
              <h3>Modern Technologies</h3>
              <p>
                Up-to-date with the latest frameworks and tools, 
                delivering cutting-edge solutions that stand the test of time.
              </p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">🔄</div>
              <h3>Agile Approach</h3>
              <p>
                Flexible development methodology with regular check-ins 
                and iterative improvements based on your feedback.
              </p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">💬</div>
              <h3>Clear Communication</h3>
              <p>
                Regular updates on project progress, transparent timelines, 
                and always available for questions and discussions.
              </p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">🛡️</div>
              <h3>Quality Assurance</h3>
              <p>
                Thorough testing, clean code practices, and attention to detail 
                ensure reliable and maintainable applications.
              </p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">🚀</div>
              <h3>Future-Ready</h3>
              <p>
                Building scalable solutions that can grow with your business 
                and adapt to changing requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Approach */}
      <section className="pricing-section section bg-secondary">
        <div className="container">
          <h2 className="section-title">Pricing Approach</h2>
          
          <div className="pricing-content">
            <div className="pricing-philosophy">
              <h3>Fair & Transparent</h3>
              <p>
                As a student developer, I offer competitive rates while maintaining 
                high-quality standards. Every project is unique, so I provide 
                customized quotes based on your specific requirements.
              </p>
            </div>

            <div className="pricing-factors">
              <h3>Factors I Consider:</h3>
              <div className="factors-grid">
                <div className="factor-item">
                  <span className="factor-icon">📏</span>
                  <div>
                    <h4>Project Scope</h4>
                    <p>Complexity and size of the application</p>
                  </div>
                </div>

                <div className="factor-item">
                  <span className="factor-icon">⏰</span>
                  <div>
                    <h4>Timeline</h4>
                    <p>Project duration and deadlines</p>
                  </div>
                </div>

                <div className="factor-item">
                  <span className="factor-icon">🔧</span>
                  <div>
                    <h4>Technologies</h4>
                    <p>Specific frameworks and tools required</p>
                  </div>
                </div>

                <div className="factor-item">
                  <span className="factor-icon">🎯</span>
                  <div>
                    <h4>Requirements</h4>
                    <p>Custom features and integrations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="services-cta section bg-primary">
        <div className="container">
          <div className="cta-content text-center">
            <h2 className="cta-title">Ready to Start Your Project?</h2>
            <p className="cta-description">
              Let's discuss your ideas and how I can help bring them to life. 
              I'm excited to work on challenging projects and deliver excellent results.
            </p>
            <div className="cta-actions">
              <a href="/contact" className="btn btn-outline btn-light">
                Get In Touch
              </a>
              <a href="/projects" className="btn btn-secondary">
                View My Work
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;