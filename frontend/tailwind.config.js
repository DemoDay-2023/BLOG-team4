/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Mukta: 'Mukta Vaani, sans-serif',
        Mulish: 'Mulish, sans-serif',
      },
      colors: {
        'grey': "#989898",
        'blackgr': "##6D7D8B",
      },
      border: {
       "comment":" 2px solid #BBC8D4"
      },
      size: {
        'jij': "14px",
      },
    },
  },
  plugins: [],
}