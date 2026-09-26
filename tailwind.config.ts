import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        warmWhite: "#F7F6F2",
        softGrey: "#E9E8E4",
        borderGrey: "#D6D5CE",
        borderSubtle: "#E4E3DD",
        graphite: "#222222",
        charcoal: "#171717",
        steel: "#64676A",
        steelLight: "#95989B",
        oxide: {
          DEFAULT: "#8A5138",
          dark: "#733E28",
          light: "#A4664B",
          subtle: "#F4EDE9",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
