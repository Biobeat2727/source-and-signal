import Link from 'next/link'

export default function LocalTrust() {
  return (
    <section className="border-t border-gray-800 bg-gray-950 px-6 py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
        <div>
          <h2 className="font-poppins text-3xl font-semibold text-white md:text-4xl">
            You work directly with me
          </h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-gray-300">
            <p>
              I&apos;m Davey. When you hire Source &amp; Signal, I&apos;m the one who answers your
              email and the one who builds your site. No account managers, no ticket queue.
            </p>
            <p>
              If you&apos;re around Sandpoint, we can meet in person and talk through what your
              business actually needs. And after launch I stick around for updates, fixes, and
              questions.
            </p>
          </div>
        </div>
        <ul className="space-y-4">
          {[
            'Local, in-person meetings anywhere in Bonner County',
            'One point of contact from first call to launch',
            'Ongoing help after your site goes live',
            'Plain answers about cost and scope before work starts',
          ].map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 rounded-xl border border-gray-800 bg-gray-900/50 p-4"
            >
              <span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-400" />
              <span className="text-gray-300">{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="mx-auto mt-10 max-w-6xl">
        <Link
          href="/about"
          className="text-blue-400 underline-offset-4 transition-colors hover:text-blue-300 hover:underline"
        >
          More about me and how I work →
        </Link>
      </div>
    </section>
  )
}
