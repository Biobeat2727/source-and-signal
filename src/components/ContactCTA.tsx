import Link from 'next/link'
export default function ContactCTA({ heading = 'What are you working on?', linkLabel = 'Let’s talk' }: { heading?: string; linkLabel?: string }) {
  return <section className="contact-strip" id="contact">
    <h2>{heading}</h2>
    <div className="contact-actions">
      <Link className="contact-link" href="/contact">{linkLabel} <span aria-hidden="true">→</span></Link>
      <a href="mailto:davey@sourceandsignal.dev">davey@sourceandsignal.dev <span aria-hidden="true">↗</span></a>
    </div>
  </section>
}
