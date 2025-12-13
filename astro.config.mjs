import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless'; // ← Cambia a serverless
export default defineConfig({
  output: 'server',
  adapter: vercel(),
});