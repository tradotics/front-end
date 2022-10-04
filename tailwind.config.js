/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: 'rgba(25,27,41,0.75)',
        background50:'rgba(25,27,41,0.50)',
        primary:'#BDBDBD',
        secondary:'#95A5A6',
        blue1:'#30617D',
        blue2:'#2A4556',
        quickbutton:'#2A303D',
        btnbackground:'#2E2F3C',
        green1:'#3C686E',
        green2:'#62BBC8',
        cardbg:'#1C1F2D',
        success1:'#388F55',
        error1: '#9C3C3C',
        success2:'#409280',
        failure2:'#924040',
        purple:'#782EC3',
        tableColor:'#111422',
        rowColor:'#1F2737',
        journalTable0:'#343642',
        journalTable1:'#272936'
      },
      spacing: {
        12.5: '3.75rem',
        6.5: '1.5625rem',
        22: '5.375rem',
        50: '1150px'
      },
    },
    aspectRatio: {
      '2.2/1':'2.2 / 1'
    },
    screens: {
      'xs': '0px',
      // => @media (min-width: 0px) { ... }

      'sm': '600px',
      // => @media (min-width: 0px) { ... }

      'md': '900px',
      // => @media (min-width: 480px) { ... }

      'lg': '1200px',
      // => @media (min-width: 640px) { ... }

      'xl': '1500px',
      // => @media (min-width: 768px) { ... }

    }
  },
  plugins: [
    require('tailwind-scrollbar')
  ]
};