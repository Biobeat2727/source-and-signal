import Link from 'next/link'
import { testimonials } from '@/data/testimonials'

export default function Testimonials() {
  return <section className="testimonials" id="reviews" aria-labelledby="reviews-heading">
    <h3 id="reviews-heading">From the people I work with</h3>
    <div className="testimonial-grid">
      {testimonials.map(testimonial => <figure className="testimonial-card" key={testimonial.slug}>
        <span className="testimonial-mark" aria-hidden="true">“</span>
        <blockquote><p>{testimonial.excerpt}</p></blockquote>
        <figcaption>{testimonial.attribution}</figcaption>
        <Link href={`/projects/${testimonial.slug}#client-review`} className="testimonial-link">
          Read the project story <span aria-hidden="true">→</span>
          <span className="sr-only">: {testimonial.attribution}</span>
        </Link>
      </figure>)}
    </div>
  </section>
}
