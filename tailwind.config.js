/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "sans-serif": ["Roboto", "sans-serif"],
      },
      fontSize: {
        title: ["1.25rem", "1.75rem"],  // tamaño de fuente y altura de línea opcional
        body: ["1rem", "1.5rem"],       // 'base' (16px) con altura de línea opcional
        sub: ["0.875rem", "1.25rem"],   // 'sm' (14px)
        comp: ["0.75rem", "1rem"], 
      },
      colors: {
        primary: {
          400: "#E7F4F3",
          500: "#CCE5E2", // color base
          600: "#99CBC5",
          700: "#81B9B3",
          800: "#579991"
        },
        secondary: {
          400: "#E4EABE",
          500: "#EFF4D6", // color base
          600: "#E0E7B6",
          700: "#C9D785",
          800: "#9EB04E",
        },
        terciary: {
          400: "#E7DAFD",
          500: "#E5D6FE", // color base
          600: "#D8C7F5",
          700: "#C9ABFB",
          800: "#AB79FF",
        },
        scale: {
          100: "#FAFAFA",

          400: "#D4D4D4",
          500: "#BFC1C5", // color base
          600: "#848D92",
          700: "#4C5C5F",
          800: "#2B3F3D",

          1000: "#1B2F3D",
        },
        alert: {
          500: "#DD5B5B"
        },
      },
    },
  },
  plugins: [],
}

