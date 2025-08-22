import MysticalHero from '@/components/MysticalHero'
import SkillsShowcase from '@/components/SkillsShowcase'
import ServicesPreview from '@/components/ServicesPreview'
import FeaturedProjects from '@/components/FeaturedProjects'
import ProcessHighlight from '@/components/ProcessHighlight'
import Testimonials from '@/components/Testimonials'
import ContactCTA from '@/components/ContactCTA'
import Footer from '@/components/Footer'
import CodeMatrix from '@/components/CodeMatrix'
import FloatingContactButton from '@/components/FloatingContactButton'

export default function Home() {
  return (
    <main className="bg-background text-white min-h-screen relative">
      <CodeMatrix />
      <MysticalHero />
      <SkillsShowcase />
      <ServicesPreview />
      <FeaturedProjects />
      <ProcessHighlight />
      <Testimonials />
      <ContactCTA />
      <Footer />
      <FloatingContactButton />
    </main>
  )
}