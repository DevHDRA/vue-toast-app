/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        success: '#4A934A',
        success_low: '#AFFFB8',
        warning: '#BF9900',
        warning_low: '#FEECA5',
        error: '#CA3838',
        error_low: '#FFBEBE',
      },
      keyframes: {
        fade: {
          '0%': { opacity: '100%' },
          '10%': { opacity: '90%' },
          '20%': { opacity: '80%' },
          '30%': { opacity: '70%' },
          '40%': { opacity: '60%' },
          '50%': { opacity: '50%' },
          '60%': { opacity: '40%' },
          '100%': { opacity: '0%' },
        },
        x_in: {
          '0%': { transform: 'translateX(-120%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        x_out: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-120%)' },
        },
      },
      animation: {
        'fade-out': 'fade .5s ease-out',
        'move-x-in': 'x_in .5s ease-out forwards',
        'move-x-out': 'x_out .5s ease-out forwards',
      },
    },
  },
  plugins: [],
}
