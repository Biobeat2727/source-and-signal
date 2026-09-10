import Link from 'next/link'

export default function Studio() {
  return <section className="studio-section" id="studio">
    <div className="portrait-space" role="img" aria-label="Space reserved for Davey’s portrait">
      <span>Portrait coming soon</span>
    </div>
    <div className="studio-bio">
      <div className="eyebrow">The person behind the studio</div>
      <h2>I’m Davey.</h2>
      <p>I design websites and visual identities, working with you from the first idea to the final detail.</p>
      <span className="studio-location">Based in Sandpoint, Idaho.</span>
      <Link className="studio-more" href="/about">More about the studio ↗</Link>
    </div>
  </section>
}
