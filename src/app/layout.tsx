import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";

const inter = Inter({ subsets: ["latin"] });
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono"
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins"
});

const siteDescription =
  "Fast, professional websites for contractors, restaurants, food trucks, and independent businesses in Sandpoint, Bonner County, and North Idaho.";

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
  priceRange: "$900-$2,400+",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${jetbrainsMono.variable} ${poppins.variable} relative min-h-screen bg-background text-white`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <div className="relative z-10">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
