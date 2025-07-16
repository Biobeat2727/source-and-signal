// src/components/MysticalHero.tsx
import Link from 'next/link'
import Image from 'next/image'

export default function MysticalHero() {
  return (
    <section className="mystical-hero relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden bg-gradient-radial from-gray-900/20 to-background">
      
      {/* Mystical Background Elements */}
      <div className="absolute inset-0 bg-mystical-gradient opacity-50" />
      
      {/* Floating Energy Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="energy-orb absolute w-32 h-32 top-1/4 left-1/10 bg-gradient-radial from-primary/30 via-primary/10 to-transparent rounded-full animate-float-1" />
        <div className="energy-orb absolute w-20 h-20 top-3/5 right-1/6 bg-gradient-radial from-primary/30 via-primary/10 to-transparent rounded-full animate-float-2" />
        <div className="energy-orb absolute w-16 h-16 top-1/3 right-1/3 bg-gradient-radial from-primary/30 via-primary/10 to-transparent rounded-full animate-float-3" />
      </div>
      
      {/* Energy Flow Lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="energy-line absolute w-0.5 h-80 left-1/4 bg-gradient-to-b from-transparent via-primary to-transparent animate-flow-1 opacity-40" />
        <div className="energy-line absolute w-0.5 h-96 left-3/4 bg-gradient-to-b from-transparent via-primary to-transparent animate-flow-2 opacity-40" />
        <div className="energy-line absolute w-0.5 h-64 left-1/2 bg-gradient-to-b from-transparent via-primary to-transparent animate-flow-3 opacity-40" />
      </div>
      
      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        
        {/* Logo */}
        <div className="mb-8">
          <Link href="/" className="inline-block">
            <Image
              src="/logo-source-and-signal.svg"
              alt="Source and Signal logo"
              width={500}
              height={100}
              className="object-contain max-h-40 sm:max-h-48 md:max-h-56 filter drop-shadow-lg"
              priority
            />
          </Link>
        </div>
        
        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          <span className="bg-gradient-to-r from-white via-primary to-white bg-clip-text text-transparent animate-gradient-shift">
            Where Energy Meets Code.
          </span>
          <br />
          <span className="text-white/90">
            Where Nature Inspires Innovation.
          </span>
        </h1>
        
        {/* Subtitle */}
        <p className="text-lg sm:text-xl max-w-3xl mx-auto text-white/80 mb-10 leading-relaxed">
          Bridging the mystical and the digital. I create web experiences that flow like aurora, 
          apps that pulse with natural energy, and brands that transmit your deepest vision.
        </p>
        
        {/* CTA Button */}
        <a
          href="#projects"
          className="group inline-block bg-gradient-to-r from-primary to-toasted text-black font-semibold px-10 py-4 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-primary/30 hover:shadow-xl relative overflow-hidden"
        >
          <span className="relative z-10">Experience the Flow</span>
          <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
        </a>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-primary/60 animate-bounce">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14M5 12l7 7 7-7"/>
        </svg>
      </div>
      
    </section>
  )
}