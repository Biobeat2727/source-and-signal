'use client'

import { motion } from 'framer-motion'

export default function AboutPage() {
  return (
    <section className="min-h-screen bg-black text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left ml-8 md:ml-16 mb-16"
        >
          <h1 className="font-poppins text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            About{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Source & Signal
            </span>
          </h1>
          <p className="font-poppins text-lg md:text-xl text-gray-400 max-w-2xl">
            A digital development & design studio founded by a beatboxer, builder, and deep-thinking technologist based in Sandpoint, Idaho.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="space-y-8"
          >
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8">
              <h2 className="font-poppins text-2xl font-semibold text-white mb-4">
                The Story
              </h2>
              <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                <p>
                  I&apos;m Davey — an artist turned developer. I taught myself to code because I wanted to bring ideas to life. The same flow I chase on stage, I now channel into clean code, intuitive interfaces, and responsive systems.
                </p>
                <p>
                  Source and Signal was born from the belief that creativity and technology aren&apos;t separate. The &quot;source&quot; is the origin — the energy, the intention. The &quot;signal&quot; is how that essence gets transmitted into the world.
                </p>
              </div>
            </div>

            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8">
              <h2 className="font-poppins text-2xl font-semibold text-white mb-4">
                The Approach
              </h2>
              <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                <p>
                  My goal is to build tools, sites, and systems that carry your signal clearly. Whether you&apos;re an entrepreneur with a vision, an artist building a platform, or a business that needs tech with soul — I&apos;ve got you.
                </p>
                <p>
                  Every project gets the same attention to detail, the same commitment to performance, and the same creative problem-solving approach that comes from years of making music and code.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="space-y-8"
          >
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8">
              <h2 className="font-poppins text-2xl font-semibold text-white mb-4">
                Technical Skills
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Next.js", "React", "TypeScript", "Tailwind CSS",
                  "Node.js", "Python", "PostgreSQL", "MongoDB",
                  "React Native", "Expo", "Sanity CMS", "Vercel"
                ].map((skill) => (
                  <div key={skill} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full" />
                    <span className="text-gray-300">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8">
              <h2 className="font-poppins text-2xl font-semibold text-white mb-4">
                Based in Sandpoint, Idaho
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Working remotely from the beautiful Pacific Northwest, serving clients locally and globally. Available for both in-person meetings in North Idaho and remote collaboration worldwide.
              </p>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-blue-600 text-white font-poppins font-medium px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Let&apos;s Connect
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
