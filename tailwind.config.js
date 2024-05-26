/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: { poppins: ["Poppins", "sans-serif"] },
    extend: {
      colors: {
        black: "#0F1624",
        "p-blue": "#13ADC7",
        darkBlue: "#6978D1",
        "p-purple": "#945DD6",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
