import type { Metadata } from 'next'
import { Mail } from 'lucide-react'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Get a Straightforward Estimate',
  description:
    'Tell me about your Sandpoint or North Idaho business and get a plain-English recommendation and price for your website. Free initial consultation.',
  alternates: { canonical: '/contact' },
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 max-w-3xl">
            <h1 className="rise font-poppins text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              Let&apos;s talk about{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                your business
              </span>
            </h1>
            <p className="rise rise-delay-1 mt-6 text-lg text-gray-400 md:text-xl">
              Tell me what you do and what you need. I&apos;ll reply with an honest recommendation
              and a price, usually within one business day.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
            <ContactForm />

            <div className="space-y-8">
              <div className="rounded-xl border border-gray-800 bg-gray-900/50 p-8">
                <h2 className="font-poppins text-2xl font-semibold text-white">
                  What happens next
                </h2>
                <ul className="mt-6 space-y-4">
                  {[
                    'The first conversation is free, in person or by phone',
                    "I'll recommend the smallest package that does the job",
                    'Most projects start within 1–2 weeks',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span aria-hidden="true" className="h-2 w-2 shrink-0 rounded-full bg-blue-400" />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl border border-gray-800 bg-gray-900/50 p-8">
                <h2 className="flex items-center gap-2 font-poppins text-2xl font-semibold text-white">
                  <Mail className="h-6 w-6 text-blue-400" aria-hidden="true" />
                  Prefer email?
                </h2>
                <p className="mt-4 text-gray-300">Reach me directly any time:</p>
                <a
                  href="mailto:davey@sourceandsignal.dev"
                  className="mt-4 inline-block rounded-lg bg-blue-600 px-6 py-3 font-poppins font-medium text-white transition-colors hover:bg-blue-700"
                >
                  davey@sourceandsignal.dev
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
