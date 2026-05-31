/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef9f9",
          100: "#d4f0f0",
          200: "#a6e0e1",
          300: "#6ec7c9",
          400: "#3aabae",
          500: "#1f8e91",
          600: "#177274",
          700: "#155b5d",
          800: "#13494b",
          900: "#103c3e",
        },
        sand: {
          50: "#faf6ee",
          100: "#f3ead4",
        },
      },
      fontFamily: {
        sans: ['"Inter"', "system-ui", "sans-serif"],
        display: ['"Playfair Display"', "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};
