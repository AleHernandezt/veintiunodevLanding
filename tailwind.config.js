/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        'principal':['"Montserrat", sans-serif']
      },
      colors:{
        'primary-color':["#fff6d8"],
        'secondary-color':["#4aab75"],
        'terciary-color':["#38694e"],
        'quaternary-color':["#262626"]
      }
    },
  },
  plugins: [],
}

