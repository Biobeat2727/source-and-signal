export default function ProjectsPage() {
  const projects = [
    {
      title: "Sandpoint.Events",
      description: "A CMS-powered event hub for the Sandpoint music and arts scene. Built with Next.js, Tailwind, and Sanity.io.",
      url: "https://sandpoint.events", // update if it's not deployed yet
      tags: ["Next.js", "Tailwind", "Sanity"],
    },
    {
      title: "Skylight Aurora Tracker",
      description: "A React Native app that visualizes aurora forecasts, real-time solar activity, and dynamic overlays.",
      url: "#", // add link later
      tags: ["React Native", "Expo", "D3"],
    },
    {
      title: "Blue Heron Café Website",
      description: "Simple, clean, and efficient web presence for a local café and general store in North Idaho.",
      url: "#", // add live URL when launched
      tags: ["Next.js", "Sanity", "Mobile-first"],
    },
  ];

  return (
    <section className="min-h-screen px-6 py-24 bg-background text-white">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-6">Projects</h1>
        <p className="text-white/70 text-lg mb-12">
          Real-world builds, from local businesses to creative tools. Built fast, styled right, and infused with intention.
        </p>
      </div>

      <div className="grid gap-8 max-w-5xl mx-auto sm:grid-cols-2 md:grid-cols-3">
        {projects.map((project, i) => (
          <a
            key={i}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black/30 border border-white/10 rounded-xl p-5 hover:shadow-xl transition-shadow duration-300 flex flex-col"
          >
            <h2 className="text-xl font-semibold text-primary mb-2">{project.title}</h2>
            <p className="text-white/70 text-sm flex-grow">{project.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag, j) => (
                <span
                  key={j}
                  className="bg-white/10 text-white/60 text-xs px-2 py-1 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
