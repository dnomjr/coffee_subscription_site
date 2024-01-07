/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      frauncesBlack: ["Fraunces", "serif"],
      barlow: ["Barlow", "sans-serif"],
    },
    extend: {
      colors: {
        darkCyan: "rgb(14, 135, 132)",
        darkGreyBlue: "rgb(51, 61, 75)",
        paleOrange: "rgb(253, 214, 186)",
        lightCream: "rgb(254, 252, 247)",
        grey: "rgb(131, 136, 143)",
        darkBody: "hsl(215, 19%, 25%)",
        gradientMenu: "rgba(254, 252, 247, 0.50)",
        gradientMenu2: "#FEFCF7 ",
        gradientCollection: "rgba(254, 252, 247, 0.00)",
      },
      width: {
        "screen/90": "90vw",
      },
      backgroundImage: {
        "mobile-home":
          "url('./image-hero-coffeepress-mobile.jpg')",
        "desktop-home": "url('./image-hero-coffeepress.jpg')",

        "mobile-about-hero":
          "url('./image-hero-whitecup-mobile.jpg')",
        "desktop-about-hero":
          "url('./image-hero-whitecup.jpg')",
        "tablet-about-hero":
          "url('./image-hero-whitecup-tablet.jpg')",

        "mobile-plan-cup":
          "url('./image-hero-blackcup-mobile.jpg')",
        "desktop-plan-cup":
          "url('./image-hero-blackcup.jpg')",
        "tablet-plan-cup":
          "url('./image-hero-blackcup-tablet.jpg')",
      },
    },
  },
  plugins: [],
}
