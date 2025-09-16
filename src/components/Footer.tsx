export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 py-8 px-6 text-center text-gray-400">
      <div className="max-w-4xl mx-auto">
        <p className="mb-4">
          © {new Date().getFullYear()} Source & Signal. Built with passion in Sandpoint, Idaho.
        </p>
        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com/Biobeat2727"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/your-link"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:davey@sourceandsignal.dev"
            className="hover:text-white transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}
