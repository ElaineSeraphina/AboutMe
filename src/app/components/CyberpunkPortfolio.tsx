'use client';
import { useState, useEffect } from 'react';
import NeonLogo from './NeonLogo';
import TerminalInterface from './TerminalInterface';
import MobileControls from './MobileControls';
import MatrixRain from './MatrixRain';



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
      <>
        <MatrixRain />
        <div className="w-[640px] mx-auto flex flex-col items-center justify-center min-h-screen">
          <NeonLogo />
          <div className="mt-8 text-xl">
            <p className="glitch-text">INITIALIZING NEURAL INTERFACE...</p>
            <div className="loading-bar mt-4">
              <div className="loading-progress"></div>
            </div>
            <p className="text-sm mt-2 text-[#00ff41]/70">CYBERNET OS v20150.3.11</p>
          </div>
        </div>
      </>
    );
  }
  
  return (
    <>
      <MatrixRain />
      <div className="w-[640px] mx-auto min-h-screen flex flex-col items-center justify-center">
        <div className="flex flex-col items-center gap-8 w-full">
          <NeonLogo />
          
          <div className="w-full">
            {!showContent ? (
              <div className="terminal-window">
                <div className="terminal-header">
                  <span className="terminal-title">MAIN_MENU.SYS</span>
                </div>
                <div className="terminal-menu">
                  <h2 className="text-xl mb-6 text-center neon-text">SELECT MODULE</h2>
                  <div className="space-y-3">
                    <button 
                      onClick={() => handleSectionChange('profile')}
                      className="terminal-btn-large w-full"
                    >
                      &gt; PROFILE
                    </button>
                    <button 
                      onClick={() => handleSectionChange('social')}
                      className="terminal-btn-large w-full"
                    >
                      &gt; SOCIAL_LINKS
                    </button>
                    <button 
                      onClick={() => handleSectionChange('projects')}
                      className="terminal-btn-large w-full"
                    >
                      &gt; PROJECTS
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="terminal-window">
                <TerminalInterface activeSection={activeSection} />
                {!isMobile && (
                  <div className="p-4 border-t-2 border-[#00ff41]">
                    <button 
                      onClick={handleBackToMenu}
                      className="terminal-btn-back w-full"
                    >
                      &lt; BACK TO MAIN MENU
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
        
        {isMobile && <MobileControls onSectionChange={handleSectionChange} onBackToMenu={handleBackToMenu} />}
      </div>
    </>
  );
};

export default CyberpunkPortfolio;
