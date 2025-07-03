export default function ProcessHighlight() {
  const steps = [
    {
      title: 'Discover',
      description: 'We clarify your vision, define goals, and audit any existing assets or tools.',
    },
    {
      title: 'Design',
      description: 'Simple, responsive UI with your brand in mind—colors, type, layout, and flow.',
    },
    {
      title: 'Build',
      description: 'Efficient development with clean, modular code and CMS integration if needed.',
    },
    {
      title: 'Launch & Support',
      description: 'We deploy, monitor, and optionally maintain—whether it\'s a portfolio or product.',
    },
  ]

  return (
    <section className="py-24 px-6 bg-background border-t border-white/10">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12">The Source & Signal Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {steps.map((step, index) => (
            <div key={index} className="bg-white/5 p-6 rounded-lg border border-white/10 hover:border-primary transition">
              <h3 className="text-xl font-semibold text-primary mb-2">{step.title}</h3>
              <p className="text-white/80 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
