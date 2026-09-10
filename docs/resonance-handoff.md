# Source & Signal: Resonance

The website implements the approved Resonance concept: a large off-white wordmark, lavender headline, animated signal sculpture, continuous dark portfolio surface, four client projects, studio introduction, and contact path. The comparison toolbar and alternative concepts are not shipped.

## Main files

- `src/app/resonance.css`: responsive layout, color, typography, and interaction styling.
- `src/components/SignalWave.tsx`: server-rendered waveform with a left-to-right entrance and slow ongoing fluctuation. Animation respects reduced motion, pauses offscreen/in background tabs, and cleans up on unmount.
- `src/components/BrandLogo.tsx` and `public/source-signal-wordmark.svg`: outlined wordmark in off-white, shared by navigation and hero.
- `src/components/FeaturedWork.tsx`: portfolio order, short labels, and supporting design work.
- `src/data/projects.ts`: project details and URLs, including Cropper & Co.
- `src/components/ContactForm.tsx` and `src/app/api/contact/route.ts`: existing contact form and Resend integration.

The original black logo remains in the user's external project folder. The SVG in this repository is a separate web asset. Portfolio screenshots are stored as optimized WebP files. Cropper & Co uses `object-fit: contain` with centered padding to retain the full screenshot.

## Development and verification

Run `npm run dev`, `npm run lint`, and `npm run build` with a working Node/npm installation. If the host's npm launcher is broken, the installed Next CLI can be invoked directly: `node node_modules/next/dist/bin/next build` (or `dev` / `lint`). Do not run dev and build against the same `.next` directory simultaneously.

Contact delivery requires a valid `RESEND_API_KEY` and verified sender configuration. Keep credentials in environment configuration, never in Git. Local validation and honeypot checks do not establish actual inbox delivery.

## Remaining content

- Replace the clearly labeled portrait space in `Studio.tsx` with Davey's headshot when supplied.
- Add the actual poster, photography, menu, and identity assets when supplied. These services are listed without fabricated portfolio imagery.

Public pricing, tier cards, pricing navigation, and price-range structured data have been removed. Estimates are discussed privately. Existing project and contact routes remain available, and the global footer links to services, studio, and contact.

Deployment is separate from this local implementation and commit.
