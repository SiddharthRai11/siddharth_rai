/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: '#101c2c',
        dark2: '#182842',
        accent: '#1ec6ff',
        accent2: '#00bfff',
        text: '#eaf6fb',
        border: '#22304a',
      },
      fontFamily: {
       // sans: ['Inter', 'sans-serif'],
       sans: ['Poppins', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
} 