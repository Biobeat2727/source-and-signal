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

export const metadata: Metadata = {
  title: "Source & Signal",
  description: "Transmitting truth. Building beautiful code.",
  metadataBase: new URL("https://sourceandsignal.dev"),  // 👈 use the domain you paste
  openGraph: {
    title: "Source & Signal",
    description: "Local Software Dev. Let's work together!.",
    url: "/",            // relative works with metadataBase
    siteName: "Source & Signal",
    images: [{           // lives at /public/og.png
      url: "/og.png",
      width: 1200,
      height: 630,
      alt: "Source & Signal Logo",
    }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Source & Signal",
    description: "Transmitting truth. Building beautiful code.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${jetbrainsMono.variable} ${poppins.variable} relative min-h-screen bg-background text-white`}>
        <div className="relative z-10">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}