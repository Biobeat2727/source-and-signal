export interface PricingTier {
  name: string
  price: string
  care: string
  blurb: string
  features: string[]
}

export const pricingHeading = 'Flexible ways to get started'

export const pricingIntro =
  "Professional websites don't need to begin with a $5,000 agency invoice. Choose an upfront project or ask about a fully managed monthly option."

export const pricingTiers: PricingTier[] = [
  {
    name: 'Signal Starter',
    price: 'Starting at $900',
    care: 'Care plan from $59/month',
    blurb: 'A one-page website that gets your business found and contacted.',
    features: [
      'One-page small-business website',
      'Existing branding or a clean house style',
      'Mobile responsive',
      'Contact form',
      'Google Business Profile connection',
    ],
  },
  {
    name: 'Signal Standard',
    price: 'Typical investment: $1,400–$1,800',
    care: 'Care plan from $79/month',
    blurb: 'A full site with the local SEO groundwork done right.',
    features: [
      'Up to five pages',
      'Mini brand kit',
      'Local SEO foundations',
      'Google Business Profile optimization',
    ],
  },
  {
    name: 'Signal Premium',
    price: 'Starting at $2,400',
    care: 'Care plan from $99/month',
    blurb: 'A larger site with the integrations your business runs on.',
    features: [
      'Up to eight pages',
      'Expanded branding',
      'Review, booking, ordering, or other appropriate integrations',
    ],
  },
]

export const managedOption =
  'No-upfront managed websites are available from $149/month with a 12-month agreement.'

export const pricingReassurance =
  "Not sure which option fits? I'll recommend the smallest package that accomplishes what your business needs."

export const pricingFinePrint =
  'Final pricing depends on scope. Third-party subscription costs (hosting add-ons, booking tools, and similar) may be separate.'
