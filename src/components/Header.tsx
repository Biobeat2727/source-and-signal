'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

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
    <header className="w-full sticky top-0 z-[100] bg-black/90 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center"
          >
            <Image
              src="/logo-source-and-signal-&.svg"
              alt="Source and Signal logo"
              width={120}
              height={48}
              className="object-contain h-10 w-auto"
              priority
            />
          </motion.div>
        </Link>

        {/* Desktop Nav */}
        {isDesktop && (
          <nav className="flex space-x-8">
            <Link 
              href="/projects" 
              className="font-poppins text-gray-300 hover:text-white transition-colors duration-300 font-medium"
            >
              Projects
            </Link>
            <Link 
              href="/services" 
              className="font-poppins text-gray-300 hover:text-white transition-colors duration-300 font-medium"
            >
              Services
            </Link>
            <Link 
              href="/about" 
              className="font-poppins text-gray-300 hover:text-white transition-colors duration-300 font-medium"
            >
              About
            </Link>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                href="/contact" 
                className="bg-blue-600 text-white font-poppins font-medium px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
              >
                Contact
              </Link>
            </motion.div>
          </nav>
        )}

        {/* Mobile Toggle Button */}
        {!isDesktop && (
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="relative z-50 p-2 text-white focus:outline-none"
            aria-expanded={isOpen}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <motion.span 
                className="block w-6 h-0.5 bg-current"
                animate={{
                  rotate: isOpen ? 45 : 0,
                  y: isOpen ? 2 : -3
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span 
                className="block w-6 h-0.5 bg-current"
                animate={{ opacity: isOpen ? 0 : 1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.span 
                className="block w-6 h-0.5 bg-current"
                animate={{
                  rotate: isOpen ? -45 : 0,
                  y: isOpen ? -2 : 3
                }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.button>
        )}
      </div>

      {/* Mobile Nav */}
      <motion.div
        initial={false}
        animate={{
          height: isOpen && !isDesktop ? 'auto' : 0,
          opacity: isOpen && !isDesktop ? 1 : 0
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden bg-black/95 backdrop-blur-md border-t border-gray-800"
      >
        <nav className="flex flex-col items-center py-6 space-y-4">
          {['Projects', 'Services', 'About', 'Contact'].map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: -10 }}
              animate={{ 
                opacity: isOpen && !isDesktop ? 1 : 0,
                y: isOpen && !isDesktop ? 0 : -10
              }}
              transition={{ 
                delay: isOpen ? index * 0.1 : 0,
                duration: 0.3 
              }}
            >
              <Link 
                href={`/${item.toLowerCase()}`} 
                onClick={() => setIsOpen(false)} 
                className={`font-poppins font-medium py-3 px-6 rounded-lg transition-colors duration-300 ${
                  item === 'Contact' 
                    ? 'bg-blue-600 text-white hover:bg-blue-700' 
                    : 'text-gray-300 hover:text-white hover:bg-gray-800'
                }`}
              >
                {item}
              </Link>
            </motion.div>
          ))}
        </nav>
      </motion.div>
    </header>
  )
}
