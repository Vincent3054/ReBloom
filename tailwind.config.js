/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  mode: 'jit',
  theme: {
    extend: {
      screens: {
        'xs': '390px',
        'xxxxxxxxs': '0px',
      },
      width: {
        '452': '452px',
        '171': '171px',
      },
      height: {
        '452': '452px',
        '171': '171px',
      },
      fontFamily: {
        'body':'inter , Arial, sans-serif',
      },
      maxWidth: {
        '1440': '1440px',
      },
      backgroundImage: {
        'footer-pattern': "url('./assets/images/layouts/footer-bgi.png')"
      }
    },
    colors:{
      darkGray:'#838D52',
      grayWhite:`#FCFAF4`
    }
  },
  plugins: [],
}
