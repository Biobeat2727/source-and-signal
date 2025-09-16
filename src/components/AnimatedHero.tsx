'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function AnimatedHero() {
  const [section1Text, setSection1Text] = useState('')
  const [section2Text, setSection2Text] = useState('')
  const [section3Text, setSection3Text] = useState('')
  const [currentSection, setCurrentSection] = useState(0)
  const [showCursor, setShowCursor] = useState(true)
  
  const textSections = [
    "Welcome to Source & Signal.",
    "I am Davey, a web designer and software developer.",
    "How can I help?"
  ]

  useEffect(() => {
    let sectionIndex = 0
    let charIndex = 0
    
    const typingInterval = setInterval(() => {
      if (sectionIndex < textSections.length) {
        const currentText = textSections[sectionIndex]
        if (charIndex <= currentText.length) {
          const displayedChars = currentText.slice(0, charIndex)
          
          if (sectionIndex === 0) {
            setSection1Text(displayedChars)
          } else if (sectionIndex === 1) {
            setSection2Text(displayedChars)
          } else if (sectionIndex === 2) {
            setSection3Text(displayedChars)
          }
          
          setCurrentSection(sectionIndex)
          charIndex++
        } else {
          sectionIndex++
          charIndex = 0
          // Brief pause between sections
          if (sectionIndex < textSections.length) {
            setTimeout(() => {}, 300)
          }
        }
      } else {
        clearInterval(typingInterval)
        setTimeout(() => setShowCursor(false), 2000)
      }
    }, 50)

    return () => clearInterval(typingInterval)
  }, [])

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 500)

    return () => clearInterval(cursorInterval)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white relative overflow-hidden">
      {/* Subtle background animation */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="absolute w-96 h-96 bg-blue-500 rounded-full blur-3xl"
          animate={{
            x: [0, 100, -100, 0],
            y: [0, -100, 100, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ left: '10%', top: '20%' }}
        />
        <motion.div
          className="absolute w-96 h-96 bg-purple-500 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 100, 0],
            y: [0, 100, -100, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ right: '10%', bottom: '20%' }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-8 text-left ml-8 md:ml-16"
        >
          <div className="space-y-4">
            <h1 className="font-poppins text-5xl md:text-7xl lg:text-8xl font-bold leading-tight text-white min-h-[1.2em]">
              {section1Text && (
                <>
                  <span dangerouslySetInnerHTML={{
                    __html: section1Text
                      .replace("Source & Signal", '<span class="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Source & Signal</span>')
                  }} />
                  {currentSection === 0 && (
                    <span className={`inline-block w-1 h-12 md:h-16 bg-blue-400 ml-2 ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`} />
                  )}
                </>
              )}
            </h1>
            
            {section2Text && (
              <h2 className="font-poppins text-2xl md:text-3xl lg:text-4xl font-light text-gray-300 leading-relaxed">
                {section2Text}
                {currentSection === 1 && (
                  <span className={`inline-block w-1 h-6 md:h-8 bg-blue-400 ml-2 ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`} />
                )}
              </h2>
            )}
            
            {section3Text && (
              <h3 className="font-poppins text-xl md:text-2xl font-normal text-gray-400 mt-6">
                {section3Text}
                {currentSection === 2 && (
                  <span className={`inline-block w-1 h-6 md:h-7 bg-blue-400 ml-2 ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`} />
                )}
              </h3>
            )}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: section3Text.includes("help") ? 1 : 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="flex flex-col sm:flex-row gap-4 mt-12 ml-8 md:ml-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
            onClick={() => {
              document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            View My Work
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 border border-white/20 text-white rounded-lg font-medium hover:bg-white/10 transition-colors"
            onClick={() => {
              window.location.href = '/contact'
            }}
          >
            Get In Touch
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: section3Text.includes("help") ? 1 : 0 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-white/60 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}