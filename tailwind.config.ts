import type { Config } from "tailwindcss";
import relumeTailwindPreset from "@relume_io/relume-tailwind";

const config: Config = {
  content: [
    "./node_modules/@relume_io/relume-ui/dist/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  presets: [relumeTailwindPreset],
  theme: {
    extend: {
      colors: {
        // Echaraf Brand Colors
        'echaraf': {
          'blue': '#4285F4',      // Cornflower Blue - Primary
          'green': '#34A853',     // Chateau Green - Success
          'red': '#EA4335',       // Cinnabar Red - Accent
          'yellow': '#FBBC05',    // Selective Yellow - Highlight
        },
        // Custom neutrals for better section definition
        'neutral': {
          '50': '#fafafa',
          '100': '#f5f5f5',
          '200': '#e5e5e5',
          '300': '#d4d4d4',
          '400': '#a3a3a3',
          '500': '#737373',
          '600': '#525252',
          '700': '#404040',
          '800': '#262626',
          '900': '#171717',
        }
      },
      fontFamily: {
        'heading': ['Urbanist', 'sans-serif'],
        'body': ['Source Sans 3', 'sans-serif'],
      },
    },
  },
};

export default config;