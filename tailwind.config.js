/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
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
        tabletLg: { max: "940px" },
        desktopSm: { max: "910px" },
        tabletMax: { max: "794px" },
        maxSm: { max: "768px" },
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
        dimBlue: "rgba(9, 151, 124, 0.1)",
        bgMenu: "linear-gradient(0deg, #522db8 0%, #1c7ce0 100%)",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
