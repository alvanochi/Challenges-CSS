/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {

    container: {
      center: true,
      padding: '16px',
    },
    
    extend: {
      colors: {
       dark: '#0f172a',
       dblue: '#101C45',
    },

    fontFamily: {
      sans: ['"DM Sans", sans-serif'],
      sanpro: ['"Source Sans Pro", sans-serif']
    }

  },
  plugins: [],
},
}
