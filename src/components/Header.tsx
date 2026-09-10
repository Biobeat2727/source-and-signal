import Link from 'next/link'
import BrandLogo from './BrandLogo'
export default function Header() {
  return <header>
    <nav className="site-nav" aria-label="Main navigation">
      <Link className="brand-link" href="/" aria-label="Source & Signal home">
        <BrandLogo />
      </Link>
      <div className="nav-links">
        <Link href="/#work">Work</Link>
        <Link className="studio-link" href="/#studio">Studio</Link>
        <Link className="nav-contact" href="/contact">Let’s talk ↗</Link>
      </div>
    </nav>
  </header>
}
