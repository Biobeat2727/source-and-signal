import Hero from '@/components/Hero'
import FeaturedWork from '@/components/FeaturedWork'
import DirectWork from '@/components/DirectWork'
import Studio from '@/components/Studio'
import ContactCTA from '@/components/ContactCTA'
import Footer from '@/components/Footer'
export default function Home() {
  return <main id="main-content" className="resonance-home">
    <Hero />
    <FeaturedWork />
    <DirectWork />
    <Studio />
    <ContactCTA />
    <Footer />
  </main>
}
