/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'hero-image':'url("https://images.pexels.com/photos/906097/pexels-photo-906097.jpeg?auto=compress&cs=tinysrgb&w=1600")'
      }
    },
  },
  plugins: [],
}