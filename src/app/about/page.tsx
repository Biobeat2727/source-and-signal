export default function AboutPage() {
  return (
    <section className="min-h-screen px-6 py-24 bg-background text-white">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-6">
          About
        </h1>
        <p className="text-white/70 text-lg mb-12">
          {"Source and Signal is a digital development & design studio founded by a beatboxer, builder, and deep-thinking technologist based in Sandpoint, Idaho."}
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-8 text-white/80 leading-relaxed">
        <p>
          {"I'm Davey — an artist turned developer. I taught myself to code because I wanted to bring ideas to life. The same flow I chase on stage, I now channel into clean code, intuitive interfaces, and responsive systems."}
        </p>

        <p>
          {"Source and Signal was born from the belief that creativity and technology aren’t separate. The “source” is the origin — the energy, the intention. The “signal” is how that essence gets transmitted into the world. My goal is to build tools, sites, and systems that carry that signal clearly."}
        </p>

        <p>
          {"Whether you’re an entrepreneur with a vision, an artist building a platform, or a business that needs tech with soul — I’ve got you."}
        </p>
      </div>
    </section>
  )
}
