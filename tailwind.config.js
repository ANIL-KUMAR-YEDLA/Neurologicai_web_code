/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter:["Inter", "sans-serif"],
        k2d: ["K2D", "sans-serif"],
      },
      colors: {
        primary: "#5323EC",
        secondary: "#7F36F5",
      },
      backgroundImage: {
        'spotlight-gradient': 'linear-gradient(90deg, #5323EC 56.37%, #7F36F5 78.53%)',
      },
    },
  },
  plugins: [],
};
