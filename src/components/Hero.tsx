import Link from 'next/link'
import Image from 'next/image'


export default function Hero() {
  return (
    <section className="relative min-h-[69vh] flex flex-col items-center justify-center text-center px-6 bg-gradient-to-b from-background to-black overflow-hidden">

      <Link href="/" className="z-10 mb-6 mt-2">
        <Image
          src="/logo-source-and-signal.svg"
          alt="Source and Signal logo"
          width={500}
          height={100}
          className="object-contain max-h-40 sm:max-h-48 md:max-h-56"
          priority
        />
      </Link>

      <p className="text-lg sm:text-xl max-w-2xl text-white/70 mb-8 z-10">
        Clean code, creative flow. I build sleek, responsive sites that work—fast. Whether you’re an artist, entrepreneur, or business, your vision deserves better tech.
      </p>

      <a
        href="#projects"
        className="z-10 inline-block bg-primary text-black font-semibold px-8 py-4 rounded-lg shadow-lg hover:scale-105 transition transform duration-300"
      >
        View Projects
      </a>
    </section>
  )
}
