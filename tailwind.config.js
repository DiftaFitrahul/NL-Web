/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'red-NL' : '#DA4949',
        'black-NL' : '#434343',
        'pink-NL' : '#FE8F75',
        'grey-NL' : '#D9D9D9'
      },
      boxShadow: {
        '3xl': '0 15px 60px  rgba(0, 0, 0, 0.5)',
        'custom': '10px 10px 15px rgba(0, 0, 0, 0.4)',
        'custom2': '11px 11px  #FE8F75, 11px 11px 0 3px black'
      },
      height: {
        '100': '25em',
        '200': '120rem',
        '300': '190rem',
        '76': '305px'
      },
      fontSize: {
        '4.5xl' : '2.65rem'
      },
      borderRadius: {
        '10xl': '65px',
        '180px': '180px',
        '4xl': '2rem',
      }
    },
  },
  plugins: [],
}
