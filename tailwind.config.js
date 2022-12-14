/** @type {import('tailwindcss').Config} */

module.exports = {
    layers: ['components'],
      content: ["./src/**/*.{html,js,jsx,css}"],
      theme: {
        extend: {
          colors: { 
            primary: '#003060',
            secondary: '#0E86D4',
            ternery:'#68BBE3'     
          }
        },
      },
      plugins: [],
    }