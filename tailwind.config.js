/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xl: "1440px",
      md: "1024px",
      sm: "680px",
    },
    extend: {
      colors: {},
    },
  },
  plugins: [],
};
