import React, { useState } from 'react';
import Button from '../common/Button';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for reaching out! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  return (
    <section id="contact" style={{ padding: 'var(--spacing-xl) 0' }}>
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem'
        }} className="contact-grid">
          <div className="fade-up">
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Let's Work Together</h3>
            <p style={{ color: 'var(--text-tertiary)', marginBottom: '2rem', lineHeight: '1.8' }}>
              Have a project in mind? I'm available for freelance work and full-time positions.
              Let's create something amazing together.
            </p>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <span style={{ fontSize: '1.2rem' }}>📧</span>
                <div>
                  <h4 style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Email</h4>
                  <p style={{ color: 'var(--text-primary)' }}>kaleesh@example.com</p>
                </div>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <span style={{ fontSize: '1.2rem' }}>📍</span>
                <div>
                  <h4 style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Location</h4>
                  <p style={{ color: 'var(--text-primary)' }}>Chennai, India</p>
                </div>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <span style={{ fontSize: '1.2rem' }}>💼</span>
                <div>
                  <h4 style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Availability</h4>
                  <p style={{ color: 'var(--text-primary)' }}>Open for opportunities</p>
                </div>
              </div>
            </div>
            
            <div>
              <h4 style={{ marginBottom: '0.5rem' }}>Connect with me</h4>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <a href="#" style={{ color: 'var(--text-primary)', textDecoration: 'none' }}>GitHub</a>
                <a href="#" style={{ color: 'var(--text-primary)', textDecoration: 'none' }}>LinkedIn</a>
                <a href="#" style={{ color: 'var(--text-primary)', textDecoration: 'none' }}>Twitter</a>
              </div>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="slide-right">
            <div style={{ marginBottom: '1rem' }}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '1rem',
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border-light)',
                  borderRadius: '4px',
                  color: 'var(--text-primary)',
                  fontSize: '1rem'
                }}
              />
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '1rem',
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border-light)',
                  borderRadius: '4px',
                  color: 'var(--text-primary)',
                  fontSize: '1rem'
                }}
              />
            </div>
            <div style={{ marginBottom: '1.5rem' }}>
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                style={{
                  width: '100%',
                  padding: '1rem',
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border-light)',
                  borderRadius: '4px',
                  color: 'var(--text-primary)',
                  resize: 'vertical',
                  fontSize: '1rem'
                }}
              />
            </div>
            <Button type="submit">Send Message</Button>
          </form>
        </div>
        
        <style jsx>{`
          @media (max-width: 768px) {
            .contact-grid {
              grid-template-columns: 1fr !important;
              gap: 2rem !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
};

export default Contact;