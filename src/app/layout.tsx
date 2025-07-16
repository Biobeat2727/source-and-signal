import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import MatrixRain from "@/components/MatrixRain";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Source & Signal",
  description: "Transmitting truth. Building beautiful code.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} relative bg-background text-white`}>
        <MatrixRain /> {/* ← background only */}
        <Header />
        {children}
      </body>
    </html>
  );
}
