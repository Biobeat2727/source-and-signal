export default function Footer() {
  return (
    <footer className="bg-background border-t border-white/10 py-6 px-6 text-center text-sm text-white/50">
      <p>
        © {new Date().getFullYear()} Source & Signal Solutions LLC. All rights reserved.
      </p>
      <div className="mt-2 space-x-4">
        <a
          href="https://github.com/Biobeat2727"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary transition"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/your-link"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary transition"
        >
          LinkedIn
        </a>
        {/* Add more socials here */}
      </div>
    </footer>
  )
}
