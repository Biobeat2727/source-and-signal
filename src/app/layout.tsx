import type { Metadata, Viewport } from "next";
import { Alegreya_Sans } from "next/font/google";

import "./globals.css";
import "./resonance.css";
import Header from "../components/Header";

// Single UI family, self-hosted at build time with a metric-adjusted fallback (no FOIT, no third-party request).
const sans = Alegreya_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--font-sans",
});

const siteDescription =
  "Websites, visual design, and ongoing support from Davey at Source & Signal, an independent studio in Sandpoint, Idaho.";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#101319",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://sourceandsignal.dev"),
  title: {
    default: "Sandpoint Web Design for Local Businesses | Source & Signal",
    template: "%s | Source & Signal",
  },
  description: siteDescription,
  icons: {
    apple: [{ url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }],
    icon: [
      { url: '/favicon.ico', sizes: '64x64', type: 'image/x-icon' },
      { url: '/favicon.png', sizes: '64x64', type: 'image/png' },
      { url: '/icon.svg', sizes: 'any', type: 'image/svg+xml' },
    ],
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Sandpoint Web Design for Local Businesses | Source & Signal",
    description: siteDescription,
    url: "/",
    siteName: "Source & Signal",
    images: [{
      url: "/og-image.png",
      width: 1200,
      height: 630,
      alt: "Source & Signal wordmark with the line: You’re the Source. Together, we make the Signal. Websites for local businesses, Sandpoint, Idaho.",
    }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sandpoint Web Design for Local Businesses | Source & Signal",
    description: siteDescription,
    images: ["/og-image.png"],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Source & Signal",
  description: siteDescription,
  url: "https://sourceandsignal.dev",
  email: "davey@sourceandsignal.dev",
  founder: {
    "@type": "Person",
    name: "Davey",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Sandpoint",
    addressRegion: "ID",
    addressCountry: "US",
  },
  areaServed: ["Sandpoint", "Bonner County", "North Idaho"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={sans.variable}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <a className="skip-link" href="#main-content">Skip to content</a>
        <div className="site-shell">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
