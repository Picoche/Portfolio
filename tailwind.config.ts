/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'rgb(10, 35, 66)',
          dark: 'rgb(247, 247, 247)'
        },
        secondary: {
          DEFAULT: 'rgb(229, 75, 75)',
          dark: 'rgb(74, 124, 89)'
        },
        accent: {
          DEFAULT: 'rgb(125, 168, 123)',
          dark: 'rgb(144, 196, 142)'
        },
        background: {
          DEFAULT: 'rgb(247, 247, 247)',
          dark: 'rgb(17, 24, 39)'
        },
        text: {
          DEFAULT: 'rgb(10, 35, 66)',
          dark: 'rgb(247, 247, 247)'
        }
      },
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        body: ['Open Sans', 'sans-serif'],
        accent: ['Playfair Display', 'serif']
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'theme-toggle': 'theme-toggle 0.3s ease-in-out'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        'theme-toggle': {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(0.95)' },
          '100%': { transform: 'scale(1)' }
        }
      }
    }
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require('tailwindcss-animate')]
}
