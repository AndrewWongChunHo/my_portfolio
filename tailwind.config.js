/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          200: "#D5DAE1",
        },
        black: {
          DEFAULT: "#000",
          500: "#1D2235",
        },
        blue: {
          500: "#2b77e7",
        },
        primary: "#050816",
        secondary: "#C5D3F3",
        tertiary: "#0E1133",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      fontFamily: {
        worksans: ["Work Sans", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        card: "0px 1px 2px 0px rgba(0, 0, 0, 0.05)",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/icons/herobg.png')",
      },
    },
  },
  plugins: [],
};
