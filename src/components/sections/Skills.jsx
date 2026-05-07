import React, { useEffect, useState } from 'react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const [isPoweredOn, setIsPoweredOn] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skillTree = [
    {
      id: "frontend",
      title: "Frontend",
      icon: "🎨",
      color: "#61DAFB",
      skills: ["React.js", "React Native", "JavaScript", "HTML5/CSS3", "Tailwind"],
      pos: { top: '15%', left: '20%' },
      delay: 0.1
    },
    {
      id: "backend",
      title: "Backend",
      icon: "⚙️",
      color: "#512BD4",
      skills: [".NET Core", "Node.js", "REST API", "Express.js", "Python"],
      pos: { top: '15%', left: '80%' },
      delay: 0.2
    },
    {
      id: "database",
      title: "Database",
      icon: "🗄️",
      color: "#47A248",
      skills: ["SQL Server", "MongoDB", "PostgreSQL", "Firebase"],
      pos: { top: '85%', left: '20%' },
      delay: 0.3
    },
    {
      id: "mobile",
      title: "Mobile",
      icon: "📱",
      color: "#34A853",
      skills: ["Android/iOS", "React Native", "Expo", "Native APIs"],
      pos: { top: '85%', left: '80%' },
      delay: 0.4
    },
    {
      id: "tools",
      title: "Tools",
      icon: "🛠️",
      color: "#F05032",
      skills: ["Git/GitHub", "Docker", "VS Code", "Postman", "CI/CD"],
      pos: { top: '50%', left: '90%' },
      delay: 0.5
    }
  ];

  return (
    <section id="skills" style={{ 
      position: 'relative', 
      padding: '120px 0', 
      background: '#000', 
      minHeight: '100vh',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      fontFamily: "'Outfit', sans-serif"
    }}>
      {/* Hero Background Orbs */}
      <div style={{
        position: 'absolute', top: '10%', left: '-5%', width: '800px', height: '800px',
        background: 'radial-gradient(circle, rgba(255,255,255,0.02) 0%, transparent 70%)',
        borderRadius: '50%', animation: 'pulseHero 10s ease-in-out infinite', filter: 'blur(100px)', zIndex: 0
      }} />
      
      <div className="container" style={{ position: 'relative', zIndex: 2, width: '100%', maxWidth: '1400px', padding: '0 20px' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 className="skills-title" style={{ 
            fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', fontWeight: '900', marginBottom: '0.5rem',
            background: 'linear-gradient(to right, #fff, #555)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            textTransform: 'uppercase', letterSpacing: '-2px',
            lineHeight: 1.1
          }}>
            Technical Expertise
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem', letterSpacing: '4px', textTransform: 'uppercase' }}>
            {isPoweredOn ? 'System Online - Expertise Loaded' : 'Click Core to Power Up Systems'}
          </p>
        </div>

        {/* Tree Layout Container */}
        <div className="skills-tree-container" style={{ position: 'relative', height: '700px', width: '100%' }}>
          
          {/* SVG Energy Spine */}
          <svg className="energy-svg" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 1 }}>
            <defs>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
              </filter>
            </defs>
            {skillTree.map(cat => (
              <g key={`line-${cat.id}`}>
                <line 
                  x1="50%" y1="50%" x2={cat.pos.left} y2={cat.pos.top} 
                  stroke={isPoweredOn ? "rgba(255,255,255,0.1)" : "transparent"} 
                  strokeWidth="1" 
                  style={{ transition: 'all 0.8s ease', transitionDelay: `${cat.delay}s` }}
                />
                <line 
                  x1="50%" y1="50%" x2={cat.pos.left} y2={cat.pos.top} 
                  stroke={isPoweredOn ? (activeCategory === cat.id ? cat.color : "rgba(255,255,255,0.2)") : "transparent"} 
                  strokeWidth={activeCategory === cat.id ? "3" : "1"} 
                  strokeDasharray="10, 10"
                  style={{ 
                    filter: activeCategory === cat.id ? 'url(#glow)' : 'none', 
                    transition: 'all 0.5s ease',
                    transitionDelay: isPoweredOn ? `${cat.delay}s` : '0s'
                  }}>
                  {isPoweredOn && <animate attributeName="stroke-dashoffset" from="200" to="0" dur="3s" repeatCount="indefinite" />}
                </line>
              </g>
            ))}
          </svg>

          {/* Core Power Button */}
          <div 
            onClick={() => setIsPoweredOn(!isPoweredOn)}
            className={`core-button ${isPoweredOn ? 'online' : ''}`}
            style={{
              position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
              zIndex: 10, cursor: 'pointer', textAlign: 'center'
            }}
          >
            <div style={{
              background: isPoweredOn ? '#fff' : 'rgba(255,255,255,0.05)',
              color: isPoweredOn ? '#000' : '#fff',
              padding: '2.5rem 4rem', borderRadius: '100px',
              fontSize: '1.4rem', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '4px',
              boxShadow: isPoweredOn ? '0 0 100px rgba(255,255,255,0.4)' : 'inset 0 0 20px rgba(255,255,255,0.1)',
              border: isPoweredOn ? '8px solid rgba(255,255,255,0.2)' : '2px solid rgba(255,255,255,0.2)',
              transition: 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
              whiteSpace: 'nowrap'
            }}>
              {isPoweredOn ? 'CORE ONLINE' : 'POWER ON'}
            </div>
            {!isPoweredOn && (
              <div style={{
                position: 'absolute', top: '120%', left: '50%', transform: 'translateX(-50%)',
                color: 'rgba(255,255,255,0.3)', fontSize: '0.7rem', width: 'max-content',
                animation: 'pulseText 2s infinite'
              }}>
                INITIATE EXPERTISE SYSTEM
              </div>
            )}
          </div>

          {/* Category Nodes */}
          {skillTree.map((category, idx) => (
            <div key={category.id} className={`skill-node node-${category.id}`} style={{
              position: 'absolute', top: category.pos.top, left: category.pos.left,
              transform: 'translate(-50%, -50%)', zIndex: 5,
              opacity: isPoweredOn ? 1 : 0,
              visibility: isPoweredOn ? 'visible' : 'hidden',
              scale: isPoweredOn ? '1' : '0.5',
              transition: `all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)`,
              transitionDelay: isPoweredOn ? `${category.delay}s` : '0s',
              animation: isPoweredOn ? `floatCat ${5 + idx}s ease-in-out infinite alternate` : 'none'
            }}>
              <div 
                onMouseEnter={() => setActiveCategory(category.id)}
                onMouseLeave={() => setActiveCategory(null)}
                style={{
                  background: 'rgba(10, 10, 10, 0.7)', backdropFilter: 'blur(20px)',
                  border: `1px solid ${activeCategory === category.id ? category.color : 'rgba(255,255,255,0.05)'}`,
                  padding: '2rem', borderRadius: '32px', cursor: 'pointer',
                  transition: 'all 0.6s cubic-bezier(0.23, 1, 0.32, 1)',
                  transform: activeCategory === category.id ? 'scale(1.1) translateY(-10px)' : 'scale(1)',
                  boxShadow: activeCategory === category.id ? `0 20px 50px ${category.color}30` : '0 10px 30px rgba(0,0,0,0.5)',
                  width: '280px'
                }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '1.5rem' }}>
                  <div style={{
                    width: '50px', height: '50px', borderRadius: '15px', background: `${category.color}15`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem',
                    border: `1px solid ${category.color}30`
                  }}>
                    {category.icon}
                  </div>
                  <h3 style={{ color: '#fff', fontSize: '1.3rem', fontWeight: '800', margin: 0 }}>{category.title}</h3>
                </div>
                
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                  {category.skills.map(skill => (
                    <span key={skill} style={{
                      fontSize: '0.75rem', fontFamily: "'JetBrains Mono', monospace",
                      color: activeCategory === category.id ? '#fff' : 'rgba(255,255,255,0.4)',
                      background: activeCategory === category.id ? `${category.color}20` : 'rgba(255,255,255,0.02)',
                      padding: '5px 12px', borderRadius: '8px',
                      border: `1px solid ${activeCategory === category.id ? `${category.color}40` : 'rgba(255,255,255,0.05)'}`
                    }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes floatCat {
          from { transform: translate(-50%, -48%); }
          to { transform: translate(-50%, -52%); }
        }
        @keyframes pulseHero {
          0%, 100% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.1); opacity: 0.5; }
        }
        @keyframes pulseText {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.8; }
        }

        .core-button:hover div {
          box-shadow: 0 0 50px rgba(255,255,255,0.2) !important;
          transform: scale(1.05);
        }

        @media (max-width: 1100px) {
          .skills-tree-container {
            height: auto !important;
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            gap: 3rem !important;
            padding-bottom: 50px;
          }

          .energy-svg { display: none !important; }

          .core-button {
            position: relative !important;
            top: auto !important;
            left: auto !important;
            transform: none !important;
            margin-bottom: 2rem;
          }

          .skill-node {
            position: relative !important;
            top: auto !important;
            left: auto !important;
            transform: none !important;
            width: 90% !important;
            max-width: 320px;
            animation: none !important;
          }

          .skill-node:nth-child(odd) { align-self: flex-start; }
          .skill-node:nth-child(even) { align-self: flex-end; }
        }
      `}</style>
    </section>
  );
};

export default Skills;