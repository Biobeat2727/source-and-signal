const steps = [
  {
    title: 'Talk',
    description: 'We talk about your business, your customers, and what you want the website to do.',
  },
  {
    title: 'Design',
    description: 'We pick a direction together and gather the words and photos the site needs.',
  },
  {
    title: 'Build',
    description: 'I build the site and walk you through it before anything goes live.',
  },
  {
    title: 'Launch and care',
    description: 'I connect your domain, Google profile, and analytics, then stay available for ongoing support.',
  },
]

export default function DirectWork() {
  return <section className="direct-section" id="direct" aria-labelledby="direct-title">
    <div className="direct-promise">
      <h2 id="direct-title">You work directly with me.</h2>
      <p>When you hire Source &amp; Signal, I’m the one who answers your email and the one who builds your site. No account managers, no ticket queue.</p>
      <p>We agree on scope and cost before any work starts. And after launch I stick around for updates, fixes, and questions.</p>
    </div>
    <div className="direct-steps">
      <h3>How a project runs</h3>
      <ol>
        {steps.map((step) => (
          <li key={step.title}>
            <h4>{step.title}</h4>
            <p>{step.description}</p>
          </li>
        ))}
      </ol>
    </div>
  </section>
}
