import React, { useEffect, useState } from 'react';

// ============================================
// YOUR CERTIFICATION IMAGES IMPORTED HERE
// ============================================

import fullstackCert from '../../assets/images/certifications/fullstack-cert.jpg';
import reactNativeCert from '../../assets/images/certifications/react-native-cert.jpg';
import cloudCert from '../../assets/images/certifications/cloud-cert.jpg';
import uiuxCert from '../../assets/images/certifications/uiux-cert.jpg';
import databaseCert from '../../assets/images/certifications/database-cert.jpg';
import cybersecurityCert from '../../assets/images/certifications/cybersecurity-cert.jpg';

const Certification = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCert, setHoveredCert] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [modalImage, setModalImage] = useState(null);
  const [modalTitle, setModalTitle] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Close modal on ESC key press
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape' && modalImage) {
        setModalImage(null);
        setModalTitle('');
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [modalImage]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
  };

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

  // Certification data with YOUR ACTUAL CERTIFICATE DETAILS
  const certifications = [
    {
      id: 1,
      title: "Full Stack Development",
      issuer: "TATA STRIVE",
      date: "Jan 24, 2025",
      credentialId: "500295556",
      image: fullstackCert,
      description: "Certificate of Participation awarded for successfully clearing the assessment role of Junior Full Stack Developer with overall grade B.",
      skills: ["React.js", ".NET", "Node.js", "MongoDB"],
      color: "#61DAFB",
      gradient: "linear-gradient(135deg, #61DAFB20, #61DAFB05)",
      awardType: "Participation",
      grade: "B",
      category: "development"
    },
    {
      id: 2,
      title: "Diploma Frontend",
      issuer: "LOGIN360",
      date: "Dec 30, 2025",
      credentialId: "LTE25DIPFREND141316035",
      image: uiuxCert,
      description: "ISO9001-2015 certified Diploma Frontend course completion with proficiency in essential frontend tools and mock interviews.",
      skills: ["HTML", "CSS", "JavaScript", "React.js", "Frontend Tools"],
      color: "#34A853",
      gradient: "linear-gradient(135deg, #34A85320, #34A85305)",
      awardType: "Completion",
      studentId: "DIPFREND1413",
      category: "frontend"
    },
    {
      id: 3,
      title: "MongoDB Node.js",
      issuer: "SmartBridge & MongoDB",
      date: "Sep 29, 2024",
      credentialId: "MDB-SB-2024-0929",
      image: reactNativeCert,
      description: "MongoDB Node.js Developer Path certification completed through SmartBridge platform.",
      skills: ["MongoDB", "Node.js", "Express.js", "Database"],
      color: "#47A248",
      gradient: "linear-gradient(135deg, #47A24820, #47A24805)",
      awardType: "Certification",
      category: "backend"
    },
    {
      id: 4,
      title: "Cloud Computing",
      issuer: "IBM SkillsBuild",
      date: "Sep 16, 2024",
      credentialId: "oyoPhwy0",
      image: databaseCert,
      description: "Journey to Cloud: Envisioning Your Solution certification from IBM SkillsBuild.",
      skills: ["Cloud Computing", "Azure", "AWS", "Cloud Architecture"],
      color: "#00A4EF",
      gradient: "linear-gradient(135deg, #00A4EF20, #00A4EF05)",
      awardType: "Certification",
      category: "cloud"
    },
    {
      id: 5,
      title: "React Developer",
      issuer: "LENTERA TECHNOLOGIES",
      date: "Sep 23, 2025",
      credentialId: "LENTERA-REACT-2025-001",
      image: cloudCert,
      description: "React Developer internship program completion with exceptional dedication and team collaboration skills.",
      skills: ["React.js", "JavaScript", "Team Collaboration", "Git"],
      color: "#F05032",
      gradient: "linear-gradient(135deg, #F0503220, #F0503205)",
      awardType: "Internship",
      category: "internship"
    },
    {
      id: 6,
      title: "National Conference",
      issuer: "Vaayusastra Aerospace",
      date: "May 10, 2025",
      credentialId: "VAYU-NC-2025-056",
      image: cybersecurityCert,
      description: "Certificate of Participation for presenting paper titled 'Intelligence scheduling for truck logistics' at 7th National Conference.",
      skills: ["Research", "Paper Presentation", "Logistics", "AI"],
      color: "#FF6B6B",
      gradient: "linear-gradient(135deg, #FF6B6B20, #FF6B6B05)",
      awardType: "Participation",
      category: "research"
    }
  ];

  const filters = [
    { id: 'all', label: 'All', icon: '🎯' },
    { id: 'development', label: 'Development', icon: '💻' },
    { id: 'frontend', label: 'Frontend', icon: '🎨' },
    { id: 'backend', label: 'Backend', icon: '⚙️' },
    { id: 'cloud', label: 'Cloud', icon: '☁️' },
    { id: 'internship', label: 'Internship', icon: '💼' },
    { id: 'research', label: 'Research', icon: '📚' }
  ];

  const filteredCerts = activeFilter === 'all'
    ? certifications
    : certifications.filter(cert => cert.category === activeFilter);

  return (
    <section
      id="certification"
      style={{
        padding: '120px 0',
        position: 'relative',
        overflow: 'hidden',
        background: 'radial-gradient(circle at 30% 40%, rgba(255,255,255,0.02) 0%, rgba(0,0,0,0) 100%)',
        minHeight: '100vh'
      }}
      onMouseMove={handleMouseMove}
    >
      {/* Animated Background Particles */}
      <div className="cert-particles">
        {[...Array(50)].map((_, i) => (
          <div key={i} style={{
            position: 'absolute',
            width: `${2 + Math.random() * 6}px`,
            height: `${2 + Math.random() * 6}px`,
            background: `rgba(255,255,255,${0.05 + Math.random() * 0.3})`,
            borderRadius: '50%',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `floatCert ${3 + Math.random() * 15}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 8}s`,
            filter: 'blur(1px)'
          }} />
        ))}
      </div>

      {/* Animated Gradient Orbs */}
      <div style={{
        position: 'absolute',
        top: '5%',
        right: '-5%',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(97,218,251,0.08) 0%, rgba(255,255,255,0) 70%)',
        borderRadius: '50%',
        animation: 'floatOrbCert 20s ease-in-out infinite',
        filter: 'blur(80px)'
      }} />

      <div style={{
        position: 'absolute',
        bottom: '10%',
        left: '-10%',
        width: '450px',
        height: '450px',
        background: 'radial-gradient(circle, rgba(81,43,212,0.08) 0%, rgba(255,255,255,0) 70%)',
        borderRadius: '50%',
        animation: 'floatOrbCert 15s ease-in-out infinite reverse',
        filter: 'blur(80px)'
      }} />

      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(255,107,107,0.04) 0%, rgba(255,255,255,0) 70%)',
        borderRadius: '50%',
        transform: 'translate(-50%, -50%)',
        animation: 'rotateOrbCert 40s linear infinite',
        filter: 'blur(80px)'
      }} />

      <div className="container" style={{
        width: '100%',
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '0 2rem',
        position: 'relative',
        zIndex: 2
      }}>

        {/* Section Header with Glowing Effect */}
        <div className={`section-header ${isVisible ? 'animate-slide-up' : ''}`} style={{
          textAlign: 'center',
          marginBottom: '3rem',
          opacity: 0,
          transform: 'translateY(30px)',
          animation: isVisible ? 'slideUpCert 0.8s ease-out forwards' : 'none'
        }}>
          <div style={{
            display: 'inline-block',
            position: 'relative',
            marginBottom: '1rem'
          }}>
            <span style={{
              fontSize: '0.7rem',
              color: 'var(--text-secondary)',
              letterSpacing: '6px',
              textTransform: 'uppercase',
              background: 'rgba(255,255,255,0.05)',
              padding: '0.3rem 1.2rem',
              borderRadius: '30px',
              display: 'inline-block'
            }}>
              MY ACHIEVEMENTS
            </span>
          </div>

          <h2 style={{
            fontSize: '3.5rem',
            fontWeight: 'bold',
            background: 'linear-gradient(135deg, #ffffff 0%, #e0e0e0 30%, #ffffff 60%, #a0a0a0 100%)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
            backgroundSize: '300% auto',
            animation: 'shimmerCert 4s linear infinite',
            marginBottom: '0.5rem'
          }}>
            Certifications & Achievements
          </h2>

          <div style={{
            width: '100px',
            height: '3px',
            background: 'linear-gradient(90deg, transparent, #ffffff, #666666, #ffffff, transparent)',
            margin: '1rem auto 0',
            borderRadius: '3px'
          }} />

          <p style={{
            color: 'var(--text-tertiary)',
            marginTop: '1.5rem',
            fontSize: '1rem',
            maxWidth: '600px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}>
            Professional certifications, internships, and academic achievements
          </p>
        </div>

        {/* Animated Filter Buttons */}
        <div className={`filter-section ${isVisible ? 'animate-slide-up' : ''}`} style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '0.8rem',
          marginBottom: '3rem',
          opacity: 0,
          animation: isVisible ? 'slideUpCert 0.6s ease-out 0.2s forwards' : 'none'
        }}>
          {filters.map((filter, idx) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              style={{
                background: activeFilter === filter.id ? 'rgba(255,255,255,0.15)' : 'rgba(255,255,255,0.03)',
                border: `1px solid ${activeFilter === filter.id ? 'rgba(255,255,255,0.3)' : 'rgba(255,255,255,0.1)'}`,
                padding: '0.6rem 1.2rem',
                borderRadius: '40px',
                color: activeFilter === filter.id ? '#ffffff' : 'rgba(255,255,255,0.7)',
                cursor: 'pointer',
                fontSize: '0.85rem',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                backdropFilter: 'blur(10px)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                if (activeFilter !== filter.id) {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                }
              }}
            >
              <span>{filter.icon}</span> {filter.label}
            </button>
          ))}
        </div>

        {/* Certifications Grid with Staggered Animation */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
          gap: '2rem'
        }} className="cert-grid">
          {filteredCerts.map((cert, index) => (
            <div
              key={cert.id}
              className={`cert-card ${isVisible ? 'animate-cert' : ''}`}
              style={{
                animationDelay: `${index * 0.1}s`,
                opacity: 0,
                transform: 'translateY(40px)',
                animation: isVisible ? `certAppear 0.7s cubic-bezier(0.2, 0.9, 0.4, 1.1) ${index * 0.1}s forwards` : 'none'
              }}
            >
              <div
                style={{
                  background: cert.gradient,
                  backdropFilter: 'blur(10px)',
                  borderRadius: '24px',
                  border: `1px solid ${hoveredCert === cert.id ? cert.color : 'rgba(255,255,255,0.1)'}`,
                  overflow: 'hidden',
                  transition: 'all 0.5s cubic-bezier(0.2, 0.9, 0.4, 1.1)',
                  cursor: 'pointer',
                  height: '100%',
                  position: 'relative'
                }}
                onMouseEnter={(e) => {
                  setHoveredCert(cert.id);
                  e.currentTarget.style.transform = 'translateY(-12px) scale(1.02)';
                  e.currentTarget.style.boxShadow = `0 30px 50px rgba(0,0,0,0.4), 0 0 0 2px ${cert.color}40, 0 0 30px ${cert.color}30`;
                }}
                onMouseLeave={(e) => {
                  setHoveredCert(null);
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {/* Animated Shine Effect */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: '-100%',
                  width: '100%',
                  height: '100%',
                  background: `linear-gradient(90deg, transparent, ${cert.color}20, transparent)`,
                  transition: 'left 0.6s ease',
                  pointerEvents: 'none'
                }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.left = '100%';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.left = '-100%';
                  }} />

                {/* Certification Image with Zoom Effect */}
                <div
                  style={{
                    position: 'relative',
                    height: '220px',
                    overflow: 'hidden',
                    cursor: 'pointer'
                  }}
                  onClick={() => openModal(cert.image, cert.title)}
                >
                  <img
                    src={cert.image}
                    alt={cert.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.7s cubic-bezier(0.2, 0.9, 0.4, 1.1)',
                      transform: hoveredCert === cert.id ? 'scale(1.15)' : 'scale(1)'
                    }}
                  />

                  {/* Gradient Overlay */}
                  <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '120px',
                    background: `linear-gradient(180deg, transparent, rgba(0,0,0,0.7), rgba(0,0,0,0.9))`
                  }} />

                  {/* Click to View Badge - Animated */}
                  <div style={{
                    position: 'absolute',
                    bottom: '15px',
                    left: '15px',
                    background: 'rgba(0,0,0,0.7)',
                    padding: '0.3rem 0.8rem',
                    borderRadius: '25px',
                    fontSize: '0.65rem',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    backdropFilter: 'blur(5px)',
                    transition: 'all 0.3s ease',
                    transform: hoveredCert === cert.id ? 'translateX(5px)' : 'translateX(0)'
                  }}>
                    <span style={{ animation: 'pulseIcon 1.5s infinite' }}>🔍</span> Click to enlarge
                  </div>

                  {/* Certificate Type Badge - Animated */}
                  <div style={{
                    position: 'absolute',
                    top: '15px',
                    right: '15px',
                    background: `linear-gradient(135deg, ${cert.color}, ${cert.color}99)`,
                    padding: '0.3rem 1rem',
                    borderRadius: '25px',
                    fontSize: '0.7rem',
                    fontWeight: 'bold',
                    color: '#ffffff',
                    backdropFilter: 'blur(5px)',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
                    animation: hoveredCert === cert.id ? 'badgePulse 1s infinite' : 'none'
                  }}>
                    {cert.awardType === "Internship" ? "💼 INTERNSHIP" :
                      cert.awardType === "Participation" ? "📜 PARTICIPATION" :
                        cert.awardType === "Completion" ? "✅ COMPLETION" : "🎓 CERTIFICATION"}
                  </div>
                </div>

                <div style={{ padding: '1.5rem' }}>
                  {/* Title with Gradient */}
                  <h3 style={{
                    fontSize: '1.4rem',
                    fontWeight: '700',
                    marginBottom: '0.5rem',
                    background: `linear-gradient(135deg, #ffffff, ${cert.color})`,
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    color: 'transparent',
                    transition: 'all 0.3s ease'
                  }}>
                    {cert.title}
                  </h3>

                  {/* Issuer and Date with Icons */}
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '1rem',
                    paddingBottom: '0.75rem',
                    borderBottom: `2px solid ${cert.color}30`
                  }}>
                    <span style={{
                      fontSize: '0.85rem',
                      color: cert.color,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px'
                    }}>
                      <span style={{ fontSize: '0.9rem' }}>🏢</span> {cert.issuer.length > 25 ? cert.issuer.substring(0, 22) + '...' : cert.issuer}
                    </span>
                    <span style={{
                      fontSize: '0.75rem',
                      color: 'var(--text-tertiary)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}>
                      <span>📅</span> {cert.date}
                    </span>
                  </div>

                  {/* Award Type Chip */}
                  <div style={{
                    marginBottom: '0.75rem',
                    display: 'flex',
                    gap: '0.5rem',
                    flexWrap: 'wrap'
                  }}>
                    <span style={{
                      fontSize: '0.65rem',
                      padding: '0.2rem 0.6rem',
                      background: `${cert.color}25`,
                      borderRadius: '12px',
                      color: cert.color,
                      border: `1px solid ${cert.color}40`,
                      fontWeight: '500'
                    }}>
                      {cert.awardType}
                    </span>
                    {cert.grade && (
                      <span style={{
                        fontSize: '0.65rem',
                        padding: '0.2rem 0.6rem',
                        background: '#FFD70020',
                        borderRadius: '12px',
                        color: '#FFD700',
                        border: '1px solid #FFD70040'
                      }}>
                        Grade: {cert.grade}
                      </span>
                    )}
                  </div>

                  {/* Description */}
                  <p style={{
                    fontSize: '0.85rem',
                    color: 'var(--text-tertiary)',
                    lineHeight: '1.6',
                    marginBottom: '1rem'
                  }}>
                    {cert.description}
                  </p>

                  {/* Skills Tags with Animation */}
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.5rem',
                    marginBottom: '1rem'
                  }}>
                    {cert.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        style={{
                          fontSize: '0.7rem',
                          padding: '0.25rem 0.8rem',
                          background: `${cert.color}15`,
                          borderRadius: '20px',
                          color: cert.color,
                          border: `1px solid ${cert.color}25`,
                          transition: 'all 0.3s ease',
                          cursor: 'pointer'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'translateY(-2px)';
                          e.currentTarget.style.background = `${cert.color}30`;
                          e.currentTarget.style.borderColor = cert.color;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'translateY(0)';
                          e.currentTarget.style.background = `${cert.color}15`;
                          e.currentTarget.style.borderColor = `${cert.color}25`;
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Credential ID and View Button */}
                  <div style={{
                    paddingTop: '0.75rem',
                    borderTop: `1px solid ${cert.color}20`,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '0.5rem'
                  }}>
                    <span style={{
                      fontSize: '0.65rem',
                      color: 'var(--text-tertiary)',
                      fontFamily: 'monospace'
                    }}>
                      🔑 {cert.credentialId}
                    </span>
                    <button
                      onClick={() => openModal(cert.image, cert.title)}
                      style={{
                        fontSize: '0.8rem',
                        color: cert.color,
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        background: 'none',
                        border: 'none',
                        padding: '0.3rem 0.8rem',
                        borderRadius: '20px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        fontWeight: '500'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateX(5px)';
                        e.currentTarget.style.backgroundColor = `${cert.color}20`;
                        e.currentTarget.style.gap = '10px';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateX(0)';
                        e.currentTarget.style.backgroundColor = 'transparent';
                        e.currentTarget.style.gap = '6px';
                      }}
                    >
                      View Certificate <span>→</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>


      </div>

      {/* Modal for Full Image View - Enhanced Design */}
      {modalImage && (
        <div
          className="cert-modal-overlay"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.95)',
            zIndex: 10000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backdropFilter: 'blur(15px)',
            animation: 'fadeInModal 0.4s ease-out'
          }}
          onClick={closeModal}
        >
          <div
            className="cert-modal-content"
            style={{
              position: 'relative',
              width: 'fit-content',
              maxWidth: '90vw',
              maxHeight: '90vh',
              backgroundColor: 'rgba(15, 20, 30, 0.95)',
              borderRadius: '24px',
              padding: '1rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              boxShadow: '0 40px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.1)',
              animation: 'zoomInModal 0.4s cubic-bezier(0.2, 0.9, 0.4, 1.1)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={closeModal}
              style={{
                position: 'absolute',
                top: '-18px',
                right: '-18px',
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                backgroundColor: 'rgba(0,0,0,0.9)',
                border: '2px solid rgba(255,255,255,0.3)',
                color: '#ffffff',
                fontSize: '1.6rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease',
                zIndex: 10001,
                boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#ff4444';
                e.currentTarget.style.transform = 'rotate(90deg) scale(1.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.9)';
                e.currentTarget.style.transform = 'rotate(0deg) scale(1)';
              }}
            >
              ✕
            </button>

            {/* Title */}
            <div style={{
              textAlign: 'center',
              marginBottom: '1rem',
              paddingBottom: '0.75rem',
              borderBottom: '1px solid rgba(255,255,255,0.15)'
            }}>
              <h3 style={{
                fontSize: '1.3rem',
                color: '#ffffff',
                fontWeight: '600',
                letterSpacing: '1px'
              }}>
                {modalTitle}
              </h3>
              <p style={{
                fontSize: '0.7rem',
                color: 'rgba(255,255,255,0.5)',
                marginTop: '0.25rem'
              }}>
                Certificate of Achievement
              </p>
            </div>

            {/* Image Container */}
            <div style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              overflow: 'hidden',
              borderRadius: '12px'
            }}>
              <img
                src={modalImage}
                alt="Certificate Full View"
                style={{
                  maxWidth: '100%',
                  maxHeight: '70vh',
                  width: 'auto',
                  height: 'auto',
                  objectFit: 'contain',
                  borderRadius: '12px',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
                }}
              />
            </div>

            {/* Footer note */}
            <div style={{
              textAlign: 'center',
              marginTop: '1rem',
              fontSize: '0.7rem',
              color: 'rgba(255,255,255,0.4)',
              display: 'flex',
              justifyContent: 'center',
              gap: '1rem'
            }}>
              <span>✨ Click outside to close</span>
              <span>•</span>
              <span>⌨️ Press ESC</span>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes floatCert {
          0%, 100% { transform: translateY(0) translateX(0); opacity: 0.2; }
          25% { transform: translateY(-30px) translateX(15px); opacity: 0.6; }
          75% { transform: translateY(20px) translateX(-10px); opacity: 0.4; }
        }
        
        @keyframes floatOrbCert {
          0%, 100% { transform: translateY(0) translateX(0) scale(1); opacity: 0.3; }
          50% { transform: translateY(-20px) translateX(10px) scale(1.1); opacity: 0.5; }
        }
        
        @keyframes rotateOrbCert {
          from { transform: translate(-50%, -50%) rotate(0deg) scale(1); }
          to { transform: translate(-50%, -50%) rotate(360deg) scale(1.2); }
        }
        
        @keyframes shimmerCert {
          0% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }
        
        @keyframes slideUpCert {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes certAppear {
          from { opacity: 0; transform: translateY(50px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        
        @keyframes bounceLight {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        
        @keyframes fadeInModal {
          from { opacity: 0; backdrop-filter: blur(0px); }
          to { opacity: 1; backdrop-filter: blur(15px); }
        }
        
        @keyframes zoomInModal {
          from { transform: scale(0.85); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        
        @keyframes pulseIcon {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(0.9); }
        }
        
        @keyframes badgePulse {
          0%, 100% { box-shadow: 0 2px 10px rgba(0,0,0,0.2); }
          50% { box-shadow: 0 2px 20px rgba(255,255,255,0.3); }
        }
        
        .animate-slide-up {
          animation: slideUpCert 0.6s ease-out forwards;
        }
        
        .animate-cert {
          animation: certAppear 0.7s cubic-bezier(0.2, 0.9, 0.4, 1.1) forwards;
        }
        
        .cert-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
          gap: 2rem;
        }
        
        /* Responsive Styles */
        @media (max-width: 968px) {
          .cert-grid {
            grid-template-columns: 1fr !important;
            gap: 1.5rem;
          }
          
          h2 {
            font-size: 2rem !important;
          }
          
          .container {
            padding: 0 1.5rem;
          }
          
          .filter-section button {
            padding: 0.4rem 0.8rem !important;
            font-size: 0.75rem !important;
          }
        }
        
        @media (max-width: 768px) {
          .container {
            padding: 0 1.5rem;
          }
          
          h2 {
            font-size: 1.8rem !important;
          }
          
          .stats-row {
            gap: 1.5rem !important;
            padding: 1.5rem !important;
          }
        }
        
        @media (max-width: 480px) {
          .container {
            padding: 0 1rem;
          }
          
          h2 {
            font-size: 1.5rem !important;
          }
          
          .stats-row {
            gap: 1rem !important;
          }
          
          .stats-row h3 {
            font-size: 1.2rem !important;
          }
          
          .stats-row div div {
            font-size: 1.8rem !important;
          }
          
          .cert-card img {
            height: 160px !important;
          }
          
          .cert-modal-content {
            padding: 1rem !important;
          }
          
          .cert-modal-content img {
            max-width: 85vw !important;
            max-height: 55vh !important;
          }
          
          .filter-section {
            gap: 0.5rem !important;
          }
          
          .filter-section button {
            padding: 0.3rem 0.6rem !important;
            font-size: 0.7rem !important;
          }
        }
        
        @media (min-width: 1400px) {
          .cert-grid {
            gap: 2.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Certification;