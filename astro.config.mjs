// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // 1. GITHUB PAGES ROUTING INSTRUCTIONS
  // Tells Astro your absolute domain
  site: 'https://MuhammadKurniaSani-me.github.io',
  
  // Tells Astro the website lives inside this specific folder
  base: '/portfolio',

  // 2. YOUR STYLING ENGINE
  // Hooks Tailwind v4 directly into the Vite bundler
  vite: {
    plugins: [tailwindcss()]
  }
});