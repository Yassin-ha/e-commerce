/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      }
    },
    extend: {
      boxShadow: {
        "3xl": "0px 0px 35px 30px #fff"
      }
    },
  },
  plugins: [],
}

