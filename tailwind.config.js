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
	      'error': '#fa0505',
	      'heavenly': '#F2F9FF',
	      'table-head-bg': '#FAFBFC',
	      // types counterparties
	      'subcontractor': '#63BE61',
	      'light-subcontractor': '#E7FDE7',
	      'provider': '#6F76C4',
	      'light-provider': '#F2F2FC',
	      'customer': '#E0A166',
	      'light-customer': '#FEF7EA',
	      'investor': '#ea606c',
	      'light-investor': '#fccfcf',
	      'staffer': '#60A5EA',
	      'light-staffer': '#CFE5FC',
	      'another': '#c1c1c1',
	      'light-another': '#838384',
      },
      width: {
        sideBar: '280px'
      },
	    gridTemplateColumns: {
		    'table': '4fr 1fr 1fr 1fr 1fr',
		    'gridCompany': '1fr 2fr',
	    }
    },
  },
  plugins: [],
}
