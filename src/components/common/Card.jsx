import React from 'react';

const Card = ({ children, className = '', hover = true }) => {
  const cardStyle = {
    backgroundColor: 'var(--bg-card)',
    border: '1px solid var(--border-light)',
    borderRadius: '8px',
    padding: 'var(--spacing-md)',
    transition: 'all var(--transition-normal)',
    ...(hover && {
      cursor: 'pointer',
      ':hover': {
        transform: 'translateY(-4px)',
        borderColor: 'var(--border-medium)',
        boxShadow: 'var(--shadow-lg)'
      }
    })
  };
  
  return (
    <div style={cardStyle} className={className}>
      {children}
    </div>
  );
};

export default Card;