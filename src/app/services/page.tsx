import type { Metadata } from 'next'
import { Globe, MapPin, Palette, Wrench } from 'lucide-react'
import Footer from '@/components/Footer'
import PricingSection from '@/components/PricingSection'
import Process from '@/components/Process'
import ContactCTA from '@/components/ContactCTA'

export const metadata: Metadata = {
  title: 'Web Design Services & Pricing',
  description:
    'Website design, local SEO, branding, and ongoing care plans for small businesses in Sandpoint and North Idaho. Clear pricing from $900, or fully managed from $149/month.',
  alternates: { canonical: '/services' },
}

const services = [
  {
    icon: Globe,
    title: 'Business websites',
    description:
      'A fast, mobile-first website built around what you actually need: calls, estimate requests, bookings, or orders. Easy for customers to use and easy for you to keep current.',
    features: ['Mobile-first design', 'Contact and estimate forms', 'Menus, galleries, or booking', 'Simple content updates'],
  },
  {
    icon: MapPin,
    title: 'Local search visibility',
    description:
      'Showing up when someone in Bonner County searches for what you do. I set up the local SEO groundwork and connect your Google Business Profile so the site works with it, not beside it.',
    features: ['Google Business Profile setup', 'Local SEO foundations', 'Location and service pages', 'Analytics you can read'],
  },
  {
    icon: Palette,
    title: 'Branding & identity',
    description:
      'A logo and a consistent look that holds up on your truck, your sign, and your website. If you already have branding, I work with it.',
    features: ['Logo design', 'Color and type choices', 'Mini brand kits', 'Print-ready files'],
  },
  {
    icon: Wrench,
    title: 'Care & ongoing help',
    description:
      "Websites need someone to call when the menu changes or something breaks. Care plans cover updates, backups, and a real person who already knows your site.",
    features: ['Content updates', 'Security and backups', 'Performance checks', 'Direct support from me'],
  },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 max-w-3xl">
            <h1 className="rise font-poppins text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              Services built around{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                your customers
              </span>
            </h1>
            <p className="rise rise-delay-1 mt-6 text-lg text-gray-400 md:text-xl">
              Everything here exists to do one job: help people in North Idaho find your business
              and get in touch.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {services.map((service) => (
              <div
                key={service.title}
                className="h-full rounded-xl border border-gray-800 bg-gray-900/50 p-8 transition-colors hover:border-blue-600/30"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-600/20">
                    <service.icon className="h-6 w-6 text-blue-400" aria-hidden="true" />
                  </div>
                  <div>
                    <h2 className="font-poppins text-2xl font-semibold text-white">
                      {service.title}
                    </h2>
                    <p className="mt-3 text-lg leading-relaxed text-gray-300">
                      {service.description}
                    </p>
                  </div>
                </div>
                <ul className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <span aria-hidden="true" className="h-2 w-2 rounded-full bg-blue-400" />
                      <span className="text-sm text-gray-400">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PricingSection variant="full" />
      <Process />
      <ContactCTA />
      <Footer />
    </main>
  )
}
