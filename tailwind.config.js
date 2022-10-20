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
     }
    },
  },
  plugins: [
    require('tailwind-clip-path'),
  ],
}
