/** @type {import('tailwindcss').Config} */
export default {
   theme: {
      extend: {
         // fontFamily: {
         //    montserrat: ['Montserrat', 'sans-serif'],
         // },

         colors: {
            debug: '#00ffff',
            background_top: '#fffffff',
            background_bottom: '#fffffff',
            text_banner: '#fffffff',
            line_cards: '#ffffff',

            // Gal-Cleanup brand colors – aqua blue palette
            brand: {
               50: '#ecfeff',
               100: '#cffafe',
               200: '#a5f3fc',
               300: '#67e8f9',
               400: '#22d3ee',
               500: '#06b6d4',
               600: '#0891b2',
               700: '#0e7490',
               800: '#155e75',
               900: '#164e63',
               950: '#083344',
            },
            cream: '#ecfeff',
            dark: '#071e27',
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
      './sections/**/*.{astro,js,jsx,ts,tsx}',
   ],
   plugins: [],
};
