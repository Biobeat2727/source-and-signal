import AnimatedHero from '@/components/AnimatedHero'
import WebsiteShowcase from '@/components/WebsiteShowcase'
import ContactCTA from '@/components/ContactCTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">
      <AnimatedHero />
      <WebsiteShowcase />
      <ContactCTA />
      <Footer />
    </main>
  )
}