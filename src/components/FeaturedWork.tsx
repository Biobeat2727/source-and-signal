import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { projects, type Project } from '@/data/projects'

const captions: Record<string, string> = { 'blue-heron-cafe': 'Website · Content management', 'opa-greek-food': 'Website · Menu design', 'northwest-tradesmen': 'Website · Brand identity · Print design', 'cropper-and-co': 'Migration consultation · Website reformatting' }
const order = ['blue-heron-cafe', 'opa-greek-food', 'northwest-tradesmen', 'cropper-and-co']
export const portfolioProjects = order.flatMap(slug => projects.filter(p => p.slug === slug))

export function ProjectCard({ project, caseStudy = false }: { project: Project; caseStudy?: boolean }) {
  const content = <>
    <div className={'project-image' + (project.slug === 'cropper-and-co' ? ' contain' : '')}>
      <div className="project-image-inner">{project.image && <Image src={project.image} alt={project.imageAlt ?? project.title} fill sizes="(max-width:700px) 90vw, (max-width:1700px) 43vw, 730px" style={{ objectPosition: project.imageFocus === 'left' ? 'left top' : 'center top' }} />}</div>
    </div>
    <div className="project-caption">
      <div>
        <h3>{project.title}{!caseStudy && <span className="sr-only"> (opens in a new tab)</span>}</h3>
        <p>{captions[project.slug] ?? project.projectType}</p>
      </div>
      <ArrowUpRight size={20} aria-hidden="true" />
    </div>
  </>
  return caseStudy ? <Link className="project" href={'/projects/' + project.slug}>{content}</Link> : <a className="project" href={project.liveUrl} target="_blank" rel="noopener noreferrer">{content}</a>
}
export default function FeaturedWork() {
  return <section className="portfolio-section" id="work">
    <div className="work-heading">
      <h2>Websites and design work</h2>
      <p>A selection of client projects.</p>
    </div>
    <div className="project-grid">{portfolioProjects.map(project =>
      <ProjectCard key={project.slug} project={project} />)}</div>
    <div className="design-work">
      <h3>Beyond the website</h3>
      <div className="design-list">
        <div className="design-entry">
          <h4>Blue Heron Café</h4>
          <p>Event posters & event photography</p>
        </div>
        <div className="design-entry">
          <h4>OPA! Greek Food</h4>
          <p>Sandwich board menu design</p>
        </div>
        <div className="design-entry">
          <h4>Northwest Tradesmen</h4>
          <p>Logo, business cards & T-shirt design</p>
        </div>
      </div>
    </div>
    <Link className="portfolio-more" href="/projects">Read the project write-ups <span aria-hidden="true">→</span></Link>
  </section>
}
