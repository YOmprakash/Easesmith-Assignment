
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'], // Adding the Inter font
      },
      rotate: {
        '134': '133.99deg', // Add a custom rotation angle
      },
    },
  
  },
  plugins: [],
}