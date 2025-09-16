'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ExternalLink, Github } from 'lucide-react'
import Image from 'next/image'

interface Website {
  id: string
  title: string
  description: string
  image: string
  liveUrl: string
  githubUrl?: string
  tags: string[]
  type: 'business' | 'portfolio'
}

const websites: Website[] = [
  {
    id: '1',
    title: 'Blue Heron Cafe',
    description: 'Modern restaurant site with event data and online menu',
    image: '/blueheron.png',
    liveUrl: 'https://blueheronsamuels.com',
    tags: ['Next.js', 'Tailwind', 'Sanity'],
    type: 'business'
  },
  {
    id: '2', 
    title: 'Sandpoint.events',
    description: 'Event website for the city of Sandpoint, Idaho.',
    image: '/sandpoint.png',
    liveUrl: 'https://sandpoint.events',
    githubUrl: 'https://github.com/example',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    type: 'business'
  },
  {
    id: '3',
    title: 'E-commerce Store',
    description: 'Custom online store with inventory management and payment processing.',
    image: '/placeholder-ecommerce.svg', 
    liveUrl: 'https://example.com',
    tags: ['Next.js', 'Sanity CMS', 'Stripe'],
    type: 'business'
  }
]

interface WebsiteModalProps {
  website: Website
  isOpen: boolean
  onClose: () => void
}

function WebsiteModal({ website, isOpen, onClose }: WebsiteModalProps) {
  if (!isOpen) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        className="bg-gray-900 rounded-xl p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-64 md:h-96 mb-6 rounded-lg overflow-hidden bg-gray-800">
          <Image
            src={website.image}
            alt={website.title}
            fill
            className="object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
        </div>
        
        <h3 className="text-2xl font-bold text-white mb-2">{website.title}</h3>
        <p className="text-gray-300 mb-4">{website.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {website.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex gap-4">
          <a
            href={website.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <ExternalLink size={20} />
            View Live Site
          </a>
          
          {website.githubUrl && (
            <a
              href={website.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-800 transition-colors"
            >
              <Github size={20} />
              View Code
            </a>
          )}
        </div>
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors"
        >
          ×
        </button>
      </motion.div>
    </motion.div>
  )
}

export default function WebsiteShowcase() {
  const [selectedWebsite, setSelectedWebsite] = useState<Website | null>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
        duration: 0.8
      }
    }
  }

  const itemVariants = {
    hidden: { 
      x: -100, 
      opacity: 0 
    },
    visible: {
      x: 0,
      opacity: 1
    }
  }

  return (
    <>
      <section id="portfolio" className="min-h-screen bg-black text-white py-20" ref={ref}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-light mb-6">
              Featured Work
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              A collection of websites and applications I&apos;ve built for businesses and personal projects
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-12"
          >
            {websites.map((website, index) => (
              <motion.div
                key={website.id}
                variants={itemVariants}
                className="group cursor-pointer"
                onClick={() => setSelectedWebsite(website)}
              >
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className={`relative ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                      className="relative h-64 md:h-80 rounded-xl overflow-hidden bg-gray-800 shadow-2xl"
                    >
                      <Image
                        src={website.image}
                        alt={website.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = 'none'
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/10 transition-colors duration-300" />
                    </motion.div>
                  </div>
                  
                  <div className={`space-y-6 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                    <div>
                      <span className={`inline-block px-3 py-1 rounded-full text-sm mb-3 ${
                        website.type === 'business' ? 'bg-green-600/20 text-green-300' : 'bg-purple-600/20 text-purple-300'
                      }`}>
                        {website.type === 'business' ? 'Client Project' : 'Portfolio Project'}
                      </span>
                      <h3 className="text-2xl md:text-3xl font-semibold mb-3 group-hover:text-blue-400 transition-colors">
                        {website.title}
                      </h3>
                      <p className="text-gray-400 text-lg leading-relaxed">
                        {website.description}
                      </p>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {website.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm border border-gray-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex gap-4">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center gap-2"
                      >
                        <ExternalLink size={18} />
                        View Details
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {selectedWebsite && (
        <WebsiteModal
          website={selectedWebsite}
          isOpen={!!selectedWebsite}
          onClose={() => setSelectedWebsite(null)}
        />
      )}
    </>
  )
}