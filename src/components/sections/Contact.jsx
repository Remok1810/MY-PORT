import React, { useState, useEffect, useRef } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
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

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      console.log('Form submitted:', formData);
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 2000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;

    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;

    const glow = cardRef.current.querySelector('.card-glow');
    if (glow) {
      glow.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.1) 0%, transparent 80%)`;
    }
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
  };

  return (
    <section id="contact" ref={sectionRef} className="contact-section">
      <div className="contact-background">
      </div>

      <div className="container">
        <div className={`section-header ${isVisible ? 'animate-in' : ''}`}>

          <h2 className="title">Get In <span className="highlight">Touch</span></h2>
          <div className="title-underline"></div>
        </div>

        <div className={`contact-wrapper ${isVisible ? 'animate-in' : ''}`}>
          <div
            className="contact-card"
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div className="card-border"></div>

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group stagger-1">
                  <label>Full Name</label>
                  <div className="input-wrapper">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      // placeholder="Enter your name"
                      required
                    />
                    <div className="input-focus-bg"></div>
                  </div>
                </div>

                <div className="form-group stagger-2">
                  <label>Email Address</label>
                  <div className="input-wrapper">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      // placeholder="Enter your email"
                      required
                    />
                    <div className="input-focus-bg"></div>
                  </div>
                </div>
              </div>

              <div className="form-group stagger-3">
                <label>Your Message</label>
                <div className="input-wrapper">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    // placeholder="How can I help you?"
                    required
                    rows="5"
                  ></textarea>
                  <div className="input-focus-bg"></div>
                </div>
              </div>

              <div className="form-footer stagger-4">
                <button type="submit" disabled={isSubmitting} className="submit-button">
                  <span className="button-text">
                    {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
                  </span>
                  <div className="button-glow"></div>
                  <div className="button-shimmer"></div>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <style jsx>{`
        .contact-section {
          min-height: 100vh;
          padding: 100px 0;
          position: relative;
          background: #000;
          overflow: hidden;
          display: flex;
          align-items: center;
        }

        .contact-background {
          position: absolute;
          inset: 0;
          z-index: 0;
        }

        .orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          opacity: 0.15;
        }

        .orb-1 {
          top: 10%;
          left: 5%;
          width: 400px;
          height: 400px;
          background: #fff;
          animation: floatOrb 15s infinite alternate;
        }

        .orb-2 {
          bottom: 10%;
          right: 5%;
          width: 500px;
          height: 500px;
          background: #4ade80;
          animation: floatOrb 20s infinite alternate-reverse;
        }

        .floating-particle {
          position: absolute;
          width: 2px;
          height: 2px;
          background: rgba(255,255,255,0.2);
          border-radius: 50%;
        }

        ${[...Array(15)].map((_, i) => `
          .p-${i} {
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: particleFloat ${10 + Math.random() * 20}s linear infinite;
            animation-delay: -${Math.random() * 20}s;
          }
        `).join('\n')}

        .container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          position: relative;
          z-index: 1;
        }

        .section-header {
          text-align: center;
          margin-bottom: 60px;
          opacity: 0;
          transform: translateY(30px);
        }

        .section-header.animate-in {
          animation: fadeInUp 0.8s forwards;
        }

        .subtitle {
          font-size: 0.85rem;
          color: #4ade80;
          letter-spacing: 4px;
          font-weight: 700;
          display: block;
          margin-bottom: 15px;
        }

        .title {
          font-size: clamp(2.5rem, 6vw, 4rem);
          color: #fff;
          font-weight: 800;
          margin: 0;
        }

        .highlight {
          background: linear-gradient(135deg, #fff, #4ade80);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .title-underline {
          width: 80px;
          height: 4px;
          background: #4ade80;
          margin: 20px auto 0;
          border-radius: 2px;
          box-shadow: 0 0 15px rgba(74, 222, 128, 0.5);
        }

        .contact-wrapper {
          display: flex;
          justify-content: center;
          opacity: 0;
          transform: translateY(40px);
        }

        .contact-wrapper.animate-in {
          animation: fadeInUp 1s forwards 0.2s;
        }

        .contact-card {
          width: 100%;
          max-width: 650px;
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(20px);
          border-radius: 30px;
          padding: 50px;
          position: relative;
          transition: transform 0.1s ease-out;
          border: 1px solid rgba(255, 255, 255, 0.05);
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
        }

        .card-glow {
          position: absolute;
          inset: 0;
          border-radius: 30px;
          pointer-events: none;
          z-index: 0;
        }

        .contact-form {
          position: relative;
          z-index: 1;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 25px;
          margin-bottom: 25px;
        }

        .form-group {
          margin-bottom: 25px;
        }

        .form-group label {
          display: block;
          font-size: 0.8rem;
          color: rgba(255,255,255,0.5);
          margin-bottom: 10px;
          font-weight: 600;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        .input-wrapper {
          position: relative;
        }

        .contact-form input,
        .contact-form textarea {
          width: 100%;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 16px 20px;
          color: #fff;
          font-size: 1rem;
          transition: all 0.3s ease;
          outline: none;
        }

        .contact-form input:focus,
        .contact-form textarea:focus {
          border-color: rgba(74, 222, 128, 0.5);
          background: rgba(255, 255, 255, 0.08);
          box-shadow: 0 0 20px rgba(74, 222, 128, 0.1);
        }

        .submit-button {
          width: 100%;
          padding: 18px;
          border-radius: 50px;
          background: #fff;
          color: #000;
          font-weight: 700;
          font-size: 1.1rem;
          border: none;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .submit-button:hover:not(:disabled) {
          transform: translateY(-5px) scale(1.02);
          box-shadow: 0 20px 40px rgba(255,255,255,0.2);
          background: #4ade80;
        }

        .submit-button:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .button-shimmer {
          position: absolute;
          top: 0;
          left: -100%;
          width: 50%;
          height: 100%;
          background: transparent;
          animation: none;
        }

        /* Animations */
        @keyframes floatOrb {
          0% { transform: translate(0, 0); }
          100% { transform: translate(40px, 40px); }
        }

        @keyframes particleFloat {
          from { transform: translateY(100vh) rotate(0deg); }
          to { transform: translateY(-100px) rotate(360deg); }
        }

        @keyframes fadeInUp {
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes shimmer {
          0% { left: -100%; }
          100% { left: 200%; }
        }

        @media (max-width: 768px) {
          .form-row { grid-template-columns: 1fr; }
          .contact-card { padding: 30px; }
          .title { font-size: 2.5rem; }
        }
      `}</style>
    </section>
  );
};

export default Contact;