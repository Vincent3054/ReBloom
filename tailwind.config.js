/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
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
  },
  plugins: [],
}
