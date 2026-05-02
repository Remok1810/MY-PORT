import React, { useEffect, useState } from 'react';
import Button from '../common/Button';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
  };

  const specializations = [
    "Full Stack Development",
    "React.js / .NET Expert",
    "Mobile App Development"
  ];
  
  return (
    <section 
      id="about" 
      style={{
        padding: '120px 0',
        position: 'relative',
        overflow: 'hidden',
        background: 'radial-gradient(circle at 30% 40%, rgba(255,255,255,0.02) 0%, rgba(0,0,0,0) 100%)',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center'
      }}
      onMouseMove={handleMouseMove}
    >
      {/* Animated Background Particles - Same as Hero */}
      <div className="about-particles">
        {[...Array(20)].map((_, i) => (
          <div key={i} className={`about-particle about-particle-${i}`} style={{
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
        top: '15%',
        right: '5%',
        width: '350px',
        height: '350px',
        background: 'radial-gradient(circle, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0) 70%)',
        borderRadius: '50%',
        animation: 'pulseOrb 10s ease-in-out infinite',
        filter: 'blur(50px)'
      }} />
      
      <div style={{
        position: 'absolute',
        bottom: '10%',
        left: '0%',
        width: '280px',
        height: '280px',
        background: 'radial-gradient(circle, rgba(100,100,255,0.05) 0%, rgba(255,255,255,0) 70%)',
        borderRadius: '50%',
        animation: 'pulseOrb 7s ease-in-out infinite reverse',
        filter: 'blur(45px)'
      }} />

      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0) 70%)',
        borderRadius: '50%',
        transform: 'translate(-50%, -50%)',
        animation: 'rotateOrb 25s linear infinite',
        filter: 'blur(60px)'
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
          alignItems: 'start'
        }} className="about-grid">
          
          {/* Left side - Name and Title with 3D tilt */}
          <div 
            className={`about-left slide-left ${isVisible ? 'animated' : ''}`}
            style={{
              transformStyle: 'preserve-3d',
              perspective: '1000px',
              transform: `rotateX(${(mousePosition.y - 50) * 0.02}deg) rotateY(${(mousePosition.x - 50) * 0.02}deg)`,
              transition: 'transform 0.3s ease-out'
            }}
          >
            <div style={{
              borderLeft: '3px solid var(--text-primary)',
              paddingLeft: '2rem',
              position: 'relative'
            }}>
              {/* Animated border glow */}
              <div style={{
                position: 'absolute',
                left: -1,
                top: 0,
                width: '3px',
                height: '100%',
                background: 'linear-gradient(180deg, #ffffff, #666666, #ffffff)',
                animation: 'borderPulse 3s ease-in-out infinite',
                borderRadius: '3px'
              }} />
              
              <h2 style={{
                fontSize: '3.5rem',
                fontWeight: 'bold',
                marginBottom: '1rem',
                lineHeight: '1.2',
                background: 'linear-gradient(135deg, #ffffff 0%, #e0e0e0 50%, #ffffff 100%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
                backgroundSize: '200% auto',
                animation: 'shimmer 4s linear infinite'
              }}>
                KALEESH<br />WARAN A
              </h2>
              
              <div className="title-glow">
                <h3 style={{
                  fontSize: '1.3rem',
                  color: 'var(--text-secondary)',
                  marginBottom: '2rem',
                  position: 'relative',
                  display: 'inline-block'
                }}>
                  Software Developer
                  <span style={{
                    position: 'absolute',
                    bottom: '-5px',
                    left: 0,
                    width: '100%',
                    height: '2px',
                    background: 'linear-gradient(90deg, #ffffff, transparent)',
                    animation: 'underline 2s ease-in-out infinite'
                  }} />
                </h3>
              </div>
              
              <div style={{ marginBottom: '2rem' }}>
                {specializations.map((spec, index) => (
                  <div 
                    key={index} 
                    className={`spec-item animate-slide-up ${isVisible ? 'animated' : ''}`}
                    style={{ 
                      animationDelay: `${0.1 * index}s`,
                      overflow: 'hidden'
                    }}
                  >
                    <p style={{
                      color: 'var(--text-tertiary)',
                      marginBottom: '0.75rem',
                      fontSize: '1rem',
                      position: 'relative',
                      display: 'inline-block',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateX(10px)';
                      e.currentTarget.style.color = '#ffffff';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateX(0)';
                      e.currentTarget.style.color = 'var(--text-tertiary)';
                    }}>
                      → {spec}
                    </p>
                  </div>
                ))}
              </div>
              
              <div className="website-link" style={{
                fontSize: '0.9rem',
                color: 'var(--text-secondary)',
                position: 'relative',
                display: 'inline-block'
              }}>
                <span style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  <span style={{
                    width: '30px',
                    height: '1px',
                    background: 'linear-gradient(90deg, #ffffff, transparent)'
                  }} />
                  kaleesh.me
                </span>
              </div>
            </div>
          </div>
          
          {/* Right side - Detailed info with animations */}
          <div className="about-right">
            <div className={`animate-slide-up ${isVisible ? 'animated' : ''}`} style={{ animationDelay: '0.1s' }}>
              <h2 style={{
                fontSize: '2.5rem',
                marginBottom: '1.5rem',
                fontWeight: '600',
                background: 'linear-gradient(135deg, #ffffff 0%, #a0a0a0 100%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
                position: 'relative',
                display: 'inline-block'
              }}>
                About Me
                <span style={{
                  position: 'absolute',
                  bottom: '-8px',
                  left: 0,
                  width: '60px',
                  height: '3px',
                  background: 'linear-gradient(90deg, #ffffff, #666666)',
                  borderRadius: '3px',
                  animation: 'expandWidth 1.5s ease-out'
                }} />
              </h2>
            </div>
            
            <div className={`animate-slide-up ${isVisible ? 'animated' : ''}`} style={{ animationDelay: '0.2s' }}>
              <p style={{
                color: 'var(--text-tertiary)',
                marginBottom: '1.5rem',
                lineHeight: '1.8',
                fontSize: '1rem'
              }}>
                I'm a passionate Software Developer with expertise in building full-stack applications
                across web, Android, iOS, and Windows platforms. With a strong foundation in React.js,
                .NET, and modern technologies, I create scalable and efficient solutions.
              </p>
            </div>
            
            <div className={`animate-slide-up ${isVisible ? 'animated' : ''}`} style={{ animationDelay: '0.3s' }}>
              <p style={{
                color: 'var(--text-tertiary)',
                marginBottom: '2rem',
                lineHeight: '1.8',
                fontSize: '1rem'
              }}>
                Throughout my career, I've managed complete end-to-end development lifecycles and
                successfully deployed applications on Google Play Store and Apple App Store.
              </p>
            </div>
            
            <div className={`animate-slide-up ${isVisible ? 'animated' : ''}`} style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '1.5rem',
              marginBottom: '2rem',
              animationDelay: '0.4s'
            }}>
              {/* Experience Card */}
              <div className="info-card" style={{
                padding: '1rem 0',
                position: 'relative',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.paddingLeft = '10px';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.paddingLeft = '0';
              }}>
                <span style={{ 
                  color: 'var(--text-primary)', 
                  fontWeight: 'bold', 
                  fontSize: '1rem',
                  display: 'block',
                  marginBottom: '0.5rem',
                  position: 'relative'
                }}>
                  💼 Experience
                </span>
                <p style={{ color: 'var(--text-tertiary)', fontSize: '0.95rem', marginBottom: '0.25rem' }}>
                  Junior Full Stack Developer
                </p>
                <p style={{ color: 'var(--text-tertiary)', fontSize: '0.85rem', opacity: 0.8 }}>
                  TATA Strive Certified
                </p>
              </div>
              
              {/* Education Card */}
              <div className="info-card" style={{
                padding: '1rem 0',
                position: 'relative',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.paddingLeft = '10px';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.paddingLeft = '0';
              }}>
                <span style={{ 
                  color: 'var(--text-primary)', 
                  fontWeight: 'bold', 
                  fontSize: '1rem',
                  display: 'block',
                  marginBottom: '0.5rem'
                }}>
                  🎓 Education
                </span>
                <p style={{ color: 'var(--text-tertiary)', fontSize: '0.95rem', marginBottom: '0.25rem' }}>
                  B.E Computer Science
                </p>
                <p style={{ color: 'var(--text-tertiary)', fontSize: '0.85rem', opacity: 0.8 }}>
                  CGPA: 7.9
                </p>
              </div>
            </div>
            
            {/* Skills Tags */}
            <div className={`animate-slide-up ${isVisible ? 'animated' : ''}`} style={{ 
              marginBottom: '2rem',
              animationDelay: '0.5s'
            }}>
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.75rem'
              }}>
                {['React.js', '.NET', 'React Native', 'Node.js', 'MongoDB', 'TypeScript'].map((skill, index) => (
                  <span key={skill} className="skill-tag" style={{
                    padding: '0.4rem 1rem',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '25px',
                    fontSize: '0.85rem',
                    color: 'var(--text-secondary)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.15)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                  }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div className={`animate-slide-up ${isVisible ? 'animated' : ''}`} style={{ animationDelay: '0.6s' }}>
              <div className="btn-wrapper">
                <Button variant="outline">
                  Download Resume
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add all animations - Same as Hero */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          25% { transform: translateY(-20px) translateX(10px); }
          75% { transform: translateY(20px) translateX(-10px); }
        }
        
        @keyframes pulseOrb {
          0%, 100% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.2); opacity: 0.5; }
        }
        
        @keyframes rotateOrb {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        
        @keyframes shimmer {
          0% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }
        
        @keyframes borderPulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
        
        @keyframes underline {
          0% { width: 0; opacity: 0; }
          50% { width: 100%; opacity: 1; }
          100% { width: 0; opacity: 0; }
        }
        
        @keyframes expandWidth {
          from { width: 0; }
          to { width: 60px; }
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
        
        .slide-left {
          opacity: 0;
          transform: translateX(-30px);
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .slide-left.animated {
          opacity: 1;
          transform: translateX(0);
        }
        
        .btn-wrapper {
          transition: all 0.3s ease;
        }
        
        .btn-wrapper:hover {
          transform: translateY(-2px);
          filter: drop-shadow(0 5px 15px rgba(255,255,255,0.1));
        }
        
        /* Responsive Styles */
        @media (max-width: 968px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
            text-align: center;
          }
          
          .about-left {
            text-align: center;
          }
          
          .about-left > div {
            border-left: none !important;
            border-top: 3px solid var(--text-primary);
            padding-left: 0 !important;
            padding-top: 2rem;
          }
          
          .about-left > div > div:first-child {
            left: 50% !important;
            transform: translateX(-50%);
            width: 3px;
            height: 50px;
            top: -20px;
          }
          
          .website-link span {
            justify-content: center;
          }
          
          .about-right {
            text-align: center;
          }
          
          .about-right h2 span {
            left: 50% !important;
            transform: translateX(-50%);
          }
          
          .info-card {
            text-align: left;
          }
          
          .skill-tag {
            display: inline-block;
          }
          
          h2 {
            font-size: 2rem !important;
          }
          
          h3 {
            font-size: 1.1rem !important;
          }
        }
        
        @media (max-width: 768px) {
          .container {
            padding: 0 1.5rem !important;
          }
        }
        
        @media (max-width: 480px) {
          .about-grid {
            gap: 2rem !important;
          }
          
          .container {
            padding: 0 1rem !important;
          }
          
          h2 {
            font-size: 1.8rem !important;
          }
          
          .info-card {
            padding: 0.5rem 0 !important;
          }
          
          .skill-tag {
            font-size: 0.75rem !important;
            padding: 0.3rem 0.8rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default About;