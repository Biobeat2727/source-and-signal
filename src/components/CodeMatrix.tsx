'use client'

import { useEffect, useRef } from 'react'

interface CodeChar {
  char: string
  x: number
  y: number
  speed: number
  opacity: number
  size: number
}

const codeChars = [
  // JavaScript/TypeScript
  'const', 'let', 'var', 'function', 'return', 'if', 'else', 'for', 'while', 'class',
  'import', 'export', 'async', 'await', 'try', 'catch', 'new', 'this', 'super',
  // Symbols
  '{', '}', '(', ')', '[', ']', ';', ':', ',', '.', '=', '+', '-', '*', '/', '%',
  '&&', '||', '!', '?', '&', '|', '^', '~', '<<', '>>', '===', '!==', '=>',
  // HTML/JSX
  '<div>', '</div>', '<span>', '<p>', '<h1>', '<img>', '<a>', '<button>',
  'className', 'onClick', 'useState', 'useEffect', 'props', 'state',
  // CSS
  'display', 'position', 'color', 'background', 'margin', 'padding', 'flex',
  'grid', 'transform', 'transition', 'animation', 'opacity', 'z-index',
  // Database
  'SELECT', 'FROM', 'WHERE', 'JOIN', 'INSERT', 'UPDATE', 'DELETE', 'CREATE',
  // Numbers and common terms
  '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'true', 'false', 'null', 'undefined'
]

export default function CodeMatrix() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationFrameId = useRef<number | null>(null)
  const codeElements = useRef<CodeChar[]>([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Initialize floating code elements
    const initCodeElements = () => {
      codeElements.current = []
      const numElements = Math.floor((canvas.width * canvas.height) / 8000) // Density based on screen size
      
      for (let i = 0; i < numElements; i++) {
        codeElements.current.push({
          char: codeChars[Math.floor(Math.random() * codeChars.length)],
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          speed: 0.2 + Math.random() * 0.8,
          opacity: 0.1 + Math.random() * 0.3,
          size: 8 + Math.random() * 8
        })
      }
    }

    initCodeElements()

    const animate = () => {
      ctx.fillStyle = 'rgba(10, 10, 10, 0.02)' // Very subtle fade for trails
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      codeElements.current.forEach((element, index) => {
        // Update position
        element.y += element.speed
        
        // Wrap around when reaching bottom
        if (element.y > canvas.height + 50) {
          element.y = -50
          element.x = Math.random() * canvas.width
          element.char = codeChars[Math.floor(Math.random() * codeChars.length)]
        }

        // Slight horizontal drift
        element.x += Math.sin(element.y * 0.01 + index) * 0.1

        // Draw the code character
        ctx.save()
        ctx.globalAlpha = element.opacity
        ctx.fillStyle = '#d2b49c' // Using your primary color
        ctx.font = `${element.size}px 'Courier New', monospace`
        ctx.fillText(element.char, element.x, element.y)
        ctx.restore()

        // Occasional opacity flicker for "alive" effect
        if (Math.random() < 0.02) {
          element.opacity = Math.max(0.05, Math.min(0.4, element.opacity + (Math.random() - 0.5) * 0.1))
        }
      })

      animationFrameId.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current)
      }
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-40"
      style={{ mixBlendMode: 'screen' }}
    />
  )
}