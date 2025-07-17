export default function ContactCTA() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-background to-black border-t border-white/10">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
          Let’s Build Something Beautiful
        </h2>
        <p className="text-white/80 text-lg mb-10">
          Whether you need a site, app, brand, or idea brought to life, Source and Signal is ready to help.
        </p>
        <a
          href="mailto:davey@sourceandsignal.dev"
          className="inline-block bg-primary text-black font-semibold px-8 py-4 rounded-lg shadow-lg hover:scale-105 transition transform duration-300"
        >
          Get in Touch
        </a>
      </div>
    </section>
  )
}
