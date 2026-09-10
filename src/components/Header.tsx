import Link from 'next/link'
import BrandLogo from './BrandLogo'
import NavLinks from './NavLinks'

export default function Header() {
  return <header>
    <nav className="site-nav" aria-label="Main navigation">
      <Link className="brand-link" href="/" aria-label="Source & Signal home">
        <BrandLogo />
      </Link>
      <NavLinks />
    </nav>
  </header>
}
