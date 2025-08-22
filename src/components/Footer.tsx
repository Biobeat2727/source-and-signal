export default function Footer() {
  return (
    <footer className="bg-background border-t border-white/10 py-6 px-6 text-center text-sm text-white/50 relative overflow-hidden">
      {/* Subtle animated background */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent animate-breathe opacity-50" />
      
      <div className="relative z-10">
        <p className="animate-float">
          © {new Date().getFullYear()} Source & Signal Solutions LLC. All rights reserved.
        </p>
        <div className="mt-2 space-x-4">
          <a
            href="https://github.com/Biobeat2727"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition duration-300 hover:scale-110 inline-block hover-lift neon-glow"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/your-link"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition duration-300 hover:scale-110 inline-block hover-lift neon-glow"
          >
            LinkedIn
          </a>
        </div>
        
        {/* Subtle floating dots */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-primary/20 rounded-full animate-particle-float"
              style={{
                left: `${25 + (i * 20)}%`,
                top: `${50}%`,
                animationDelay: `${i * 1200}ms`,
              }}
            />
          ))}
        </div>
      </div>
    </footer>
  )
}
