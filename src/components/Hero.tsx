import Link from 'next/link'
import { ArrowDown } from 'lucide-react'
import BrandLogo from './BrandLogo'
import SignalWave from './SignalWave'
export default function Hero() {
  return <section className="signal-hero">
    <BrandLogo hero />
    <div className="eyebrow"><span>Websites for local businesses</span><span className="eyebrow-sep"> · </span><span>Sandpoint, Idaho</span></div>
    <h1>You’re the Source.<br />
      <span>Together, we make the Signal.</span>
    </h1>
    <SignalWave />
    <div className="hero-actions">
      <a className="work-button" href="#work">
        <span>See the work</span>
        <span className="button-arrow">
          <ArrowDown size={21} aria-hidden="true" />
        </span>
      </a>
      <Link className="hero-secondary" href="/contact">Let’s talk <span aria-hidden="true">→</span></Link>
    </div>
    <div className="hero-bottom">
      <span>In person around Sandpoint, or online from wherever you are.</span>
      <span>Scroll to see the work <span aria-hidden="true">↓</span></span>
    </div>
  </section>
}
