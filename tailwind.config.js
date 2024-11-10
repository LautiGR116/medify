/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: {
        header: ["107px"],
        button : ["152px"],
        journalContent : ["51px"],
        navbar: ["66px"]
      },
      width: {
        header: ["393px"],
        button : ["348px"],
        navbar: ["320px"],
        journalContent: ["187px"]
      },
      fontFamily: {
        'sans-serif': ['SF Pro Display', 'Roboto', 'sans-serif'],
      },
      fontSize: {
        title1: ['28px', '34px'],
        title2: ['22px', '28px'],
        title3: ['20px', '25px'],
        body: ['17px', '22px'],
        caption1: ['12px', '16px'],
        caption2: ['11px', '13px'],
        callout1: ['16px', '21px'],
      },
      colors: {
        primary: {
          200: "#DDECEA",
          500: "#CCE5E2", // color base
          600: "#99CBC5",
          700: "#81B9B3",
          800: "#579991"
        },
        secondary: {
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
          200: "#616161",
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

