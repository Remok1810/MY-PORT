import React, { useState, useEffect } from 'react';

const Navigation = ({ activeScreen, setActiveScreen }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const navItems = ['Home', 'About', 'Skills', 'Projects', 'Certification', 'Contact'];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const scrollToSection = (section) => {
    if (section === 'Skills' || section === 'Projects' || section === 'Certification') {
      setActiveScreen(section);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setActiveScreen(section);
      setTimeout(() => {
        const element = document.getElementById(section.toLowerCase());
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 100);
    }
    setIsMobileMenuOpen(false);
  };

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
  };

  const navStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    backgroundColor: isMobileMenuOpen ? 'transparent' : (isScrolled ? 'rgba(10, 10, 10, 0.95)' : 'rgba(10, 10, 10, 0.8)'),
    backdropFilter: isMobileMenuOpen ? 'none' : (isScrolled ? 'blur(12px)' : 'blur(8px)'),
    borderBottom: (isScrolled && !isMobileMenuOpen) ? '1px solid rgba(255,255,255,0.1)' : 'none',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    boxShadow: (isScrolled && !isMobileMenuOpen) ? '0 4px 20px rgba(0,0,0,0.3)' : 'none'
  };

  return (
    <nav style={navStyle} onMouseMove={handleMouseMove}>
      {/* Animated gradient background on scroll */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '100%',
        background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(255,255,255,0.03) 0%, transparent 100%)`,
        pointerEvents: 'none',
        opacity: isScrolled ? 0.5 : 0,
        transition: 'opacity 0.3s ease'
      }} />

      <div className="container" style={{
        width: '100%',
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '0.8rem 2rem',
        position: 'relative',
        zIndex: 2
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%'
        }}>
          {/* Logo with animation */}
          <div
            className="logo"
            style={{
              fontSize: '1.8rem',
              fontWeight: 'bold',
              cursor: 'pointer',
              position: 'relative'
            }}
            onClick={() => scrollToSection('Home')}
          >
            <span style={{
              background: 'linear-gradient(135deg, #ffffff 0%, #e0e0e0 50%, #ffffff 100%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
              backgroundSize: '200% auto',
              animation: 'shimmerNav 3s linear infinite'
            }}>
              Portfolio
            </span>
            <div style={{
              position: 'absolute',
              bottom: '-4px',
             
              width: '100%',
              height: '2px',
              background: 'linear-gradient(90deg, #ffffff, transparent)',
              transform: 'scaleX(0)',
              transformOrigin: 'left',
              transition: 'transform 0.3s ease'
            }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scaleX(1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scaleX(0)';
              }} />
          </div>

          {/* Desktop Navigation */}
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center', flex: 1, justifyContent: 'flex-end' }} className="desktop-nav">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`nav-link ${activeScreen === item ? 'active' : ''}`}
                style={{
                  background: 'none',
                  border: 'none',
                  color: activeScreen === item ? '#ffffff' : 'rgba(255,255,255,0.7)',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  transition: 'all 0.3s ease',
                  padding: '0.5rem 0',
                  position: 'relative',
                  fontWeight: activeScreen === item ? '600' : '400'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#ffffff';
                  const underline = e.currentTarget.querySelector('.nav-underline');
                  if (underline) underline.style.transform = 'scaleX(1)';
                }}
                onMouseLeave={(e) => {
                  if (activeScreen !== item) {
                    e.currentTarget.style.color = 'rgba(255,255,255,0.7)';
                  }
                  const underline = e.currentTarget.querySelector('.nav-underline');
                  if (underline && activeScreen !== item) underline.style.transform = 'scaleX(0)';
                }}
              >
                {item}
                <span className="nav-underline" style={{
                  position: 'absolute',
                  bottom: '-2px',
                  left: 0,
                  width: '100%',
                  height: '2px',
                  background: `linear-gradient(90deg, #ffffff, ${activeScreen === item ? '#ffffff' : 'transparent'})`,
                  transform: activeScreen === item ? 'scaleX(1)' : 'scaleX(0)',
                  transformOrigin: 'left',
                  transition: 'transform 0.3s ease'
                }} />
              </button>
            ))}

            {/* Contact Button in Nav */}

          </div>

          {/* Mobile Menu Toggle Button - Amazing Design */}
          <button
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{
              display: 'none',
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '12px',
              color: 'var(--text-primary)',
              width: '48px',
              height: '48px',
              fontSize: '1.8rem',
              cursor: 'pointer',
              backdropFilter: 'blur(10px)',
              transition: 'all 0.3s ease',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            <span style={{
              display: 'inline-block',
              transition: 'transform 0.3s ease',
              transform: isMobileMenuOpen ? 'rotate(90deg)' : 'rotate(0deg)'
            }}>
              {isMobileMenuOpen ? '✕' : '☰'}
            </span>
          </button>
        </div>

        {/* Mobile Menu Overlay - Amazing Design with Animation */}
        {isMobileMenuOpen && (
          <div className="mobile-menu-overlay" style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(10, 10, 10, 0.98)',
            backdropFilter: 'blur(20px)',
            zIndex: 999,
            animation: 'fadeIn 0.3s ease-out'
          }}>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
              padding: '80px 2rem 2rem'
            }}>
              {/* Close button */}
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  background: 'rgba(255,255,255,0.1)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  borderRadius: '50%',
                  width: '48px',
                  height: '48px',
                  fontSize: '1.5rem',
                  color: '#ffffff',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.2)';
                  e.currentTarget.style.transform = 'rotate(90deg)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                  e.currentTarget.style.transform = 'rotate(0deg)';
                }}
              >
                ✕
              </button>

              {/* Logo in mobile menu */}
              <div style={{
                fontSize: '2rem',
                fontWeight: 'bold',
                marginBottom: '3rem',
                textAlign: 'center'
              }}>
                <span style={{
                  background: 'linear-gradient(135deg, #ffffff 0%, #e0e0e0 50%, #ffffff 100%)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  color: 'transparent'
                }}>
                  Portfolio
                </span>
              </div>

              {/* Mobile Nav Items with animations */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
                flex: 1
              }}>
                {navItems.map((item, index) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="mobile-nav-item"
                    style={{
                      background: 'none',
                      border: 'none',
                      color: activeScreen === item ? '#ffffff' : 'rgba(255,255,255,0.7)',
                      cursor: 'pointer',
                      fontSize: '1.5rem',
                      textAlign: 'center',
                      padding: '1rem',
                      borderRadius: '12px',
                      transition: 'all 0.3s ease',
                      fontWeight: activeScreen === item ? '600' : '400',
                      position: 'relative',
                      overflow: 'hidden',
                      animation: `slideInMobile 0.4s ease-out ${index * 0.05}s both`
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                      e.currentTarget.style.transform = 'translateX(10px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'none';
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                  >
                    {item}
                    {activeScreen === item && (
                      <span style={{
                        position: 'absolute',
                        bottom: '0',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '40px',
                        height: '2px',
                        background: '#ffffff',
                        borderRadius: '2px'
                      }} />
                    )}
                  </button>
                ))}
              </div>

              {/* Mobile Contact Button */}
              <button
                onClick={() => scrollToSection('Contact')}
                style={{
                  background: 'linear-gradient(135deg, #ffffff 0%, #e0e0e0 100%)',
                  border: 'none',
                  padding: '1rem',
                  borderRadius: '12px',
                  color: '#0a0a0a',
                  cursor: 'pointer',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  marginTop: '2rem',
                  transition: 'all 0.3s ease',
                  animation: 'slideInMobile 0.4s ease-out 0.3s both'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 5px 20px rgba(255,255,255,0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                Hire Me
              </button>

              {/* Social links in mobile menu */}
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '1.5rem',
                marginTop: '2rem',
                paddingTop: '1rem',
                borderTop: '1px solid rgba(255,255,255,0.1)'
              }}>
                {['GitHub', 'LinkedIn', 'Twitter'].map((social, idx) => (
                  <a
                    key={social}
                    href="#"
                    style={{
                      color: 'rgba(255,255,255,0.5)',
                      textDecoration: 'none',
                      fontSize: '0.85rem',
                      transition: 'all 0.3s ease',
                      animation: `fadeInUp 0.4s ease-out ${0.4 + idx * 0.05}s both`
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#ffffff';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'rgba(255,255,255,0.5)';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes shimmerNav {
          0% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideInMobile {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .nav-link {
          position: relative;
        }
        
        .nav-link.active {
          color: #ffffff !important;
        }
        
        .mobile-nav-item {
          position: relative;
        }
        
        @media (max-width: 968px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-btn {
            display: flex !important;
            align-items: center;
            justify-content: center;
          }
          
          .container {
            padding: 0.8rem 1.5rem !important;
          }
        }
        
        @media (max-width: 768px) {
          .container {
            padding: 0.8rem 1rem !important;
          }
          
          .logo {
            font-size: 1.5rem !important;
          }
        }
        
        @media (max-width: 480px) {
          .mobile-menu-overlay div {
            padding: 80px 1rem 1rem !important;
          }
          
          .mobile-nav-item {
            font-size: 1.2rem !important;
            padding: 0.8rem !important;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navigation;