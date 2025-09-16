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
  openGraph: {
    title: "Source & Signal",
    description: "Transmitting truth. Building beautiful code.",
    url: "https://source-and-signal.com",
    siteName: "Source & Signal",
    images: [
      {
        url: "/logo-source-and-signal.svg",
        width: 800,
        height: 600,
        alt: "Source & Signal Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Source & Signal",
    description: "Transmitting truth. Building beautiful code.",
    images: ["/logo-source-and-signal.svg"],
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