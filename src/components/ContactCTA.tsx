export default function ContactCTA() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-background to-black border-t border-white/10 relative overflow-hidden">
      {/* Subtle breathing background effect */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 to-transparent animate-breathe" />
      
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 animate-float">
          <span className="bg-gradient-to-r from-primary via-white to-toasted bg-clip-text text-transparent">
            Let&apos;s Build Something Beautiful
          </span>
        </h2>
        <p className="text-white/80 text-lg mb-10 animate-breathe">
          Whether you need a site, app, brand, or idea brought to life, Source and Signal is ready to help.
        </p>
        <a
          href="mailto:davey@sourceandsignal.dev"
          className="group inline-block bg-gradient-to-r from-primary to-toasted text-black font-semibold px-8 py-4 rounded-lg shadow-lg hover:scale-105 transition transform duration-300 animate-glow-pulse hover-lift relative overflow-hidden"
        >
          <span className="relative z-10">Get in Touch</span>
          <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
        </a>
        
        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-primary/30 rounded-full animate-particle-float"
              style={{
                left: `${20 + (i * 15)}%`,
                top: `${30 + (i * 5)}%`,
                animationDelay: `${i * 800}ms`,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
