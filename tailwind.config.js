/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        'principal':['"Be Vietnam Pro"', 'sans-serif']
      },
      colors:{
        'primary-color':["#fff6d8"],
        'secondary-color':["#4aab75"],
        'terciary-color':["#38694e"],
        'quaternary-color':["#262626"]
      },
      backgroundImage:{
        "close-menu": "url(../images/icon-close.svg)",
        "open-menu": "url(../images/icon-hamburger.svg)",
        "veintiuno-pattern": "url(../images/Fondoveintiuno.jpg)"
      }
    },
  },
  plugins: [],
}

