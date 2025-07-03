"use client";

import React, { useRef, useEffect, useCallback } from "react";

const MatrixRain: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameId = useRef<number | null>(null);
  const dropsRef = useRef<number[]>([]);
  const bottomCharsRef = useRef<Array<{ x: number; char: string }>>([]);

  const characters =
    "アァカサタナハマヤラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユルグズヅブプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨロヲゴゾドボポヴッン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  let fontSize = 16;
  let columns: number;
  const fallSpeed = 0.1;

  const initializeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    if (window.innerWidth < 640) {
      fontSize = 10;
    } else if (window.innerWidth < 1024) {
      fontSize = 14;
    } else {
      fontSize = 16;
    }

    columns = Math.floor(canvas.width / fontSize);
    dropsRef.current = Array(columns).fill(1);

    ctx.font = `${fontSize}px monospace`;

    bottomCharsRef.current = []; // Clear bottom pile on resize
  }, []);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!ctx || !canvas) return;

    ctx.fillStyle = "rgba(0, 0, 0, 0.15)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#FFEBCD"; // Toasted almond

    const currentDrops = dropsRef.current;

    for (let i = 0; i < currentDrops.length; i++) {
  const x = i * fontSize;
  const y = currentDrops[i] * fontSize;

  const yRounded = Math.floor(y); // Fix for sub-pixel drifting

  const text = characters.charAt(Math.floor(Math.random() * characters.length));
  ctx.fillText(text, x, yRounded);

  const bottomY = canvas.height - fontSize;

  if (yRounded >= bottomY) {
    // Snap to bottom and only add once per column
    if (!bottomCharsRef.current.find((entry) => entry.x === x)) {
      bottomCharsRef.current.push({ x, char: text });
    }

    // Very rare reset
    if (Math.random() > 0.995) {
      currentDrops[i] = 0;
    } else {
      // Freeze drop at bottom to stop it from falling further
      currentDrops[i] = bottomY / fontSize;
    }
  } else {
    currentDrops[i] += fallSpeed;
  }
}


    // Draw piled characters at bottom
    bottomCharsRef.current.forEach(({ x, char }) => {
      ctx.fillText(char, x, canvas.height - fontSize);
    });

    animationFrameId.current = requestAnimationFrame(draw);
  }, [characters, fontSize, fallSpeed]);

  useEffect(() => {
    initializeCanvas();
    animationFrameId.current = requestAnimationFrame(draw);

    const handleResize = () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      initializeCanvas();
      animationFrameId.current = requestAnimationFrame(draw);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      window.removeEventListener("resize", handleResize);
    };
  }, [initializeCanvas, draw]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 bg-transparent pointer-events-none"
      aria-hidden="true"
    ></canvas>
  );
};

export default MatrixRain;
