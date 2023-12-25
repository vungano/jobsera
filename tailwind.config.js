/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        primary: '#1C1C1E',
        dark_black: '#100F12',
        secondary: '#1C64EC',
        grayish: '#2C2C2E',
        blueish: '#323B4C',
        gray:'#B4B6BB',
        grayed:'#555559',
        green:'#07FF8F',
        white_gray:'#F5F8FF',
        dark_gray: '#393A3C'
      }
    },
  },
  plugins: [],
}
