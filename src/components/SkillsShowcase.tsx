'use client'

import { useEffect, useRef, useState } from 'react'
import TechLogo from './TechLogo'

interface Technology {
  name: string
  color: string
  projects: Project[]
}

interface Project {
  name: string
  description: string
  link?: string
  highlights: string[]
}

const technologies: Technology[] = [
  {
    name: 'React',
    color: 'from-blue-400 to-cyan-400',
    projects: [
      {
        name: 'Source & Signal Website',
        description: 'Modern portfolio site with advanced animations',
        highlights: ['Next.js 14', 'Tailwind CSS', 'TypeScript']
      },
      {
        name: 'E-commerce Platform',
        description: 'Full-stack shopping experience',
        highlights: ['React Router', 'Context API', 'Payment Integration']
      }
    ]
  },
  {
    name: 'TypeScript',
    color: 'from-blue-600 to-blue-400',
    projects: [
      {
        name: 'Type-Safe API Client',
        description: 'Robust API integration with full type safety',
        highlights: ['Generics', 'Utility Types', 'Strict Mode']
      }
    ]
  },
  {
    name: 'Next.js',
    color: 'from-gray-800 to-gray-600',
    projects: [
      {
        name: 'Portfolio Platform',
        description: 'SSG/SSR hybrid with optimal performance',
        highlights: ['App Router', 'Server Components', 'Edge Runtime']
      }
    ]
  },
  {
    name: 'Node.js',
    color: 'from-green-500 to-green-400',
    projects: [
      {
        name: 'REST API Service',
        description: 'Scalable backend with authentication',
        highlights: ['Express.js', 'JWT Auth', 'Rate Limiting']
      }
    ]
  },
  {
    name: 'Python',
    color: 'from-yellow-500 to-green-500',
    projects: [
      {
        name: 'Data Analysis Pipeline',
        description: 'Automated data processing and visualization',
        highlights: ['Pandas', 'NumPy', 'FastAPI']
      }
    ]
  },
  {
    name: 'AWS',
    color: 'from-orange-500 to-red-500',
    projects: [
      {
        name: 'Serverless Architecture',
        description: 'Cost-effective cloud infrastructure',
        highlights: ['Lambda', 'DynamoDB', 'CloudFront']
      }
    ]
  },
  {
    name: 'Docker',
    color: 'from-blue-400 to-blue-600',
    projects: [
      {
        name: 'Containerized Deployment',
        description: 'Consistent dev-to-prod environments',
        highlights: ['Multi-stage builds', 'Docker Compose', 'K8s']
      }
    ]
  },
  {
    name: 'PostgreSQL',
    color: 'from-blue-500 to-indigo-500',
    projects: [
      {
        name: 'Database Optimization',
        description: 'High-performance data modeling',
        highlights: ['Complex Queries', 'Indexing', 'Performance Tuning']
      }
    ]
  }
]

export default function SkillsShowcase() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedTech, setSelectedTech] = useState<Technology | null>(null)
  const [hoveredTech, setHoveredTech] = useState<Technology | null>(null)
  const [rotation, setRotation] = useState(0)
  const [isRotating, setIsRotating] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // Auto-rotation when not interacting
  useEffect(() => {
    if (!selectedTech && isVisible) {
      const interval = setInterval(() => {
        setRotation(prev => prev + 0.5)
      }, 100)
      return () => clearInterval(interval)
    }
  }, [selectedTech, isVisible])

  const handleTechClick = (tech: Technology, index: number) => {
    setIsRotating(true)
    const targetRotation = -(index * (360 / technologies.length))
    setRotation(targetRotation)
    setSelectedTech(tech)
    
    setTimeout(() => setIsRotating(false), 500)
  }

  // Responsive radius based on screen size
  const getResponsiveRadius = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 640) return 160  // Mobile - increased from 140 to prevent bottom icon overlap with text
      if (window.innerWidth < 1024) return 160 // Tablet
      return 200 // Desktop
    }
    return 200 // Default for SSR - use desktop size to prevent layout shift
  }

  const [radius, setRadius] = useState(200) // Start with desktop size
  const [isClient, setIsClient] = useState(false)
  
  // Calculate proper center coordinates with responsive padding
  const padding = radius < 160 ? 40 : 60 // Reduce padding on smaller screens
  const centerX = radius + padding
  const centerY = radius + padding

  useEffect(() => {
    // Set client flag and correct radius on mount
    setIsClient(true)
    setRadius(getResponsiveRadius())

    const handleResize = () => {
      setRadius(getResponsiveRadius())
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Prevent hydration mismatch by waiting for client-side mount
  if (!isClient) {
    return (
      <section 
        ref={containerRef}
        className="py-20 px-6 bg-gradient-to-b from-background via-gray-900/30 to-background relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 px-4">
              <span className="bg-gradient-to-r from-primary via-white to-toasted bg-clip-text text-transparent">
                Technologies & Projects
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-2xl mx-auto px-4">
              Loading interactive wheel...
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section 
      ref={containerRef}
      className="py-20 px-6 bg-gradient-to-b from-background via-gray-900/30 to-background relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 px-4">
            <span className="bg-gradient-to-r from-primary via-white to-toasted bg-clip-text text-transparent">
              Technologies & Projects
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-2xl mx-auto px-4">
            Explore my work across different technologies
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-start justify-center gap-8 lg:gap-16">
          {/* Rotating Tech Wheel */}
          <div className="relative flex-shrink-0 w-full lg:w-auto flex justify-center">
            <div className="flex flex-col items-center">
              <div 
                className={`relative transition-all duration-1000 ${isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'} mx-auto`}
                style={{ 
                  width: `${(radius + padding) * 2}px`, 
                  height: `${(radius + padding) * 2}px`,
                  maxWidth: '100vw',
                  maxHeight: '100vw'
                }}
              >
              {/* Center hub - only show when no tech is selected */}
              {!selectedTech && (
                <div 
                  className="absolute transition-all duration-500"
                  style={{
                    left: `${centerX - (radius < 140 ? 24 : radius < 180 ? 32 : 40)}px`,
                    top: `${centerY - (radius < 140 ? 24 : radius < 180 ? 32 : 40)}px`,
                    width: `${radius < 140 ? 48 : radius < 180 ? 64 : 80}px`,
                    height: `${radius < 140 ? 48 : radius < 180 ? 64 : 80}px`
                  }}
                >
                  <div className="w-full h-full bg-gradient-to-br from-primary to-toasted rounded-full animate-breathe shadow-lg shadow-primary/30 flex items-center justify-center">
                    <span className={`${radius < 140 ? 'text-xl' : radius < 180 ? 'text-2xl' : 'text-3xl'} leading-none`}>⚡</span>
                  </div>
                </div>
              )}

              {/* Selected tech in center */}
              {selectedTech && (
                <div 
                  className="absolute transition-all duration-700 ease-out cursor-pointer group"
                  style={{
                    left: `${centerX - (radius < 140 ? 40 : radius < 180 ? 50 : 60)}px`,
                    top: `${centerY - (radius < 140 ? 40 : radius < 180 ? 50 : 60)}px`,
                    width: `${radius < 140 ? 80 : radius < 180 ? 100 : 120}px`,
                    height: `${radius < 140 ? 80 : radius < 180 ? 100 : 120}px`
                  }}
                  onClick={() => {
                    // Toggle projects panel or do nothing if already showing
                  }}
                >
                  <div className={`w-full h-full bg-gradient-to-br ${selectedTech.color} rounded-full animate-glow-pulse shadow-2xl shadow-primary/50 border-3 border-white/30 flex items-center justify-center backdrop-blur-sm group-hover:scale-105 transition-transform duration-300`}>
                    <div className="text-white transform scale-110">
                      <TechLogo name={selectedTech.name} size={radius < 140 ? 48 : radius < 180 ? 60 : 72} />
                    </div>
                  </div>
                  {/* Selected tech name */}
                  <div className={`absolute left-1/2 top-full transform -translate-x-1/2 text-center transition-all duration-500 ${radius < 140 ? 'mt-1' : 'mt-3'}`}
                  >
                    <div className={`${radius < 140 ? 'text-base' : 'text-lg'} font-bold text-primary whitespace-nowrap group-hover:scale-105 transition-transform duration-300 mb-1`}>
                      {selectedTech.name}
                    </div>
                    <div className={`text-xs text-white/60 group-hover:text-white/80 transition-colors duration-300 ${radius < 180 ? 'hidden' : 'block'}`}>
                      Showing projects →
                    </div>
                  </div>
                </div>
              )}

              {/* Tech icons on wheel */}
              {technologies.map((tech, index) => {
                const angle = (index * (360 / technologies.length)) + rotation
                const radian = (angle * Math.PI) / 180
                const x = centerX + Math.cos(radian) * radius
                const y = centerY + Math.sin(radian) * radius
                
                const isHovered = hoveredTech === tech
                const isSelected = selectedTech === tech
                const isSomethingSelected = selectedTech !== null
                
                // When something is selected, make other icons smaller but still clickable
                if (isSomethingSelected) {
                  return (
                    <div
                      key={tech.name}
                      className="absolute cursor-pointer transition-all duration-700 opacity-60 scale-75 hover:opacity-90 hover:scale-85"
                      style={{
                        left: `${x - (radius < 140 ? 28 : radius < 180 ? 32 : 36)}px`,
                        top: `${y - (radius < 140 ? 28 : radius < 180 ? 32 : 36)}px`,
                        zIndex: 5
                      }}
                      onClick={() => handleTechClick(tech, index)}
                      onMouseEnter={() => setHoveredTech(tech)}
                      onMouseLeave={() => setHoveredTech(null)}
                      onTouchStart={() => setHoveredTech(tech)}
                      onTouchEnd={() => setHoveredTech(null)}
                    >
                      <div className={`${radius < 140 ? 'w-14 h-14' : radius < 180 ? 'w-16 h-16' : 'w-18 h-18'} rounded-full flex items-center justify-center transition-all duration-300 p-2 ${
                        hoveredTech === tech 
                          ? `bg-gradient-to-br ${tech.color} shadow-lg border border-white/40` 
                          : 'bg-gray-800/60 backdrop-blur-sm border border-gray-600/50'
                      }`}>
                        <div className={`transition-all duration-300 flex items-center justify-center ${hoveredTech === tech ? 'text-white' : 'text-gray-400'}`}>
                          <TechLogo name={tech.name} size={radius < 140 ? 28 : radius < 180 ? 32 : 36} />
                        </div>
                      </div>
                      
                      {/* Tech name label - smaller when in background */}
                      <div className={`absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs font-medium transition-all duration-300 whitespace-nowrap ${
                        hoveredTech === tech ? 'text-primary scale-105' : 'text-white/40'
                      }`}>
                        {tech.name}
                      </div>
                    </div>
                  )
                }
                
                // Normal wheel behavior when nothing is selected
                const mobileScale = radius < 140 ? 0.8 : radius < 180 ? 0.9 : 1
                const baseScale = (isHovered ? 1.2 : 1) * mobileScale
                
                // Responsive icon sizing - made bigger
                const getIconSize = () => {
                  const baseSize = radius < 140 ? 32 : radius < 180 ? 40 : 48
                  if (isHovered) return baseSize + 6
                  return baseSize
                }
                
                // Responsive container sizing - made bigger for larger icons
                const containerSize = radius < 140 ? 'w-16 h-16' : radius < 180 ? 'w-20 h-20' : 'w-24 h-24'
                const offsetSize = radius < 140 ? 32 : radius < 180 ? 40 : 48

                return (
                  <div
                    key={tech.name}
                    className={`absolute cursor-pointer transition-all duration-500 ${isRotating ? 'pointer-events-none' : ''}`}
                    style={{
                      left: `${x - offsetSize}px`,
                      top: `${y - offsetSize}px`,
                      transform: `scale(${baseScale})`,
                      zIndex: isHovered ? 8 : 1
                    }}
                    onClick={() => handleTechClick(tech, index)}
                    onMouseEnter={() => setHoveredTech(tech)}
                    onMouseLeave={() => setHoveredTech(null)}
                    onTouchStart={() => setHoveredTech(tech)}
                    onTouchEnd={() => setHoveredTech(null)}
                  >
                    <div className={`${containerSize} rounded-full flex items-center justify-center transition-all duration-300 overflow-hidden p-2 ${
                      isSelected 
                        ? `bg-gradient-to-br ${tech.color} shadow-xl shadow-primary/50 animate-glow-pulse border-2 border-white/20` 
                        : isHovered
                        ? `bg-gradient-to-br ${tech.color} shadow-lg shadow-primary/30 border border-white/30`
                        : 'bg-gray-800/70 backdrop-blur-sm border border-gray-600/50 hover:border-primary/50'
                    }`}>
                      <div className={`transition-all duration-300 flex items-center justify-center ${
                        isSelected || isHovered ? 'text-white scale-105' : 'text-gray-300'
                      }`}>
                        <TechLogo name={tech.name} size={getIconSize()} />
                      </div>
                    </div>
                    
                    {/* Tech name label - responsive text size */}
                    <div className={`absolute ${radius < 140 ? '-bottom-6' : radius < 180 ? '-bottom-8' : '-bottom-10'} left-1/2 transform -translate-x-1/2 ${radius < 140 ? 'text-xs' : 'text-sm'} font-medium transition-all duration-300 whitespace-nowrap ${
                      isSelected ? 'text-primary scale-110 font-bold' : isHovered ? 'text-white scale-105' : 'text-white/60'
                    }`}>
                      {tech.name}
                    </div>
                    
                    {/* Hover glow ring */}
                    {isHovered && !isSelected && (
                      <div className="absolute inset-0 rounded-full animate-ping">
                        <div className={`w-full h-full rounded-full bg-gradient-to-br ${tech.color} opacity-30`} />
                      </div>
                    )}
                  </div>
                )
              })}

              {/* Connecting lines - only show when nothing is selected */}
              {!selectedTech && (
                <svg className="absolute inset-0 pointer-events-none opacity-20 transition-opacity duration-500">
                  {technologies.map((_, index) => {
                    const angle = (index * (360 / technologies.length)) + rotation
                    const radian = (angle * Math.PI) / 180
                    const x = centerX + Math.cos(radian) * radius
                    const y = centerY + Math.sin(radian) * radius

                    return (
                      <line
                        key={index}
                        x1={centerX}
                        y1={centerY}
                        x2={x}
                        y2={y}
                        stroke="rgba(210, 180, 156, 0.3)"
                        strokeWidth="1"
                      />
                    )
                  })}
                </svg>
              )}
              </div>

              {/* Instructions */}
              <div className={`text-center mt-8 text-white/60 ${radius < 140 ? 'text-xs' : 'text-sm'} lg:hidden`}>
                {radius < 140 ? 'Tap tech icons to see projects' : 'Click on any technology to see related projects'}
              </div>
            </div>
          </div>

          {/* Selected Tech Projects */}
          <div className="flex-1 w-full lg:max-w-lg xl:max-w-2xl">
            {selectedTech ? (
              <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4 md:p-6 lg:p-8 animate-breathe h-fit">
                <div className="flex items-center mb-4 md:mb-6">
                  <div className="w-12 h-12 md:w-16 md:h-16 mr-3 md:mr-4 flex items-center justify-center">
                    <TechLogo name={selectedTech.name} size={radius < 140 ? 36 : 48} />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-2xl font-bold text-white">{selectedTech.name}</h3>
                    <p className="text-sm md:text-base text-white/60">Projects & Experience</p>
                  </div>
                </div>

                <div className="space-y-4 md:space-y-6">
                  {selectedTech.projects.map((project, index) => (
                    <div 
                      key={index}
                      className="border-l-2 border-primary/30 pl-4 md:pl-6 transform transition-all duration-500"
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      <h4 className="text-base md:text-lg font-semibold text-primary mb-2">{project.name}</h4>
                      <p className="text-sm md:text-base text-white/80 mb-3">{project.description}</p>
                      <div className="flex flex-wrap gap-1 md:gap-2">
                        {project.highlights.map((highlight, hIndex) => (
                          <span 
                            key={hIndex}
                            className="text-xs px-2 md:px-3 py-1 bg-primary/20 text-primary rounded-full animate-float"
                            style={{ animationDelay: `${hIndex * 200}ms` }}
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <button 
                  className="mt-4 md:mt-6 text-sm md:text-base text-white/60 hover:text-primary transition-colors duration-300"
                  onClick={() => setSelectedTech(null)}
                >
                  ← Back to wheel
                </button>
              </div>
            ) : (
              <div className="text-center py-8 lg:py-12">
                <div className="text-4xl lg:text-5xl mb-4 animate-float">🚀</div>
                <h3 className="text-lg lg:text-xl font-semibold text-white/80 mb-2">Ready to Explore?</h3>
                <p className="text-sm lg:text-base text-white/60 px-4">
                  Click on any technology to see my projects and experience with it.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Floating Code Snippets */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute text-primary/10 font-mono text-sm animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 2}s`,
                animationDuration: `${8 + Math.random() * 4}s`
              }}
            >
              {['{ }', '< />', '( )', '[ ]', '&&', '=>', '||', '++', 'const', 'let', 'async', 'await'][i]}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}