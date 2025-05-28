module.exports = {
  mode: 'jit',
  // These paths are just examples, customize them to match your project structure
  purge: [
    './**/*.html',
    './**/*.{js,jsx,ts,tsx,vue}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
