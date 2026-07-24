import Link from 'next/link'

export default function ContactCTA() {
  return (
    <section className="border-t border-gray-800 bg-gray-900 px-6 py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-poppins text-3xl font-semibold text-white sm:text-4xl">
          Ready to get more calls from your website?
        </h2>
        <p className="mt-6 text-lg text-gray-400">
          Tell me about your business and I&apos;ll come back with a plain-English recommendation
          and a price. No pressure, no jargon.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-8 py-4 font-medium text-white transition-colors hover:bg-blue-700"
          >
            Get a Straightforward Estimate
          </Link>
          <a
            href="mailto:davey@sourceandsignal.dev"
            className="inline-flex items-center justify-center rounded-lg border border-white/20 px-8 py-4 font-medium text-white transition-colors hover:bg-white/10"
          >
            Email davey@sourceandsignal.dev
          </a>
        </div>
      </div>
    </section>
  )
}
