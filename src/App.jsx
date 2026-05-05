import React, { useState, useEffect } from 'react';
import SplashScreen from './components/common/SplashScreen';
import Navigation from './components/common/Navigation';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Certification from './components/sections/Certification';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import './styles/globals.css';

function App() {
  const [activeScreen, setActiveScreen] = useState('Home');
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showSplash && <SplashScreen />}
      {!showSplash && (
        <div className="App" style={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh'
        }}>
          <Navigation activeScreen={activeScreen} setActiveScreen={setActiveScreen} />
          <main style={{ flex: 1 }}>
            {(activeScreen === 'Home' || activeScreen === 'About' || activeScreen === 'Contact') && (
              <>
                <Hero />
                <About onNavigate={setActiveScreen} />
                <Contact />
              </>
            )}
            {activeScreen === 'Skills' && <Skills />}
            {activeScreen === 'Projects' && <Projects />}
            {activeScreen === 'Certification' && <Certification />}
          </main>
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;