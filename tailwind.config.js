/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors:{
      'primary':'#06402b',
      'secondary':'#ffb116',
      'white': '#ffffff',
      'gray':'rgba(205,206,202,1)',
      'black':'black',
      'button-blue':'#20a7cd'
    },
    extend: {
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out',
        blink: "blink 1s steps(1, start) infinite",
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        blink: {
          '0%, 100%': { opacity: 1 }, // Fully visible
          '50%': { opacity: 0 }, // Invisible
        },
      },
      fontFamily :{
        times_new_roman: ["times-new-roman","sans-serif"]
    },
      aspectRatio: {
        '4/3': '4 / 3',
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(ellipse_at_center,_var(--tw-gradient-stops), rgb(216,230,160) 0%, rgb(255,255,255) 90%)',
      },
    },
  },
  plugins: [],
})