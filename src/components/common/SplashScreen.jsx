import React, { useEffect, useState } from 'react';
import './SplashScreen.css';

const SplashScreen = () => {
  return (
    <div className="splash-screen">
      <div className="splash-logo">
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
          <circle cx="40" cy="40" r="36" stroke="#00FFB2" strokeWidth="6" fill="#121212" />
          <text x="50%" y="54%" textAnchor="middle" fill="#00FFB2" fontSize="28" fontFamily="Arial" dy=".3em">PORT</text>
        </svg>
      </div>
      <div className="splash-title">Welcome to My World</div>
    </div>
  );
};

export default SplashScreen;
