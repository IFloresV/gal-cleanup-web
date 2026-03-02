/** @type {import('tailwindcss').Config} */
export default {
   theme: {
      extend: {
         // fontFamily: {
         //    montserrat: ['Montserrat', 'sans-serif'],
         // },

         colors: {
            debug: '#00ffff',
            gray_mv: '#4A4A4A',
            greylight_mv: '#767676',
            purple_mv: '#8149E2',
            background_top: '#0369a1',
            background_bottom: '#0c4a6e',
            text_banner: '#0284c7',
            line_cards: '#ffffff',

            // Gal-Cleanup brand colors – sky blue palette
            brand: {
               50: '#f0f9ff',
               100: '#e0f2fe',
               200: '#bae6fd',
               300: '#7dd3fc',
               400: '#38bdf8',
               500: '#0ea5e9',
               600: '#0284c7',
               700: '#0369a1',
               800: '#075985',
               900: '#0c4a6e',
               950: '#082f49',
            },
            cream: '#f0f9ff',
            dark: '#0f172a',
         },
         keyframes: {
            slideUp: {
               '0%': { transform: 'translateY(100%)' },
               '100%': { transform: 'translateY(0)' },
            },
            slideDown: {
               '0%': { transform: 'translateY(0)' },
               '100%': { transform: 'translateY(100%)' },
            },
         },
         animation: {
            slideUp: 'slideUp 0.3s ease-out forwards',
            slideDown: 'slideDown 0.3s ease-in forwards',
         },
      },
   },
   content: [
      './src/**/*.{astro,html,js,jsx,ts,tsx}',
      './components/**/*.{astro,js,jsx,ts,tsx}',
      './layouts/**/*.{astro,js,jsx,ts,tsx}',
   ],
   plugins: [],
};
