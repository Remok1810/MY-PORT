import React, { useEffect, useState } from 'react';

const Resume = ({ onNavigate }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="resume" style={{
      background: '#000000',
      minHeight: '100vh',
      padding: '120px 20px 60px',
      color: '#ffffff',
      fontFamily: "'Inter', sans-serif"
    }}>
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'all 0.8s ease-out'
      }}>
        
        {/* Profile Card Header */}
        <div style={{
          background: '#1a1a1a',
          borderRadius: '24px',
          padding: '2rem',
          display: 'flex',
          alignItems: 'center',
          gap: '2rem',
          marginBottom: '3rem',
          border: '1px solid rgba(255,255,255,0.05)'
        }}>
          <div style={{
            width: '120px',
            height: '120px',
            borderRadius: '16px',
            overflow: 'hidden',
            background: '#333'
          }}>
            <div style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '3rem',
              fontWeight: 'bold',
              color: 'rgba(255,255,255,0.1)'
            }}>K</div>
          </div>
          <div>
            <h1 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '0.5rem' }}>Kaleeshwaran A</h1>
            <span style={{
              background: 'rgba(255,255,255,0.05)',
              padding: '0.5rem 1rem',
              borderRadius: '8px',
              fontSize: '0.9rem',
              color: '#888'
            }}>B.E CSE</span>
          </div>
        </div>

        <h2 style={{ fontSize: '2.5rem', fontWeight: '900', marginBottom: '0.5rem' }}>Resume</h2>
        <div style={{ width: '40px', height: '4px', background: '#ff4d4d', marginBottom: '3rem' }}></div>

        {/* Education Section */}
        <div className="resume-section" style={{ marginBottom: '4rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
            <div style={{ color: '#ff4d4d' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
              </svg>
            </div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '700' }}>Education</h3>
          </div>

          <div style={{ borderLeft: '1px solid rgba(255,255,255,0.1)', marginLeft: '12px', paddingLeft: '30px' }}>
            <div style={{ position: 'relative', marginBottom: '3rem' }}>
              <div style={{ position: 'absolute', left: '-36px', top: '5px', width: '12px', height: '12px', borderRadius: '50%', background: '#ff4d4d', boxShadow: '0 0 10px #ff4d4d' }}></div>
              <h4 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '0.5rem' }}>Prince Dr.K.Vasudevan College</h4>
              <p style={{ color: '#ff4d4d', fontSize: '0.9rem', fontWeight: '600', marginBottom: '1rem' }}>2021 — 2025</p>
              <p style={{ color: '#888', lineHeight: '1.7' }}>
                Pursuing a Bachelor of Engineering in Computer Science and Engineering. Gaining expertise in programming, software development, databases, operating systems, and web technologies.
              </p>
            </div>

            <div style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', left: '-36px', top: '5px', width: '12px', height: '12px', borderRadius: '50%', background: '#ff4d4d' }}></div>
              <h4 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '0.5rem' }}>GuruNanak Higher Secondary School</h4>
              <p style={{ color: '#ff4d4d', fontSize: '0.9rem', fontWeight: '600', marginBottom: '1rem' }}>2018 — 2021</p>
              <p style={{ color: '#888', lineHeight: '1.7' }}>
                Completed High School Education, building a solid academic foundation in core subjects, including mathematics and computer science.
              </p>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div className="resume-section" style={{ marginBottom: '4rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
            <div style={{ color: '#ff4d4d' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
              </svg>
            </div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '700' }}>Experience</h3>
          </div>

          <div style={{ borderLeft: '1px solid rgba(255,255,255,0.1)', marginLeft: '12px', paddingLeft: '30px' }}>
            <div style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', left: '-36px', top: '5px', width: '12px', height: '12px', borderRadius: '50%', background: '#ff4d4d' }}></div>
              <h4 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '0.5rem' }}>Software Developer Intern</h4>
              <p style={{ color: '#ff4d4d', fontSize: '0.9rem', fontWeight: '600', marginBottom: '1rem' }}>Dikshi Technologies</p>
              <p style={{ color: '#888', lineHeight: '1.7' }}>
                Worked on full-stack applications using React.js and .NET, honing skills in object-oriented programming, API integration, and debugging complex code.
              </p>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="resume-section">
          <h3 style={{ fontSize: '1.8rem', fontWeight: '800', marginBottom: '2rem' }}>My Skills</h3>
          
          <div style={{
            background: '#1a1a1a',
            borderRadius: '24px',
            padding: '2.5rem',
            border: '1px solid rgba(255,255,255,0.05)'
          }}>
            {[
              { name: 'Programming Languages: ,.NET ,C#  ,Java, Python', value: 85 },
              { name: 'Front-End Development: HTML, CSS, JS, ReactJS', value: 95 },
              { name: 'Back-End: Node.js, .NET', value: 80 },
              { name: 'Databases: MySQL, MongoDB', value: 75 },
              { name: 'App Development: React Native, Android Studio', value: 85 }
            ].map((skill, i) => (
              <div key={i} style={{ marginBottom: '2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.8rem' }}>
                  <span style={{ fontWeight: '600', fontSize: '1rem' }}>{skill.name}</span>
                </div>
                <div style={{ width: '100%', height: '8px', background: '#333', borderRadius: '4px', overflow: 'hidden' }}>
                  <div style={{
                    width: `${skill.value}%`,
                    height: '100%',
                    background: '#ff4d4d',
                    borderRadius: '4px',
                    boxShadow: '0 0 15px rgba(255, 77, 77, 0.3)'
                  }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Bottom Navigation - Matches Image */}
      <div style={{
        position: 'fixed',
        bottom: '2rem',
        left: '50%',
        transform: 'translateX(-50%)',
        background: 'rgba(26, 26, 26, 0.8)',
        backdropFilter: 'blur(10px)',
        padding: '1rem 2rem',
        borderRadius: '50px',
        display: 'flex',
        gap: '2rem',
        border: '1px solid rgba(255,255,255,0.1)',
        zIndex: 100,
        boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
      }}>
        {['About', 'Resume', 'Portfolio', 'Contact'].map(item => (
          <span key={item} style={{
            fontSize: '0.9rem',
            fontWeight: '600',
            color: item === 'Resume' ? '#ff4d4d' : '#888',
            cursor: 'pointer',
            transition: 'color 0.3s ease'
          }}
          onClick={() => {
            if (onNavigate) {
              onNavigate(item === 'Portfolio' ? 'Projects' : item);
            }
          }}>
            {item}
          </span>
        ))}
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800;900&display=swap');
      `}</style>
    </section>
  );
};

export default Resume;
