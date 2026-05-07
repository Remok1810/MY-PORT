import React, { useEffect, useState } from 'react';
import workImageOne from '../../assets/images/work-one.jpg';
import workImageTwo from '../../assets/images/work-two.jpg';
import workImageThree from '../../assets/images/work-three.jpg';
import resumePdf from '../../assets/A KALEESHWARAN.pdf.pdf';

const fallbackImages = {
  work1: 'https://images.unsplash.com/photo-1542744094-24638eff58bb?w=400&h=400&fit=crop',
  work2: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=400&fit=crop',
  work3: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=400&fit=crop'
};

const About = ({ onNavigate }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleImageError = (e, fallbackSrc) => {
    e.target.src = fallbackSrc;
  };

  return (
    <section id="about" className={`about-section ${isVisible ? 'visible' : ''}`}>
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

      <div className="container" style={{ zIndex: 1 }}>

        {/* Header Section */}
        <div className="header-text">
          <div className="about-header">
            <h1>About Me</h1>
            <div className="header-underline"></div>
          </div>

          <div className="about-description">
            <p>
              I'm a passionate Software Developer with expertise in building full-stack applications across web, Android, iOS, and Windows platforms. With a strong foundation in React.js, .NET, and modern technologies, I create scalable and efficient solutions.
            </p>
            <p>
              Throughout my career, I've managed complete end-to-end development lifecycles and successfully deployed applications on Google Play Store and Apple App Store.
            </p>
          </div>

          {/* <div className="about-details">
            <div className="detail-column">
              <h3>💼 Experience</h3>
              <p className="detail-title">Junior Full Stack Developer</p>
              <p className="detail-subtitle">TATA Strive Certified</p>
            </div>
            <div className="detail-column">
              <h3>🎓 Education</h3>
              <p className="detail-title">B.E Computer Science</p>
              <p className="detail-subtitle">CGPA: 7.9</p>
            </div>
          </div>

          <div className="skills-container">
            {['React.js', '.NET', 'React Native', 'Node.js', 'MongoDB', 'TypeScript'].map(skill => (
              <span key={skill} className="skill-pill">{skill}</span>
            ))}
          </div> */}

          <div className="resume-btn-container" style={{
            display: 'flex',
            gap: '0.8rem',
            flexWrap: 'nowrap',
            marginTop: '1.5rem',
            width: '100%'
          }}>
            <a
              href={resumePdf}
              download="Kaleeshwaran_Resume.pdf"
              className="download-resume-btn"
              style={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textDecoration: 'none',
                background: '#ffffff',
                color: '#000000',
                padding: '10px 12px',
                borderRadius: '4px',
                fontSize: '0.85rem',
                fontWeight: '700',
                textAlign: 'center',
                whiteSpace: 'nowrap'
              }}
            >
              Download Resume
            </a>
            <button
              onClick={() => onNavigate && onNavigate('Resume')}
              className="view-resume-btn"
              style={{
                flex: 1,
                background: 'rgba(255,255,255,0.05)',
                color: '#ffffff',
                border: '1px solid rgba(255,255,255,0.2)',
                padding: '10px 12px',
                borderRadius: '4px',
                fontSize: '0.85rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                backdropFilter: 'blur(10px)',
                whiteSpace: 'nowrap'
              }}
            >
              View Resume
            </button>
          </div>
        </div>

        {/* Collage Section */}
        <div className="collage-container">

          {/* Projects */}
          <div className="collage-item item-1">
            <img
              src={workImageOne}
              onError={(e) => handleImageError(e, fallbackImages.work1)}
              alt="Emma Thompson"
            />
            <div className="name-pill pill-1" onClick={() => onNavigate && onNavigate('Projects')} style={{ cursor: 'pointer' }}>
              <span className="arrow-circle">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </span>
              <span className="name-text">Projects</span>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="collage-item item-2">
            <img
              src={workImageTwo}
              onError={(e) => handleImageError(e, fallbackImages.work2)}
              alt="James Anderson"
            />
            <div className="name-pill pill-2" onClick={() => onNavigate && onNavigate('Skills')} style={{ cursor: 'pointer' }}>
              <span className="arrow-circle">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </span>
              <span className="name-text">Technical Skills</span>
            </div>
          </div>

          {/* Certifications */}
          <div className="collage-item item-3">
            <img
              src={workImageThree}
              onError={(e) => handleImageError(e, fallbackImages.work3)}
              alt="Olivia Mitchell"
            />
            <div className="name-pill pill-3" onClick={() => onNavigate && onNavigate('Certification')} style={{ cursor: 'pointer' }}>
              <span className="arrow-circle">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </span>
              <span className="name-text">Certifications</span>
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
          background: radial-gradient(circle at 50% 50%, rgba(255,255,255,0.02) 0%, rgba(0,0,0,0) 100%);
          min-height: auto;
          padding: 20px 20px 100px 20px;
          display: flex;
          justify-content: center;
          position: relative;
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

        .about-header {
          margin-bottom: 20px;
        }

        .header-text h1 {
          font-size: 2.8rem;
          font-weight: 700;
          margin: 0 0 10px 0;
          letter-spacing: -0.5px;
          background: linear-gradient(135deg, #ffffff 0%, #e0e0e0 25%, #ffffff 50%, #a0a0a0 75%, #ffffff 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          background-size: 300% auto;
          animation: shimmer 3s linear infinite;
        }

        .header-underline {
          width: 60px;
          height: 2px;
          background-color: #a0a0a0;
          border-radius: 2px;
        }

        .about-description {
          margin-bottom: 30px;
        }

        .about-description p {
          color: var(--text-tertiary, #a0a0a0);
          font-size: 0.95rem;
          line-height: 1.7;
          margin: 0 0 15px 0;
        }

        .about-details {
          display: flex;
          gap: 40px;
          margin-bottom: 30px;
        }

        .detail-column h3 {
          color: #ffffff;
          font-size: 1.1rem;
          font-weight: 600;
          margin: 0 0 10px 0;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .detail-title {
          color: #d1d5db;
          font-size: 0.9rem;
          margin: 0 0 5px 0;
        }

        .detail-subtitle {
          color: var(--text-tertiary, #888);
          font-size: 0.8rem;
          margin: 0;
        }

        .skills-container {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 30px;
        }

        .skill-pill {
          padding: 6px 14px;
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #e5e7eb;
          font-size: 0.85rem;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(5px);
          transition: all 0.3s ease;
        }

        .skill-pill:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: translateY(-2px);
        }

        .resume-btn-container {
          margin-top: 10px;
        }

        .download-resume-btn {
          background: transparent;
          color: #ffffff;
          border: 1px solid #ffffff;
          padding: 10px 24px;
          border-radius: 4px;
          font-size: 0.95rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .download-resume-btn:hover {
          background: #ffffff;
          color: #000000;
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
          border-radius: 150px;
          z-index: 1;
          animation-delay: 0.1s;
        }

        .item-2 {
          top: 200px;
          right: 80px;
          width: 240px;
          height: 320px;
          border-radius: 150px;
          z-index: 1;
          animation-delay: 0.2s;
        }

        .item-3 {
          bottom: 60px;
          left: 10px;
          width: 230px;
          height: 300px;
          border-radius: 150px;
          z-index: 2;
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
          right: -40px;
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

        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          25% { transform: translateY(-20px) translateX(10px); }
          75% { transform: translateY(20px) translateX(-10px); }
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.1); opacity: 0.5; }
        }

        @keyframes shimmer {
          0% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }

        /* Responsive adjustments for mobile */
        @media (max-width: 767px) {
          .about-section { padding-bottom: 40px; }
          .item-2 {
            right: -20px;
          }
          .item-3 {
            left: -30px;
          }
            .item-1 {
              left: -30px;
            }
        }

        /* Responsive adjustments for desktop */
        @media (min-width: 768px) {
          .about-section {
            padding: 20px 40px 100px 40px;
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
            max-width: 500px;
            margin-bottom: 0;
          }

          .header-text h1 {
            font-size: 4rem;
          }

          .about-description p {
            font-size: 1.05rem;
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
        /* Resume Modal Styles */
        .resume-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(0, 0, 0, 0.85);
          backdrop-filter: blur(15px);
          z-index: 10000;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 20px;
          animation: fadeIn 0.4s ease-out;
        }

        .resume-modal-container {
          background: #0a0a0a;
          width: 100%;
          max-width: 1000px;
          max-height: 90vh;
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          position: relative;
          overflow-y: auto;
          box-shadow: 0 50px 100px rgba(0, 0, 0, 0.5);
          animation: modalSlideUp 0.6s cubic-bezier(0.2, 0.8, 0.2, 1);
        }

        .close-resume {
          position: absolute;
          top: 20px;
          right: 20px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: white;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          font-size: 24px;
          cursor: pointer;
          z-index: 10;
          transition: all 0.3s ease;
        }

        .close-resume:hover {
          background: #ff4d4d;
          border-color: #ff4d4d;
          transform: rotate(90deg);
        }

        .resume-grid {
          display: grid;
          grid-template-columns: 320px 1fr;
          min-height: 800px;
        }

        /* Sidebar Styles */
        .resume-sidebar {
          background: rgba(255, 255, 255, 0.02);
          border-right: 1px solid rgba(255, 255, 255, 0.05);
          padding: 40px;
        }

        .resume-profile-section {
          text-align: center;
          margin-bottom: 40px;
        }

        .resume-pfp {
          width: 100px;
          height: 100px;
          background: linear-gradient(135deg, #4ade80, #2dd4bf);
          border-radius: 50%;
          margin: 0 auto 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 3rem;
          font-weight: 900;
          color: #000;
          box-shadow: 0 10px 30px rgba(74, 222, 128, 0.3);
        }

        .resume-name {
          font-size: 1.5rem;
          font-weight: 800;
          color: #fff;
          margin-bottom: 5px;
        }

        .resume-role {
          color: #4ade80;
          font-size: 0.9rem;
          letter-spacing: 2px;
          text-transform: uppercase;
          font-weight: 600;
        }

        .resume-info-block {
          margin-bottom: 40px;
        }

        .info-item {
          margin-bottom: 20px;
        }

        .info-label {
          display: block;
          font-size: 0.65rem;
          color: rgba(255, 255, 255, 0.4);
          letter-spacing: 2px;
          margin-bottom: 5px;
        }

        .info-value {
          color: #fff;
          font-size: 0.9rem;
          word-break: break-all;
        }

        .resume-section-title {
          font-size: 0.8rem;
          color: #fff;
          letter-spacing: 3px;
          margin-bottom: 20px;
          padding-bottom: 10px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .skills-group p {
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.85rem;
          margin-bottom: 15px;
          line-height: 1.6;
        }

        .cert-item {
          margin-bottom: 15px;
        }

        .cert-name {
          color: #fff;
          font-size: 0.9rem;
          font-weight: 600;
        }

        .cert-org {
          color: rgba(255, 255, 255, 0.5);
          font-size: 0.8rem;
        }

        /* Main Content Styles */
        .resume-main {
          padding: 60px;
        }

        .resume-section {
          margin-bottom: 50px;
        }

        .main-section-title {
          font-size: 1.2rem;
          color: #fff;
          margin-bottom: 25px;
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .main-section-title::after {
          content: '';
          height: 1px;
          flex: 1;
          background: rgba(255, 255, 255, 0.1);
        }

        .summary-text {
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.8;
          font-size: 1rem;
        }

        .resume-entry {
          margin-bottom: 30px;
        }

        .entry-header {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          margin-bottom: 8px;
        }

        .entry-header h4 {
          font-size: 1.1rem;
          color: #fff;
        }

        .entry-date {
          font-size: 0.85rem;
          color: #4ade80;
          font-weight: 600;
        }

        .entry-sub {
          color: rgba(255, 255, 255, 0.5);
          font-size: 0.95rem;
          margin-bottom: 15px;
        }

        .entry-list {
          list-style: none;
          padding-left: 20px;
        }

        .entry-list li {
          color: rgba(255, 255, 255, 0.7);
          margin-bottom: 8px;
          position: relative;
        }

        .entry-list li::before {
          content: '→';
          position: absolute;
          left: -20px;
          color: #4ade80;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .project-card {
          padding: 20px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 12px;
          transition: all 0.3s ease;
        }

        .project-card:hover {
          background: rgba(255, 255, 255, 0.06);
          border-color: #4ade80;
          transform: translateY(-5px);
        }

        .project-card h5 {
          color: #fff;
          font-size: 1rem;
          margin-bottom: 10px;
        }

        .project-card p {
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.5);
          line-height: 1.5;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes modalSlideUp {
          from { opacity: 0; transform: translateY(50px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        @media (max-width: 900px) {
          .resume-grid {
            grid-template-columns: 1fr;
          }
          .resume-sidebar {
            border-right: none;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          }
          .resume-main {
            padding: 40px 20px;
          }
          .projects-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
