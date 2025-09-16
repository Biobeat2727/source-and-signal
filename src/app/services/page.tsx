'use client'

import { motion } from 'framer-motion'
import { Code, Palette, Smartphone, Zap } from 'lucide-react'

export default function ServicesPage() {
  const services = [
    {
      icon: Code,
      title: "Web Design & Development",
      description: "Custom websites using modern stacks like Next.js, Tailwind, and Sanity CMS. Mobile-first, fast-loading, and crafted to match your brand.",
      features: ["Responsive Design", "CMS Integration", "Performance Optimized", "SEO Ready"]
    },
    {
      icon: Palette,
      title: "Brand Identity & Logo Design",
      description: "Visual identity that resonates with your audience. Logos, color palettes, and complete brand systems that reflect your mission.",
      features: ["Logo Design", "Brand Guidelines", "Color Systems", "Typography"]
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "React Native applications for iOS and Android. From prototypes to production apps with clean interfaces and solid functionality.",
      features: ["Cross-Platform", "Native Performance", "App Store Ready", "Real-time Features"]
    },
    {
      icon: Zap,
      title: "Consulting & Automation",
      description: "Technical consulting and workflow automation. AI integration, development problem-solving, and process optimization.",
      features: ["Technical Consulting", "AI Integration", "Workflow Automation", "Problem Solving"]
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
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
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Services
            </span>
          </h1>
          <p className="font-poppins text-lg md:text-xl text-gray-400 max-w-2xl">
            From local businesses to startups: I build fast, scalable digital solutions that work beautifully and perform flawlessly.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8 hover:border-blue-600/30 transition-all duration-300 h-full">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center group-hover:bg-blue-600/30 transition-colors">
                    <service.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h2 className="font-poppins text-2xl font-semibold text-white mb-3">
                      {service.title}
                    </h2>
                    <p className="text-gray-300 text-lg leading-relaxed mb-6">
                      {service.description}
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full" />
                      <span className="text-gray-400 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center mt-16"
        >
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-blue-600 text-white font-poppins font-medium px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Let&apos;s Work Together
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
