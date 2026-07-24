'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { usePathname } from 'next/navigation'

const navItems = [
  { label: 'Projects', href: '/projects' },
  { label: 'Services', href: '/services' },
  { label: 'Pricing', href: '/services#pricing' },
  { label: 'About', href: '/about' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-[100] w-full border-b border-gray-800 bg-black/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center" aria-label="Source & Signal home">
          <Image
            src="/logo-source-and-signal-&.svg"
            alt="Source & Signal logo"
            width={120}
            height={48}
            className="h-10 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop nav (CSS-responsive so it renders without JS) */}
        <nav className="hidden items-center space-x-8 md:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`font-poppins font-medium transition-colors duration-300 hover:text-white ${
                pathname === item.href ? 'text-white' : 'text-gray-300'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-lg bg-blue-600 px-4 py-2 font-poppins font-medium text-white transition-colors duration-300 hover:bg-blue-700"
          >
            Contact
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 text-white md:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          <span className="flex h-6 w-6 flex-col items-center justify-center">
            <span
              className={`block h-0.5 w-6 bg-current transition-transform duration-300 ${
                isOpen ? 'translate-y-[2px] rotate-45' : '-translate-y-[3px]'
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-current transition-opacity duration-300 ${
                isOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-current transition-transform duration-300 ${
                isOpen ? '-translate-y-[2px] -rotate-45' : 'translate-y-[3px]'
              }`}
            />
          </span>
        </button>
      </div>

      {/* Mobile nav */}
      <div
        id="mobile-nav"
        aria-hidden={!isOpen}
        className={`overflow-hidden border-t border-gray-800 bg-black/95 backdrop-blur-md transition-all duration-300 md:hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 border-t-0 opacity-0'
        }`}
      >
        <nav className="flex flex-col items-center space-y-2 py-6" aria-label="Mobile navigation">
          {[...navItems, { label: 'Contact', href: '/contact' }].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              tabIndex={isOpen ? 0 : -1}
              className={`rounded-lg px-6 py-3 font-poppins font-medium transition-colors duration-300 ${
                item.label === 'Contact'
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'text-gray-300 hover:bg-gray-800 hover:text-white'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
