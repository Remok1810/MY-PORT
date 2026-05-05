import React, { useEffect, useState } from 'react';
import Button from '../common/Button';

// Direct image import with proper path
import profileImg from '../../assets/images/profile.jpg';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  // const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
  };



  useEffect(() => {
    const img = new Image();
    img.src = profileImg;
  }, []);

  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '100px 0 50px',
        position: 'relative',
        overflow: 'hidden',
        background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.02) 0%, rgba(0,0,0,0) 100%)'
      }}
      onMouseMove={handleMouseMove}
    >
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
        filter: 'blur(40px)'
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
        filter: 'blur(50px)'
      }} />

      <div className="container" style={{
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 2rem',
        position: 'relative',
        zIndex: 2
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          alignItems: 'center'
        }} className="hero-grid">

          {/* Left Side - Photo with 3D Tilt Effect - INCREASED HEIGHT */}
          <div
            className={`photo-container animate-slide-right ${isVisible ? 'animated' : ''}`}
            style={{
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              transformStyle: 'preserve-3d',
              perspective: '1000px'
            }}
          >
            <div style={{
              position: 'relative',
              width: '100%',
              maxWidth: '450px',
              margin: '0 auto',
              transform: `rotateX(${(mousePosition.y - 50) * 0.05}deg) rotateY(${(mousePosition.x - 50) * 0.05}deg)`,
              transition: 'transform 0.3s ease-out'
            }}>
              {/* Glowing Border Animation */}
              <div style={{
                position: 'absolute',
                top: '-3px',
                left: '-3px',
                right: '-3px',
                bottom: '-3px',
                background: 'linear-gradient(45deg, #ffffff, #666666, #ffffff, #666666)',
                borderRadius: '23px',
                opacity: 0.6,
                animation: 'borderGlow 3s linear infinite',
                backgroundSize: '300% 300%',
                zIndex: -1
              }} />

              {/* Photo Frame with Glow Effect - INCREASED HEIGHT */}
              <div style={{
                position: 'relative',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 30px 60px rgba(0,0,0,0.8)',
                border: '2px solid rgba(255,255,255,0.1)',
                transition: 'all 0.5s ease',
                cursor: 'pointer',
                backgroundColor: '#1a1a1a'
              }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.02)';
                  e.currentTarget.style.boxShadow = '0 40px 80px rgba(0,0,0,0.9)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = '0 30px 60px rgba(0,0,0,0.8)';
                }}>
                {/* INCREASED IMAGE HEIGHT - Changed from paddingBottom 100% to 120% */}
                <div style={{
                  width: '100%',
                  aspectRatio: '3/4', // Ensures portrait ratio
                  backgroundColor: '#1a1a1a',
                  position: 'relative',
                  minHeight: '260px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>

                  <img
                    src={profileImg}
                    alt="Kaleeshwaran A"
                    loading="eager"
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center top',
                      display: 'block'
                    }}
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/450x540/1a1a1a/ffffff?text=KALEESHWARAN+A';
                    }}
                  />
                </div>
              </div>

              {/* Decorative Elements with Animation */}
              <div style={{
                position: 'absolute',
                top: '-15px',
                left: '-15px',
                right: '-15px',
                bottom: '-15px',
                border: '1px solid rgba(255,255,255,0.2)',
                borderRadius: '30px',
                zIndex: -2,
                animation: 'rotate 20s linear infinite'
              }} />

              <div style={{
                position: 'absolute',
                top: '30px',
                left: '30px',
                width: '80px',
                height: '80px',
                borderLeft: '3px solid #ffffff',
                borderTop: '3px solid #ffffff',
                borderRadius: '15px 0 0 0',
                zIndex: -1,
                animation: 'fadeInOut 2s ease-in-out infinite'
              }} />

              <div style={{
                position: 'absolute',
                bottom: '30px',
                right: '30px',
                width: '80px',
                height: '80px',
                borderRight: '3px solid #ffffff',
                borderBottom: '3px solid #ffffff',
                borderRadius: '0 0 15px 0',
                zIndex: -1,
                animation: 'fadeInOut 2s ease-in-out infinite 0.5s'
              }} />
            </div>
          </div>

          {/* Right Side - Content with Staggered Animations */}
          <div className="content-container">
            {/* Portfolio Label with Glow */}
            <div className={`animate-slide-up ${isVisible ? 'animated' : ''}`} style={{
              marginBottom: '1rem',
              overflow: 'hidden'
            }}>
              <span style={{
                fontSize: '0.8rem',
                color: 'var(--text-secondary)',
                letterSpacing: '4px',
                textTransform: 'uppercase',
                fontWeight: '500',
                display: 'inline-block',
                position: 'relative',
                paddingLeft: '40px'
              }}>
                <span style={{
                  position: 'absolute',
                  left: 0,
                  top: '50%',
                  width: '30px',
                  height: '1px',
                  background: 'linear-gradient(90deg, #ffffff, transparent)'
                }} />
                WELCOME TO MY PORTFOLIO
              </span>
            </div>

            {/* Name with Gradient Animation */}
            <div className={`animate-slide-up ${isVisible ? 'animated' : ''}`} style={{ animationDelay: '0.1s' }}>
              <h1 style={{
                fontSize: '3.5rem',
                fontWeight: 'bold',
                marginBottom: '0.5rem',
                lineHeight: '1.2',
                background: 'linear-gradient(135deg, #ffffff 0%, #e0e0e0 25%, #ffffff 50%, #a0a0a0 75%, #ffffff 100%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
                backgroundSize: '300% auto',
                animation: 'shimmer 3s linear infinite'
              }}>
                KALEESHWARAN
              </h1>
            </div>

            {/* Title with Typing Effect */}
            <div className={`animate-slide-up ${isVisible ? 'animated' : ''}`} style={{ animationDelay: '0.2s' }}>
              <div className="typing-wrapper" style={{
                display: 'inline-block'
              }}>
                <h2 style={{
                  fontSize: '2rem',
                  color: 'var(--text-secondary)',
                  marginBottom: '1rem',
                  fontWeight: '600',
                  borderRight: '2px solid var(--text-primary)',
                  paddingRight: '10px',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  animation: 'typing 3s steps(30, end), blink-caret 0.75s step-end infinite'
                }}>
                  Software Developer
                </h2>
              </div>
            </div>

            {/* Specialization with Hover Effect */}
            <div className={`animate-slide-up ${isVisible ? 'animated' : ''}`} style={{ animationDelay: '0.3s' }}>
              <div style={{
                marginBottom: '1.5rem',
                padding: '0.5rem 1rem',
                background: 'linear-gradient(90deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 100%)',
                borderRadius: '4px',
                display: 'inline-block'
              }}>
                <span style={{
                  fontSize: '1rem',
                  color: 'var(--text-tertiary)'
                }}>
                  Specialized in{' '}
                </span>
                <span className="glow-text" style={{
                  fontSize: '1rem',
                  color: 'var(--text-primary)',
                  fontWeight: 'bold',
                  position: 'relative',
                  display: 'inline-block'
                }}>
                  Full Stack Developer
                  <span style={{
                    position: 'absolute',
                    bottom: '-2px',
                    left: 0,
                    width: '100%',
                    height: '2px',
                    background: 'linear-gradient(90deg, #ffffff, transparent)',
                    animation: 'underline 2s ease-in-out infinite'
                  }} />
                </span>
              </div>
            </div>

            {/* Description with Fade In */}
            <div className={`animate-slide-up ${isVisible ? 'animated' : ''}`} style={{ animationDelay: '0.4s' }}>
              <p style={{
                fontSize: '1rem',
                color: 'var(--text-tertiary)',
                marginBottom: '2rem',
                lineHeight: '1.8',
                maxWidth: '500px',
                position: 'relative'
              }}>
                Building scalable full-stack applications with React.js, .NET, and modern technologies.
                Passionate about creating seamless digital experiences across web and mobile platforms.
              </p>
            </div>

            {/* Buttons with Hover Effects */}
            <div className={`animate-slide-up ${isVisible ? 'animated' : ''}`} style={{
              display: 'flex',
              gap: '1rem',
              marginBottom: '3rem',
              flexWrap: 'wrap',
              animationDelay: '0.5s'
            }}>
              <div className="btn-wrapper">
                <Button onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>
                  View My Work
                </Button>
              </div>
              <div className="btn-wrapper">
                <Button variant="outline" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
                  Contact Me
                </Button>
              </div>
            </div>

            {/* Stats with Counter Animation */}
            {/* <div className={`animate-slide-up ${isVisible ? 'animated' : ''}`} style={{
              display: 'flex',
              gap: '3rem',
              flexWrap: 'wrap',
              paddingTop: '2rem',
              borderTop: '1px solid rgba(255,255,255,0.1)',
              animationDelay: '0.6s'
            }}>
              {[
                { value: '5+', label: 'Projects Completed', delay: 0 },
                { value: '4+', label: 'Platforms', delay: 0.2 },
                { value: '100%', label: 'Client Satisfaction', delay: 0.4 }
              ].map((stat, index) => (
                <div key={index} className="stat-item" style={{
                  position: 'relative',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.textShadow = '0 0 10px rgba(255,255,255,0.5)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.textShadow = 'none';
                }}>
                  <h3 className="counter" style={{
                    fontSize: '2rem',
                    fontWeight: 'bold',
                    marginBottom: '0.25rem',
                    color: 'var(--text-primary)',
                    background: 'linear-gradient(135deg, #ffffff 0%, #a0a0a0 100%)',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    color: 'transparent'
                  }}>
                    {stat.value}
                  </h3>
                  <p style={{
                    color: 'var(--text-tertiary)',
                    fontSize: '0.85rem',
                    position: 'relative'
                  }}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div> */}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      {/* <div className="scroll-indicator" style={{
        position: 'absolute',
        bottom: '30px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '10px',
        cursor: 'pointer',
        animation: 'bounce 2s infinite'
      }}


      onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}>
        <span style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)' }}>Scroll</span>
        <div style={{
          width: '20px',
          height: '35px',
          border: '2px solid var(--text-secondary)',
          borderRadius: '15px',
          position: 'relative'
        }}>
          <div style={{
            position: 'absolute',
            top: '5px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '3px',
            height: '8px',
            background: 'var(--text-primary)',
            borderRadius: '2px',
            animation: 'scrollWheel 2s infinite'
          }} />
        </div>
      </div> */}

      {/* Add all animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          25% { transform: translateY(-20px) translateX(10px); }
          75% { transform: translateY(20px) translateX(-10px); }
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.1); opacity: 0.5; }
        }
        
        @keyframes borderGlow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes shimmer {
          0% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }
        
        img {
  image-rendering: auto;
}
        @keyframes typing {
          from { width: 0; }
          to { width: 100%; }
        }
        
        @keyframes blink-caret {
          from, to { border-color: transparent; }
          50% { border-color: var(--text-primary); }
        }
        
        @keyframes fadeInOut {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
        
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(10px); }
        }
        
        @keyframes scrollWheel {
          0% { opacity: 1; transform: translateX(-50%) translateY(0); }
          100% { opacity: 0; transform: translateX(-50%) translateY(15px); }
        }
        
        @keyframes underline {
          0% { width: 0; opacity: 0; }
          50% { width: 100%; opacity: 1; }
          100% { width: 0; opacity: 0; }
        }
        
        .animate-slide-up {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .animate-slide-up.animated {
          opacity: 1;
          transform: translateY(0);
        }
        
        .animate-slide-right {
  opacity: 1;   /* always visible */
  transform: translateX(0);
}

.animate-slide-right.animated {
  opacity: 1;
  transform: translateX(0);
}
        
        .animate-slide-right.animated {
          opacity: 1;
          transform: translateX(0);
        }
        
        .hover-scale-img:hover {
          transform: scale(1.05);
        }
        
        .glow-text {
          animation: glow 2s ease-in-out infinite;
        }
        
        @keyframes glow {
          0%, 100% { text-shadow: 0 0 5px rgba(255,255,255,0.2); }
          50% { text-shadow: 0 0 20px rgba(255,255,255,0.5); }
        }
        
        .btn-wrapper {
          transition: all 0.3s ease;
        }
        
        .btn-wrapper:hover {
          transform: translateY(-2px);
          filter: drop-shadow(0 5px 15px rgba(255,255,255,0.1));
        }
        

        @media (max-width: 968px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
            text-align: center;
          }
          .content-container {
            text-align: center;
          }
          .content-container p {
            margin-left: auto;
            margin-right: auto;
          }
          .content-container div:last-child {
            justify-content: center;
          }
          .photo-container {
            order: 1;
            max-width: 320px;
            width: 100%;
            margin: 0 auto;
            min-width: 180px;
          }
          .photo-container > div {
            max-width: 100% !important;
            min-width: 160px;
          }
          .photo-container img {
            min-width: 120px;
            min-height: 160px;
            max-width: 100%;
            max-height: 350px;
            aspect-ratio: 3/4;
            object-fit: cover;
          }
          .content-container {
            order: 2;
          }
          h1 {
            font-size: 2.5rem !important;
          }
          h2 {
            font-size: 1.5rem !important;
          }
          .typing-wrapper {
            display: block !important;
          }
          .typing-wrapper h2 {
            white-space: normal !important;
            animation: none !important;
            border-right: none !important;
          }
        }

        @media (max-width: 600px) {
          .photo-container {
            max-width: 90vw;
            min-width: 120px;
            width: 100%;
            margin: 0 auto 1.5rem auto;
          }
          .photo-container > div {
            max-width: 100% !important;
            min-width: 100px;
          }
          .photo-container img {
            min-width: 80px;
            min-height: 100px;
            max-width: 100%;
            max-height: 250px;
            aspect-ratio: 3/4;
            object-fit: cover;
          }
        }
        
        @media (min-width: 1400px) {
          .photo-container {
            transform: scale(1.05);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;