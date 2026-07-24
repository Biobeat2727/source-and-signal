import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative flex min-h-[85vh] items-center overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
      {/* Static accent glow, kept subtle */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-10">
        <div className="absolute left-[10%] top-[20%] h-96 w-96 rounded-full bg-blue-500 blur-3xl" />
        <div className="absolute bottom-[20%] right-[10%] h-96 w-96 rounded-full bg-purple-500 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-24">
        <div className="max-w-3xl">
          <h1 className="rise font-poppins text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
            Websites that help{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Sandpoint businesses
            </span>{' '}
            get found, trusted, and contacted.
          </h1>

          <p className="rise rise-delay-1 mt-6 text-lg text-gray-300 md:text-xl">
            Fast, professional websites for contractors, restaurants, food trucks, and independent
            businesses across North Idaho.
          </p>

          <div className="rise rise-delay-2 mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/#work"
              className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-8 py-4 font-medium text-white transition-colors hover:bg-blue-700"
            >
              See Local Business Work
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg border border-white/20 px-8 py-4 font-medium text-white transition-colors hover:bg-white/10"
            >
              Get a Straightforward Estimate
            </Link>
          </div>

          <p className="rise rise-delay-2 mt-10 text-sm text-gray-400">
            Based in Sandpoint&nbsp;·&nbsp;Serving Bonner County and North Idaho&nbsp;·&nbsp;Direct
            local support
          </p>
        </div>
      </div>
    </section>
  )
}
