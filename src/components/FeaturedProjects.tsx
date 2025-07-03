const projects = [
  {
    title: 'Sandpoint.Events',
    description: 'A custom-built community event platform for Sandpoint, Idaho. Built with Next.js, Tailwind CSS, and Sanity CMS.',
    stack: ['Next.js', 'Tailwind', 'Sanity'],
    link: 'https://sandpoint.events',
  },
  {
    title: 'Skylight App',
    description: 'An aurora tracking mobile app built in React Native with real-time solar data visualizations.',
    stack: ['React Native', 'Expo', 'Tailwind'],
    link: '#',
  },
  {
    title: 'Blue Heron Café Website',
    description: 'A clean, mobile-first marketing site for a local café, featuring menus, events, and branded visuals.',
    stack: ['Next.js', 'Tailwind', 'Sanity'],
    link: '#',
  },
]

export default function FeaturedProjects() {
  return (
    <section id="projects" className="py-24 px-6 bg-black border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white/5 border border-white/10 rounded-lg p-6 hover:border-primary hover:shadow-lg transition-all"
            >
              <h3 className="text-xl font-semibold text-primary mb-2">{project.title}</h3>
              <p className="text-white/80 text-sm mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 text-xs text-white/60">
                {project.stack.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-white/10 px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
