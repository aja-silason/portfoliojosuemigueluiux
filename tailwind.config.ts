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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      boxShadow: {
        glow: '10px -150px 1000px 200px #1D87C5, 100px -150px 1000px 20px #1D87C5',
        panel: '10px 0px 10px 100px #1D87C5, 10px -150px 100px 20px #1D87C5'
    },
    fontFamily: {
      font1: ['viga', 'cursive'],
      font2: ['syne', 'sans-serif'],
      font3: ['grotesk', 'sans-serif'],
    },
    },
  },
  plugins: [],
};
export default config;
