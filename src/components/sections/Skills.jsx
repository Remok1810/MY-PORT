import React, { useEffect, useState } from 'react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState(null);
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

  // Tree chart data structure (like the image shows 5 elements)
  const skillTree = [
    {
      id: 1,
      title: "Frontend Development",
      icon: "🎨",
      color: "#61DAFB",
      skills: ["React.js", "React Native", "JavaScript", "HTML5", "CSS3", "Tailwind"],
      description: "Building responsive and interactive user interfaces"
    },
    {
      id: 2,
      title: "Backend Development",
      icon: "⚙️",
      color: "#512BD4",
      skills: [".NET", "Node.js", "REST API", "Express.js", "Python"],
      description: "Scalable server-side applications and APIs"
    },
    {
      id: 3,
      title: "Database",
      icon: "🗄️",
      color: "#47A248",
      skills: ["SQL Server", "MongoDB", "PostgreSQL", "Firebase"],
      description: "Efficient data storage and management"
    },
    {
      id: 4,
      title: "Mobile & Platforms",
      icon: "📱",
      color: "#34A853",
      skills: ["Android", "iOS", "React Native", "Windows", "Web"],
      description: "Cross-platform mobile applications"
    },
    {
      id: 5,
      title: "Tools & DevOps",
      icon: "🛠️",
      color: "#F05032",
      skills: ["Git", "GitHub", "Docker", "VS Code", "Postman"],
      description: "Modern development tools and workflows"
    }
  ];

  return (
    <section
      id="skills"
      style={{
        padding: '120px 0',
        position: 'relative',
        overflow: 'hidden',
        background: 'radial-gradient(circle at 30% 50%, rgba(255,255,255,0.02) 0%, rgba(0,0,0,0) 100%)',
        minHeight: '100vh'
      }}
      onMouseMove={handleMouseMove}
    >
      {/* Animated Background Particles */}
      <div className="skills-particles">
        {[...Array(25)].map((_, i) => (
          <div key={i} style={{
            position: 'absolute',
            width: `${2 + Math.random() * 4}px`,
            height: `${2 + Math.random() * 4}px`,
            background: `rgba(255,255,255,${0.1 + Math.random() * 0.3})`,
            borderRadius: '50%',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `floatSkill ${4 + Math.random() * 10}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 5}s`,
            filter: 'blur(0.5px)'
          }} />
        ))}
      </div>

      {/* Animated Gradient Orbs */}
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '-5%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(97,218,251,0.08) 0%, rgba(255,255,255,0) 70%)',
        borderRadius: '50%',
        animation: 'floatOrb 15s ease-in-out infinite',
        filter: 'blur(60px)'
      }} />

      <div style={{
        position: 'absolute',
        bottom: '10%',
        right: '-5%',
        width: '350px',
        height: '350px',
        background: 'radial-gradient(circle, rgba(81,43,212,0.08) 0%, rgba(255,255,255,0) 70%)',
        borderRadius: '50%',
        animation: 'floatOrb 12s ease-in-out infinite reverse',
        filter: 'blur(60px)'
      }} />

      <div style={{
        position: 'absolute',
        top: '30%',
        left: '20%',
        width: '250px',
        height: '250px',
        background: 'radial-gradient(circle, rgba(255,215,0,0.05) 0%, rgba(255,255,255,0) 70%)',
        borderRadius: '50%',
        animation: 'rotateOrb 25s linear infinite',
        filter: 'blur(50px)'
      }} />

      <div className="container" style={{
        width: '100%',
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '0 2rem',
        position: 'relative',
        zIndex: 2
      }}>

        {/* Section Header */}
        <div className={`section-header ${isVisible ? 'animate-slide-up' : ''}`} style={{
          textAlign: 'center',
          marginBottom: '4rem',
          opacity: 0,
          transform: 'translateY(30px)',
          animation: isVisible ? 'slideUp 0.8s ease-out forwards' : 'none'
        }}>
          <span style={{
            fontSize: '0.8rem',
            color: 'var(--text-secondary)',
            letterSpacing: '4px',
            textTransform: 'uppercase',
            display: 'inline-block',
            marginBottom: '1rem',
            position: 'relative'
          }}>
            <span style={{
              position: 'absolute',
              left: '-40px',
              top: '50%',
              width: '30px',
              height: '1px',
              background: 'linear-gradient(90deg, #ffffff, transparent)'
            }} />
            MY EXPERTISE
            <span style={{
              position: 'absolute',
              right: '-40px',
              top: '50%',
              width: '30px',
              height: '1px',
              background: 'linear-gradient(270deg, #ffffff, transparent)'
            }} />
          </span>
          <h2 style={{
            fontSize: '3rem',
            fontWeight: 'bold',
            background: 'linear-gradient(135deg, #ffffff 0%, #e0e0e0 50%, #ffffff 100%)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
            backgroundSize: '200% auto',
            animation: 'shimmer 3s linear infinite'
          }}>
            Technical Skills
          </h2>
          <div style={{
            width: '80px',
            height: '3px',
            background: 'linear-gradient(90deg, #ffffff, #666666, #ffffff)',
            margin: '1rem auto 0',
            borderRadius: '3px'
          }} />
        </div>

        {/* Tree Chart Design - 5 elements like the image shows */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '4rem',
          position: 'relative'
        }}>
          {/* Tree connecting lines - background decorative */}
          <svg style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
            zIndex: 0
          }}>
            <defs>
              <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(255,255,255,0.05)" />
                <stop offset="50%" stopColor="rgba(255,255,255,0.2)" />
                <stop offset="100%" stopColor="rgba(255,255,255,0.05)" />
              </linearGradient>
            </defs>
          </svg>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gap: '1.5rem',
            width: '100%',
            position: 'relative',
            zIndex: 1
          }} className="tree-grid">
            {skillTree.map((item, idx) => (
              <div
                key={item.id}
                className={`tree-node ${isVisible ? 'animate-tree' : ''}`}
                style={{
                  animationDelay: `${idx * 0.15}s`,
                  opacity: 0,
                  transform: 'translateY(30px)',
                  animation: isVisible ? `treeAppear 0.6s ease-out ${idx * 0.15}s forwards` : 'none'
                }}
              >
                {/* Connecting line to next (except last) */}
                {idx < skillTree.length - 1 && (
                  <div style={{
                    position: 'absolute',
                    top: '30%',
                    right: '-0.75rem',
                    width: '1.5rem',
                    height: '2px',
                    background: 'linear-gradient(90deg, rgba(255,255,255,0.3), rgba(255,255,255,0.05))',
                    transform: 'translateX(50%)',
                    animation: `lineDraw 0.5s ease-out ${idx * 0.15 + 0.3}s forwards`,
                    transformOrigin: 'left'
                  }} />
                )}

                <div style={{
                  background: `linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)`,
                  backdropFilter: 'blur(10px)',
                  borderRadius: '20px',
                  border: `1px solid ${hoveredSkill === item.id ? item.color : 'rgba(255,255,255,0.1)'}`,
                  padding: '1.8rem 1.2rem',
                  textAlign: 'center',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  cursor: 'pointer',
                  height: '100%',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                  onMouseEnter={(e) => {
                    setHoveredSkill(item.id);
                    e.currentTarget.style.transform = 'translateY(-10px)';
                    e.currentTarget.style.borderColor = item.color;
                    e.currentTarget.style.boxShadow = `0 20px 40px rgba(0,0,0,0.3), 0 0 20px ${item.color}20`;
                  }}
                  onMouseLeave={(e) => {
                    setHoveredSkill(null);
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}>
                  {/* Number badge */}
                  <div style={{
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                    width: '28px',
                    height: '28px',
                    background: `radial-gradient(circle, ${item.color}40, transparent)`,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.7rem',
                    fontWeight: 'bold',
                    color: item.color
                  }}>
                    {String(item.id).padStart(2, '0')}
                  </div>

                  {/* Icon with rotating animation on hover */}
                  <div style={{
                    fontSize: '3rem',
                    marginBottom: '1rem',
                    display: 'inline-block',
                    transition: 'transform 0.5s ease',
                    transform: hoveredSkill === item.id ? 'rotateY(180deg)' : 'rotateY(0)'
                  }}>
                    {item.icon}
                  </div>

                  <h3 style={{
                    fontSize: '1.2rem',
                    fontWeight: '600',
                    marginBottom: '0.8rem',
                    background: `linear-gradient(135deg, #ffffff, ${item.color})`,
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    color: 'transparent'
                  }}>
                    {item.title}
                  </h3>

                  <p style={{
                    fontSize: '0.75rem',
                    color: 'var(--text-tertiary)',
                    marginBottom: '1rem',
                    lineHeight: '1.4'
                  }}>
                    {item.description}
                  </p>

                  {/* Skills tags */}
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.4rem',
                    justifyContent: 'center',
                    marginTop: '0.5rem'
                  }}>
                    {item.skills.slice(0, 3).map((skill, i) => (
                      <span key={skill} style={{
                        fontSize: '0.7rem',
                        padding: '0.2rem 0.6rem',
                        background: `rgba(255,255,255,0.05)`,
                        borderRadius: '15px',
                        color: 'var(--text-secondary)',
                        transition: 'all 0.3s ease',
                        border: `1px solid ${hoveredSkill === item.id ? item.color : 'transparent'}`
                      }}>
                        {skill}
                      </span>
                    ))}
                    {item.skills.length > 3 && (
                      <span style={{
                        fontSize: '0.7rem',
                        padding: '0.2rem 0.6rem',
                        background: `rgba(255,255,255,0.03)`,
                        borderRadius: '15px',
                        color: 'var(--text-tertiary)'
                      }}>
                        +{item.skills.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>


      </div>

      <style jsx>{`
        @keyframes floatSkill {
          0%, 100% { transform: translateY(0) translateX(0); opacity: 0.3; }
          50% { transform: translateY(-30px) translateX(15px); opacity: 0.8; }
        }
        
        @keyframes floatOrb {
          0%, 100% { transform: translateY(0) translateX(0) scale(1); }
          50% { transform: translateY(-20px) translateX(10px) scale(1.1); }
        }
        
        @keyframes rotateOrb {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes shimmer {
          0% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }
        
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes treeAppear {
          from { opacity: 0; transform: translateY(30px) scale(0.9); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        
        @keyframes lineDraw {
          from { transform: scaleX(0); opacity: 0; }
          to { transform: scaleX(1); opacity: 1; }
        }
        
        @keyframes progressBar {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        
        @keyframes bounceLight {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        
        .animate-slide-up {
          animation: slideUp 0.6s ease-out forwards;
        }
        
        .animate-tree {
          animation: treeAppear 0.6s ease-out forwards;
        }
        
        .tree-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 1.5rem;
        }
        
        @media (max-width: 1100px) {
          .tree-grid {
            grid-template-columns: repeat(3, 1fr) !important;
            gap: 1.5rem;
          }
        }
        
        @media (max-width: 768px) {
          .tree-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 1rem;
          }
          
          .container {
            padding: 0 1.5rem !important;
          }
          
          h2 {
            font-size: 2rem !important;
          }
        }
        
        @media (max-width: 480px) {
          .tree-grid {
            grid-template-columns: 1fr !important;
          }
          
          .container {
            padding: 0 1rem !important;
          }
          
          h2 {
            font-size: 1.8rem !important;
          }
          
          .stats-row {
            gap: 1rem !important;
          }
          
          .stats-row h3 {
            font-size: 1.5rem !important;
          }
        }
        
        @media (min-width: 1400px) {
          .tree-grid {
            gap: 2rem;
          }
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 6px;
        }
        
        ::-webkit-scrollbar-track {
          background: rgba(255,255,255,0.05);
          border-radius: 3px;
        }
        
        ::-webkit-scrollbar-thumb {
          background: rgba(255,255,255,0.3);
          border-radius: 3px;
        }
      `}</style>
    </section>
  );
};

export default Skills;