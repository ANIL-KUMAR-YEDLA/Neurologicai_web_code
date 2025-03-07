/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#5323EC",
        secondary: "#4B0082",
        dark: "#170226",
        white: "#FFFFFF",
        black: "#000000",
      },
      backgroundImage: {
        'spotlight-gradient': 'linear-gradient(90deg, #5323EC 56.37%, #7F36F5 78.53%)',
      },
    },
  },
  plugins: [],
};
