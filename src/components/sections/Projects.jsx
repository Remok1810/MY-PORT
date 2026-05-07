import React from 'react';
import Card from '../common/Card';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "ShopEZ E-commerce",
      description: "A full-featured e-commerce platform with product management, cart functionality, and secure checkout integration.",
      tech: ["React.js", "Node.js", "Express", "MongoDB"],
      features: ["Product Filtering", "User Cart", "Admin Dashboard"],
      link: "https://github.com/Remok1810/ShopEZ-E-commerce-Application",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=600&h=400&fit=crop"
    },
    {
      id: 2,
      title: "Task Management System",
      description: "Enterprise-grade task tracking application with real-time updates and team collaboration features.",
      tech: ["React.js", ".NET", "SQL", "Entity Framework"],
      features: ["Real-time Dashboard", "Role-based Access", "Task Analytics"],
      link: "https://github.com/Remok1810/Task-Management-System-FRONT-END-",
      image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=600&h=400&fit=crop"
    },
    {
      id: 3,
      title: "Invoice Management",
      description: "Digital invoicing system for generating, managing, and tracking professional business invoices securely.",
      tech: ["React.js", "Tailwind CSS", "PDF-Lib"],
      features: ["Dynamic PDF Gen", "Status Tracking", "Client Database"],
      link: "https://github.com/Remok1810/INVOICE-APP-FRONT-END-/tree/main/react-cards-app",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&h=400&fit=crop"
    },

  ];

  return (
    <section id="projects" style={{ padding: '80px 0', background: '#0a0a0a' }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        <h2 className="section-title" style={{
          fontSize: '3rem',
          fontWeight: '800',
          marginBottom: '3rem',
          textAlign: 'center',
          background: 'linear-gradient(135deg, #fff 0%, #888 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          Featured Projects
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2.5rem'
        }}>
          {projects.map((project, index) => (
            <div key={project.id} style={{
              animation: 'fadeInUp 0.8s ease-out forwards',
              animationDelay: `${index * 0.15}s`,
              opacity: 0
            }}>
              <Card hover>
                <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '12px', background: '#111', border: '1px solid rgba(255,255,255,0.05)' }}>
                  {/* Project Image */}
                  <div style={{
                    width: '100%',
                    height: '200px',
                    position: 'relative',
                    overflow: 'hidden'
                  }}>
                    <img
                      src={project.image}
                      alt={project.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.5s ease'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                      onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    />
                    <div style={{
                      position: 'absolute',
                      top: '0',
                      left: '0',
                      width: '100%',
                      height: '100%',
                      background: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.8) 100%)'
                    }} />

                    {/* View Link Icon */}
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
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
                        border: '1px solid rgba(255,255,255,0.2)'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = '#fff';
                        e.currentTarget.style.color = '#000';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                        e.currentTarget.style.color = '#fff';
                      }}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                    </a>
                  </div>

                  <div style={{ padding: '1.5rem' }}>
                    <h3 style={{ fontSize: '1.4rem', fontWeight: '700', marginBottom: '0.8rem', color: '#fff' }}>
                      {project.title}
                    </h3>
                    <p style={{
                      color: 'rgba(255,255,255,0.6)',
                      fontSize: '0.9rem',
                      marginBottom: '1.5rem',
                      lineHeight: '1.6',
                      height: '3.2rem',
                      overflow: 'hidden'
                    }}>
                      {project.description}
                    </p>

                    <div style={{ marginBottom: '1.5rem' }}>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                        {project.tech.map(tech => (
                          <span key={tech} style={{
                            backgroundColor: 'rgba(255,255,255,0.05)',
                            padding: '4px 10px',
                            borderRadius: '6px',
                            fontSize: '0.75rem',
                            color: 'rgba(255,255,255,0.8)',
                            border: '1px solid rgba(255,255,255,0.1)'
                          }}>
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
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
                        textDecoration: 'none',
                        fontSize: '0.9rem',
                        fontWeight: '600',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'rgba(255,255,255,1)';
                        e.currentTarget.style.color = '#000';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                        e.currentTarget.style.color = '#fff';
                      }}
                    >
                      View on GitHub
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;
