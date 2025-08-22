'use client'

import Image from 'next/image'
import { useState } from 'react'

interface TechLogoProps {
  name: string
  size?: number
}

export default function TechLogo({ name, size = 32 }: TechLogoProps) {
  const [imageError, setImageError] = useState(false)
  
  // Convert technology name to filename format
  const getLogoFileName = (techName: string): string => {
    return techName.toLowerCase().replace(/\s+/g, '-').replace('.', '')
  }

  const logoPath = `/logos/${getLogoFileName(name)}.png`

  // Fallback for when image fails to load or for unknown technologies
  if (imageError || !hasLogo(name)) {
    return <span style={{ fontSize: size }}>{getEmojiForTech(name)}</span>
  }

  return (
    <Image
      src={logoPath}
      alt={`${name} logo`}
      width={size}
      height={size}
      className="object-contain"
      onError={() => setImageError(true)}
      unoptimized // Allows for PNG files without optimization
    />
  )
}

// List of technologies that have logo files
function hasLogo(name: string): boolean {
  const availableLogos = [
    'React',
    'TypeScript', 
    'Next.js',
    'Node.js',
    'Python',
    'AWS',
    'Docker',
    'PostgreSQL',
    'JavaScript',
    'CSS/SCSS',
    'MongoDB',
    'Git'
  ]
  
  return availableLogos.includes(name)
}

function getEmojiForTech(name: string): string {
  const emojiMap: Record<string, string> = {
    'React': '⚛️',
    'TypeScript': '📘',
    'Next.js': '▲',
    'Node.js': '💚',
    'Python': '🐍',
    'JavaScript': '🟨',
    'CSS/SCSS': '🎨',
    'MongoDB': '🍃',
    'PostgreSQL': '🐘',
    'AWS': '☁️',
    'Docker': '🐳',
    'Git': '🌿',
    'Vue.js': '💚',
    'Angular': '🅰️',
    'Express': '🚂',
    'GraphQL': '🔷',
    'Firebase': '🔥',
    'Redis': '🔴',
    'Kubernetes': '☸️',
    'Jenkins': '🤖',
    'Nginx': '🔧',
    'Linux': '🐧'
  }
  
  return emojiMap[name] || '⚙️'
}