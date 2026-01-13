/** @type {import('tailwindcss').Config} */
import primeUIPlugin from 'tailwindcss-primeui';
export default {
   darkMode: ['selector', '.dark'],
   content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
   plugins: [
      '@tailwindcss/postcss',
      primeUIPlugin,
      function ({ addBase, theme }) {
         function extractColorVars(colorObj, colorGroup = '') {
            return Object.keys(colorObj).reduce((vars, colorKey) => {
               const value = colorObj[colorKey];
               const newVars =
                  typeof value === 'string'
                     ? { [`--p${colorGroup}-${colorKey}`]: value }
                     : extractColorVars(value, `-${colorKey}`);

               return { ...vars, ...newVars };
            }, {});
         }

         addBase({
            ':root': extractColorVars(theme('colors'))
         });
      }
   ],
   theme: {
      screens: {
         sm: '576px',
         md: '768px',
         lg: '992px',
         xl: '1200px',
         '2xl': '1920px'
      }
   }
};
