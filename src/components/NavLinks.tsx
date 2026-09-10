'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/projects', label: 'Work' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'Studio' },
]

export default function NavLinks() {
  const pathname = usePathname()
  const isCurrent = (href: string) => pathname === href || pathname.startsWith(href + '/')

  return (
    <div className="nav-links">
      {links.map(({ href, label }) => (
        <Link key={href} href={href} aria-current={isCurrent(href) ? 'page' : undefined}>
          {label}
        </Link>
      ))}
      <Link className="nav-contact" href="/contact" aria-current={isCurrent('/contact') ? 'page' : undefined}>
        Let’s talk <span aria-hidden="true">→</span>
      </Link>
    </div>
  )
}
