
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
          '> ACCESSING PERSONAL DATA...',
          '> DECRYPTION COMPLETE',
          '',
          '>> NAME: Elaine',
          '>> STATUS: Online',
          '>> OCCUPATION: Coder | Web3 Explorer',
          '',
          '>> BIO:',
          'I\'m passionate about coding and exploring the Web3 space.',
          'Most of my projects are built from a combination of logic, curiosity, and imagination.',
          'I have a strong interest in automation and enjoy designing systems that operate independently.',
          '',
          '>> SKILLS:',
          '- Coding',
          '- Web3 Development',
          '- System Automation',
          '- Creative Design',
          '',
          '> END OF FILE'
        ];
        break;
      case 'social':
        content = [
          '> ACCESSING SOCIAL NETWORK NODES...',
          '> CONNECTION ESTABLISHED',
          '',
          '>> SOCIAL LINKS:',
          '',
          '>> WARPCAST: @elaine16',
          '   ACCESS: https://warpcast.com/elaine16',
          '',
          '>> INSTAGRAM: @elaine16',
          '   ACCESS: https://instagram.com/elaine16',
          '',
          '>> SECURE COMMS: elaine@email.com',
          '',
          '> COMMUNICATION CHANNELS READY',
          '> END OF FILE'
        ];
        break;
      case 'projects':
        content = [
          '> ACCESSING PROJECT DATABASE...',
          '> DECRYPTING FILES...',
          '',
          '>> PROJECT FILES:',
          '',
          '>> VERDA',
          '   TYPE: Organization',
          '   DESC: Virtual Environment Research and Development Association',
          '   STATUS: Active',
          '',
          '>> Elaine Token Club (ETC)',
          '   TYPE: Web3',
          '   DESC: Personal onchain community experiment',
          '   STATUS: Operational',
          '',
          '>> Telegram Miniapp',
          '   TYPE: Software',
          '   DESC: Automation & gamification experiments',
          '   STATUS: In Development',
          '',
          '> PROJECT DATABASE CLOSED',
          '> END OF FILE'
        ];
        break;
      case 'menu':
        content = [
          '> WELCOME TO CYBERNET OS v20150.3.11',
          '> NEURAL INTERFACE INITIALIZED',
          '> SELECT A MODULE FROM THE MAIN MENU',
          '',
          '> SYSTEM READY'
        ];
        break;
      default:
        content = ['> ERROR: SECTION NOT FOUND'];
    }
    
    setDisplayedContent(content);
    
    const timer = setTimeout(() => {
      setIsTyping(false);
    }, content.length * 100);
    
    return () => clearTimeout(timer);
  }, [activeSection]);
  
  return (
    <>
      <div className="terminal-header">
        <span className="terminal-title">{activeSection.toUpperCase()}.dat</span>
        <div className="terminal-controls">
          <span className="terminal-control"></span>
          <span className="terminal-control"></span>
          <span className="terminal-control"></span>
        </div>
      </div>
      <div className="terminal-content p-4 h-[70vh] overflow-y-auto">
        {isTyping ? (
          <TypewriterEffect text={displayedContent.join('\n')} speed={10} />
        ) : (
          displayedContent.map((line, index) => (
            <div key={index} className={`terminal-line ${line.startsWith('>') ? 'text-[#00ff41]' : line.startsWith('>>') ? 'text-[#ff00ff]' : 'text-gray-300'}`}>
              {line || '\u00A0'}
            </div>
          ))
        )}
        <div className="terminal-cursor"></div>
      </div>
    </>
  );
};
export default TerminalInterface;
      