/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        mindBlack : "#222831",
        mindGray : "#393E46",
        mindOrange : "#D65A31",
        mindWhite : "#EEEEEE"
      },
      fontFamily : {
        montserrat : "'Montserrat', sans-serif",
        poppins : "''Poppins', sans-serif;"
      }
    },
  },
  plugins: [],
}