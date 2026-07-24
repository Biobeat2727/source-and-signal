const steps = [
  {
    title: 'Talk',
    description:
      'We talk about your business, your customers, and what you want the website to do.',
  },
  {
    title: 'Design',
    description: 'We choose a direction together and gather the content the site needs.',
  },
  {
    title: 'Build',
    description: 'I build the website and walk you through a focused review.',
  },
  {
    title: 'Launch and care',
    description:
      'I connect your domain, Google profile, and analytics, and stay available for ongoing support.',
  },
]

export default function Process() {
  return (
    <section className="border-t border-gray-800 bg-black px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-poppins text-3xl font-semibold text-white md:text-4xl">
          How a project works
        </h2>
        <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <li
              key={step.title}
              className="rounded-xl border border-gray-800 bg-gray-900/50 p-6"
            >
              <span className="font-poppins text-sm font-semibold text-blue-400">
                Step {index + 1}
              </span>
              <h3 className="mt-2 font-poppins text-xl font-semibold text-white">{step.title}</h3>
              <p className="mt-2 leading-relaxed text-gray-400">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
