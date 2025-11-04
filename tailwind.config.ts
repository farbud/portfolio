/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        light: {
          bg: "#BB98AD",
          text: "#1B0512",
          card: "#FFFFFF",
          accent: "#007BFF",
        },
        dark: {
          bg: "#0E0E0E",
          text: "#EDEDED",
          card: "#1A1A1A",
          accent: "#BB86FC",
        },
      },
    },
  },
  plugins: [],
};
