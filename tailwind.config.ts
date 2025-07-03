import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0A0A0A",
        primary: "#D2B49C",
        accent: "#00ffa2",
        deepBlack: "#0A0A0A",  // optional, same as background
        toasted: "#ecd9c4",    // optional, light cream tone
      },
    },
  },
  plugins: [],
};

export default config;
