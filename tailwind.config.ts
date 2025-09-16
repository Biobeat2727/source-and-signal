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
        'poppins': ['var(--font-poppins)', 'sans-serif'],
        'jetbrains': ['var(--font-jetbrains-mono)', 'monospace'],
      },
      colors: {
        background: "#0A0A0A",
        primary: "#D2B49C",
        accent: "#00ffa2",
        deepBlack: "#0A0A0A",
        toasted: "#ecd9c4",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      spacing: {
        '1/10': '10%',
        '1/6': '16.666667%',
        '1/3': '33.333333%',
        '3/5': '60%',
      },
      animation: {
        'float-1': 'float-1 6s ease-in-out infinite',
        'float-2': 'float-2 8s ease-in-out infinite 2s',
        'float-3': 'float-3 7s ease-in-out infinite 4s',
        'flow-1': 'flow-1 8s linear infinite',
        'flow-2': 'flow-2 10s linear infinite 3s',
        'flow-3': 'flow-3 9s linear infinite 6s',
        'gradient-shift': 'gradient-shift 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;