/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        'blue-primary': '#1E67AF',
      },
      height: {
        65: '65px',
      },
      margin: {
        30: '30px',
      },
      colors: {
        'black-text': '#323A46',
      },
      fontSize: {
        11: ['11px', '15px'],
      },
      letterSpacing: {
        'spacing-0.16': '0.16em',
      },
    },
  },
  plugins: [],
};
