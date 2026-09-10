import Link from 'next/link'
export default function ContactCTA() {
  return <section className="contact-strip" id="contact">
    <h2>What are you working on?</h2>
    <div className="contact-actions">
      <Link className="contact-link" href="/contact">Let’s talk <span aria-hidden="true">→</span></Link>
      <a href="mailto:davey@sourceandsignal.dev">davey@sourceandsignal.dev <span aria-hidden="true">↗</span></a>
    </div>
  </section>
}
