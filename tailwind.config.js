/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#0E1D3A',
        'light-blue': '#213B62',
        'text-color-1': '#98F6FE',
        'text-color-2': '#1DCAE5',
      },
      fontFamily: {
        sans: ['Poppins'],
      },
      spacing: {
        128: '29rem',
      },
    },
  },
  plugins: [],
};
