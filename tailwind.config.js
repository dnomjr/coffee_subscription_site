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
        "mobile-home": "url('./images/home/mobile/image-hero-coffeepress.jpg')",
        "desktop-home":
          "url('./images/home/desktop/image-hero-coffeepress.jpg')",

        "mobile-about-hero":
          "url('./src/assets/about/mobile/image-hero-whitecup.jpg')",
        "desktop-about-hero":
          "url('./src/assets/about/desktop/image-hero-whitecup.jpg')",
        "tablet-about-hero":
          "url('./src/assets/about/tablet/image-hero-whitecup.jpg')",

        "mobile-about-man":
          "url('./src/assets/about/mobile/image-commitment.jpg')",
        "desktop-about-man":
          "url('./src/assets/about/desktop/image-commitment.jpg')",
        "tablet-about-man":
          "url('./src/assets/about/tablet/image-commitment.jpg')",

        "mobile-about-cup":
          "url('./src/assets/about/mobile/image-quality.jpg')",
        "desktop-about-cup":
          "url('./src/assets/about/desktop/image-quality.jpg')",
        "tablet-about-cup":
          "url('./src/assets/about/tablet/image-quality.jpg')",

        "mobile-plan-cup":
          "url('./src/assets/plan/mobile/image-hero-blackcup.jpg')",
        "desktop-plan-cup":
          "url('./src/assets/plan/desktop/image-hero-blackcup.jpg')",
        "tablet-plan-cup":
          "url('./src/assets/plan/tablet/image-hero-blackcup.jpg')",
      },
    },
  },
  plugins: [],
}
