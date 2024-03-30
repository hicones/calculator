/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: {
          dark: "#202128",
          light: "#EEEEEE",
        },
        surface: {
          dark: "#262831",
          light: "#FAFAFA",
        },
        indigo: "#8C9EFF",

        blue: {
          200: "#90CAF9",
          400: "#42A5F5",
        },
        red: {
          200: "#E57373",
          400: "#EF5350",
        },
        gray: {
          900: "#212121",
        },
        button: {
          dark: "#2B2D35",
          light: "#ffffff",
        },
      },
    },
  },
  darkMode: "class",

  plugins: [],
};
