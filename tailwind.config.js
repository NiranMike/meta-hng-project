/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'xls':'320px',
      // => @media (min-width: 320px) { ... }
      'xs': '375px',
      // => @media (min-width: 375px) { ... }
      'ms': '425px',
      // => @media (min-width: 425px) { ... }
      'as': '500px',
      // => @media (min-width: 425px) { ... }
      'axs': '600px',
      // => @media (min-width: 425px) { ... }
      'sm': '640px',
      // => @media (min-width: 640px) { ... }
      'md': '768px',
      // => @media (min-width: 768px) { ... }
      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }
      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
      '2xl': '1440px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {},
  },
  plugins: [],
}
