import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import icon from 'astro-icon';

export default defineConfig({
  output: 'server',
  adapter: vercel(),
  integrations: [icon()],
  prefetch: {
    prefetchAll: false,
    defaultStrategy: 'hover',
  },
  vite: {
    server: {
      hmr: {
        clientPort: 4321,
      },
    },
  },
});