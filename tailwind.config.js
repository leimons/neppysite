/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        sans: ["Proxima Nova", "sans-serif"],
        proxima: ["Proxima Nova", "sans-serif"],
        radwave: ["Radwave", "sans-serif"],
        futura: ["Futura", "sans-serif"],
      },
    },
  },

  plugins: [require("daisyui")],

  daisyui: {
    logs: true,
    themes: [
      {
        mytheme: {
          primary: "#ce6935",
          secondary: "#fbcd88",
          accent: "#511c1a",
          neutral: "#250502",
          "base-100": "#ffffff",
          "base-200": "#f8f6f4",
          "base-300": "#eee9e5",
          "base-400": "#e5d6ca",
          info: "#93e1d8",
          success: "#a3e635",
          warning: "#fde047",
          error: "#f87171",
        },
      },
    ],
    darkTheme: "mytheme",
  },
};
