'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="w-full sticky top-0 z-50 bg-background/80 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center transform transition-transform duration-500 scale-50 hover:scale-110">
          <Image
            src="/logo-source-and-signal-&.svg"
            alt="Source and Signal logo"
            width={100}
            height={40}
            className="object-contain max-h-20"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="space-x-6 text-sm hidden sm:block">
          <Link href="/projects" className="hover:text-primary transition">Projects</Link>
          <Link href="/services" className="hover:text-primary transition">Services</Link>
          <Link href="/about" className="hover:text-primary transition">About</Link>
          <Link href="/contact" className="hover:text-primary transition">Contact</Link>
        </nav>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="sm:hidden text-primary focus:outline-none"
          aria-expanded={isOpen}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <nav className="sm:hidden flex flex-col items-center bg-background border-t border-white/10 pb-6 space-y-4">
          <Link href="/projects" onClick={() => setIsOpen(false)} className="hover:text-primary transition">Projects</Link>
          <Link href="/services" onClick={() => setIsOpen(false)} className="hover:text-primary transition">Services</Link>
          <Link href="/about" onClick={() => setIsOpen(false)} className="hover:text-primary transition">About</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className="hover:text-primary transition">Contact</Link>
        </nav>
      )}
    </header>
  )
}
