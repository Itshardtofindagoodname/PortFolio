/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'phone': "url(https://i.pinimg.com/originals/ef/71/22/ef712223565a3e97403b988c0bd39bc3.png)"
      },
      fontFamily:{
        caveat: ['Caveat'],
        inter: ['Inter Tight'],
        expletus: ['Expletus Sans']
      }
    },
  },
  plugins: [],
}

