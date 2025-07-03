// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header"; // adjust path if needed

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
      <body className={`${inter.className} bg-background text-white`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
