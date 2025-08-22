'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 768)
    }
    
    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
    
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  return (
    <header className="w-full sticky top-0 z-[100] bg-background/80 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center transform transition-transform duration-500 scale-50 hover:scale-110">
          <Image
            src="/logo-source-and-signal-&.svg"
            alt="Source and Signal logo"
            width={100}
            height={40}
            className="object-contain max-h-16"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        {isDesktop && (
          <nav className="flex space-x-6 text-sm">
          <Link href="/projects" className="text-white hover:text-primary transition-colors duration-300 font-medium px-2 py-1" style={{color: 'white', display: 'block'}}>Projects</Link>
          <Link href="/services" className="text-white hover:text-primary transition-colors duration-300 font-medium px-2 py-1" style={{color: 'white', display: 'block'}}>Services</Link>
          <Link href="/about" className="text-white hover:text-primary transition-colors duration-300 font-medium px-2 py-1" style={{color: 'white', display: 'block'}}>About</Link>
          <Link href="/contact" className="text-white hover:text-primary transition-colors duration-300 font-medium px-2 py-1" style={{color: 'white', display: 'block'}}>Contact</Link>
          </nav>
        )}

        {/* Mobile Toggle Button */}
        {!isDesktop && (
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative z-50 p-2 text-primary focus:outline-none transition-all duration-300 hover:scale-110 active:scale-95"
            aria-expanded={isOpen}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-0.5' : '-translate-y-1'}`}></span>
              <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-0.5' : 'translate-y-1'}`}></span>
            </div>
          </button>
        )}
      </div>

      {/* Mobile Nav */}
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen && !isDesktop ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <nav className="flex flex-col items-center bg-background/95 backdrop-blur-sm border-t border-white/10 py-6 space-y-4">
          <Link 
            href="/projects" 
            onClick={() => setIsOpen(false)} 
            className="text-white hover:text-primary transition-all duration-300 transform hover:scale-105 py-2 px-4 rounded-lg hover:bg-primary/10"
            style={{animationDelay: '0.1s'}}
          >
            Projects
          </Link>
          <Link 
            href="/services" 
            onClick={() => setIsOpen(false)} 
            className="text-white hover:text-primary transition-all duration-300 transform hover:scale-105 py-2 px-4 rounded-lg hover:bg-primary/10"
            style={{animationDelay: '0.2s'}}
          >
            Services
          </Link>
          <Link 
            href="/about" 
            onClick={() => setIsOpen(false)} 
            className="text-white hover:text-primary transition-all duration-300 transform hover:scale-105 py-2 px-4 rounded-lg hover:bg-primary/10"
            style={{animationDelay: '0.3s'}}
          >
            About
          </Link>
          <Link 
            href="/contact" 
            onClick={() => setIsOpen(false)} 
            className="text-white hover:text-primary transition-all duration-300 transform hover:scale-105 py-2 px-4 rounded-lg hover:bg-primary/10"
            style={{animationDelay: '0.4s'}}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  )
}
