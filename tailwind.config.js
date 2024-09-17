/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'primary' : '#3328fe'
      },
      fontFamily: {
        'display' : ['Inter', 'sans-serif'],
        'pacifico' : ['Alfa Slab One', 'sans-serif'],
        'akaya' : ['Akaya Telivigala', 'sans-serif']
      }
    },
  },
  darkMode : 'selector',
  plugins: [],
}

