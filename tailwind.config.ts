import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Legacy alias kept for existing classes; resolves to the site family set in layout.tsx.
        'poppins': ['var(--font-sans)', 'sans-serif'],
      },
      colors: {
        // Legacy Tailwind palette remapped onto the Resonance lavender/ink world.
        // Used by the case-study page and the contact form.
        blue: { 300: "#d9d2f3", 400: "#c4b8e6", 500: "#a89bce", 600: "#655781", 700: "#514567" },
        gray: { 400: "#b9b8ca", 500: "#aaa7bd", 700: "#414153", 800: "#292c3d", 900: "#1c1e2c" },
        background: "#101319",
        primary: "#b9b0e5",
        accent: "#d9d2f3",
      },
    },
  },
  plugins: [],
};

export default config;
