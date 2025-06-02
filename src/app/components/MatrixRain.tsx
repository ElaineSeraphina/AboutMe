'use client';
import { useEffect, useRef } from 'react';

const MatrixRain: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      // Reinitialize drops when canvas is resized
      initializeDrops();
    };

    const fontSize = 14;
    const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ:.・=*+<>¦｜アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲ';
    const charArray = chars.split('');
    let columns = Math.ceil(canvas.width / fontSize);
    let drops: number[] = [];
    let brightnessValues: number[] = [];
    let speedValues: number[] = [];

    const initializeDrops = () => {
      columns = Math.ceil(canvas.width / fontSize);
      drops = Array(columns).fill(0).map(() => Math.random() * -100);
      brightnessValues = Array(columns).fill(0).map(() => Math.random());
      speedValues = Array(columns).fill(0).map(() => 0.3 + Math.random() * 0.5);
    };

    resizeCanvas();
    initializeDrops();
    window.addEventListener('resize', resizeCanvas);

    const draw = () => {
      // Create fade effect with better alpha value
      ctx.fillStyle = 'rgba(0, 0, 0, 0.08)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px "Courier New", monospace`;

      for (let i = 0; i < drops.length; i++) {
        const char = charArray[Math.floor(Math.random() * charArray.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        // Enhanced glow effect for leading characters
        if (Math.random() > 0.98) {
          ctx.fillStyle = '#ffffff';
          ctx.shadowColor = '#0f0';
          ctx.shadowBlur = 10;
          ctx.globalAlpha = 1;
        } else if (Math.random() > 0.95) {
          ctx.fillStyle = '#7fff7f';
          ctx.shadowColor = '#0f0';
          ctx.shadowBlur = 5;
          ctx.globalAlpha = 0.8;
        } else {
          ctx.fillStyle = '#00ff41';
          ctx.shadowBlur = 0;
          ctx.globalAlpha = 0.3 * brightnessValues[i];
        }

        ctx.fillText(char, x, y);

        // Reset drop with varied delay
        if (drops[i] * fontSize > canvas.height) {
          if (Math.random() > 0.99) {
            drops[i] = 0;
            brightnessValues[i] = Math.random();
            speedValues[i] = 0.3 + Math.random() * 0.5;
          }
        }

        // Use individual speed values for more natural movement
        drops[i] += speedValues[i];
      }

      // Reset shadow properties
      ctx.shadowBlur = 0;
      ctx.globalAlpha = 1;
    };

    // Use requestAnimationFrame instead of setInterval for smoother animation
    let animationFrameId: number;
    const animate = () => {
      draw();
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 0,
        background: '#000',
        opacity: 0.8,
      }}
    />
  );
};

export default MatrixRain;
