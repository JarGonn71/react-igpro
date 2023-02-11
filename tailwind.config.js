/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
	    backgroundImage: {
		    'isValid': "url('shared/assets/icons/success.svg')",
		    'footer-texture': "url('/img/footer-texture.png')",
	    },
      backgroundColor: {
        'main': '#f4f4f8',
        'sideBar': '#1c1c1c',
      },
      colors: {
        'border-input': '#d9d9d9',
        'clr-blue': '#1094f7',
	      'error': '#fa0505'
      },
      width: {
        sideBar: '280px'
      }
    },
  },
  plugins: [],
}
