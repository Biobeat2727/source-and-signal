import Hero from '@/components/Hero'
import LocalTrust from '@/components/LocalTrust'
import FeaturedWork from '@/components/FeaturedWork'
import Process from '@/components/Process'
import PricingSection from '@/components/PricingSection'
import Testimonials from '@/components/Testimonials'
import ContactCTA from '@/components/ContactCTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Hero />
      <LocalTrust />
      <FeaturedWork />
      <Process />
      <PricingSection variant="preview" />
      <Testimonials />
      <ContactCTA />
      <Footer />
    </main>
  )
}
