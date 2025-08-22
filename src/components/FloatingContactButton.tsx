'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function FloatingContactButton() {
  const [isVisible, setIsVisible] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button after scrolling down 300px
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const handleContactClick = () => {
    // Navigate to contact page using Next.js router for better performance
    router.push('/contact')
  }

  return (
    <>
      {/* Floating Action Button */}
      <div
        className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
        }`}
      >
        <div
          className={`relative group cursor-pointer transition-all duration-300 ${
            isExpanded ? 'scale-105' : 'hover:scale-110'
          }`}
          onMouseEnter={() => setIsExpanded(true)}
          onMouseLeave={() => setIsExpanded(false)}
          onClick={handleContactClick}
        >
          {/* Main Button */}
          <div className="relative flex flex-col items-center">
            {/* Message Bubble Icon */}
            <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-primary to-toasted rounded-full shadow-lg shadow-primary/30 flex items-center justify-center animate-glow-pulse hover:shadow-xl hover:shadow-primary/40 transition-all duration-300 mb-2">
              <div className="text-black text-xl md:text-2xl transform transition-transform duration-300 group-hover:scale-110">
                💬
              </div>
            </div>

            {/* Pulsing Contact Text */}
            <div className="text-center">
              <div className="text-primary font-semibold text-xs md:text-sm whitespace-nowrap animate-pulse">
                Contact me
              </div>
            </div>

            {/* Ripple Effect */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-14 h-14 md:w-16 md:h-16 rounded-full bg-primary/20 animate-ping opacity-60"></div>
          </div>

          {/* Expanded Text */}
          <div
            className={`absolute right-full top-6 transform mr-4 transition-all duration-300 ${
              isExpanded 
                ? 'translate-x-0 opacity-100 scale-100' 
                : 'translate-x-4 opacity-0 scale-95'
            }`}
          >
            <div className="bg-gray-900/95 backdrop-blur-sm border border-primary/30 rounded-lg px-4 py-2 shadow-lg whitespace-nowrap">
              <span className="text-white font-medium text-sm md:text-base">
                Let&apos;s Talk!
              </span>
              <div className="text-primary/80 text-xs">
                Start your project
              </div>
            </div>
            
            {/* Arrow pointer */}
            <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-[8px] border-l-gray-900/95 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent"></div>
          </div>

          {/* Floating particles around button */}
          {isExpanded && (
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-primary rounded-full animate-ping"
                  style={{
                    left: `${20 + (i * 15)}%`,
                    top: `${20 + (i * 10)}%`,
                    animationDelay: `${i * 200}ms`,
                    animationDuration: '2s'
                  }}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Mobile-optimized version - smaller and positioned better on mobile */}
      <style jsx>{`
        @media (max-width: 640px) {
          .fixed.bottom-6.right-6 {
            bottom: 5rem;
            right: 1.5rem;
          }
        }
      `}</style>
    </>
  )
}