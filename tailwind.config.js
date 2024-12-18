/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        pastelBlue: '#AEC6CF',
        pastelGreen: '#77DD77',
        pastelPink: '#FFB7C5',
        pastelYellow: '#FDFD96',
        pastelPurple: '#CBAACB',
      },
    },
  },
  plugins: [],
};

