import React, { useEffect, useState } from 'react';

// Certification images
import fullstackCert from '../../assets/images/certifications/fullstack-cert.jpg';
import reactNativeCert from '../../assets/images/certifications/react-native-cert.jpg';
import cloudCert from '../../assets/images/certifications/cloud-cert.jpg';
import uiuxCert from '../../assets/images/certifications/uiux-cert.jpg';
import databaseCert from '../../assets/images/certifications/database-cert.jpg';
import cybersecurityCert from '../../assets/images/certifications/cybersecurity-cert.jpg';

const Certification = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [modalImage, setModalImage] = useState(null);
  const [modalTitle, setModalTitle] = useState('');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const openModal = (image, title) => {
    setModalImage(image);
    setModalTitle(title);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalImage(null);
    setModalTitle('');
    document.body.style.overflow = 'unset';
  };

  const certifications = [
    {
      id: 1,
      title: "Full Stack Development",
      issuer: "TATA STRIVE",
      date: "Jan 24, 2025",
      image: fullstackCert,
      description: "Junior Full Stack Developer certification with Grade B assessment. Expertise in modern web architecture.",
      skills: ["React.js", ".NET", "Node.js", "MongoDB"],
      color: "#61DAFB"
    },
    {
      id: 2,
      title: "Diploma Frontend",
      issuer: "LOGIN360",
      date: "Dec 30, 2025",
      image: uiuxCert,
      description: "ISO9001-2015 certified Diploma Frontend course completion with proficiency in essential frontend tools.",
      skills: ["HTML", "CSS", "JavaScript", "React.js"],
      color: "#34A853"
    },
    {
      id: 3,
      title: "MongoDB Node.js",
      issuer: "SmartBridge",
      date: "Sep 29, 2024",
      image: reactNativeCert,
      description: "MongoDB Node.js Developer Path certification focused on scalable database design and API integration.",
      skills: ["MongoDB", "Node.js", "Express.js"],
      color: "#47A248"
    },
    {
      id: 4,
      title: "Cloud Computing",
      issuer: "IBM SkillsBuild",
      date: "Sep 16, 2024",
      image: databaseCert,
      description: "Journey to Cloud: Envisioning Your Solution certification covering cloud architecture and strategies.",
      skills: ["Cloud Computing", "Azure", "AWS"],
      color: "#00A4EF"
    },
    {
      id: 5,
      title: "React Developer",
      issuer: "LENTERA TECH",
      date: "Sep 23, 2025",
      image: cloudCert,
      description: "React Developer internship program completion with exceptional dedication and team collaboration.",
      skills: ["React.js", "JavaScript", "Teamwork"],
      color: "#F05032"
    },
    {
      id: 6,
      title: "National Conference",
      issuer: "Vaayusastra",
      date: "May 10, 2025",
      image: cybersecurityCert,
      description: "Presented research paper 'Intelligence scheduling for truck logistics' at 7th National Conference.",
      skills: ["Research", "Logistics", "AI"],
      color: "#FF6B6B"
    }
  ];

  return (
    <section id="certifications" style={{ padding: '80px 0', background: '#0a0a0a' }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        <h2 className="section-title" style={{
          fontSize: '3rem',
          fontWeight: '800',
          marginBottom: '3rem',
          textAlign: 'center',
          background: 'linear-gradient(135deg, #fff 0%, #888 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontFamily: "'Inter', sans-serif"
        }}>
          Certifications
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2.5rem'
        }}>
          {certifications.map((cert, index) => (
            <div key={cert.id} style={{
              animation: 'fadeInUp 0.8s ease-out forwards',
              animationDelay: `${index * 0.15}s`,
              opacity: 0
            }}>
              <div style={{
                background: '#111',
                borderRadius: '12px',
                border: '1px solid rgba(255,255,255,0.05)',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                height: '100%',
                display: 'flex',
                flexDirection: 'column'
              }}>
                <div style={{
                  width: '100%',
                  height: '220px',
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  <img
                    src={cert.image}
                    alt={cert.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.5s ease'
                    }}
                  />
                  <div style={{
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.8) 100%)'
                  }} />

                  <button
                    onClick={() => openModal(cert.image, cert.title)}
                    style={{
                      position: 'absolute',
                      top: '15px',
                      right: '15px',
                      background: 'rgba(255,255,255,0.1)',
                      backdropFilter: 'blur(10px)',
                      padding: '10px',
                      borderRadius: '50%',
                      color: '#fff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.3s ease',
                      border: '1px solid rgba(255,255,255,0.2)',
                      cursor: 'pointer'
                    }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                  </button>
                </div>

                <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ marginBottom: '0.5rem' }}>
                    <span style={{
                      fontSize: '0.75rem',
                      color: cert.color || '#4ade80',
                      fontWeight: '700',
                      textTransform: 'uppercase',
                      letterSpacing: '1px'
                    }}>
                      {cert.issuer}
                    </span>
                  </div>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: '700', marginBottom: '0.8rem', color: '#fff' }}>
                    {cert.title}
                  </h3>
                  <p style={{
                    color: 'rgba(255,255,255,0.6)',
                    fontSize: '0.9rem',
                    marginBottom: '1.5rem',
                    lineHeight: '1.6',
                    height: '3.2rem',
                    overflow: 'hidden'
                  }}>
                    {cert.description}
                  </p>

                  <div style={{ marginBottom: '1.5rem', marginTop: 'auto' }}>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                      {cert.skills.map(skill => (
                        <span key={skill} style={{
                          backgroundColor: 'rgba(255,255,255,0.05)',
                          padding: '4px 10px',
                          borderRadius: '6px',
                          fontSize: '0.75rem',
                          color: 'rgba(255,255,255,0.8)',
                          border: '1px solid rgba(255,255,255,0.1)'
                        }}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => openModal(cert.image, cert.title)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '10px',
                      width: '100%',
                      padding: '12px',
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: '8px',
                      color: '#fff',
                      fontSize: '0.9rem',
                      fontWeight: '600',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer'
                    }}
                  >
                    View Certificate
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {modalImage && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0,0,0,0.95)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 2000,
          padding: '20px',
          backdropFilter: 'blur(10px)'
        }} onClick={closeModal}>
          <div style={{
            position: 'relative',
            maxWidth: '1000px',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }} onClick={e => e.stopPropagation()}>
            <button
              onClick={closeModal}
              style={{
                position: 'absolute',
                top: '-50px',
                right: '0',
                background: 'none',
                border: 'none',
                color: '#fff',
                cursor: 'pointer',
                fontSize: '1rem',
                fontWeight: '600',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              Close
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <img
              src={modalImage}
              alt={modalTitle}
              style={{
                width: '100%',
                maxHeight: '80vh',
                objectFit: 'contain',
                borderRadius: '12px'
              }}
            />
            <h3 style={{ color: '#fff', marginTop: '20px', fontSize: '1.5rem' }}>{modalTitle}</h3>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default Certification;