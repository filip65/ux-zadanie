/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pink: "#F2F2F2",
        "pink-2": "#F1DDDE",
        red: "#f80e16",
        green: "#009E57",
        gray: "#e8e8e8",
        "gray-dark": "#333333",
        "white-transparent": "rgba(255, 255, 255, 0.5)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
