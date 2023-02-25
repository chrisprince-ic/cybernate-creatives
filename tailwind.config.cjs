/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        lightOrange: '#feca1b',
        darkOrange: '#ffb426',
        grayish: '#808080',
        lightGray: '#2d2e32',
        veryLightGray: '#343434',
        darkGray: '#25262a',
        darkGrayLightOpac: 'rgba(37, 38, 42, 0.3)',
        darkGrayOpac: 'rgba(37, 38, 42, 0.6)',
        grayishLightWhite: '#f5f5f5e8',
        paleGrayishLightWhite: '#dad6d6',
        paleGrayishLightWhiteOpac: '#dad6d6e9',
        darkGrayishLightWhiteOpac: '#cdc7c7e9',
        darkGrayishLightWhite: '#f5f5f5ae',
        lightGreenishSkyBlue: '#54cc8f',
        veryLightGreen: '#00e472',
      },
    },
  },
  plugins: [],
};
