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
    <div className="relative p-8">
      <div className="absolute inset-0 bg-[#00ff41]/5 blur-xl rounded-full"></div>
      <h1 className={`text-4xl md:text-6xl font-bold relative ${glitching ? 'glitch' : ''}`}>
        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#00ff41] via-[#00ffff] to-[#00ff41] animate-gradient">
          ELAINE SERAPHINA
        </span>
      </h1>
      <div className="mt-4 flex items-center justify-center">
        <div className="h-[1px] w-12 bg-gradient-to-r from-transparent via-[#00ff41] to-transparent"></div>
        <p className="mx-3 text-sm text-[#00ff41] tracking-widest">CYBERNET ID: EL-20150</p>
        <div className="h-[1px] w-12 bg-gradient-to-r from-transparent via-[#00ff41] to-transparent"></div>
      </div>
      <div className="absolute -top-4 -left-4 w-20 h-20 border-t-2 border-l-2 border-[#00ff41] opacity-60 animate-pulse"></div>
      <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b-2 border-r-2 border-[#00ff41] opacity-60 animate-pulse"></div>
    </div>
  );
};

export default NeonLogo;