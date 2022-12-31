/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/backgrand/Black-And-White-Floral-Pattern-Background.svg')",
        'brown-patern': "url('/backgrand/Trianglify-1.8s-1920px.svg')",
        'blue-grad': "url('/backgrand/ShinyOverlay.svg')",
        'ehihgt-backgrand': "url('/backgrand/G68b-1.svg')",
        'orange-backgrand': "url('/backgrand/Background-18.jpg')",
        'menBook-backgrand': "url('/backgrand/librarybook.png')",

      }

    },

  },
  plugins: [],
}
