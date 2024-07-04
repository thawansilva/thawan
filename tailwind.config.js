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
      animation: {
        "loop-scroll": "loop-scroll 40s linear infinite",
      },
      keyframes: {
        "loop-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - 4rem))" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
