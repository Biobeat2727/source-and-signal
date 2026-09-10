'use client'

import { useEffect } from 'react'
import Footer from '@/components/Footer'

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return <main id="main-content" className="inner-page">
    <section className="page-content">
      <h1>Something broke on my end.</h1>
      <p className="page-lede">Try the page again. If it keeps happening, email me and I’ll sort it out.</p>
      <div className="page-links">
        <button type="button" onClick={reset}>Try again</button>
        <a href="mailto:davey@sourceandsignal.dev">davey@sourceandsignal.dev <span aria-hidden="true">↗</span></a>
      </div>
    </section>
    <Footer />
  </main>
}
