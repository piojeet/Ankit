/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: "425px",
      md: "768px",
      lg: "1024px",
      xl: "1350px",
      "2xl": "1500px"
    },
    extend: {
      colors: {
        buttonColor: "#003366",
        lightOrange: "#FFA500",
        blackColor: "#23262F",
        whiteColor: '#ffffff',
        borderColor: '#EDEFF2',
        lightBackground: '#FCFCFD'
      },
      keyframes: {
        ping: {
          'from': { transform: 'scale(1)' },
          'to': { transform: 'scale(2)' },
        },
      },
      animation: {
        ping: 'ping 5s infinite',
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "10px",
        sm: "30px",
      }
    },
  },
  plugins: [],
}