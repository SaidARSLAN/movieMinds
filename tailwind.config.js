/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode : 'class',
  theme: {
    extend: {
      brightness: {
          5 : '.05',
          10 : '.10',
          25 : '.25'
      },
      colors : {
        mindBlack : "#222831",
        mindGray : "#393E46",
        mindOrange : "#D65A31",
        mindWhite : "#EEEEEE",
        mindGradient : "#080808",
      },
      fontFamily : {
        montserrat : "'Montserrat', sans-serif",
        poppins : "'Poppins', sans-serif;"
      },
      keyframes: {
        fadeEffect : {
          "0%" : {opacity : '0'},
          "100%" : {opacity : '1'} 
        },
      },
      animation : {
        fade : "fadeEffect 1s ease"
      },
    },
  },
  plugins: [],
}