// tailwind.config.ts
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',// 👈 Required for class-based dark mode
  theme: {
    extend: {
      fontFamily: {
  cartoon: ['Fredoka', 'cursive'],
}
    },
  },
  plugins: [],
}
