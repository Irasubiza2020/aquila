/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {
    extend: {
      colors: {
        primary: '#1b4965',    
        secondary: '#00509d',  
        tertiary: '#FAFAFA',   
        third: '#0496ff',     
        darkText: '#e5e5e5',   
      },
      backgroundColor: theme => ({
        ...theme('colors'),
        'dark-mode': '#121212', 
      }),
      textColor: theme => ({
        ...theme('colors'),
        'dark-mode': '#e5e5e5', 
      }),
    },
  },
  
  darkMode: 'class',  
  
  plugins: [],
}
