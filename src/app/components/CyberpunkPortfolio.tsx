'use client';
import { useState, useEffect } from 'react';
import TerminalInterface from './TerminalInterface';
import ParticleBackground from './ParticleBackground';
import NeonLogo from './NeonLogo';
import MobileControls from './MobileControls';
const CyberpunkPortfolio: React.FC = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [activeSection, setActiveSection] = useState<string>('menu');
  const [showContent, setShowContent] = useState<boolean>(false);
  
  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    // Simulate loading time for cyberpunk effect
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
      clearTimeout(timer);
    };
  }, []);
  
  const handleSectionChange = (section: string) => {
    setActiveSection(section);
    setShowContent(true);
  };
  
  const handleBackToMenu = () => {
    setActiveSection('menu');
    setShowContent(false);
  };
  
  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center w-full h-screen bg-black text-[#00ff41]">
        <NeonLogo />
        <div className="mt-8 text-xl">
          <p className="glitch-text">INITIALIZING NEURAL INTERFACE...</p>
          <div className="loading-bar mt-4">
            <div className="loading-progress"></div>
          </div>
          <p className="text-sm mt-2 text-[#00ff41]/70">CYBERNET OS v20150.3.11</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="relative w-full min-h-screen bg-black text-[#00ff41] overflow-hidden">
      <ParticleBackground />
      
      <div className="relative z-10 container mx-auto px-4 py-8 flex flex-col items-center">
        <div className="w-full max-w-4xl">
          <div className="flex justify-center mb-8">
            <NeonLogo />
          </div>
          
          {!showContent && (
            <div className="terminal-window max-w-lg mx-auto">
              <div className="terminal-header">
                <span className="terminal-title">MAIN_MENU.SYS</span>
                <div className="terminal-controls">
                  <span className="terminal-control"></span>
                  <span className="terminal-control"></span>
                  <span className="terminal-control"></span>
                </div>
              </div>
              <div className="terminal-menu p-6">
                <h2 className="text-xl mb-6 text-center neon-text">SELECT MODULE</h2>
                <button 
                  onClick={() => handleSectionChange('profile')}
                  className="terminal-btn-large mb-4 w-full"
                >
                  &gt; PROFILE
                </button>
                <button 
                  onClick={() => handleSectionChange('social')}
                  className="terminal-btn-large mb-4 w-full"
                >
                  &gt; SOCIAL_LINKS
                </button>
                <button 
                  onClick={() => handleSectionChange('projects')}
                  className="terminal-btn-large mb-4 w-full"
                >
                  &gt; PROJECTS
                </button>
              </div>
            </div>
          )}
          
          {showContent && (
            <div className="max-w-4xl mx-auto">
              <div className="mb-4">
                <button 
                  onClick={handleBackToMenu}
                  className="terminal-btn-back w-full max-w-4xl mx-auto"
                >
                  &lt; BACK TO MAIN MENU
                </button>
              </div>
              <div className="terminal-window">
                <TerminalInterface activeSection={activeSection} />
              </div>
            </div>
          )}
        </div>
      </div>
      
      {isMobile && <MobileControls onSectionChange={handleSectionChange} onBackToMenu={handleBackToMenu} />}
    </div>
  );
};
export default CyberpunkPortfolio;
      