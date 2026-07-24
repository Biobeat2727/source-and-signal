import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'About Davey',
  description:
    'Source & Signal is run by Davey, a designer and developer in Sandpoint, Idaho who builds websites for local businesses and sticks around after launch.',
  alternates: { canonical: '/about' },
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 max-w-3xl">
            <h1 className="rise font-poppins text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              About{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Source &amp; Signal
              </span>
            </h1>
            <p className="rise rise-delay-1 mt-6 text-lg text-gray-400 md:text-xl">
              A one-person web design studio in Sandpoint, Idaho. I build websites for the
              businesses I actually live around.
            </p>
          </div>

          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-8">
              <div className="rounded-xl border border-gray-800 bg-gray-900/50 p-8">
                <h2 className="font-poppins text-2xl font-semibold text-white">Hi, I&apos;m Davey</h2>
                <div className="mt-4 space-y-4 text-lg leading-relaxed text-gray-300">
                  <p>
                    I&apos;m an artist who taught myself to build software. Before websites it was
                    music: beatboxing, performing, chasing the feeling of making something land
                    with a room full of people. That instinct carried straight into design work.
                    A good website lands the same way. Someone finds it, gets what you do in five
                    seconds, and calls.
                  </p>
                  <p>
                    The name comes from that: the source is your business and what makes it worth
                    choosing. The signal is how clearly that reaches the people looking for you.
                  </p>
                </div>
              </div>

              <div className="rounded-xl border border-gray-800 bg-gray-900/50 p-8">
                <h2 className="font-poppins text-2xl font-semibold text-white">How I work</h2>
                <div className="mt-4 space-y-4 text-lg leading-relaxed text-gray-300">
                  <p>
                    You talk to me, not a project manager. I explain things in plain English, tell
                    you what I&apos;d skip as readily as what I&apos;d build, and give you a real
                    number before work starts.
                  </p>
                  <p>
                    And I don&apos;t disappear after launch. Menus change, seasons change, things
                    break at bad times. When that happens you email or call someone who already
                    knows your site.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="rounded-xl border border-gray-800 bg-gray-900/50 p-8">
                <h2 className="font-poppins text-2xl font-semibold text-white">
                  Based in Sandpoint, Idaho
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-gray-300">
                  I live and work here in Bonner County. Happy to meet in person over coffee in
                  Sandpoint, or work remotely if that&apos;s easier. Either way you get direct,
                  local support from someone who knows the area and its businesses.
                </p>
                <Link
                  href="/contact"
                  className="mt-6 inline-block rounded-lg bg-blue-600 px-6 py-3 font-poppins font-medium text-white transition-colors hover:bg-blue-700"
                >
                  Get in touch
                </Link>
              </div>

              <div className="rounded-xl border border-gray-800 bg-gray-900/50 p-8">
                <h2 className="font-poppins text-2xl font-semibold text-white">
                  The tools behind the work
                </h2>
                <p className="mt-4 leading-relaxed text-gray-400">
                  For the technically curious: I build with modern, fast tooling like Next.js,
                  React, TypeScript, and Tailwind CSS, with Sanity CMS when a site needs easy
                  content editing and React Native for mobile apps. You don&apos;t need to care
                  about any of that. It just means your site loads fast and doesn&apos;t fight you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
