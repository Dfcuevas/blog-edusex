/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      lavanda: "rgb(192, 147, 255)",
      lavandaClaro: "rgb(234,220,255)",
      purpuraOscuro: "rgb(52,23,99)",
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      eduTas: ["Edu TAS Beginner", "cursive"],
    },
    extend: {},
  },
  plugins: [],
};
