import Hero from '@/components/Hero'
import FeaturedWork from '@/components/FeaturedWork'
import Studio from '@/components/Studio'
import ContactCTA from '@/components/ContactCTA'
import Footer from '@/components/Footer'
export default function Home() {
  return <main id="main-content" className="resonance-home">
    <Hero />
    <FeaturedWork />
    <Studio />
    <ContactCTA />
    <Footer />
  </main>
}
