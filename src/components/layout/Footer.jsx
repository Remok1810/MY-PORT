import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.02) 0%, rgba(0,0,0,0) 100%)',
      borderTop: '1px solid rgba(255,255,255,0.05)',
      padding: '3rem 0',
      marginTop: 'auto',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Animated Background Particles */}
      <div className="particles" style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0, pointerEvents: 'none' }}>
        {[...Array(15)].map((_, i) => (
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

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <div>
            <p style={{ color: 'var(--text-tertiary)', fontSize: '0.9rem' }}>
              © 2024 Kaleeshwaran A. All rights reserved.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '2rem' }}>
            <a href="#home" style={{ color: 'var(--text-tertiary)', textDecoration: 'none', fontSize: '0.9rem' }}>Home</a>
            <a href="#about" style={{ color: 'var(--text-tertiary)', textDecoration: 'none', fontSize: '0.9rem' }}>About</a>
            <a href="#projects" style={{ color: 'var(--text-tertiary)', textDecoration: 'none', fontSize: '0.9rem' }}>Projects</a>
            <a href="#contact" style={{ color: 'var(--text-tertiary)', textDecoration: 'none', fontSize: '0.9rem' }}>Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;