/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Ajoutez les extensions de fichiers React
  ],
  theme: {
    extend: {
      fontFamily: {
     
        lobster: ["Lobster", 'sans-serif'], 
        roboto : ["Roboto",'sans-serif']
      },
    },
  },
  plugins: [],
};
