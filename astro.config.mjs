import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/static'; // o '@astrojs/vercel/serverless' si usas SSR

// https://astro.build/config
export default defineConfig({
  output: 'server', // ← Solo si estás usando SSR en alguna página
  adapter: vercel(),
});