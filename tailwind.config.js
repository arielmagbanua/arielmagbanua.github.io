import materialThemePreset from './material-theme-preset';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  presets: [materialThemePreset],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      transitionProperty: {
        height: 'height',
      },
      screens: {
        xs: '512px',
        '2xs': '384px',
      },
    },
  },
  plugins: [],
};
