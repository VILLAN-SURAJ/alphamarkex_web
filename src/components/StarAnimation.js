import React, { useEffect, useRef } from 'react';

const StarAnimation = () => {
  const canvasRef = useRef(null);
  const starsRef = useRef([]);
  const animationFrameRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createStars = () => {
      starsRef.current = [];
      for (let i = 0; i < 120; i++) {
        starsRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1.2,
          opacity: Math.random(),
          speed: Math.random() * 0.5 + 0.2
        });
      }
    };

    const animateStars = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      starsRef.current.forEach(star => {
        const gradient = ctx.createRadialGradient(
          star.x, star.y, 0, 
          star.x, star.y, star.radius * 3
        );
        gradient.addColorStop(0, `rgba(255, 255, 255, ${star.opacity})`);
        gradient.addColorStop(0.5, `rgba(0, 191, 255, ${star.opacity})`);
        gradient.addColorStop(1, `rgba(138, 43, 226, 0)`);

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius * 3, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        star.x -= star.speed;
        star.y -= star.speed;
        
        if (star.x < 0 || star.y < 0) {
          star.x = canvas.width;
          star.y = canvas.height;
        }
      });
      
      animationFrameRef.current = requestAnimationFrame(animateStars);
    };

    const handleResize = () => {
      resizeCanvas();
      createStars();
    };

    // Initialize
    resizeCanvas();
    createStars();
    animateStars();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: -1,
        pointerEvents: 'none'
      }}
    />
  );
};

export default StarAnimation;
