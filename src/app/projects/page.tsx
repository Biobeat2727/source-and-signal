import type { Metadata } from 'next'
import { ProjectCard, portfolioProjects } from '@/components/FeaturedWork'
import ContactCTA from '@/components/ContactCTA'
import Footer from '@/components/Footer'
export const metadata: Metadata = { title: 'Deployed Sites and Design Work', description: 'Explore websites and design work for Blue Heron Café, OPA!, Northwest Tradesmen, and Cropper & Co.', alternates: { canonical: '/projects' } }
export default function Projects() {
  return <main id="main-content" className="inner-page">
    <section className="portfolio-section">
      <div className="work-heading">
        <h1>Deployed sites and Design Work</h1>
        <p>Explore each project.</p>
      </div>
      <div className="project-grid">{portfolioProjects.map(project =>
        <ProjectCard key={project.slug} project={project} caseStudy />)}</div>
    </section>
    <ContactCTA />
    <Footer />
  </main>
}
