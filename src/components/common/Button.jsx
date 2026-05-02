import React from 'react';

const Button = ({ children, variant = 'primary', onClick, className = '', disabled = false, type = 'button' }) => {
  const buttonStyles = {
    primary: {
      background: 'linear-gradient(135deg, #ffffff 0%, #e0e0e0 100%)',
      color: '#000000',
      border: 'none',
      position: 'relative',
      overflow: 'hidden',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
    },
    outline: {
      background: 'transparent',
      color: 'var(--text-primary)',
      border: '2px solid var(--text-primary)',
      position: 'relative',
      overflow: 'hidden',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
    }
  };

  const baseStyle = {
    display: 'inline-block',
    padding: '12px 32px',
    borderRadius: '4px',
    fontWeight: '600',
    textDecoration: 'none',
    cursor: 'pointer',
    fontSize: '0.95rem',
    letterSpacing: '0.5px',
    ...buttonStyles[variant]
  };

  return (
    <button
      type={type}
      className={`btn btn-${variant} ${className} glow-on-hover`}
      style={baseStyle}
      onClick={onClick}
      disabled={disabled}
      onMouseEnter={(e) => {
        if (variant === 'primary') {
          e.currentTarget.style.transform = 'translateY(-2px)';
          e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.2)';
        } else {
          e.currentTarget.style.transform = 'translateY(-2px)';
          e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)';
        }
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        if (variant === 'primary') {
          e.currentTarget.style.boxShadow = 'none';
        } else {
          e.currentTarget.style.backgroundColor = 'transparent';
        }
      }}
    >
      {children}
      <style jsx>{`
        .glow-on-hover {
          position: relative;
          z-index: 1;
        }
        
        .glow-on-hover::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          transition: left 0.5s ease;
          z-index: -1;
        }
        
        .glow-on-hover:hover::before {
          left: 100%;
        }
      `}</style>
    </button>
  );
};

export default Button;