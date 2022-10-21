/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*.html'],
  theme: {
    extend: {
      colors:{
        primary:'#635bff',
        secondary:'#00d4ff',
        light:'#425466',
        bright:'#adbdcc',
        dark: '#0a2540',
        yellow:'#ffba27',
        pink:'#ef008f',
        indigo:'#7038ff',
        
      },
      fontFamily:{
        arial: "'Raleway', sans-serif",
      },
      clipPath:{
        clip:"polygon(0 0, 100% 0, 100% 35%, 0 76%)",
        half:"polygon(0 8%, 100% 2%, 100% 100%, 0% 100%)",
        medium:"polygon(0 13%, 100% 2%, 100% 100%, 0% 100%)"
      },
     gridTemplateColumns:{
      medium:"323px 501px 256px"
     },
     gridTemplateRows:{
      row:"86px 201px 126px 425px"
     },
     height:{
      hsm: "240vh",
      hxs:"130vh",
      hmd:"150vh",
      medium:"43.125rem",
     
     },
     width:{
      big:"33.1875rem"
     },
     borderRadius:{
      "4xl":"36px",
     },
     boxShadow: {
      'el': '0 50px 100px -20px rgb(50 50 93 / 25%), 0 30px 60px -30px rgb(0 0 0 / 30%), inset 0 -2px 6px 0 rgb(10 37 64 / 35%)'
    },
        },
  },
  plugins: [
    require('tailwind-clip-path'),
  ],
}
