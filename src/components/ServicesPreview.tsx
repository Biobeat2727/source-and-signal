export default function ServicesPreview() {
  const services = [
    {
      title: 'Web Development',
      description: 'Modern, responsive websites built with Next.js, Tailwind, and Sanity.',
    },
    {
      title: 'Brand Design',
      description: 'Clean visual identity and layout to match your story and energy.',
    },
    {
      title: 'CMS Integration',
      description: 'Customizable Sanity or WordPress content systems for client editing.',
    },
    {
      title: 'Performance Optimization',
      description: 'Lighthouse audits, SEO, load speed boosts, and image handling.',
    },
  ]

  return (
    <section className="py-24 px-6 bg-background border-t border-white/10">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12">Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 p-6 rounded-lg hover:border-primary hover:shadow-xl transition-all"
            >
              <h3 className="text-xl font-semibold text-primary mb-2">{service.title}</h3>
              <p className="text-white/80 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
