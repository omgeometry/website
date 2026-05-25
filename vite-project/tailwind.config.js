/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue': {
          900: '#0a1628',
          800: '#0f2744',
          700: '#163a61',
          600: '#1e4d7e',
        },
      },
    },
  },
  plugins: [],
}
