import React, { useState, useRef } from 'react';
import Button from '../common/Button';

const HeroWithUpload = () => {
  const [profileImage, setProfileImage] = useState(null);
  const fileInputRef = useRef(null);
  
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  
  const triggerFileInput = () => {
    fileInputRef.current.click();
  };
  
  return (
    <section id="home" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      padding: '100px 0 50px',
      position: 'relative'
    }}>
      <div className="container" style={{
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 2rem'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          alignItems: 'center'
        }} className="hero-grid">
          
          {/* Left Side - Photo with Upload */}
          <div className="photo-container fade-up" style={{
            position: 'relative'
          }}>
            <div style={{
              position: 'relative',
              width: '100%',
              maxWidth: '400px',
              margin: '0 auto'
            }}>
              {/* Photo Upload Area */}
              <div 
                onClick={triggerFileInput}
                style={{
                  position: 'relative',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
                  border: '2px solid var(--border-light)',
                  transition: 'transform 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                <div style={{
                  width: '100%',
                  paddingBottom: '100%',
                  backgroundColor: '#1a1a1a',
                  position: 'relative'
                }}>
                  {profileImage ? (
                    <img 
                      src={profileImage} 
                      alt="Profile"
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                    />
                  ) : (
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: '#1a1a1a',
                      color: 'var(--text-tertiary)'
                    }}>
                      <span style={{ fontSize: '3rem', marginBottom: '1rem' }}>📸</span>
                      <span>Click to upload photo</span>
                    </div>
                  )}
                </div>
              </div>
              
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                style={{ display: 'none' }}
              />
              
              {/* Decorative Elements */}
              <div style={{
                position: 'absolute',
                top: '-10px',
                left: '-10px',
                right: '-10px',
                bottom: '-10px',
                border: '1px solid var(--border-medium)',
                borderRadius: '25px',
                zIndex: -1
              }} />
              
              <div style={{
                position: 'absolute',
                top: '20px',
                left: '20px',
                width: '80px',
                height: '80px',
                borderLeft: '2px solid var(--text-primary)',
                borderTop: '2px solid var(--text-primary)',
                borderRadius: '10px 0 0 0',
                zIndex: -1
              }} />
              
              <div style={{
                position: 'absolute',
                bottom: '20px',
                right: '20px',
                width: '80px',
                height: '80px',
                borderRight: '2px solid var(--text-primary)',
                borderBottom: '2px solid var(--text-primary)',
                borderRadius: '0 0 10px 0',
                zIndex: -1
              }} />
            </div>
          </div>
          
          {/* Right Side - Content */}
          <div className="content-container slide-right">
            <div style={{ marginBottom: '1rem' }}>
              <span style={{
                fontSize: '0.8rem',
                color: 'var(--text-secondary)',
                letterSpacing: '3px',
                textTransform: 'uppercase',
                fontWeight: '500'
              }}>
                Portfolio
              </span>
            </div>
            
            <h1 style={{
              fontSize: '3.5rem',
              fontWeight: 'bold',
              marginBottom: '0.5rem',
              lineHeight: '1.2',
              background: 'linear-gradient(135deg, #ffffff 0%, #a0a0a0 100%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent'
            }}>
              KALEESHWARAN A
            </h1>
            
            <h2 style={{
              fontSize: '2rem',
              color: 'var(--text-secondary)',
              marginBottom: '1rem',
              fontWeight: '600'
            }}>
              Software Developer
            </h2>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <span style={{ fontSize: '1rem', color: 'var(--text-tertiary)' }}>
                Specialized in{' '}
              </span>
              <span style={{
                fontSize: '1rem',
                color: 'var(--text-primary)',
                fontWeight: 'bold',
                borderBottom: '2px solid var(--text-primary)',
                paddingBottom: '2px'
              }}>
                Full Stack Developer
              </span>
            </div>
            
            <p style={{
              fontSize: '1rem',
              color: 'var(--text-tertiary)',
              marginBottom: '2rem',
              lineHeight: '1.8',
              maxWidth: '500px'
            }}>
              Building scalable full-stack applications with React.js, .NET, and modern technologies.
              Passionate about creating seamless digital experiences across web and mobile platforms.
            </p>
            
            <div style={{
              display: 'flex',
              gap: '1rem',
              marginBottom: '3rem',
              flexWrap: 'wrap'
            }}>
              <Button onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>
                View My Work
              </Button>
              <Button variant="outline" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
                Contact Me
              </Button>
            </div>
            
            <div style={{
              display: 'flex',
              gap: '3rem',
              flexWrap: 'wrap',
              paddingTop: '2rem',
              borderTop: '1px solid var(--border-light)'
            }}>
              <div>
                <h3 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '0.25rem' }}>5+</h3>
                <p style={{ color: 'var(--text-tertiary)', fontSize: '0.85rem' }}>Projects Completed</p>
              </div>
              <div>
                <h3 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '0.25rem' }}>4+</h3>
                <p style={{ color: 'var(--text-tertiary)', fontSize: '0.85rem' }}>Platforms</p>
              </div>
              <div>
                <h3 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '0.25rem' }}>100%</h3>
                <p style={{ color: 'var(--text-tertiary)', fontSize: '0.85rem' }}>Client Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
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
            max-width: 300px;
            margin: 0 auto;
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
        }
        
        @media (max-width: 480px) {
          .photo-container {
            transform: scale(0.9);
          }
          
          .hero-grid {
            gap: 1rem !important;
          }
          
          .content-container div:last-child {
            gap: 1.5rem !important;
          }
          
          h1 {
            font-size: 2rem !important;
          }
        }
        
        @media (min-width: 1400px) {
          .photo-container {
            transform: scale(1.1);
          }
        }
      `}</style>
    </section>
  );
};

export default HeroWithUpload;