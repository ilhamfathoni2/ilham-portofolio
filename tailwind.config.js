/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      }
    },
    colors: {
      transparent: 'transparent',
      bgPrimary: '#081731',
      bgDark: '#000A1B',
      white: '#ffffff',
      primaryBlue: '#00D8FF',
      textPrimary: '#CCD4F9',
      textSecondary: '#8890B3',
    },
  },
  plugins: [require("daisyui")],
}
