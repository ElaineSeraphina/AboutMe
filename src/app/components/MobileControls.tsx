
'use client';
import { useState } from 'react';
interface MobileControlsProps {
  onSectionChange: (section: string) => void;
  onBackToMenu: () => void;
}
const MobileControls: React.FC<MobileControlsProps> = ({ onSectionChange, onBackToMenu }) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  
  const toggleControls = () => {
    setIsExpanded(!isExpanded);
  };
  
  return (
    <div className={`fixed bottom-4 right-4 z-50 transition-all duration-300 ${isExpanded ? 'w-48' : 'w-12'}`}>
      <button 
        onClick={toggleControls}
        className="absolute bottom-0 right-0 w-12 h-12 rounded-full bg-black border-2 border-[#00ff41] flex items-center justify-center shadow-[0_0_10px_#00ff41] z-10"
      >
        <span className="text-[#00ff41]">{isExpanded ? 'X' : '≡'}</span>
      </button>
      
      {isExpanded && (
        <div className="bg-black/90 border border-[#00ff41] rounded-lg p-3 mb-14 shadow-[0_0_15px_rgba(0,255,65,0.5)]">
          <div className="text-xs text-[#00ff41] mb-2">NAVIGATION</div>
          <div className="flex flex-col gap-2">
            <button 
              onClick={() => {
                onBackToMenu();
                setIsExpanded(false);
              }}
              className="text-left text-sm py-2 px-3 bg-black/50 border border-[#00ff41]/30 text-[#00ff41] rounded hover:bg-[#00ff41]/20 transition-colors"
            >
              &lt; MAIN MENU
            </button>
            <button 
              onClick={() => {
                onSectionChange('profile');
                setIsExpanded(false);
              }}
              className="text-left text-sm py-2 px-3 bg-black/50 border border-[#00ff41]/30 text-[#00ff41] rounded hover:bg-[#00ff41]/20 transition-colors"
            >
              &gt; PROFILE
            </button>
            <button 
              onClick={() => {
                onSectionChange('social');
                setIsExpanded(false);
              }}
              className="text-left text-sm py-2 px-3 bg-black/50 border border-[#00ff41]/30 text-[#00ff41] rounded hover:bg-[#00ff41]/20 transition-colors"
            >
              &gt; SOCIAL_LINKS
            </button>
            <button 
              onClick={() => {
                onSectionChange('projects');
                setIsExpanded(false);
              }}
              className="text-left text-sm py-2 px-3 bg-black/50 border border-[#00ff41]/30 text-[#00ff41] rounded hover:bg-[#00ff41]/20 transition-colors"
            >
              &gt; PROJECTS
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default MobileControls;
