import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ExternalLink } from 'lucide-react'
import Footer from '@/components/Footer'
import ContactCTA from '@/components/ContactCTA'
import { getProject, kindLabels, projects } from '@/data/projects'

type Props = {
  params: { slug: string }
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const project = getProject(params.slug)
  if (!project) return {}
  return {
    title: `${project.title} — ${kindLabels[project.kind]}`,
    description: project.summary,
    alternates: { canonical: `/projects/${project.slug}` },
  }
}

export default function ProjectDetailPage({ params }: Props) {
  const project = getProject(params.slug)
  if (!project) notFound()

  return (
    <main className="min-h-screen bg-black text-white">
      <article className="px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <Link
            href="/projects"
            className="text-sm text-gray-400 transition-colors hover:text-white"
          >
            ← All projects
          </Link>

          <div className="mt-6">
            <span className="inline-block rounded-full bg-blue-600/20 px-3 py-1 text-xs font-medium text-blue-300">
              {kindLabels[project.kind]}
            </span>
            <h1 className="mt-4 font-poppins text-4xl font-bold text-white md:text-5xl">
              {project.title}
            </h1>
            <p className="mt-4 text-xl text-gray-300">{project.summary}</p>
          </div>

          {project.kind === 'concept' && (
            <p className="mt-6 rounded-lg border border-purple-600/30 bg-purple-950/30 p-4 text-sm text-purple-200">
              This is a concept build: a demonstration of what I&apos;d create for a business like
              yours, not a delivered client project.
            </p>
          )}

          {project.image && (
            <div className="relative mt-10 h-64 w-full overflow-hidden rounded-xl border border-gray-800 bg-gray-900 md:h-96">
              <Image
                src={project.image}
                alt={project.imageAlt ?? `Screenshot of the ${project.title} website`}
                fill
                sizes="(min-width: 1024px) 896px, 100vw"
                className="object-cover object-top"
                priority
              />
            </div>
          )}

          <div className="mt-12 space-y-10">
            <section>
              <h2 className="font-poppins text-2xl font-semibold text-white">The problem</h2>
              <p className="mt-3 text-lg leading-relaxed text-gray-300">{project.problem}</p>
            </section>

            <section>
              <h2 className="font-poppins text-2xl font-semibold text-white">The approach</h2>
              <p className="mt-3 text-lg leading-relaxed text-gray-300">{project.solution}</p>
            </section>

            <section>
              <h2 className="font-poppins text-2xl font-semibold text-white">Key features</h2>
              <ul className="mt-4 space-y-3">
                {project.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-lg text-gray-300">
                    <span
                      aria-hidden="true"
                      className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-blue-400"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </section>

            <section className="rounded-xl border border-gray-800 bg-gray-900/50 p-6">
              <h2 className="font-poppins text-lg font-semibold text-white">Project type</h2>
              <p className="mt-2 text-gray-300">{project.projectType}</p>
              <div className="mt-4 flex flex-wrap gap-2" aria-label="Technologies used">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-gray-800/80 px-2.5 py-0.5 text-xs text-gray-500"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-700"
                >
                  <ExternalLink size={18} aria-hidden="true" />
                  Visit the live site
                </a>
              )}
            </section>
          </div>
        </div>
      </article>
      <ContactCTA />
      <Footer />
    </main>
  )
}
