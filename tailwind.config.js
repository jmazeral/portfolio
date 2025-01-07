/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': {
          50: '#eaf5fa',
          100: '#d5ebf6',
          200: '#acd7ec',
          300: '#82c3e3',
          400: '#59aed9',
          500: '#2f9ad0',
          600: '#267ba6',
          700: '#1c5d7d',
          800: '#133e53',
          900: '#091f2a',
          950: '#050f15',
          999: '#040e12',
        },
        'text': '#e1f1f8',
        'primary': '#94cde6',
        'secondary': '#261f83',
        'accent': '#8dc7e6',
       },
    },
  },
  plugins: [],
}

