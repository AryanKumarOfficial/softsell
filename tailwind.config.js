/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef7ff',
          100: '#d9edff',
          200: '#bce0ff',
          300: '#8dcbff',
          400: '#58adff',
          500: '#318bff',
          600: '#1a6cf8',
          700: '#1058e6',
          800: '#1347ba',
          900: '#153e94',
          950: '#10275d',
        },
        secondary: {
          50: '#f6f7f9',
          100: '#ebedf2',
          200: '#d9dde7',
          300: '#bbc3d5',
          400: '#98a0bc',
          500: '#7c85a3',
          600: '#656c87',
          700: '#52586e',
          800: '#464c5e',
          900: '#3d4151',
          950: '#23252e',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        display: ['Poppins', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}