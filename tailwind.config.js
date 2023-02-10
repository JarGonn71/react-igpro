/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        'main': '#f4f4f8',
        'sideBar': '#1c1c1c',
      },
      colors: {
        'border-input': '#d9d9d9',
        blue: '#1094f7',
      },
      width: {
        sideBar: '280px'
      }
    },
  },
  plugins: [],
}
