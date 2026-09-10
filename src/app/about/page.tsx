import type { Metadata } from 'next'
import Studio from '@/components/Studio'
import ContactCTA from '@/components/ContactCTA'
import Footer from '@/components/Footer'
export const metadata: Metadata = { title: 'About Davey', description: 'Meet Davey, the independent designer behind Source & Signal in Sandpoint, Idaho.', alternates: { canonical: '/about' } }
export default function About() {
  return <main id="main-content" className="inner-page">
    <section className="page-content">
      <h1>The studio.</h1>
      <div className="about-copy">
        <p>I’m an artist who taught myself to build software. Before websites it was music: beatboxing, performing, and finding ways to connect with people. That instinct carried into design.</p>
        <h2>Source & Signal</h2>
        <p>The source is your business and what makes it worth choosing. The signal is how clearly that reaches the people looking for you.</p>
        <h2>Working together</h2>
        <p>You work directly with me. We talk through what you need, choose a direction, and review the work together before launch. Afterward, I’m available for ongoing support within the scope we agree.</p>
      </div>
    </section>
    <Studio />
    <ContactCTA />
    <Footer />
  </main>
}
