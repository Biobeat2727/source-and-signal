export default function Testimonials() {
  const testimonials = [
    {
      name: 'Jesse B.',
      quote: "Source & Signal nailed my vision. Fast turnaround, clean design, and tech that actually works.",
    },
    {
      name: 'A Local Café Owner',
      quote: "Beautiful site, super easy to update, and customers have already commented on how much better it looks.",
    },
    {
      name: 'Creative Collaborator',
      quote: "Working with Davey was energizing. He gets creative people—and builds tools that help us shine.",
    },
  ]

  return (
    <section className="py-24 px-6 bg-black border-t border-white/10">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12">What People Say</h2>
        <div className="space-y-10">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-lg p-6 shadow-sm hover:shadow-md transition"
            >
              <p className="text-white/90 text-lg italic mb-4">“{t.quote}”</p>
              <p className="text-sm text-white/60">— {t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
