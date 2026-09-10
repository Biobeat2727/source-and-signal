import type { Metadata } from 'next'
import ContactCTA from '@/components/ContactCTA'
import Footer from '@/components/Footer'
export const metadata: Metadata = { title: 'Web Design & Creative Services', description: 'Websites, visual design, and ongoing support from Source & Signal in Sandpoint, Idaho.', alternates: { canonical: '/services' } }
const services = [['Business websites', 'A clear, considered website built around your business and the people who use it.'], ['Website improvements', 'Updates, reformatting, and help taking over an existing website.'], ['Visual design', 'Logos, menus, posters, business cards, and supporting design that belongs with your brand.'], ['Ongoing support', 'An agreed plan for content changes, maintenance, and help after launch.']]
export default function Services() {
  return <main id="main-content" className="inner-page">
    <section className="page-content">
      <h1>How I can help.</h1>
      <p className="page-lede">Tell me what you’re working on. We’ll agree on the scope, timing, and cost before work begins.</p>
      <div className="service-list">{services.map(([title, copy]) =>
        <section className="service-item" key={title}>
          <h2>{title}</h2>
          <p>{copy}</p>
        </section>)}</div>
    </section>
    <ContactCTA />
    <Footer />
  </main>
}
