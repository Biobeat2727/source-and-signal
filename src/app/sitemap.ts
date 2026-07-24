import type { MetadataRoute } from 'next'
import { projects } from '@/data/projects'

const baseUrl = 'https://sourceandsignal.dev'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ['', '/projects', '/services', '/about', '/contact'].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: path === '' ? 1 : 0.8,
  }))

  const projectPages = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...staticPages, ...projectPages]
}
