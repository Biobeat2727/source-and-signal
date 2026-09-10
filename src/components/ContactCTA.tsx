import Link from 'next/link'
export default function ContactCTA() {
  return <section className="contact-strip" id="contact">
    <h2>What are you working on?</h2>
    <div className="contact-actions">
      <Link className="contact-link" href="/contact">Let’s talk ↗</Link>
      <a href="mailto:davey@sourceandsignal.dev">davey@sourceandsignal.dev ↗</a>
    </div>
  </section>
}
