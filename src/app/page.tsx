import MysticalHero from '@/components/MysticalHero'
import Header from '@/components/Header'
import ServicesPreview from '@/components/ServicesPreview'
import FeaturedProjects from '@/components/FeaturedProjects'
import ProcessHighlight from '@/components/ProcessHighlight'
import Testimonials from '@/components/Testimonials'
import ContactCTA from '@/components/ContactCTA'
import Footer from '@/components/Footer'
import MatrixRain from '@/components/MatrixRain'


export default function Home() {
  return (
    <main className="bg-background text-white min-h-screen">
      <MysticalHero />
      <ServicesPreview />
      <FeaturedProjects />
      <ProcessHighlight />
      <Testimonials />
      <ContactCTA />
      <Footer />

    </main>
  )
}
