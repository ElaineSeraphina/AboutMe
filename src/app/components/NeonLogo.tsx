
'use client';
import { useState, useEffect } from 'react';
const NeonLogo: React.FC = () => {
  const [glitching, setGlitching] = useState<boolean>(false);
  
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setGlitching(true);
      setTimeout(() => setGlitching(false), 150);
    }, 3000);
    
    return () => clearInterval(glitchInterval);
  }, []);
  
  return (
    <div className="relative">
      <h1 className={`text-4xl md:text-6xl font-bold ${glitching ? 'glitch' : ''}`}>
        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#00ff41] to-[#00ffff] neon-text">ELAINE</span>
      </h1>
      <div className="mt-2 flex items-center">
        <div className="h-0.5 w-12 bg-[#00ff41] mr-3 neon-line"></div>
        <p className="text-sm text-[#00ff41] tracking-widest">CYBERNET ID: EL-20150</p>
      </div>
      <div className="absolute -top-4 -left-4 w-20 h-20 border-t-2 border-l-2 border-[#00ff41] opacity-60"></div>
      <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b-2 border-r-2 border-[#00ff41] opacity-60"></div>
    </div>
  );
};
export default NeonLogo;