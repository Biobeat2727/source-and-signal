export type ProjectKind = 'client' | 'concept' | 'community' | 'personal'

export interface Project {
  slug: string
  title: string
  kind: ProjectKind
  /** Shown on the homepage featured-work section */
  featured: boolean
  /** One-line, outcome-focused summary shown on cards */
  summary: string
  problem: string
  solution: string
  features: string[]
  projectType: string
  liveUrl?: string
  image?: string
  imageAlt?: string
  tags: string[]
}

export const kindLabels: Record<ProjectKind, string> = {
  client: 'Client Project',
  concept: 'Concept Project',
  community: 'Community Platform',
  personal: 'Personal Project',
}

export const projects: Project[] = [
  {
    slug: 'northwest-tradesmen',
    title: 'Northwest Tradesmen',
    kind: 'client',
    featured: true,
    summary: 'Designed to turn local searches into calls and estimate requests.',
    problem:
      "A remodeling contractor's work speaks for itself, but only if people can see it. Northwest Tradesmen needed a place to show finished projects and make it easy for homeowners around Sandpoint to call or request an estimate.",
    solution:
      'A site built around calls and estimate requests: tap-to-call from every screen, a free-estimate form with project types, a gallery of recent work, and the service area spelled out for local search.',
    features: [
      'Tap-to-call buttons with the shop phone number',
      'Free estimate request form with project types',
      'Photo gallery of recent projects',
      'Services organized by category',
      "Service area coverage from Sandpoint to Coeur d'Alene",
    ],
    projectType: 'Contractor website',
    liveUrl: 'https://www.nwtradesmen.com',
    image: '/nwtradesmen.png',
    imageAlt:
      "Homepage of the Northwest Tradesmen website with the headline \"Sandpoint's Custom Remodeling Specialist\", a free estimate button, and the shop phone number",
    tags: ['Next.js', 'Tailwind'],
  },
  {
    slug: 'opa-greek-food',
    title: 'OPA! Greek Food',
    kind: 'client',
    featured: true,
    summary: 'Helps customers find the truck, browse the menu, and order or request catering.',
    problem:
      "Food truck customers decide on their phones: where is it, and what's on the menu? OPA! needed those answers one tap away, plus a way to bring in catering jobs.",
    solution:
      'A mobile-first site with the location and hours up front, the full menu, online ordering, and a catering section for events. Everything a hungry customer needs in a couple of taps.',
    features: [
      'Full menu of pita wraps, plates, and sides',
      'Location, hours, and directions',
      'Online ordering integration',
      'Catering section for events',
      'Tap-to-call phone number',
    ],
    projectType: 'Food truck website',
    liveUrl: 'https://opafoodtruck.com',
    image: '/opa-greek-food.png',
    imageAlt:
      'Homepage of the OPA! Greek Food website showing the gold Opa! logo, the headline "Authentic Gyros. Fresh. Made to Order.", and order online buttons',
    tags: ['Next.js', 'Tailwind'],
  },
  {
    slug: 'blue-heron-cafe',
    title: 'Blue Heron Café',
    kind: 'client',
    featured: true,
    summary: 'Restaurant website with menus, hours, events, reviews, and clear mobile actions.',
    problem:
      'The café needed a website that could keep up with a real restaurant: menus that change, events that come and go, and customers who look everything up on their phones.',
    solution:
      'A mobile-first site with a CMS behind it, so menus and events can be updated without touching code. Hours, location, and contact actions are easy to reach from any page.',
    features: [
      'Online menus managed through a CMS',
      'Events listing the café can update itself',
      'Hours, location, and directions up front',
      'Mobile-first layout with clear tap targets',
    ],
    projectType: 'Restaurant website',
    liveUrl: 'https://blueheronsamuels.com',
    image: '/blueheron.png',
    imageAlt: 'Homepage of the Blue Heron Café website showing the café branding and menu navigation',
    tags: ['Next.js', 'Tailwind', 'Sanity'],
  },
]

export const featuredProjects = projects.filter((p) => p.featured)

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}
