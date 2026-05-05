import React, { useEffect, useState } from 'react';
import workImageOne from '../../assets/images/work-one.jpg';
import workImageTwo from '../../assets/images/work-two.jpg';
import workImageThree from '../../assets/images/work-three.jpg';

const fallbackImages = {
  work1: 'https://images.unsplash.com/photo-1542744094-24638eff58bb?w=400&h=400&fit=crop',
  work2: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=400&fit=crop',
  work3: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=400&fit=crop'
};

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleImageError = (e, fallbackSrc) => {
    e.target.src = fallbackSrc;
  };

  return (
    <section id="about" className={`about-section ${isVisible ? 'visible' : ''}`}>
      <div className="container">

        {/* Header Section */}
        <div className="header-text">
          <h1>Best Works</h1>
          <p>
            Be inspired by the <span className="highlight">newest</span> and most{' '}
            <span className="highlight">interesting works</span> of <span className="highlight">famous</span> authors together
          </p>
        </div>

        {/* Collage Section */}
        <div className="collage-container">

          {/* Emma Thompson */}
          <div className="collage-item item-1">
            <img
              src={workImageOne}
              onError={(e) => handleImageError(e, fallbackImages.work1)}
              alt="Emma Thompson"
            />
            <div className="name-pill pill-1">
              <span className="arrow-circle">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </span>
              <span className="name-text">Emma Thompson</span>
            </div>
          </div>

          {/* James Anderson */}
          <div className="collage-item item-2">
            <img
              src={workImageTwo}
              onError={(e) => handleImageError(e, fallbackImages.work2)}
              alt="James Anderson"
            />
            <div className="name-pill pill-2">
              <span className="arrow-circle">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </span>
              <span className="name-text">James Anderson</span>
            </div>
          </div>

          {/* Olivia Mitchell */}
          <div className="collage-item item-3">
            <img
              src={workImageThree}
              onError={(e) => handleImageError(e, fallbackImages.work3)}
              alt="Olivia Mitchell"
            />
            <div className="name-pill pill-3">
              <span className="arrow-circle">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </span>
              <span className="name-text">Olivia Mitchell</span>
            </div>
          </div>

          {/* Show more button */}
          <div className="show-more-btn">
            <div className="circular-text">
              <svg viewBox="0 0 100 100" width="120" height="120">
                <defs>
                  <path id="circle" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" />
                </defs>
                <text fontSize="10.5" fill="#a0a0a0" letterSpacing="2">
                  <textPath href="#circle">
                    Show more works • Show more works •
                  </textPath>
                </text>
              </svg>
            </div>
            <div className="inner-green-circle">
              <span className="infinity-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#121514" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18.178 8c5.096 0 5.096 8 0 8-5.095 0-7.133-8-12.739-8-5.096 0-5.096 8 0 8 5.096 0 7.23-8 12.739-8z"></path>
                </svg>
              </span>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        .about-section {
          background-color: #111615;
          min-height: 100vh;
          padding: 100px 20px;
          display: flex;
          justify-content: center;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
          overflow: hidden;
          opacity: 0;
          transition: opacity 0.5s ease;
        }
        
        .about-section.visible {
          opacity: 1;
        }

        .container {
          max-width: 480px;
          width: 100%;
          position: relative;
        }

        .header-text {
          margin-bottom: 50px;
          animation: fadeUp 0.8s ease-out;
        }

        .header-text h1 {
          color: #ffffff;
          font-size: 2.8rem;
          font-weight: 700;
          margin: 0 0 15px 0;
          letter-spacing: -0.5px;
        }

        .header-text p {
          color: #ffffff;
          font-size: 1.1rem;
          line-height: 1.6;
          margin: 0;
          opacity: 0.9;
          max-width: 380px;
        }

        .highlight {
          color: #4ade80;
          font-weight: 500;
        }

        .collage-container {
          position: relative;
          height: 700px;
          margin-top: 20px;
          perspective: 1200px;
        }

        .collage-item {
          position: absolute;
          animation: popIn3D 1s cubic-bezier(0.2, 0.8, 0.2, 1) backwards;
          transform-style: preserve-3d;
          transition: transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.5s ease;
          box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        }

        .collage-item:hover {
          transform: translateZ(40px) rotateX(8deg) rotateY(-8deg) scale(1.05);
          box-shadow: -20px 30px 50px rgba(0,0,0,0.5);
          z-index: 10 !important;
        }

        .collage-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: inherit;
        }

        .item-1 {
          top: 0;
          left: -20px;
          width: 280px;
          height: 380px;
          border-radius: 200px;
          z-index: 1;
          animation-delay: 0.1s;
        }

        .item-2 {
          top: 150px;
          right: 0px;
          width: 240px;
          height: 320px;
          border-radius: 150px;
          z-index: 2;
          animation-delay: 0.2s;
        }

        .item-3 {
          bottom: 60px;
          left: 10px;
          width: 230px;
          height: 300px;
          border-radius: 150px;
          z-index: 3;
          animation-delay: 0.3s;
        }

        .name-pill {
          position: absolute;
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 40px;
          padding: 8px 20px 8px 8px;
          display: flex;
          align-items: center;
          gap: 12px;
          white-space: nowrap;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          transform: translateZ(1px);
          transition: transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.5s ease;
        }
        
        .collage-item:hover .name-pill {
          transform: translateZ(60px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.4);
        }

        .pill-1 {
          bottom: 60px;
          right: -50px;
          z-index: 4;
        }

        .pill-2 {
          bottom: 40px;
          left: -40px;
          z-index: 4;
        }

        .pill-3 {
          bottom: 30px;
          right: -30px;
          z-index: 4;
        }

        .arrow-circle {
          width: 32px;
          height: 32px;
          background: #ffffff;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          color: #111615;
        }

        .name-text {
          color: #ffffff;
          font-size: 0.95rem;
          font-weight: 500;
        }

        .show-more-btn {
          position: absolute;
          bottom: -20px;
          right: -20px;
          width: 140px;
          height: 140px;
          z-index: 5;
          animation: fadeUp 1s ease-out backwards;
          animation-delay: 0.8s;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .circular-text {
          position: absolute;
          width: 100%;
          height: 100%;
          animation: rotateSlow 20s linear infinite;
          display: flex;
          justify-content: center;
          align-items: center;
          border: 1px solid rgba(255,255,255,0.05);
          border-radius: 50%;
        }

        .inner-green-circle {
          width: 50px;
          height: 50px;
          background: #4ade80;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          box-shadow: 0 0 25px rgba(74, 222, 128, 0.3);
          cursor: pointer;
          transition: transform 0.3s ease;
        }

        .inner-green-circle:hover {
          transform: scale(1.1);
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes popIn3D {
          from {
            opacity: 0;
            transform: translateZ(-100px) translateY(40px) rotateX(-15deg);
          }
          to {
            opacity: 1;
            transform: translateZ(0) translateY(0) rotateX(0);
          }
        }

        @keyframes rotateSlow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        /* Responsive adjustments for desktop */
        @media (min-width: 768px) {
          .about-section {
            padding: 120px 40px;
          }
          
          .container {
            max-width: 1100px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 80px;
          }

          .header-text {
            flex: 1;
            max-width: 450px;
            margin-bottom: 0;
          }

          .header-text h1 {
            font-size: 4.5rem;
          }

          .header-text p {
            font-size: 1.25rem;
          }

          .collage-container {
            flex: 1;
            max-width: 550px;
            min-width: 500px;
          }
          
          .show-more-btn {
            bottom: 40px;
            right: 0;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
