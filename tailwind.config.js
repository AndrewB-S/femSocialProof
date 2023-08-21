/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./style.css"],
  theme: {
    colors: {
      purp: "#552252",
      lightpurp: "#f7f2f8",
      white: "#ffffff",
      pink: "#d972b1",
    },
    extend: {
      backgroundImage: {
        "mobile-top-img": "url('/bg-pattern-top-mobile.svg')",
        "desktop-top-img": "url('/bg-pattern-top-desktop.svg')",
        "mobile-bottom-img": "url('/bg-pattern-bottom-mobile.svg')",
        "desktop-bottom-img": "url('/bg-pattern-bottom-desktop.svg')",
      },
    },
  },
  plugins: [],
};
