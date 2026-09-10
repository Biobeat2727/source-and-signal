import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'
export const metadata: Metadata = { title: 'Start a Conversation', description: 'Tell Davey about your website or design project. Contact Source & Signal in Sandpoint, Idaho.', alternates: { canonical: '/contact' } }
export default function Contact() {
  return <main id="main-content" className="inner-page">
    <section className="page-content">
      <h1>What are you working on?</h1>
      <p className="page-lede">Tell me a little about your business and what you have in mind.</p>
      <div className="contact-layout">
        <ContactForm />
        <aside className="contact-details">
          <h2>A conversation comes first.</h2>
          <p>We’ll talk through what you need, what I can help with, and a realistic scope and timeline.</p>
          <p>Prefer to write directly?<br />
            <a href="mailto:davey@sourceandsignal.dev">davey@sourceandsignal.dev ↗</a>
          </p>
        </aside>
      </div>
    </section>
    <Footer />
  </main>
}
