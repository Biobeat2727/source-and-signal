import type { Metadata } from 'next'
import Footer from '@/components/Footer'
import { ProjectCard } from '@/components/FeaturedWork'
import { projects } from '@/data/projects'

export const metadata: Metadata = {
  title: 'Websites for Local Businesses',
  description:
    'Websites built for contractors, restaurants, food trucks, and community platforms around Sandpoint and North Idaho.',
  alternates: { canonical: '/projects' },
}

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 max-w-3xl">
            <h1 className="rise font-poppins text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              Websites built for{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                real businesses
              </span>
            </h1>
            <p className="rise rise-delay-1 mt-6 text-lg text-gray-400 md:text-xl">
              Client work and community platforms around North Idaho. Each one is here because it
              shows how a website can bring in calls, bookings, and customers.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
