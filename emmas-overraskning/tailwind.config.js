/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  safelist: [
    'min-h-screen',
    'bg-gradient-to-br',
    'from-pink-100', 'via-purple-100', 'to-pink-200',
    'from-pink-200', 'via-purple-200', 'to-pink-300'
  ],
  plugins: [],
};
