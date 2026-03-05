import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      colors: {
        accent: {
          DEFAULT: "#5b8fff",
          purple: "#a78bfa",
          green: "#34d399",
        },
      },
      animation: {
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
        blink: "blink 2s ease-in-out infinite",
        "fade-in": "fadeIn 0.5s ease forwards",
        "slide-up": "slideUp 0.6s cubic-bezier(0.23,1,0.32,1) forwards",
      },
      keyframes: {
        pulseGlow: {
          "0%,100%": { boxShadow: "0 0 40px rgba(91,143,255,0.2), 0 0 80px rgba(167,139,250,0.15)" },
          "50%": { boxShadow: "0 0 70px rgba(91,143,255,0.45), 0 0 140px rgba(167,139,250,0.3)" },
        },
        blink: {
          "0%,100%": { opacity: "1" },
          "50%": { opacity: "0.2" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        slideUp: {
          from: { opacity: "0", transform: "translateY(28px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

export default config;
