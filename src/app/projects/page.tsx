'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

export default function ProjectsPage() {
  const projects = [
    {
      title: "Blue Heron Café",
      description: "Modern restaurant site with event data and online menu. Clean, mobile-first design for a local North Idaho café.",
      url: "https://blueheronsamuels.com",
      githubUrl: "",
      tags: ["Next.js", "Tailwind", "Sanity"],
      type: "business"
    },
    {
      title: "Sandpoint.Events",
      description: "Event website for the city of Sandpoint, Idaho. CMS-powered hub for the local music and arts scene.",
      url: "https://sandpoint.events",
      githubUrl: "",
      tags: ["Next.js", "Tailwind", "Sanity"],
      type: "business"
    },
    {
      title: "Skylight Aurora Tracker",
      description: "React Native app that visualizes aurora forecasts, real-time solar activity, and dynamic overlays for aurora hunters.",
      url: "#",
      githubUrl: "",
      tags: ["React Native", "Expo", "D3"],
      type: "portfolio"
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  }

  return (
    <section className="min-h-screen bg-black text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left ml-8 md:ml-16 mb-16"
        >
          <h1 className="font-poppins text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Featured{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h1>
          <p className="font-poppins text-lg md:text-xl text-gray-400 max-w-2xl">
            Real-world builds for local businesses and personal projects. Each one crafted with intention, built for performance.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid gap-8 md:gap-12 max-w-6xl mx-auto"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8 hover:border-blue-600/30 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h2 className="font-poppins text-2xl md:text-3xl font-semibold text-white">
                        {project.title}
                      </h2>
                      <span className={`px-3 py-1 rounded-full text-sm ${
                        project.type === 'business' 
                          ? 'bg-green-600/20 text-green-300' 
                          : 'bg-purple-600/20 text-purple-300'
                      }`}>
                        {project.type === 'business' ? 'Client Project' : 'Portfolio Project'}
                      </span>
                    </div>
                    <p className="text-gray-300 text-lg leading-relaxed max-w-3xl">
                      {project.description}
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm border border-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  {project.url !== "#" && (
                    <motion.a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <ExternalLink size={18} />
                      View Live Site
                    </motion.a>
                  )}
                  
                  {project.githubUrl && (
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-6 py-3 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-800 transition-colors"
                    >
                      <Github size={18} />
                      View Code
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
