/**
 * Contact Page Component - Contact information and form
 * Features: Contact form with validation, contact info panel
 * Form captures: first name, last name, phone, email, message
 * Redirects to Home page after form submission
 */

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { contactInfo, personalInfo } from '../../data/portfolio-data';
import './Contact.css';

const Contact = () => {
  const navigate = useNavigate();
  
  // Form state management
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error for this field when user starts typing
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Form validation
  const validateForm = () => {
    const errors = {};

    // Required field validation
    if (!formData.firstName.trim()) {
      errors.firstName = 'First name is required';
    }

    if (!formData.lastName.trim()) {
      errors.lastName = 'Last name is required';
    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      errors.phone = 'Phone number is required';
    } else if (!/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(formData.phone)) {
      errors.phone = 'Please enter a valid phone number';
    }

    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters long';
    }

    return errors;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    // Validate form
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      setIsSubmitting(false);
      return;
    }

    try {
      // Simulate form submission (since no backend)
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Show success message
      setSubmitStatus('success');
      
      // Clear form
      setFormData({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        message: ''
      });

      // Redirect to home page after 2 seconds
      setTimeout(() => {
        navigate('/', { 
          state: { 
            message: `Thank you ${formData.firstName}! Your message has been received. I'll get back to you soon.` 
          }
        });
      }, 2000);

    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page">
      {/* Page Header */}
      <section className="contact-header section">
        <div className="container">
          <div className="header-content text-center">
            <h1 className="page-title animate-fade-in">Get In Touch</h1>
            <p className="page-subtitle animate-fade-in">
              Ready to start a project or just want to chat about technology? 
              I'd love to hear from you. Let's create something amazing together.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact-content section">
        <div className="container">
          <div className="contact-wrapper">
            
            {/* Contact Information Panel */}
            <div className="contact-info-panel animate-slide-left">
              <div className="panel-header">
                <h2>Let's Connect</h2>
                <p>I'm available for freelance opportunities and collaborations.</p>
              </div>

              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-icon">
                    <span>📧</span>
                  </div>
                  <div className="contact-text">
                    <h3>Email</h3>
                    <a href={`mailto:${contactInfo.email}`} className="contact-link">
                      {contactInfo.email}
                    </a>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <span>📱</span>
                  </div>
                  <div className="contact-text">
                    <h3>Phone</h3>
                    <a href={`tel:${contactInfo.phone}`} className="contact-link">
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <span>📍</span>
                  </div>
                  <div className="contact-text">
                    <h3>Location</h3>
                    <span>{contactInfo.location}</span>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <span>⏰</span>
                  </div>
                  <div className="contact-text">
                    <h3>Availability</h3>
                    <span>{contactInfo.availability}</span>
                  </div>
                </div>
              </div>

              <div className="social-links">
                <h3>Follow Me</h3>
                <div className="social-buttons">
                  <a 
                    href={contactInfo.socialLinks.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-btn linkedin"
                  >
                    <span className="social-icon">💼</span>
                    LinkedIn
                  </a>
                  <a 
                    href={contactInfo.socialLinks.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-btn github"
                  >
                    <span className="social-icon">💻</span>
                    GitHub
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-wrapper animate-slide-right">
              <div className="form-header">
                <h2>Send Message</h2>
                <p>Fill out the form below and I'll get back to you as soon as possible.</p>
              </div>

              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                {/* Name Fields */}
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstName" className="form-label">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className={`form-input ${formErrors.firstName ? 'error' : ''}`}
                      placeholder="Enter your first name"
                      disabled={isSubmitting}
                    />
                    {formErrors.firstName && (
                      <span className="error-message">{formErrors.firstName}</span>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="lastName" className="form-label">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className={`form-input ${formErrors.lastName ? 'error' : ''}`}
                      placeholder="Enter your last name"
                      disabled={isSubmitting}
                    />
                    {formErrors.lastName && (
                      <span className="error-message">{formErrors.lastName}</span>
                    )}
                  </div>
                </div>

                {/* Contact Fields */}
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`form-input ${formErrors.email ? 'error' : ''}`}
                      placeholder="Enter your email address"
                      disabled={isSubmitting}
                    />
                    {formErrors.email && (
                      <span className="error-message">{formErrors.email}</span>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone" className="form-label">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`form-input ${formErrors.phone ? 'error' : ''}`}
                      placeholder="Enter your phone number"
                      disabled={isSubmitting}
                    />
                    {formErrors.phone && (
                      <span className="error-message">{formErrors.phone}</span>
                    )}
                  </div>
                </div>

                {/* Message Field */}
                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className={`form-textarea ${formErrors.message ? 'error' : ''}`}
                    placeholder="Tell me about your project or just say hello..."
                    rows="6"
                    disabled={isSubmitting}
                  ></textarea>
                  {formErrors.message && (
                    <span className="error-message">{formErrors.message}</span>
                  )}
                </div>

                {/* Submit Button */}
                <button 
                  type="submit" 
                  className={`submit-btn btn btn-primary ${isSubmitting ? 'loading' : ''}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="btn-loader"></span>
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <span className="btn-icon">✉️</span>
                      Send Message
                    </>
                  )}
                </button>

                {/* Success/Error Messages */}
                {submitStatus === 'success' && (
                  <div className="success-message">
                    <span className="status-icon">✅</span>
                    Message sent successfully! Redirecting to home page...
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="error-message">
                    <span className="status-icon">❌</span>
                    Something went wrong. Please try again or contact me directly.
                  </div>
                )}

                <p className="form-note">
                  * Required fields. I respect your privacy and will never share your information.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Alternative Contact Methods */}
      <section className="alternative-contact section bg-secondary">
        <div className="container">
          <h2 className="section-title">Other Ways to Reach Me</h2>
          
          <div className="alternative-methods">
            <div className="method-card">
              <div className="method-icon">💼</div>
              <h3>Professional Networking</h3>
              <p>Connect with me on LinkedIn for professional opportunities and networking.</p>
              <a 
                href={contactInfo.socialLinks.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                LinkedIn Profile
              </a>
            </div>

            <div className="method-card">
              <div className="method-icon">💻</div>
              <h3>View My Code</h3>
              <p>Check out my projects and contribute to open-source code on GitHub.</p>
              <a 
                href={contactInfo.socialLinks.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                GitHub Profile
              </a>
            </div>

            <div className="method-card">
              <div className="method-icon">📧</div>
              <h3>Direct Email</h3>
              <p>For quick questions or informal chats, feel free to send me an email directly.</p>
              <a 
                href={contactInfo.socialLinks.email}
                className="btn btn-secondary"
              >
                Send Email
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;