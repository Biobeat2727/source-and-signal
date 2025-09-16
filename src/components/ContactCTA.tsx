'use client'

import { motion } from 'framer-motion'

export default function ContactCTA() {
  return (
    <section className="py-24 px-6 bg-gray-900 relative">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-light mb-6 text-white">
            Ready to work together?
          </h2>
          <p className="text-gray-400 text-lg mb-10">
            Whether you need a website for your business or a custom application, let&apos;s create something amazing.
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-blue-600 text-white font-medium px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Get in Touch
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
