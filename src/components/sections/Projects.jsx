import React from 'react';
import Card from '../common/Card';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Task Management System",
      description: "Full-stack application with user authentication, real-time dashboard, and task tracking capabilities.",
      tech: ["React.js", ".NET", "SQL", "REST API"],
      features: ["Authentication", "Dashboard", "Real-time updates"]
    },
    {
      id: 2,
      title: "Secure QR Code Generator",
      description: "React Native mobile app featuring AES encryption for secure QR code generation and scanning.",
      tech: ["React Native", "AES Encryption", "Mobile", "iOS/Android"],
      features: ["QR Generation", "AES Security", "Cross-platform"]
    },
    {
      id: 3,
      title: "Invoice Management System",
      description: "Comprehensive system for generating reports and secure document storage with advanced filtering.",
      tech: [".NET", "MongoDB", "React.js", "PDF Generation"],
      features: ["Report Generation", "Secure Storage", "Advanced Filters"]
    }
  ];
  
  return (
    <section id="projects" style={{ padding: 'var(--spacing-xl) 0' }}>
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '2rem'
        }}>
          {projects.map((project, index) => (
            <div key={project.id} className={`fade-up`} style={{ animationDelay: `${index * 0.1}s` }}>
              <Card hover>
                <div style={{ marginBottom: '1.5rem' }}>
                  <div style={{
                    width: '100%',
                    height: '200px',
                    background: 'linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)',
                    borderRadius: '4px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1rem',
                    position: 'relative',
                    overflow: 'hidden'
                  }}>
                    <div style={{
                      fontSize: '3rem',
                      opacity: 0.3
                    }}>
                      📱
                    </div>
                  </div>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{project.title}</h3>
                  <p style={{ color: 'var(--text-tertiary)', marginBottom: '1rem', lineHeight: '1.6' }}>
                    {project.description}
                  </p>
                  <div style={{ marginBottom: '1rem' }}>
                    <h4 style={{ fontSize: '0.9rem', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Technologies:</h4>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                      {project.tech.map(tech => (
                        <span key={tech} style={{
                          backgroundColor: '#1a1a1a',
                          padding: '0.25rem 0.75rem',
                          borderRadius: '4px',
                          fontSize: '0.8rem'
                        }}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 style={{ fontSize: '0.9rem', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Key Features:</h4>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                      {project.features.map(feature => (
                        <span key={feature} style={{
                          fontSize: '0.8rem',
                          color: 'var(--text-tertiary)'
                        }}>
                          • {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;