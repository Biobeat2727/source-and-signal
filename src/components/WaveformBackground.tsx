"use client";

import React, { useRef, useEffect, useCallback } from "react";

const WaveformBackground: React.FC = () => {
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

    // Clear canvas with fade effect
    ctx.fillStyle = "rgba(10, 10, 10, 0.05)";
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

    // Golden ratio spiral waves (Phi-based yin-yang pattern)
    for (let spiralIndex = 0; spiralIndex < 3; spiralIndex++) {
      ctx.beginPath();
      const baseOpacity = 0.15 + spiralIndex * 0.05;
      const mouseOpacity = mouse.isActive ? baseOpacity + 0.2 : baseOpacity;
      ctx.strokeStyle = `rgba(210, 180, 156, ${mouseOpacity})`;
      ctx.lineWidth = (2 - spiralIndex * 0.3) * (1 + mouseInfluence * 0.5);

      const phaseOffset = (spiralIndex * Math.PI * 2) / 3;
      const timePhase = time * 0.002 + phaseOffset;
      const mousePhase = mouse.isActive ? (mouse.x / canvas.width) * Math.PI * 2 : 0;

      for (let angle = 0; angle < Math.PI * 8; angle += 0.1) {
        // Golden spiral radius with mouse influence
        const baseRadius = Math.pow(PHI, angle / (Math.PI / 2)) * 8;
        const mouseRadiusMultiplier = 1 + mouseInfluence * normalizedMouseDistance * 0.5;
        
        // Add wave modulation influenced by mouse position
        const waveModulation = Math.sin(angle * 3 + timePhase + mousePhase) * (0.3 + mouseInfluence * 0.2);
        const finalRadius = baseRadius * mouseRadiusMultiplier * (1 + waveModulation);

        // Create the spiral coordinates
        const x = centerX + Math.cos(angle + timePhase + mousePhase * 0.1) * finalRadius;
        const y = centerY + Math.sin(angle + timePhase + mousePhase * 0.1) * finalRadius;

        if (angle === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.stroke();

      // Counter-rotating spiral for yin-yang effect
      ctx.beginPath();
      ctx.strokeStyle = `rgba(210, 180, 156, ${(0.1 + spiralIndex * 0.03) * (1 + mouseInfluence * 0.5)})`;
      
      for (let angle = 0; angle < Math.PI * 8; angle += 0.1) {
        const baseRadius = Math.pow(PHI, angle / (Math.PI / 2)) * 8;
        const mouseRadiusMultiplier = 1 + mouseInfluence * normalizedMouseDistance * 0.3;
        const waveModulation = Math.sin(angle * 3 - timePhase - mousePhase) * (0.3 + mouseInfluence * 0.15);
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

    // Horizontal flowing waves (Signal transmission) with mouse interaction
    for (let waveIndex = 0; waveIndex < 2; waveIndex++) {
      ctx.beginPath();
      const baseOpacity = 0.2 - waveIndex * 0.05;
      ctx.strokeStyle = `rgba(210, 180, 156, ${baseOpacity * (1 + mouseInfluence * 0.8)})`;
      ctx.lineWidth = 1.5 * (1 + mouseInfluence * 0.3);

      const yOffset = centerY + (waveIndex - 0.5) * 100;
      
      for (let x = 0; x < canvas.width; x += 3) {
        const frequency = 0.01 * (1 + waveIndex * 0.5);
        const amplitude = (40 / (PHI * (waveIndex + 1))) * (1 + mouseInfluence * 0.5);
        
        // Mouse creates wave distortion based on distance
        const mouseDistanceToPoint = mouse.isActive ? 
          Math.abs(mouse.x - x) / canvas.width : 0;
        const mouseDistortion = mouse.isActive ? 
          Math.sin(mouseDistanceToPoint * Math.PI * 4) * (1 - mouseDistanceToPoint) * 20 : 0;
        
        const phase = time * 0.003 * (1 + waveIndex * 0.618) + (mouse.isActive ? mouse.y / canvas.height : 0);
        
        const y = yOffset + Math.sin(x * frequency + phase) * amplitude + mouseDistortion;
        
        if (x === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.stroke();
    }

    // Phi-ratio particle nodes with mouse attraction
    ctx.fillStyle = `rgba(210, 180, 156, ${0.3 + mouseInfluence * 0.4})`;
    for (let i = 0; i < 8; i++) {
      const angle = (i / 8) * Math.PI * 2 + time * 0.001;
      const baseRadius = 100 * Math.pow(PHI, (i % 3) / 3);
      
      // Mouse attraction effect
      let x = centerX + Math.cos(angle) * baseRadius;
      let y = centerY + Math.sin(angle) * baseRadius;
      
      if (mouse.isActive) {
        const attractionStrength = 0.1;
        x += (mouse.x - x) * attractionStrength;
        y += (mouse.y - y) * attractionStrength;
      }
      
      const particleSize = 2 + Math.sin(time * 0.01 + i) + mouseInfluence * 2;
      
      ctx.beginPath();
      ctx.arc(x, y, particleSize, 0, Math.PI * 2);
      ctx.fill();
    }

    // Mouse glow effect
    if (mouse.isActive) {
      const gradient = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 100);
      gradient.addColorStop(0, "rgba(210, 180, 156, 0.1)");
      gradient.addColorStop(1, "rgba(210, 180, 156, 0)");
      
      ctx.fillStyle = gradient;
      ctx.fillRect(mouse.x - 100, mouse.y - 100, 200, 200);
    }

    timeRef.current += 1;
    animationFrameId.current = requestAnimationFrame(drawWaveforms);
  }, [PHI]);

  const initializeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set initial background
    ctx.fillStyle = "#0A0A0A";
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
    <canvas
      ref={canvasRef}
      style={{ 
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        border: '2px solid red' // Temporary debug border
      }}
      aria-hidden="true"
    />
  );
};

export default WaveformBackground;