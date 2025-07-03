'use client'

export default function ContactPage() {
  return (
    <section className="min-h-screen px-6 py-24 bg-background text-white">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-6">
          Contact
        </h1>
        <p className="text-white/70 text-lg mb-12">
          {"Have a project, question, or idea? I'm all ears. Reach out and let’s build something powerful."}
        </p>
      </div>

      <form
        className="max-w-xl mx-auto bg-black/30 p-6 rounded-xl border border-white/10 backdrop-blur"
        onSubmit={(e) => e.preventDefault()} // You can wire this later
      >
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            required
            className="w-full p-3 rounded-md bg-black/40 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Your name"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            required
            className="w-full p-3 rounded-md bg-black/40 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="you@example.com"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-1">
            Message
          </label>
          <textarea
            id="message"
            required
            rows={5}
            className="w-full p-3 rounded-md bg-black/40 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Tell me about your project..."
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-primary text-black font-semibold py-3 rounded-md hover:scale-105 transition-transform duration-300"
        >
          Send Message
        </button>
      </form>

      <p className="text-center text-white/50 text-sm mt-8">
        Or just shoot me an email:{" "}
        <a href="mailto:you@example.com" className="text-primary underline hover:text-white">
          you@example.com
        </a>
      </p>
    </section>
  );
}
