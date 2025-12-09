/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'rich-black': '#050505',
        'pure-white': '#FFFFFF',
        'platinum': '#E0E0E0',
        'dark-gray': '#121212',
        'border-gray': '#333333',
        'hover-gray': '#D1D1D1',
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

