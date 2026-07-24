interface Testimonial {
  name: string
  business: string
  quote: string
}

// TODO: add real, permission-granted testimonials here. Each entry needs a
// real name, a real business, and a quote the client approved for publication.
// While this list is empty the section renders nothing.
const testimonials: Testimonial[] = []

export default function Testimonials() {
  if (testimonials.length === 0) return null

  return (
    <section className="border-t border-gray-800 bg-black px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <h2 className="font-poppins text-3xl font-semibold text-white md:text-4xl">
          What clients say
        </h2>
        <div className="mt-10 space-y-6">
          {testimonials.map((t) => (
            <blockquote
              key={t.name}
              className="rounded-xl border border-gray-800 bg-gray-900/50 p-6"
            >
              <p className="text-lg italic leading-relaxed text-gray-200">&ldquo;{t.quote}&rdquo;</p>
              <footer className="mt-4 text-sm text-gray-400">
                {t.name}, {t.business}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
