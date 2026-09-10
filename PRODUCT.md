# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Owners of small local businesses in Sandpoint, Bonner County, and North Idaho — contractors, remodelers, restaurants, cafés, food trucks, and independent shops. Mostly non-technical, often older, evaluating on trust and word-of-mouth. They are deciding whether to hand their business's public face to someone, and they'd rather deal with a real local person than an agency. Many will visit on a phone, sometimes on slow rural connections.

## Product Purpose

Source & Signal is a one-person web design studio run by Davey in Sandpoint, Idaho. It builds fast, professional websites that get local businesses found in search, trusted at a glance, and contacted. Success for this site: a business owner requests a free consultation (form or email).

## Positioning

"You work directly with me." The person who answers the email is the person who builds the site — no account managers, no ticket queue. Local and in-person (coffee in Sandpoint, meetings anywhere in Bonner County), plain-English explanations, and ongoing support after launch. The name is the mechanism: the *source* is the business and what makes it worth choosing; the *signal* is how clearly that reaches the people looking for it. Davey is an artist/musician (beatboxer, performer) who taught himself software — the craft sensibility is real, not agency polish.

## Operating Context

Prospects arrive from local search, Google Business Profiles, word-of-mouth, and referrals from existing clients. They compare against: doing nothing, Facebook-page-only presence, DIY builders, and out-of-town agencies. Local norm (confirmed 2026-07-29): businesses in town do not publish pricing — quotes happen in conversation.

## Capabilities and Constraints

- Stack: Next.js 14 (App Router), Tailwind CSS, Resend-powered contact form, deployed at sourceandsignal.dev. Speed is part of the product promise; the site itself must be lightweight.
- Services: business websites, local SEO / Google Business Profile work, branding, ongoing care plans.
- **No published pricing** (user decision 2026-07-29): pricing tiers and dollar amounts are removed from the site and replaced with a free-consultation call to action.
- **No phone number on the site** (user decision 2026-07-29): contact is form and email only; copy must not promise phone contact, and tap-to-call features are not highlighted.
- Contact email: davey@sourceandsignal.dev.

## Brand Commitments

- Name: Source & Signal. Logo exists but needs re-export (current file is a 2.9MB base64-PNG-in-SVG at public/logo-source-and-signal-&.svg).
- Voice (confirmed keep): first-person, plain, direct, anti-jargon, honest about scope. Lines like "I'm the one who answers your email and the one who builds your site" are load-bearing.
- Davey's musician identity is available brand material (source/signal, waveform, performance) but not yet expressed visually.
- Legacy palette in tailwind.config.ts (#D2B49C tan, #ecd9c4 cream, #00ffa2 green) is abandoned material, not binding.

## Evidence on Hand

- Three real client sites, live: Northwest Tradesmen (nwtradesmen.com), OPA! Greek Food (opafoodtruck.com), Blue Heron Café (blueheronsamuels.com), with screenshots in /public (nwtradesmen.png, opa-greek-food.png, blueheron.png).
- public/sandpoint.png — local imagery, currently unused.
- **No testimonials yet** — three real clients could be asked; never fabricate quotes.
- **No photo of Davey yet** — design must accept a real portrait later without rework; never use a fake face.

## Product Principles

1. Trust is the conversion: every surface should make Davey feel like a specific, reachable local person, not a brand.
2. Prove with real work: the three client sites are the argument; concept filler is labeled, never passed off.
3. Plain English wins conflicts with cleverness — the audience distrusts jargon and hype.
4. The site must practice what it sells: fast, mobile-first, findable.
5. Never fabricate social proof, pricing claims, or capabilities.
