import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0f172a",     // Deep Navy
        accent: "#facc15",      // Soft Yellow
        highlight: "#3b82f6",   // Electric Blue
        white: "#ffffff",
        muted: "#f1f5f9",       // Optional soft background
      },
    },
  },
  plugins: [],
};

export default config;
