/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  mode: 'jit',
  theme: {
    extend: {
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
      }
    },
    colors:{
      darkGray:'#838D52'
    }
  },
  plugins: [],
}
