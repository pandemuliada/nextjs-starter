const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./features/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        // Octopus
        primary: "#44B598", // Keppel (https://chir.ag/projects/name-that-color/#44B598)
        "mountain-meadow": "#16C098",
        "cod-gray": "#151515",
        woodsmoke: "#0C0C0D",
        bombay: "#B5B7C0",
        alabaster: "#F8F8F8",
        scorpion: "#606060",
        carrara: "#EFEEEB",
        pampas: "#F5F4EF",
        shark: "#292D32",
        "sorrell-brown": "#CDBA95",
        sandrift: "#AD9D7C",
        "indian-khaki": "#BBAB8B",
        "old-lace": "#FDF0E1",
        // Other colors
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: "class",
    }),
    // Other plugins
  ],
};
