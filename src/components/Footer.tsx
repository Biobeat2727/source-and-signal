import Link from 'next/link'
export default function Footer() {
  return <footer className="site-footer">
    <span>© {new Date().getFullYear()} Source & Signal</span>
    <div className="footer-links">
      <Link href="/services">Services</Link>
      <Link href="/about">Studio</Link>
      <Link href="/contact">Contact</Link>
    </div>
    <span>Independent by design. Sandpoint, Idaho.</span>
  </footer>
}
