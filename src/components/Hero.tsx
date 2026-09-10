import { ArrowDown } from 'lucide-react'
import BrandLogo from './BrandLogo'
import SignalWave from './SignalWave'
export default function Hero() {
  return <section className="signal-hero">
    <BrandLogo hero />
    <div className="eyebrow">Independent web & design studio</div>
    <h1>You’re the Source.<br />
      <span>Together, we make the Signal.</span>
    </h1>
    <SignalWave />
    <a className="work-button" href="#work">
      <span>View the work</span>
      <span className="button-arrow">
        <ArrowDown size={21} aria-hidden="true" />
      </span>
    </a>
    <div className="hero-bottom">
      <span>Sandpoint, Idaho · Working together, wherever you are.</span>
      <span>Scroll to explore ↓</span>
    </div>
  </section>
}
