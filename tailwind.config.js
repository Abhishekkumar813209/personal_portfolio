/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx,ts,tsx,js}"],
  theme: {
    extend: {
      fontFamily:{
        bodyFont:["Poppins","sans-serif"],
        titleFont:["Montserrat","sans-serif"],
      },
    },
  },
  plugins: [],
}