/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#4285F4',
        'brand-dark': '#2D3748',
        'brand-gray': '#718096',
        'brand-light-gray': '#F7FAFC',
        'brand-red': '#E53E3E',
        'brand-green': '#38A169',
        'brand-orange': '#DD6B20',
        'brand-purple': '#805AD5',
        'brand-yellow': '#D69E2E'
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif']
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' }
        }
      }
    }
  },
  plugins: []
}