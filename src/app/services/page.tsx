export default function ServicesPage() {
  return (
    <section className="min-h-screen bg-background text-white px-6 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-6">
          Services
        </h1>
        <p className="text-lg text-white/70 mb-12">
          From local businesses to artists and startups: I build fast, aesthetic, scalable digital solutions with soul.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-5xl mx-auto">
        <ServiceCard
          title="Web Design & Development"
          description="Custom websites using modern stacks like Next.js, Tailwind, and Sanity CMS. Mobile-first, fast-loading, and crafted to match your vibe."
        />
        <ServiceCard
          title="Brand Identity & Logo Work"
          description="Need a visual presence that resonates? I collaborate to create logos, palettes, and visual systems that reflect your mission."
        />
        <ServiceCard
          title="React Native & App Prototypes"
          description="I design and build mobile apps with React Native. Real-world tools like Skylight and collectible scanners. Minimal, powerful, tested."
        />
        <ServiceCard
          title="Consulting & AI Workflow Integration"
          description="Get help solving dev problems fast, or bring AI into your workflow with tool integration, prompt design, and automation setup."
        />
      </div>

      <div className="mt-20 text-center">
        <a
          href="/contact"
          className="inline-block bg-primary text-black font-semibold px-8 py-4 rounded-lg shadow-lg hover:scale-105 transition transform duration-300"
        >
          Let’s Work Together
        </a>
      </div>
    </section>
  );
}

function ServiceCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="bg-black/30 border border-white/10 rounded-xl p-6 hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-xl font-semibold text-primary mb-2">{title}</h2>
      <p className="text-white/70">{description}</p>
    </div>
  );
}
