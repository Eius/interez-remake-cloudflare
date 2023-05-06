/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '8rem',
        '2xl': '16rem',
      }
    },
    colors: {
      "primary": "#121010",
      "secondary": "#231f20",
      "gold": "#ffcb45",
      "white": "#f2f2f2",
      "gray": {
        "1": "#393838",
        "2": "#A09E9F",
      }
    },
    screens: {
      "sm": "596px",
      "md": "768px",
      "lg": "992px",
      "xl": "1200px",
      "xxl": "1400px",
    },
    extend: {},
  },
  plugins: [],
}

