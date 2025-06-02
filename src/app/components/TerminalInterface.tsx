'use client';
import { useState, useEffect } from 'react';
import TypewriterEffect from './TypewriterEffect';

interface TerminalInterfaceProps {
  activeSection: string;
}

const TerminalInterface: React.FC<TerminalInterfaceProps> = ({ activeSection }) => {
  const [displayedContent, setDisplayedContent] = useState<string[]>([]);
  const [isTyping, setIsTyping] = useState<boolean>(true);
  
  useEffect(() => {
    setIsTyping(true);
    
    let content: string[] = [];
    
    switch (activeSection) {
      case 'profile':
        content = [
          '> INITIATING SECURE CONNECTION...',
          '> ACCESSING NEURAL DATABASE...',
          '> DECRYPTION PROTOCOL ACTIVATED',
          '',
          '>> PERSONAL DATA STREAM',
          '------------------------',
          '',
          '>> IDENTITY: Elaine',
          '>> STATUS: Online | Active',
          '>> ROLE: Digital Architect & Web3 Explorer',
          '',
          '>> NEURAL PROFILE:',
          'A digital native exploring the frontiers of code and Web3.',
          'Specialized in crafting autonomous systems and digital experiences.',
          'Currently pushing the boundaries of what\'s possible in the digital realm.',
          '',
          '>> CORE COMPETENCIES:',
          '- [▓▓▓▓▓▓▓▓▓▓] Advanced Coding',
          '- [▓▓▓▓▓▓▓▓░░] Web3 Development',
          '- [▓▓▓▓▓▓▓▓▓░] System Automation',
          '- [▓▓▓▓▓▓▓░░░] Creative Design',
          '',
          '> END OF DATA STREAM',
          '> CONNECTION SECURE'
        ];
        break;
      case 'social':
        content = [
          '> ESTABLISHING SECURE CHANNELS...',
          '> ACCESSING COMM NETWORKS...',
          '> ENCRYPTION PROTOCOLS ACTIVE',
          '',
          '>> COMMUNICATION NODES',
          '----------------------',
          '',
          '>> WARPCAST UPLINK',
          '   HANDLE: @elaine16',
          '   ACCESS: https://warpcast.com/elaine16',
          '   STATUS: [ONLINE]',
          '',
          '>> VISUAL FEED',
          '   CHANNEL: @elaine16',
          '   ACCESS: https://instagram.com/elaine16',
          '   STATUS: [ACTIVE]',
          '',
          '>> SECURE COMMS',
          '   ENCRYPT: elaine@email.com',
          '   PROTOCOL: PGP-2025',
          '',
          '> CHANNELS SECURED',
          '> AWAITING INPUT'
        ];
        break;
      case 'projects':
        content = [
          '> ACCESSING PROJECT MATRIX...',
          '> LOADING DEVELOPMENT LOGS...',
          '> COMPILING DATA...',
          '',
          '>> PROJECT ARCHIVES',
          '------------------',
          '',
          '>> PROJECT: VERDA',
          '   TYPE: Research Division',
          '   FOCUS: Virtual Environment R&D',
          '   STATUS: [OPERATIONAL]',
          '   PROGRESS: [▓▓▓▓▓▓▓░░░] 70%',
          '',
          '>> PROJECT: ETC',
          '   TYPE: Web3 Initiative',
          '   FOCUS: Community Experiments',
          '   STATUS: [ACTIVE]',
          '   PROGRESS: [▓▓▓▓▓▓░░░░] 60%',
          '',
          '>> PROJECT: TG-MINI',
          '   TYPE: Automation Suite',
          '   FOCUS: System Integration',
          '   STATUS: [IN_DEVELOPMENT]',
          '   PROGRESS: [▓▓▓▓░░░░░░] 40%',
          '',
          '> ARCHIVE ACCESSED',
          '> UPDATES PENDING'
        ];
        break;
      case 'menu':
        content = [
          '> CYBERNET OS v20150.3.11',
          '> NEURAL INTERFACE ACTIVE',
          '> SYSTEM READY',
          '',
          '>> SELECT MODULE TO PROCEED'
        ];
        break;
      default:
        content = ['> ERROR: MODULE NOT FOUND'];
    }
    
    setDisplayedContent(content);
    
    const timer = setTimeout(() => {
      setIsTyping(false);
    }, content.length * 50);
    
    return () => clearTimeout(timer);
  }, [activeSection]);
  
  return (
    <>
      <div className="terminal-header">
        <span className="terminal-title">{activeSection.toUpperCase()}.dat</span>
      </div>
      <div className="terminal-content">
        <TypewriterEffect 
          text={displayedContent.join('\n')} 
          speed={30}
        />
      </div>
    </>
  );
};

export default TerminalInterface;
