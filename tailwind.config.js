/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik"],
        krub: ["Krub"],
      },
      fontWeight: {
        regular: "400",
        medium: "500",
        bold: "600",
      },
      screens: {
        desktopLg: { max: "1240px" },
        desktop: { max: "1161px" },
        desktopMd: { max: "1120px" },
        tabletLgMax: { max: "987px" },
        tabletLgMd: { max: "950px" },
        tabletLg: { max: "940px" },
        desktopSm: { max: "910px" },
        desktopMid: { max: "880px" },
        desktopMin: { max: "865px" },
        tabletMax: { max: "794px" },
        maxSm: { max: "768px" },
        mobileMax: { max: "675px" },
        mobileLg: { max: "545px" },
        mobileMd: { max: "400px" },
        mobileSm: { max: "365px" },
        xs: "480px",
        ss: "620px",
        sm: "769px",
        md: "1060px",
        lg: "1200px",
        xl: "1700px",
      },
      colors: {
        bgVideo: "rgba(0,0,0,.6)",
        darkGray: "rgba(255, 255, 255, 0.20)",
        primary: "#00040f",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
