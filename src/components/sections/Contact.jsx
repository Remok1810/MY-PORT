import React, { useState, useEffect, useRef } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Using Web3Forms for a simpler integration
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || '0845b010-cc91-4f72-8382-ba47ac68604e';
    
    const formDataObj = {
      ...formData,
      access_key: accessKey,
      subject: `New Portfolio Message from ${formData.fullname}`,
      from_name: formData.fullname,
      to_email: 'kaleeshk441@gmail.com',
    };

    try {
      if (!accessKey || accessKey === 'YOUR_ACCESS_KEY_HERE') {
        throw new Error('Access Key setup required in .env file');
      }

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formDataObj)
      });

      const result = await response.json();

      if (result.success) {
        console.log('Email sent successfully');
        setSubmitStatus('success');
        setFormData({ fullname: '', email: '', message: '' });
      } else {
        throw new Error(result.message || 'Form submission failed');
      }
    } catch (error) {
      console.error('Email failed to send:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
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
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        {[...Array(15)].map((_, i) => (
          <div key={i} className={`floating-particle p-${i}`}></div>
        ))}
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
            <div className="card-glow"></div>
            <div className="card-border"></div>

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group stagger-1">
                  <label>Full Name</label>
                  <div className="input-wrapper">
                    <input
                      type="text"
                      name="fullname"
                      value={formData.fullname}
                      onChange={handleChange}
                      required
                    />
                    <div className="input-focus-bg"></div>
                  </div>
                </div>

                <div className="form-group stagger-2">
                  <label>Your Email</label>
                  <div className="input-wrapper">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="email@example.com"
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

                {submitStatus === 'success' && (
                  <div className="status-message success">
                    <span>✓</span> Message sent successfully!
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="status-message error">
                    <span>✕</span> {submitStatus === 'error' && !import.meta.env.VITE_WEB3FORMS_ACCESS_KEY ? 'Setup Required: Add Access Key to .env' : 'Failed to send. Please try again.'}
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        .contact-section {
          min-height: 100vh;
          padding: 100px 0;
          position: relative;
          background: #000000;
          overflow: hidden;
          display: flex;
          align-items: center;
        }

        .contact-background {
          position: absolute;
          inset: 0;
          z-index: 0;
          background: #000000;
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
          background: #ffffff;
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
          color: #ffffff;
          font-weight: 800;
          margin: 0;
        }

        .highlight {
          background: linear-gradient(135deg, #ffffff, #4ade80);
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
          background: #0a0a0a;
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

        .card-border {
          position: absolute;
          inset: 0;
          border-radius: 30px;
          padding: 1px;
          background: radial-gradient(circle at var(--x, 50%) var(--y, 50%), rgba(74, 222, 128, 0.3), transparent 80%);
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
          z-index: 2;
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
          background: #111111;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 16px 20px;
          color: #ffffff;
          font-size: 1rem;
          transition: all 0.3s ease;
          outline: none;
        }

        .contact-form input:focus,
        .contact-form textarea:focus {
          border-color: rgba(74, 222, 128, 0.5);
          background: #1a1a1a;
          box-shadow: 0 0 20px rgba(74, 222, 128, 0.1);
        }

        .input-focus-bg {
          position: absolute;
          inset: 0;
          border-radius: 16px;
          pointer-events: none;
          transition: all 0.3s ease;
        }

        input:focus ~ .input-focus-bg,
        textarea:focus ~ .input-focus-bg {
          box-shadow: 0 0 0 2px rgba(74, 222, 128, 0.2);
        }

        .submit-button {
          width: 100%;
          padding: 18px;
          border-radius: 50px;
          background: #ffffff;
          color: #000000;
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

        .status-message {
          margin-top: 20px;
          padding: 12px 20px;
          border-radius: 12px;
          font-size: 0.9rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 10px;
          animation: slideUp 0.3s ease-out;
        }

        .status-message.success {
          background: rgba(74, 222, 128, 0.1);
          color: #4ade80;
          border: 1px solid rgba(74, 222, 128, 0.2);
        }

        .status-message.error {
          background: rgba(248, 113, 113, 0.1);
          color: #f87171;
          border: 1px solid rgba(248, 113, 113, 0.2);
        }

        @keyframes slideUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
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