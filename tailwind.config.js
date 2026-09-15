/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        epm: {
          dark: '#082f1e',
          deep: '#0e462f',
          green: '#1a7541',
          lightGreen: '#2e9d57',
          lime: '#58c374',
          accent: '#7bd992',
          bgLight: '#f4f8f5',
          cardLight: '#ffffff',
          textDark: '#122319',
          textMuted: '#4a5d52'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
