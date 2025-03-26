/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'loading': 'loading 1.5s ease-in-out infinite',
      },
      colors: {
        gray: {
          750: '#1f2937',
        },
      },
    },
  },
  plugins: [],
};