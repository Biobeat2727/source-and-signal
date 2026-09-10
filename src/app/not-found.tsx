import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'

export const metadata: Metadata = { title: 'Page not found', robots: { index: false } }

export default function NotFound() {
  return <main id="main-content" className="inner-page">
    <section className="page-content">
      <h1>That page isn’t here.</h1>
      <p className="page-lede">The link might be old, or I moved the page when I rebuilt the site. Everything is still a tap away.</p>
      <nav className="page-links" aria-label="Where to go next">
        <Link href="/projects">See the work</Link>
        <Link href="/services">What I can help with</Link>
        <Link href="/contact">Get in touch</Link>
      </nav>
    </section>
    <Footer />
  </main>
}
