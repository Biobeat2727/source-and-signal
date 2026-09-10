import type { Metadata } from "next";

import "./globals.css";
import "./resonance.css";
import Header from "../components/Header";

const siteDescription =
  "Websites, visual design, and ongoing support from Davey at Source & Signal, an independent studio in Sandpoint, Idaho.";

export const metadata: Metadata = {
  metadataBase: new URL("https://sourceandsignal.dev"),
  title: {
    default: "Sandpoint Web Design for Local Businesses | Source & Signal",
    template: "%s | Source & Signal",
  },
  description: siteDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Sandpoint Web Design for Local Businesses | Source & Signal",
    description: siteDescription,
    url: "/",
    siteName: "Source & Signal",
    images: [{
      url: "/og-graph-v4.png",
      width: 1200,
      height: 630,
      alt: "Source & Signal logo",
    }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sandpoint Web Design for Local Businesses | Source & Signal",
    description: siteDescription,
    images: ["/og-graph-v4.png"],
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
    <html lang="en">
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
