import Image from 'next/image'
import Link from 'next/link'

/**
 * Davey's portrait. Leave null until a real photo exists; the section renders
 * single-column without it and switches to the two-column layout when set.
 * Example: { src: '/davey.jpg', alt: 'Davey outside the studio in Sandpoint', width: 1000, height: 1250 }
 */
const portrait: { src: string; alt: string; width: number; height: number } | null = null

export default function Studio() {
  return <section className={'studio-section' + (portrait ? ' has-portrait' : '')} id="studio">
    {portrait && (
      <div className="portrait">
        <Image src={portrait.src} alt={portrait.alt} width={portrait.width} height={portrait.height} sizes="(max-width:700px) 100px, 250px" />
      </div>
    )}
    <div className="studio-bio">
      <div className="eyebrow">The person behind the studio</div>
      <h2>I’m Davey.</h2>
      <p>I design websites and visual identities, working with you from the first idea to the final detail.</p>
      <span className="studio-location">Based in Sandpoint, Idaho.</span>
      <Link className="studio-more" href="/about">More about the studio <span aria-hidden="true">→</span></Link>
    </div>
  </section>
}
