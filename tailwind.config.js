/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode:"class",
  theme: {
    extend: {
      colors :{
        primary:"#1182c5",
        secondart:"#2aa6df",
      },
      container: {
        center:true,
        padding: {
          default:"1rem",
          sm:"3rem",
        }
      }
    },
  },
  plugins: [],
}

