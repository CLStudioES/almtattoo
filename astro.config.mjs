import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
  integrations: [tailwind()],
  output: "server",
  routes: [{
    path: '/index',
    handler: () => import('./pages/index.astro')
  }],
  adapter: vercel()
});