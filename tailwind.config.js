/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: '#191B29',
        primary:'#BDBDBD',
        blue1:'#30617D',
        blue2:'#2A4556',
        quickbutton:'#2A303D',
        btnbackground:'#2E2F3C'
      },
      spacing: {
        12.5: '3.75rem',
        6.5: '1.5625rem',
        22: '5.375rem',
        
      },
    },
    screens: {
      'sm': '0px',
      // => @media (min-width: 640px) { ... }

      'md': '640px',
      // => @media (min-width: 768px) { ... }

      'lg': '768px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1024px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1280px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],
};