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
  /** Which edge of the screenshot to keep when a narrow frame crops it. Defaults to center. */
  imageFocus?: 'left' | 'center'
  tags: string[]
}

export const kindLabels: Record<ProjectKind, string> = {
  client: 'Client project',
  concept: 'Concept project',
  community: 'Community platform',
  personal: 'Personal project',
}

export const projects: Project[] = [
  {
    slug: 'cropper-and-co', title: 'Cropper & Co', kind: 'client', featured: true,
    summary: 'Migration consultation and a refreshed layout for an existing barbershop website.',
    problem: 'Cropper & Co already had a barbershop website, but needed help taking it over and refreshing how the shop was presented to customers. The work called for practical support with an existing site and a focused layout update.',
    solution: 'Migration consultation and website takeover support helped the shop work with what it already had. A reformatted layout and limited content updates refreshed the presentation while keeping the scope focused on the existing website.',
    features: ['Migration consultation', 'Website takeover support', 'Existing-site layout reformatting', 'Limited content updates'],
    projectType: 'Website consultation and refresh', liveUrl: 'https://www.cropperandcobarber.com/',
    image: '/cropper-co.webp', imageAlt: 'Cropper & Co homepage showing a barber at work and the headline Come have a seat', tags: [],
  },
  {
    slug: 'northwest-tradesmen',
    title: 'Northwest Tradesmen',
    kind: 'client',
    featured: true,
    summary: 'Designed to turn local searches into calls and estimate requests.',
    problem:
      "A remodeling contractor's work speaks for itself, but only if people can see it. Northwest Tradesmen needed a place to show finished projects and make it easy for homeowners around Sandpoint to call or request an estimate.",
    solution:
      "Homeowners can now browse recent work, check services and coverage from Sandpoint to Coeur d'Alene, then call or request a free estimate. The website gives the contractor a place to show its work; logo, business card, and T-shirt design extend the business identity beyond the screen.",
    features: [
      'Contractor website design and development',
      'Tap-to-call actions and an estimate request form',
      'Project gallery, service descriptions, and local service-area content',
      'Logo and brand identity design',
      'Business card and T-shirt design',
    ],
    projectType: 'Contractor website',
    liveUrl: 'https://www.nwtradesmen.com',
    image: '/portfolio-tradesmen.webp',
    imageFocus: 'left',
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
      "For someone choosing a local lunch stop, the first questions are simple: where is the truck, when is it open, and what's on the menu? OPA! needed to put those answers within easy reach on a phone and give event customers a way to explore catering.",
    solution:
      'Customers can now find the location and hours, browse the full menu, and reach online ordering from a mobile-first site. A dedicated catering section supports event inquiries, while a sandwich board menu brings the design work to the truck itself.',
    features: [
      'Mobile-first food truck website design and development',
      'Menu, location, hours, and directions pages',
      'Online ordering integration',
      'Catering section for events',
      'Sandwich board menu design',
    ],
    projectType: 'Food truck website',
    liveUrl: 'https://opafoodtruck.com',
    image: '/portfolio-opa.webp',
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
      'For café regulars and people planning a stop, a useful website starts with the current menu, hours, and what is happening next. Blue Heron Café needed a way to keep changing menus and events current while making those everyday details easy to find on a phone.',
    solution:
      'The café now has a mobile-first site with menus and events it can update through a content management system, without editing code. Visitors can find hours, directions, and contact actions easily. Event posters and event photography support the café’s programming beyond the website.',
    features: [
      'Mobile-first restaurant website design and development',
      'Content management setup for menus and events',
      'Hours, location, directions, and mobile contact actions',
      'Event poster design',
      'Event photography',
    ],
    projectType: 'Restaurant website',
    liveUrl: 'https://blueheronsamuels.com',
    image: '/portfolio-blueheron.webp',
    imageAlt: 'Homepage of the Blue Heron Café website showing the café branding and menu navigation',
    tags: ['Next.js', 'Tailwind', 'Sanity'],
  },
]

export const featuredProjects = projects.filter((p) => p.featured)

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}
