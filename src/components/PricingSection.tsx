import Link from 'next/link'
import {
  managedOption,
  pricingFinePrint,
  pricingHeading,
  pricingIntro,
  pricingReassurance,
  pricingTiers,
} from '@/data/pricing'

interface PricingSectionProps {
  /** "preview" renders a compact homepage version linking to the full section */
  variant?: 'full' | 'preview'
}

export default function PricingSection({ variant = 'full' }: PricingSectionProps) {
  const isPreview = variant === 'preview'

  return (
    <section
      id="pricing"
      className="scroll-mt-20 border-t border-gray-800 bg-gray-950 px-6 py-20"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="font-poppins text-3xl font-semibold text-white md:text-4xl">
          {pricingHeading}
        </h2>
        <p className="mt-4 max-w-3xl text-lg text-gray-300">{pricingIntro}</p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {pricingTiers.map((tier) => (
            <div
              key={tier.name}
              className="flex flex-col rounded-xl border border-gray-800 bg-gray-900/50 p-6"
            >
              <h3 className="font-poppins text-xl font-semibold text-white">{tier.name}</h3>
              <p className="mt-1 text-sm text-gray-400">{tier.blurb}</p>
              <p className="mt-4 font-poppins text-lg font-semibold text-blue-400">{tier.price}</p>
              <p className="text-sm text-gray-400">{tier.care}</p>
              {!isPreview && (
                <ul className="mt-5 space-y-2 border-t border-gray-800 pt-5">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-gray-300">
                      <span
                        aria-hidden="true"
                        className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 space-y-3 text-gray-300">
          <p>{managedOption}</p>
          <p className="text-gray-400">{pricingReassurance}</p>
          <p className="text-sm text-gray-500">{pricingFinePrint}</p>
        </div>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          {isPreview ? (
            <Link
              href="/services#pricing"
              className="inline-flex items-center justify-center rounded-lg border border-white/20 px-6 py-3 font-medium text-white transition-colors hover:bg-white/10"
            >
              See what&apos;s included
            </Link>
          ) : null}
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-700"
          >
            Get a Straightforward Estimate
          </Link>
        </div>
      </div>
    </section>
  )
}
