import Image from 'next/image'
import Link from 'next/link'
import { featuredProjects, kindLabels, type Project } from '@/data/projects'

const kindStyles: Record<Project['kind'], string> = {
  client: 'bg-green-600/20 text-green-300',
  concept: 'bg-purple-600/20 text-purple-300',
  community: 'bg-blue-600/20 text-blue-300',
  personal: 'bg-gray-600/20 text-gray-300',
}

function ProjectVisual({ project }: { project: Project }) {
  if (project.image) {
    return (
      <div className="relative h-56 w-full overflow-hidden bg-gray-800 md:h-64">
        <Image
          src={project.image}
          alt={project.imageAlt ?? `Screenshot of the ${project.title} website`}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover object-top"
        />
      </div>
    )
  }
  // Concept builds without a live screenshot get a branded placeholder
  // instead of a fake screenshot.
  return (
    <div
      aria-hidden="true"
      className="flex h-56 w-full items-center justify-center bg-gradient-to-br from-blue-950 via-gray-900 to-purple-950 md:h-64"
    >
      <span className="font-poppins text-5xl font-bold text-white/15">
        {project.title
          .split(' ')
          .filter((w) => /^[a-zA-Z]/.test(w))
          .slice(0, 2)
          .map((w) => w[0])
          .join('')}
      </span>
    </div>
  )
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group overflow-hidden rounded-xl border border-gray-800 bg-gray-900/50 transition-colors hover:border-blue-600/40">
      <Link href={`/projects/${project.slug}`} className="block focus-visible:outline-offset-[-2px]">
        <ProjectVisual project={project} />
        <div className="p-6">
          <span
            className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${kindStyles[project.kind]}`}
          >
            {kindLabels[project.kind]}
          </span>
          <h3 className="mt-3 font-poppins text-xl font-semibold text-white transition-colors group-hover:text-blue-400 md:text-2xl">
            {project.title}
          </h3>
          <p className="mt-2 leading-relaxed text-gray-300">{project.summary}</p>
          <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies used">
            {project.tags.map((tag) => (
              <li key={tag} className="rounded-full bg-gray-800/80 px-2.5 py-0.5 text-xs text-gray-500">
                {tag}
              </li>
            ))}
          </ul>
          <span className="mt-5 inline-block text-sm font-medium text-blue-400">
            Read the case study →
          </span>
        </div>
      </Link>
    </article>
  )
}

export default function FeaturedWork() {
  return (
    <section id="work" className="scroll-mt-20 bg-black px-6 py-20 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-2xl">
          <h2 className="font-poppins text-3xl font-semibold md:text-4xl">
            Work for local businesses
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Websites built for the kinds of businesses that keep North Idaho running.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
        <div className="mt-10">
          <Link
            href="/projects"
            className="text-blue-400 underline-offset-4 transition-colors hover:text-blue-300 hover:underline"
          >
            See all projects →
          </Link>
        </div>
      </div>
    </section>
  )
}
