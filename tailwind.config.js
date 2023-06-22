/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html','styles.css'],
  theme: {
    extend: {
        fontFamily: {
            'nunito': ['Nunito', 'sans-serif'],
            'rubik': ['Rubik', 'sans-serif'],
            'poppins': ['Poppins', 'sans-serif'],
        },
        animation: {
            marquee: "marquee 50s linear infinite"
        },
        keyframes: {
            marquee: {
              from: {
                transform: 'translateX(0)',
              },
              to: {
                transform: 'translateX(calc(-100% - 2.5rem))',
              },
            },
        },            
    },
  },
  plugins: [],
}