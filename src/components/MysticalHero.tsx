// src/components/MysticalHero.tsx
'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useRef, useEffect, useCallback } from 'react'

export default function MysticalHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameId = useRef<number | null>(null);
  const timeRef = useRef(0);
  const mouseRef = useRef({ x: 0, y: 0, isActive: false });

  const PHI = (1 + Math.sqrt(5)) / 2; // Golden ratio

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

  const drawWaveforms = useCallback(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!ctx || !canvas) return;

    // Clear canvas with fade effect (faster fade for less trail buildup)
    ctx.fillStyle = "rgba(10, 10, 10, 0.3)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const time = timeRef.current;
    const mouse = mouseRef.current;

    // Calculate mouse influence
    const mouseInfluence = mouse.isActive ? 1 : 0;
    const mouseDistanceFromCenter = mouse.isActive ? 
      Math.sqrt(Math.pow(mouse.x - centerX, 2) + Math.pow(mouse.y - centerY, 2)) : 0;
    const normalizedMouseDistance = Math.min(mouseDistanceFromCenter / Math.max(canvas.width, canvas.height), 1);

    // Golden ratio spiral waves (Phi-based yin-yang pattern) - reduced intensity
    for (let spiralIndex = 0; spiralIndex < 2; spiralIndex++) {
      ctx.beginPath();
      const baseOpacity = 0.05 + spiralIndex * 0.02; // Much more subtle
      const mouseOpacity = mouse.isActive ? baseOpacity + 0.08 : baseOpacity;
      ctx.strokeStyle = `rgba(210, 180, 156, ${mouseOpacity})`;
      ctx.lineWidth = (1 - spiralIndex * 0.1) * (1 + mouseInfluence * 0.3);

      const phaseOffset = (spiralIndex * Math.PI * 2) / 2;
      const timePhase = time * 0.001 + phaseOffset;
      const mousePhase = mouse.isActive ? (mouse.x / canvas.width) * Math.PI : 0;

      for (let angle = 0; angle < Math.PI * 6; angle += 0.15) {
        const baseRadius = Math.pow(PHI, angle / (Math.PI / 2)) * 6;
        const mouseRadiusMultiplier = 1 + mouseInfluence * normalizedMouseDistance * 0.3;
        
        const waveModulation = Math.sin(angle * 2 + timePhase + mousePhase) * (0.2 + mouseInfluence * 0.1);
        const finalRadius = baseRadius * mouseRadiusMultiplier * (1 + waveModulation);

        const x = centerX + Math.cos(angle + timePhase + mousePhase * 0.1) * finalRadius;
        const y = centerY + Math.sin(angle + timePhase + mousePhase * 0.1) * finalRadius;

        if (angle === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.stroke();

      // Counter-rotating spiral
      ctx.beginPath();
      ctx.strokeStyle = `rgba(210, 180, 156, ${(0.03 + spiralIndex * 0.01) * (1 + mouseInfluence * 0.2)})`;
      
      for (let angle = 0; angle < Math.PI * 6; angle += 0.15) {
        const baseRadius = Math.pow(PHI, angle / (Math.PI / 2)) * 6;
        const mouseRadiusMultiplier = 1 + mouseInfluence * normalizedMouseDistance * 0.2;
        const waveModulation = Math.sin(angle * 2 - timePhase - mousePhase) * (0.2 + mouseInfluence * 0.08);
        const finalRadius = baseRadius * mouseRadiusMultiplier * (1 + waveModulation);

        const x = centerX + Math.cos(-angle - timePhase - mousePhase * 0.1) * finalRadius;
        const y = centerY + Math.sin(-angle - timePhase - mousePhase * 0.1) * finalRadius;

        if (angle === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.stroke();
    }

    // Horizontal flowing waves (Signal transmission) - much more subtle
    for (let waveIndex = 0; waveIndex < 2; waveIndex++) { // Reduced from 3 to 2 waves
      ctx.beginPath();
      const baseOpacity = 0.06 - waveIndex * 0.02; // Much lower opacity
      ctx.strokeStyle = `rgba(210, 180, 156, ${baseOpacity * (1 + mouseInfluence * 0.4)})`;
      ctx.lineWidth = 0.8 * (1 + mouseInfluence * 0.2); // Thinner lines

      const yOffset = centerY + (waveIndex - 1) * 80;
      
      for (let x = 0; x < canvas.width; x += 4) {
        const frequency = 0.008 * (1 + waveIndex * 0.3);
        const amplitude = (30 / (PHI * (waveIndex + 1))) * (1 + mouseInfluence * 0.4);
        
        const mouseDistanceToPoint = mouse.isActive ? 
          Math.abs(mouse.x - x) / canvas.width : 0;
        const mouseDistortion = mouse.isActive ? 
          Math.sin(mouseDistanceToPoint * Math.PI * 3) * (1 - mouseDistanceToPoint) * 15 : 0;
        
        const phase = time * 0.002 * (1 + waveIndex * 0.618) + (mouse.isActive ? mouse.y / canvas.height : 0);
        
        const y = yOffset + Math.sin(x * frequency + phase) * amplitude + mouseDistortion;
        
        if (x === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.stroke();
    }

    // Phi-ratio particle nodes - reduced count and opacity
    ctx.fillStyle = `rgba(210, 180, 156, ${0.15 + mouseInfluence * 0.2})`;
    for (let i = 0; i < 4; i++) { // Reduced from 6 to 4 particles
      const angle = (i / 4) * Math.PI * 2 + time * 0.0008;
      const baseRadius = 60 * Math.pow(PHI, (i % 2) / 2); // Smaller radius
      
      let x = centerX + Math.cos(angle) * baseRadius;
      let y = centerY + Math.sin(angle) * baseRadius;
      
      if (mouse.isActive) {
        const attractionStrength = 0.08;
        x += (mouse.x - x) * attractionStrength;
        y += (mouse.y - y) * attractionStrength;
      }
      
      const particleSize = 1.5 + Math.sin(time * 0.008 + i) + mouseInfluence * 1.5;
      
      ctx.beginPath();
      ctx.arc(x, y, particleSize, 0, Math.PI * 2);
      ctx.fill();
    }

    // Subtle mouse glow - reduced intensity
    if (mouse.isActive) {
      const gradient = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 60);
      gradient.addColorStop(0, "rgba(210, 180, 156, 0.04)");
      gradient.addColorStop(1, "rgba(210, 180, 156, 0)");
      
      ctx.fillStyle = gradient;
      ctx.fillRect(mouse.x - 60, mouse.y - 60, 120, 120);
    }

    timeRef.current += 1;
    animationFrameId.current = requestAnimationFrame(drawWaveforms);
  }, [PHI]);

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
    animationFrameId.current = requestAnimationFrame(drawWaveforms);

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    const handleResize = () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      initializeCanvas();
      animationFrameId.current = requestAnimationFrame(drawWaveforms);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener("resize", handleResize);
    };
  }, [initializeCanvas, drawWaveforms, handleMouseMove, handleMouseLeave]);

  return (
    <section className="mystical-hero relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden bg-gradient-radial from-gray-900/20 to-background">
      
      {/* Waveform Canvas Background - replaces orbs and energy lines */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        aria-hidden="true"
      />
      
      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        
        {/* Logo */}
        <div className="mb-8">
          <Link href="/" className="inline-block">
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
          className="group inline-block bg-gradient-to-r from-primary to-toasted text-black font-semibold px-10 py-4 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-primary/30 hover:shadow-xl relative overflow-hidden"
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