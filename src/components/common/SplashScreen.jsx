import React, { useEffect, useState } from 'react';
import './SplashScreen.css';

const SplashScreen = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="splash-container">
      <div className="splash-content">
        <div className="cube-wrapper">
          <div className="cube">
            <div className="cube-face front">K</div>
            <div className="cube-face back">A</div>
            <div className="cube-face right">L</div>
            <div className="cube-face left">E</div>
            <div className="cube-face top">E</div>
            <div className="cube-face bottom">S</div>
            <div className="cube-face bottom">H</div>
          </div>
          <div className="cube-shadow"></div>
        </div>

        <div className="splash-text-container">
          <h1 className="splash-name">KALEESHWARAN</h1>
          <div className="loader-container">
            <div className="loader-bar" style={{ width: `${progress}%` }}></div>
            <div className="loader-glow" style={{ width: `${progress}%` }}></div>
          </div>
          <div className="loading-stats">
            <span className="loading-text">INITIALIZING EXPERIENCE</span>
            <span className="loading-percentage">{progress}%</span>
          </div>
        </div>
      </div>
      
      <div className="splash-bg-elements">
        <div className="bg-circle one"></div>
        <div className="bg-circle two"></div>
        <div className="bg-circle three"></div>
      </div>
    </div>
  );
};

export default SplashScreen;

