/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      inter: ["Roboto", "sans-serif"],
      passion: ["Bebas Neue", "cursive"],
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
