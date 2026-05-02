import React, { useEffect, useState } from 'react';
import Button from '../common/Button';

// Replace these imports with your own images for the three circles
// You can use your own assets or keep the Unsplash fallbacks
import workImageOne from '../../assets/images/work-one.jpg';
import workImageTwo from '../../assets/images/work-two.jpg';
import workImageThree from '../../assets/images/work-three.jpg';

// Fallback images (high-quality Unsplash - abstract creative works)
const fallbackImages = {
  work1: 'https://images.unsplash.com/photo-1542744094-24638eff58bb?w=400&h=400&fit=crop',
  work2: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=400&fit=crop',
  work3: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=400&fit=crop'
};

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const navigateTo = (section) => {
    const element = document.getElementById(section.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Data for the three left-side circular images - NO NAMES, just work representation
  const leftCircles = [
    {
      id: 1,
      title: 'Creative Direction',
      subtitle: 'Visual Identity',
      image: workImageOne,
      fallback: fallbackImages.work1,
      section: 'skills'
    },
    {
      id: 2,
      title: 'Digital Design',
      subtitle: 'User Experience',
      image: workImageTwo,
      fallback: fallbackImages.work2,
      section: 'certification'
    },
    {
      id: 3,
      title: 'Artistic Vision',
      subtitle: 'Concept Development',
      image: workImageThree,
      fallback: fallbackImages.work3,
      section: 'projects'
    }
  ];

  const handleImageError = (e, fallbackSrc) => {
    e.target.src = fallbackSrc;
  };

  return (
    <section 
      id="about" 
      style={{
        padding: '100px 0',
        position: 'relative',
        overflow: 'hidden',
        background: 'radial-gradient(circle at 30% 40%, rgba(255,255,255,0.02) 0%, rgba(0,0,0,0) 100%)',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      {/* Animated Background Particles */}
      <div className="about-particles">
        {[...Array(30)].map((_, i) => (
          <div key={i} style={{
            position: 'absolute',
            width: `${2 + Math.random() * 4}px`,
            height: `${2 + Math.random() * 4}px`,
            background: `rgba(255,255,255,${0.1 + Math.random() * 0.2})`,
            borderRadius: '50%',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `float ${5 + Math.random() * 12}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 6}s`,
            filter: 'blur(0.5px)'
          }} />
        ))}
      </div>

      {/* Animated Gradient Orbs */}
      <div style={{
        position: 'absolute',
        top: '15%',
        right: '5%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 70%)',
        borderRadius: '50%',
        animation: 'pulseOrb 12s ease-in-out infinite',
        filter: 'blur(60px)'
      }} />
      
      <div style={{
        position: 'absolute',
        bottom: '10%',
        left: '-5%',
        width: '320px',
        height: '320px',
        background: 'radial-gradient(circle, rgba(100,100,255,0.04) 0%, rgba(255,255,255,0) 70%)',
        borderRadius: '50%',
        animation: 'pulseOrb 8s ease-in-out infinite reverse',
        filter: 'blur(55px)'
      }} />

      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: '550px',
        height: '550px',
        background: 'radial-gradient(circle, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0) 70%)',
        borderRadius: '50%',
        transform: 'translate(-50%, -50%)',
        animation: 'rotateOrb 30s linear infinite',
        filter: 'blur(70px)'
      }} />

      <div className="container" style={{
        width: '100%',
        maxWidth: '1300px',
        margin: '0 auto',
        padding: '0 2rem',
        position: 'relative',
        zIndex: 2
      }}>
        {/* TWO-COLUMN LAYOUT: LEFT = 3 images, RIGHT = About Me content */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          alignItems: 'center'
        }} className="about-split-grid">
          
          {/* LEFT SIDE: Three big circular images - BEST WORKS STYLE */}
          <div className={`left-circles ${isVisible ? 'animated' : ''}`} style={{
            opacity: 0,
            transform: 'translateX(-30px)',
            transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
            ...(isVisible && { opacity: 1, transform: 'translateX(0)' })
          }}>
            {/* Section header for the circles area */}
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <h3 style={{
                fontSize: '0.9rem',
                letterSpacing: '3px',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.5)',
                marginBottom: '0.5rem'
              }}>Featured Collection</h3>
              <h2 style={{
                fontSize: '2.2rem',
                fontWeight: '600',
                background: 'linear-gradient(135deg, #ffffff 0%, #b0b0b0 100%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent'
              }}>Best Works</h2>
              <p style={{
                color: 'rgba(255,255,255,0.6)',
                fontSize: '0.9rem',
                marginTop: '0.75rem',
                maxWidth: '400px',
                marginLeft: 'auto',
                marginRight: 'auto'
              }}>
                Be inspired by the newest and most interesting works of famous authors together
              </p>
            </div>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '2.5rem'
            }}>
              {leftCircles.map((item, index) => (
                <div
                  key={item.id}
                  className={`circle-card`}
                  style={{
                    animationDelay: `${index * 0.15}s`,
                    opacity: 0,
                    transform: 'scale(0.9)',
                    animation: isVisible ? `cardPopIn 0.6s cubic-bezier(0.2, 0.9, 0.4, 1.1) ${index * 0.15}s forwards` : 'none'
                  }}
                >
                  <div
                    onClick={() => navigateTo(item.section)}
                    onMouseEnter={() => setHoveredCard(item.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                    style={{
                      cursor: 'pointer',
                      transition: 'all 0.4s cubic-bezier(0.2, 0.9, 0.4, 1.1)',
                      transform: hoveredCard === item.id ? 'translateY(-10px)' : 'translateY(0)',
                    }}
                  >
                    {/* BIG Circular Image */}
                    <div style={{
                      width: '260px',
                      height: '260px',
                      borderRadius: '50%',
                      overflow: 'hidden',
                      background: '#1a1a1a',
                      border: hoveredCard === item.id ? '4px solid rgba(255,255,255,0.5)' : '3px solid rgba(255,255,255,0.15)',
                      boxShadow: hoveredCard === item.id 
                        ? '0 25px 40px rgba(0,0,0,0.3), 0 0 0 6px rgba(255,255,255,0.1)' 
                        : '0 15px 30px rgba(0,0,0,0.2)',
                      transition: 'all 0.35s ease-out',
                      position: 'relative'
                    }}>
                      <img 
                        src={item.image} 
                        alt={item.title}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          transition: 'transform 0.6s ease',
                          transform: hoveredCard === item.id ? 'scale(1.1)' : 'scale(1)'
                        }}
                        onError={(e) => handleImageError(e, item.fallback)}
                      />
                      {/* Gradient overlay */}
                      <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'radial-gradient(circle, rgba(0,0,0,0) 60%, rgba(0,0,0,0.4) 100%)',
                        opacity: hoveredCard === item.id ? 0.6 : 0,
                        transition: 'opacity 0.3s ease',
                        borderRadius: '50%',
                        pointerEvents: 'none'
                      }} />
                    </div>
                    
                    {/* Title + Subtitle below each image - NO NAMES */}
                    <div style={{
                      textAlign: 'center',
                      marginTop: '1.25rem',
                      transition: 'all 0.3s ease',
                      transform: hoveredCard === item.id ? 'translateY(5px)' : 'translateY(0)'
                    }}>
                      <h3 style={{
                        fontSize: '1.2rem',
                        fontWeight: '600',
                        color: 'var(--text-primary)',
                        marginBottom: '0.25rem'
                      }}>
                        {item.title}
                      </h3>
                      <p style={{
                        fontSize: '0.85rem',
                        color: 'var(--text-tertiary)',
                        opacity: 0.8
                      }}>
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Show more button at the bottom of circles section */}
            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
              <button style={{
                background: 'transparent',
                border: '1px solid rgba(255,255,255,0.2)',
                padding: '0.6rem 1.5rem',
                borderRadius: '40px',
                color: 'white',
                fontSize: '0.85rem',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                fontFamily: 'inherit'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
              onClick={() => navigateTo('projects')}>
                Show more →
              </button>
            </div>
          </div>

          {/* RIGHT SIDE: About Me Content */}
          <div className="right-about">
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
            
            {/* Experience + Education Cards (2 columns) */}
            <div className={`animate-slide-up ${isVisible ? 'animated' : ''}`} style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '1.5rem',
              marginBottom: '2rem',
              animationDelay: '0.4s'
            }}>
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
                  💼 Experience
                </span>
                <p style={{ color: 'var(--text-tertiary)', fontSize: '0.95rem', marginBottom: '0.25rem' }}>
                  Junior Full Stack Developer
                </p>
                <p style={{ color: 'var(--text-tertiary)', fontSize: '0.85rem', opacity: 0.8 }}>
                  TATA Strive Certified
                </p>
              </div>
              
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
                {['React.js', '.NET', 'React Native', 'Node.js', 'MongoDB', 'TypeScript'].map((skill) => (
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
            
            {/* Download Resume Button */}
            <div className={`animate-slide-up ${isVisible ? 'animated' : ''}`} style={{ animationDelay: '0.6s' }}>
              <div className="btn-wrapper" style={{
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.filter = 'drop-shadow(0 5px 15px rgba(255,255,255,0.1))';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.filter = 'none';
              }}>
                <Button variant="outline">
                  Download Resume
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Global Styles & Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); opacity: 0.3; }
          25% { transform: translateY(-25px) translateX(12px); opacity: 0.6; }
          75% { transform: translateY(20px) translateX(-10px); opacity: 0.4; }
        }
        
        @keyframes pulseOrb {
          0%, 100% { transform: scale(1); opacity: 0.2; }
          50% { transform: scale(1.15); opacity: 0.35; }
        }
        
        @keyframes rotateOrb {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        
        @keyframes shimmer {
          0% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }
        
        @keyframes expandWidth {
          from { width: 0; }
          to { width: 60px; }
        }
        
        @keyframes cardPopIn {
          0% {
            opacity: 0;
            transform: scale(0.85);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
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
        
        .btn-wrapper {
          transition: all 0.3s ease;
        }
        
        /* CSS Variables for consistent theming */
        :root {
          --text-primary: #ffffff;
          --text-secondary: #e0e0e0;
          --text-tertiary: #a0a0a0;
        }
        
        /* Responsive: stack on smaller screens */
        @media (max-width: 968px) {
          .about-split-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
            text-align: center;
          }
          
          .left-circles {
            order: 1;
          }
          
          .right-about {
            order: 2;
            text-align: center;
          }
          
          .right-about h2 span {
            left: 50% !important;
            transform: translateX(-50%);
          }
          
          .right-about h2 {
            display: block;
            text-align: center;
          }
          
          .info-card {
            text-align: left;
          }
          
          .skill-tag {
            display: inline-block;
          }
          
          .container {
            padding: 0 1.5rem !important;
          }
          
          .circle-card div div {
            width: 220px !important;
            height: 220px !important;
          }
        }
        
        @media (max-width: 768px) {
          .circle-card div div {
            width: 180px !important;
            height: 180px !important;
          }
          
          h2 {
            font-size: 2rem !important;
          }
        }
        
        @media (max-width: 480px) {
          .circle-card div div {
            width: 140px !important;
            height: 140px !important;
          }
          
          h3 {
            font-size: 1rem !important;
          }
          
          .skill-tag {
            font-size: 0.7rem !important;
            padding: 0.25rem 0.7rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default About;