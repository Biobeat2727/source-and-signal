// src/components/MysticalHero.tsx
'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useRef, useEffect, useCallback, useState } from 'react'

export default function MysticalHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameId = useRef<number | null>(null);
  const timeRef = useRef(0);
  const mouseRef = useRef({ x: 0, y: 0, isActive: false });
  const [scrollY, setScrollY] = useState(0);
  const [ripples, setRipples] = useState<Array<{x: number, y: number, time: number, id: number}>>([]);
  const rippleIdRef = useRef(0);

  const handleMouseMove = useCallback((event: MouseEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    mouseRef.current = {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
      isActive: true
    };
  }, []);

  const handleMouseLeave = useCallback(() => {
    mouseRef.current.isActive = false;
  }, []);

  const handleClick = useCallback((event: MouseEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    
    // Add ripple effect
    setRipples(prev => [...prev, {
      x,
      y,
      time: 0,
      id: rippleIdRef.current++
    }]);
  }, []);

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const drawEnergySpirals = useCallback(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!ctx || !canvas) return;

    // Clear canvas with dark fade
    ctx.fillStyle = "rgba(10, 10, 10, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const time = timeRef.current;
    const mouse = mouseRef.current;
    
    // Scroll influence - much more dramatic
    const scrollInfluence = Math.min(scrollY / 500, 2);
    const scrollSpeed = scrollY / 100;
    
    // Mouse influence - stronger
    const mouseInfluence = mouse.isActive ? 2 : 0;


    // Pulsing energy core
    const coreRadius = 30 + Math.sin(time * 0.05) * 10 + scrollInfluence * 20;
    const coreOpacity = 0.6 + scrollInfluence * 0.4 + Math.sin(time * 0.08) * 0.3;
    
    const coreGradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, coreRadius);
    coreGradient.addColorStop(0, `rgba(210, 180, 156, ${coreOpacity})`);
    coreGradient.addColorStop(0.5, `rgba(210, 180, 156, ${coreOpacity * 0.5})`);
    coreGradient.addColorStop(1, 'rgba(210, 180, 156, 0)');
    
    ctx.fillStyle = coreGradient;
    ctx.beginPath();
    ctx.arc(centerX, centerY, coreRadius, 0, Math.PI * 2);
    ctx.fill();

    // Floating energy orbs - slower and calmer
    for (let orbIndex = 0; orbIndex < 8; orbIndex++) {
      const orbAngle = (orbIndex / 8) * Math.PI * 2 + time * 0.008; // Much slower rotation
      const orbDistance = 180 + Math.sin(time * 0.015 + orbIndex) * 40 + scrollInfluence * 60; // Slower pulsing
      const orbSize = 6 + Math.sin(time * 0.02 + orbIndex) * 2 + scrollInfluence * 2; // Slower size changes
      
      let orbX = centerX + Math.cos(orbAngle) * orbDistance;
      let orbY = centerY + Math.sin(orbAngle) * orbDistance;
      
      // Mouse attraction
      if (mouse.isActive) {
        const attraction = 0.3;
        orbX += (mouse.x - orbX) * attraction;
        orbY += (mouse.y - orbY) * attraction;
      }
      
      const orbOpacity = 0.7 + scrollInfluence * 0.3 + Math.sin(time * 0.06 + orbIndex) * 0.3;
      
      // Orb glow
      const orbGradient = ctx.createRadialGradient(orbX, orbY, 0, orbX, orbY, orbSize * 3);
      orbGradient.addColorStop(0, `rgba(210, 180, 156, ${orbOpacity})`);
      orbGradient.addColorStop(1, 'rgba(210, 180, 156, 0)');
      
      ctx.fillStyle = orbGradient;
      ctx.beginPath();
      ctx.arc(orbX, orbY, orbSize * 3, 0, Math.PI * 2);
      ctx.fill();
      
      // Orb core
      ctx.fillStyle = `rgba(255, 255, 255, ${orbOpacity})`;
      ctx.beginPath();
      ctx.arc(orbX, orbY, orbSize, 0, Math.PI * 2);
      ctx.fill();
    }

    // Dramatic click ripples
    setRipples(prev => prev.filter(ripple => ripple.time < 150));
    
    ripples.forEach(ripple => {
      for (let wave = 0; wave < 3; wave++) {
        const waveRadius = ripple.time * (8 + wave * 2);
        const waveOpacity = Math.max(0, (150 - ripple.time) / 150) * (0.8 - wave * 0.2);
        
        ctx.beginPath();
        ctx.strokeStyle = `rgba(210, 180, 156, ${waveOpacity})`;
        ctx.lineWidth = 4 - wave;
        ctx.shadowColor = 'rgba(210, 180, 156, 0.8)';
        ctx.shadowBlur = 15;
        ctx.arc(ripple.x, ripple.y, waveRadius, 0, Math.PI * 2);
        ctx.stroke();
        ctx.shadowBlur = 0;
      }
      
      ripple.time += 3;
    });

    // Mouse energy field - much more dramatic
    if (mouse.isActive) {
      const fieldRadius = 120 + Math.sin(time * 0.02) * 30;
      const fieldOpacity = 0.3 + Math.sin(time * 0.03) * 0.2;
      
      const gradient = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, fieldRadius);
      gradient.addColorStop(0, `rgba(210, 180, 156, ${fieldOpacity})`);
      gradient.addColorStop(0.3, `rgba(210, 180, 156, ${fieldOpacity * 0.7})`);
      gradient.addColorStop(1, 'rgba(210, 180, 156, 0)');
      
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(mouse.x, mouse.y, fieldRadius, 0, Math.PI * 2);
      ctx.fill();
      
      // Mouse sparks
      for (let spark = 0; spark < 8; spark++) {
        const sparkAngle = (spark / 8) * Math.PI * 2 + time * 0.1;
        const sparkDistance = 40 + Math.sin(time * 0.05 + spark) * 20;
        const sparkX = mouse.x + Math.cos(sparkAngle) * sparkDistance;
        const sparkY = mouse.y + Math.sin(sparkAngle) * sparkDistance;
        
        ctx.fillStyle = `rgba(255, 255, 255, ${0.8 + Math.sin(time * 0.08 + spark) * 0.2})`;
        ctx.beginPath();
        ctx.arc(sparkX, sparkY, 2, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    timeRef.current += 1;
    animationFrameId.current = requestAnimationFrame(drawEnergySpirals);
  }, [scrollY, ripples]);

  const initializeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const container = canvas.parentElement;
    if (!container) return;

    canvas.width = container.offsetWidth;
    canvas.height = container.offsetHeight;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.fillStyle = "rgba(10, 10, 10, 0)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    initializeCanvas();
    animationFrameId.current = requestAnimationFrame(drawEnergySpirals);

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    canvas.addEventListener('click', handleClick);

    const handleResize = () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      initializeCanvas();
      animationFrameId.current = requestAnimationFrame(drawEnergySpirals);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      canvas.removeEventListener('click', handleClick);
      window.removeEventListener("resize", handleResize);
    };
  }, [initializeCanvas, drawEnergySpirals, handleMouseMove, handleMouseLeave, handleClick]);

  return (
    <section className="mystical-hero relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden bg-gradient-radial from-gray-900/20 to-background">
      
      {/* Interactive Energy Spiral Background - responds to scroll and clicks */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-auto"
        style={{ pointerEvents: 'auto' }}
        aria-hidden="true"
      />
      
      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto pointer-events-none">
        
        {/* Logo */}
        <div className="mb-8">
          <Link href="/" className="inline-block pointer-events-auto">
            <Image
              src="/logo-source-and-signal.svg"
              alt="Source and Signal logo"
              width={500}
              height={100}
              className="object-contain max-h-40 sm:max-h-48 md:max-h-56 filter drop-shadow-lg"
              priority
            />
          </Link>
        </div>
        
        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          <span className="bg-gradient-to-r from-white via-primary to-white bg-clip-text text-transparent animate-gradient-shift">
            Where Energy Meets Code.
          </span>
        </h1>
        
        {/* Subtitle */}
        <p className="text-lg sm:text-xl max-w-3xl mx-auto text-white/80 mb-10 leading-relaxed">
          Creating digital worlds that feel responsive and alive. Taking your message to the world, and giving it wings.
        </p>
        
        {/* CTA Button */}
        <a
          href="#projects"
          className="group inline-block bg-gradient-to-r from-primary to-toasted text-black font-semibold px-10 py-4 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-primary/30 hover:shadow-xl relative overflow-hidden pointer-events-auto"
        >
          <span className="relative z-10">Experience the Flow</span>
          <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
        </a>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-primary/60 animate-bounce">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14M5 12l7 7 7-7"/>
        </svg>
      </div>
      
    </section>
  )
}