import React, { useState, useEffect, useRef } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      alert('Thank you for reaching out! I will get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
  };

  const handleCardMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const rotateX = ((e.clientY - centerY) / (rect.height / 2)) * 10;
    const rotateY = ((e.clientX - centerX) / (rect.width / 2)) * 10;
    cardRef.current.style.transform = `perspective(1000px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg) translateZ(20px)`;
  };

  const handleCardMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      style={{
        minHeight: '100vh',
        padding: '100px 5%',
        position: 'relative',
        overflow: 'hidden',
        background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.02) 0%, rgba(0,0,0,0) 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
      onMouseMove={handleMouseMove}
    >
      {/* Animated Background Particles */}
      <div className="particles">
        {[...Array(20)].map((_, i) => (
          <div key={i} className={`particle particle-${i}`} style={{
            position: 'absolute',
            width: '2px',
            height: '2px',
            background: 'rgba(255,255,255,0.3)',
            borderRadius: '50%',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `float ${5 + Math.random() * 10}s linear infinite`,
            animationDelay: `${Math.random() * 5}s`
          }} />
        ))}
      </div>

      {/* Animated Gradient Orbs */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '10%',
        width: '300px',
        height: '300px',
        background: 'radial-gradient(circle, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0) 70%)',
        borderRadius: '50%',
        animation: 'pulse 8s ease-in-out infinite',
        filter: 'blur(40px)',
        zIndex: 0
      }} />

      <div style={{
        position: 'absolute',
        bottom: '20%',
        right: '10%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 70%)',
        borderRadius: '50%',
        animation: 'pulse 6s ease-in-out infinite reverse',
        filter: 'blur(50px)',
        zIndex: 0
      }} />

      <div className="container" style={{
        maxWidth: '1400px',
        width: '100%',
        position: 'relative',
        zIndex: 2
      }}>
        {/* Section Title with 3D Effect */}
        <div className={`section-title-wrapper ${isVisible ? 'visible' : ''}`} style={{
          textAlign: 'center',
          marginBottom: '60px',
          transformStyle: 'preserve-3d',
          perspective: '500px'
        }}>
          <h2 className="section-title-3d" style={{
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: '700',
            margin: 0,
            background: 'linear-gradient(135deg, #ffffff 0%, #4ade80 30%, #ffffff 60%, #4ade80 100%)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
            backgroundSize: '300% auto',
            animation: 'shimmerText 4s linear infinite',
            letterSpacing: '-0.02em'
          }}>
            Get In Touch
          </h2>
          <div className="title-glow" style={{
            width: '80px',
            height: '3px',
            background: 'linear-gradient(90deg, transparent, #4ade80, transparent)',
            margin: '15px auto 0',
            borderRadius: '3px'
          }} />
        </div>

        <div className="contact-grid-3d" style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%'
        }}>


          {/* Centered Form with 3D Effect */}
          <div
            className={`form-card ${isVisible ? 'visible' : ''}`}
            style={{
              width: '100%',
              maxWidth: '800px',
              background: 'rgba(255, 255, 255, 0.03)',
              backdropFilter: 'blur(20px)',
              borderRadius: '24px',
              padding: '50px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              animation: 'slideInRight 1s ease-out both',
              animationDelay: '0.3s'
            }}
          >
            <form onSubmit={handleSubmit}>
              <div className="form-group" style={{ marginBottom: '25px' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '10px',
                  color: 'rgba(255, 255, 255, 0.8)',
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  letterSpacing: '1px',
                  textTransform: 'uppercase'
                }}>
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="form-input"
                  style={{
                    width: '100%',
                    padding: '18px 20px',
                    background: 'rgba(0, 0, 0, 0.3)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    borderRadius: '12px',
                    color: '#ffffff',
                    fontSize: '1.05rem',
                    transition: 'all 0.3s ease',
                    outline: 'none',
                    fontFamily: 'inherit'
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = '#ffffff';
                    e.currentTarget.style.boxShadow = '0 0 20px rgba(255, 255, 255, 0.1)';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                />
              </div>

              <div className="form-group" style={{ marginBottom: '25px' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '10px',
                  color: 'rgba(255, 255, 255, 0.8)',
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  letterSpacing: '1px',
                  textTransform: 'uppercase'
                }}>
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-input"
                  style={{
                    width: '100%',
                    padding: '18px 20px',
                    background: 'rgba(0, 0, 0, 0.3)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    borderRadius: '12px',
                    color: '#ffffff',
                    fontSize: '1.05rem',
                    transition: 'all 0.3s ease',
                    outline: 'none',
                    fontFamily: 'inherit'
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = '#ffffff';
                    e.currentTarget.style.boxShadow = '0 0 20px rgba(255, 255, 255, 0.1)';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                />
              </div>

              <div className="form-group" style={{ marginBottom: '40px' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '10px',
                  color: 'rgba(255, 255, 255, 0.8)',
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  letterSpacing: '1px',
                  textTransform: 'uppercase'
                }}>
                  Your Message
                </label>
                <textarea
                  name="message"
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="form-textarea"
                  style={{
                    width: '100%',
                    padding: '18px 20px',
                    background: 'rgba(0, 0, 0, 0.3)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    borderRadius: '12px',
                    color: '#ffffff',
                    fontSize: '1.05rem',
                    resize: 'vertical',
                    transition: 'all 0.3s ease',
                    outline: 'none',
                    fontFamily: 'inherit'
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = '#ffffff';
                    e.currentTarget.style.boxShadow = '0 0 20px rgba(255, 255, 255, 0.1)';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="submit-btn-3d"
                style={{
                  width: '100%',
                  padding: '20px',
                  background: '#ffffff',
                  border: '1px solid #ffffff',
                  borderRadius: '12px',
                  color: '#000000',
                  fontSize: '1.1rem',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  letterSpacing: '2px',
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  overflow: 'hidden',
                  opacity: isSubmitting ? 0.7 : 1
                }}
                onMouseEnter={(e) => {
                  if (!isSubmitting) {
                    e.currentTarget.style.transform = 'translateY(-3px)';
                    e.currentTarget.style.boxShadow = '0 15px 30px rgba(255, 255, 255, 0.2)';
                    e.currentTarget.style.background = '#e6e6e6';
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.background = '#ffffff';
                }}
              >
                {isSubmitting ? (
                  <span className="loading-spinner" style={{
                    display: 'inline-block',
                    width: '20px',
                    height: '20px',
                    border: '2px solid rgba(0,0,0,0.3)',
                    borderTopColor: '#000000',
                    borderRadius: '50%',
                    animation: 'spin 0.8s linear infinite'
                  }} />
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          25% { transform: translateY(-20px) translateX(10px); }
          75% { transform: translateY(20px) translateX(-10px); }
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.1); opacity: 0.5; }
        }
        
        @keyframes floatOrb2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-30px, 20px) scale(1.05); }
          66% { transform: translate(20px, -30px) scale(0.95); }
        }
        
        @keyframes pulseGlow {
          0%, 100% { opacity: 0.3; transform: translate(-50%, -50%) scale(1); }
          50% { opacity: 0.6; transform: translate(-50%, -50%) scale(1.2); }
        }
        
        @keyframes floatParticle3D {
          0% {
            transform: translateY(0) translateX(0) translateZ(0);
            opacity: 0;
          }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% {
            transform: translateY(-100px) translateX(50px) translateZ(100px);
            opacity: 0;
          }
        }
        
        @keyframes shimmerText {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        
        .info-card.visible,
        .form-card.visible {
          animation: fadeInUp 0.8s ease-out both;
        }
        
        .section-title-wrapper.visible h2 {
          animation: shimmerText 4s linear infinite;
        }
        
        .form-input:hover,
        .form-textarea:hover {
          border-color: #ffffff;
        }
        
        @media (max-width: 968px) {
          .contact-grid-3d {
            grid-template-columns: 1fr !important;
            gap: 30px !important;
          }
          
          .info-card,
          .form-card {
            padding: 30px !important;
          }
          
          .social-links-3d {
            flex-wrap: wrap;
            justify-content: center;
          }
          
          .social-link {
            padding: 8px 16px !important;
            font-size: 0.9rem !important;
          }
        }
        
        @media (max-width: 768px) {
          .contact-grid-3d {
            gap: 25px !important;
          }
          
          .info-card,
          .form-card {
            padding: 25px !important;
          }
          
          .contact-item {
            padding: 8px !important;
          }
          
          .contact-item > div:first-child {
            width: 40px !important;
            height: 40px !important;
            font-size: 1.2rem !important;
          }
        }
        
        @media (max-width: 480px) {
          section {
            padding: 80px 20px !important;
          }
          
          .info-card,
          .form-card {
            padding: 20px !important;
          }
          
          .form-input,
          .form-textarea {
            padding: 12px 16px !important;
          }
          
          .submit-btn-3d {
            padding: 12px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;