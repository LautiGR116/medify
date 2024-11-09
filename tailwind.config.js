/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: {
        header: ["107px"],
        button : ["152px"],
        navbar: ["66px"]
      },
      width: {
        header: ["393px"],
        button : ["348px"],
        navbar: ["320px"]
      },
      fontFamily: {
        "sans-serif": ["Roboto", "sans-serif"],
      },
      fontSize: {
        title1: ["28px", "34px"],
        title2: ["22px", "28px"],
        title3: ["20px", "25px"],// tamaño de fuente y altura de línea opcional
        body: ["17px", "22px"],  // 'base' (16px) con altura de línea opcional
        caption1: ["12px", "16px"],  // tamaño de componente pequeño
        callout1: ["16px", "21px"]
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
          300: "#D4D4D4",
          400: "#EBEBEB",
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

