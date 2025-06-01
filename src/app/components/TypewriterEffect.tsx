
'use client';
import { useState, useEffect } from 'react';
interface TypewriterEffectProps {
  text: string;
  speed: number;
}
const TypewriterEffect: React.FC<TypewriterEffectProps> = ({ text, speed }) => {
  const [displayText, setDisplayText] = useState<string>('');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);
      
      return () => clearTimeout(timer);
    }
  }, [currentIndex, text, speed]);
  return (
    <div className="whitespace-pre-line">
      {displayText.split('\n').map((line, index) => (
        <div key={index} className={`terminal-line ${line.startsWith('>') ? 'text-[#00ff41]' : line.startsWith('>>') ? 'text-[#ff00ff]' : 'text-gray-300'}`}>
          {line || '\u00A0'}
        </div>
      ))}
    </div>
  );
};
export default TypewriterEffect;
