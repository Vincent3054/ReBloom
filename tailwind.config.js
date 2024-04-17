/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  prefix:'c-',
  important:true,
  theme: {
    extend: {
      screens:{
        sm:'768px'
      }
    },
    colors: {
      gray :{
        700: '#7b7b7b',
        1300: '#d6d5d6'
      },
      black:'000000',
      white:'#ffffff',
      green:'838D52',
      lightGreen:'D9DCC9',
      Cream:'FCFAF4'
    }
  },
  plugins: [],
}

