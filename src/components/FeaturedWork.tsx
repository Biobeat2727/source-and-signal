import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { projects, type Project } from '@/data/projects'
import Testimonials from '@/components/Testimonials'

const captions: Record<string, string> = { 'blue-heron-cafe': 'Website · Content management', 'opa-greek-food': 'Website · Menu design', 'northwest-tradesmen': 'Website · Brand identity · Print design', 'cropper-and-co': 'Migration consultation · Website reformatting' }
const order = ['blue-heron-cafe', 'opa-greek-food', 'northwest-tradesmen', 'cropper-and-co']
export const portfolioProjects = order.flatMap(slug => projects.filter(p => p.slug === slug))

export function ProjectCard({ project }: { project: Project }) {
  const content = <>
    <div className={'project-image' + (project.slug === 'cropper-and-co' ? ' contain' : '')}>
      <div className="project-image-inner">{project.image && <Image src={project.image} alt={project.imageAlt ?? project.title} fill sizes="(max-width:700px) 90vw, (max-width:1700px) 43vw, 730px" style={{ objectPosition: project.imageFocus === 'left' ? 'left top' : 'center top' }} />}</div>
    </div>
    <div className="project-caption">
      <div>
        <h3>{project.title}<span className="sr-only">: Read the case study</span></h3>
        <p>{captions[project.slug] ?? project.projectType}</p>
      </div>
      <span className="project-more">See more <ArrowUpRight size={20} aria-hidden="true" /></span>
    </div>
  </>
  return <Link className="project" href={'/projects/' + project.slug}>{content}</Link>
}
export default function FeaturedWork() {
  return <section className="portfolio-section" id="work">
    <div className="work-heading">
      <h2>Websites and design work</h2>
      <p>A selection of client projects. Select one to read the story.</p>
    </div>
    <div className="project-grid">{portfolioProjects.map(project =>
      <ProjectCard key={project.slug} project={project} />)}</div>
    <Testimonials />
    <div className="design-work">
      <h3>Marketing beyond the web</h3>
      <div className="design-list">
        <div className="design-entry">
          <h4>Event posters & photography</h4>
          <p>Event promotion for Blue Heron Café.</p>
        </div>
        <div className="design-entry">
          <h4>Menus & signage</h4>
          <p>Sandwich board menu design for OPA! Greek Food.</p>
        </div>
        <div className="design-entry">
          <h4>Brand identity & print</h4>
          <p>Logo, business cards & T-shirt design for Northwest Tradesmen.</p>
        </div>
      </div>
    </div>
    <Link className="portfolio-more" href="/projects">Read the project write-ups <span aria-hidden="true">→</span></Link>
  </section>
}
