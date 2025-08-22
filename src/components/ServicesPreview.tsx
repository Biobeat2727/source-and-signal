'use client'

import { useEffect, useRef, useState } from 'react'

export default function ServicesPreview() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredService, setHoveredService] = useState<number | null>(null)
  const sectionRef = useRef<HTMLDivElement>(null)

  const services = [
    {
      title: 'Web Development',
      description: 'Modern, responsive websites built with Next.js, Tailwind, and Sanity.',
      icon: '🚀',
      gradient: 'from-blue-500 to-purple-600',
      features: ['React/Next.js', 'TypeScript', 'Responsive Design']
    },
    {
      title: 'Brand Design',
      description: 'Clean visual identity and layout to match your story and energy.',
      icon: '🎨',
      gradient: 'from-pink-500 to-orange-500',
      features: ['Logo Design', 'Visual Identity', 'UI/UX']
    },
    {
      title: 'CMS Integration',
      description: 'Customizable Sanity or WordPress content systems for client editing.',
      icon: '⚙️',
      gradient: 'from-green-500 to-cyan-500',
      features: ['Sanity CMS', 'WordPress', 'Custom Solutions']
    },
    {
      title: 'Performance Optimization',
      description: 'Lighthouse audits, SEO, load speed boosts, and image handling.',
      icon: '⚡',
      gradient: 'from-yellow-500 to-red-500',
      features: ['SEO Optimization', 'Speed Boost', 'Analytics']
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section 
      ref={sectionRef}
      className="py-24 px-6 bg-background border-t border-white/10 relative overflow-hidden"
    >
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent transform -skew-y-12 animate-pulse" />
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary via-white to-toasted bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-white/70 mb-12 max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to bring your vision to life
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-lg transition-all duration-700 hover:border-primary hover:shadow-2xl hover:shadow-primary/20 hover:scale-105 cursor-pointer ${
                isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-12 opacity-0'
              }`}
              style={{
                transitionDelay: `${index * 150}ms`
              }}
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
            >
              {/* Animated Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-lg`} />
              
              {/* Service Icon with Animation */}
              <div className="relative z-10 mb-4">
                <div className={`text-4xl transform transition-all duration-300 group-hover:scale-110 ${hoveredService === index ? 'animate-bounce' : ''}`}>
                  {service.icon}
                </div>
              </div>

              {/* Service Title */}
              <h3 className="relative z-10 text-xl font-semibold text-primary mb-3 group-hover:text-white transition-colors duration-300">
                {service.title}
              </h3>
              
              {/* Service Description */}
              <p className="relative z-10 text-white/80 text-sm mb-4 group-hover:text-white/90 transition-colors duration-300">
                {service.description}
              </p>

              {/* Feature Tags */}
              <div className="relative z-10 flex flex-wrap gap-1 justify-center">
                {service.features.map((feature, featureIndex) => (
                  <span
                    key={featureIndex}
                    className={`text-xs px-2 py-1 bg-primary/20 text-primary rounded-full transition-all duration-300 ${
                      hoveredService === index ? 'bg-primary/30 text-white scale-105' : ''
                    }`}
                    style={{
                      transitionDelay: `${featureIndex * 100}ms`
                    }}
                  >
                    {feature}
                  </span>
                ))}
              </div>

              {/* Floating Particles on Hover */}
              {hoveredService === index && (
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-primary rounded-full animate-ping"
                      style={{
                        left: `${10 + (i * 10)}%`,
                        top: `${20 + (i * 8)}%`,
                        animationDelay: `${i * 150}ms`,
                        animationDuration: '2s'
                      }}
                    />
                  ))}
                </div>
              )}

              {/* Pulse Border Effect */}
              <div className="absolute inset-0 border border-primary/0 group-hover:border-primary/50 rounded-lg transition-all duration-500">
                <div className="absolute inset-0 border border-primary/0 group-hover:border-primary/30 rounded-lg animate-pulse" />
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className={`mt-16 transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <p className="text-white/60 mb-6">Ready to bring your vision to life?</p>
          <button className="group bg-gradient-to-r from-primary to-toasted text-black font-semibold px-8 py-3 rounded-lg hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:scale-105 relative overflow-hidden">
            <span className="relative z-10">Get Started</span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
          </button>
        </div>
      </div>
    </section>
  )
}
