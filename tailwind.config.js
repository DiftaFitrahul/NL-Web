/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppinsLight: ["PoppinsLight"],
        poppinsRegular: ["PoppinsRegular"],
        poppinsMedium: ["PoppinsMedium"],
        poppinsSemi: ["PoppinsSemi"],
        poppinsBold: ["PoppinsBold"],
      },
      colors: {
        'red-NL' : '#DA4949',
        'black-NL' : '#434343',
        'pink-NL' : '#FE8F75',
        'grey-NL' : '#D9D9D9',
        'white-NL' : "#FDFDFD"
      },
      boxShadow: {
        '3xl': '0 15px 60px  rgba(0, 0, 0, 0.5)',
        'custom': '10px 10px 15px rgba(0, 0, 0, 0.4)',
        'custom2': '11px 11px  #FE8F75, 11px 11px 0 3px black',
        'custom3': '11px 11px  #FE8F75, 11px 11px 0 0 #FE8F75',
        'home-card': '2.84249px 5.68498px 25.4084px rgba(0, 0, 0, 0.25)',
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
        '5xl': '151px 151px 0px 0px',
        '2.2xl': '60px 60px 0px 0px',
        '2.5xl': '80px 80px 0px 0px',
        '3.5xl': '120px 120px 0px 0px',
        '3xl': '100px 100px 0px 0px',
      },
      screens: {
        'smallest': '425px',
        'xs': '567px',
        '3xl': '1920px',
      },
    },
  },
  plugins: [],
}
