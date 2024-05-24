import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        sans: ["Inter", "sans-serif"],
        headings: ["din-condensed-variable", "sans-serif"],
        display: ["Pacifico", "sans-serif"]
        // Add more custom font families as needed
      },
      keyframes: {
        "menu-slide": {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' }
        },
        "menu-overlay-fade": {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        "hero-logo-float": {
          '0%, 100%': { transform: 'translateY(10px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        "hero-text-float": {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(10px)' },
        },
        "hero-image-float": {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      },
      animation: {
        "menu-slide": "menu-slide 0.5s ease-in-out both",
        "menu-overlay-fade": "menu-overlay-fade 0.5s ease-in-out both",
        "hero-logo-float": "hero-logo-float 6s ease-in-out infinite",
        "hero-text-float": "hero-text-float 6s ease-in-out infinite",
        "hero-image-float": "hero-image-float 6s ease-in-out infinite",
      }
    },
  },
  plugins: [],
};
export default config;
