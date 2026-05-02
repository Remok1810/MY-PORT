import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      backgroundColor: 'var(--bg-secondary)',
      borderTop: '1px solid var(--border-light)',
      padding: '3rem 0',
      marginTop: 'auto'
    }}>
      <div className="container">
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