export default function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-black px-6 py-10 text-center text-gray-400">
      <div className="mx-auto max-w-4xl space-y-4">
        <p>
          © {new Date().getFullYear()} Source &amp; Signal · Web design for Sandpoint, Bonner
          County, and North Idaho
        </p>
        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com/Biobeat2727"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-white"
          >
            GitHub
          </a>
          <a href="mailto:davey@sourceandsignal.dev" className="transition-colors hover:text-white">
            davey@sourceandsignal.dev
          </a>
        </div>
      </div>
    </footer>
  )
}
