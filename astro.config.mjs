import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
// al final use cloudflare por eso desactive node
// import node from "@astrojs/node";

import cloudflare from "@astrojs/cloudflare";
import db from "@astrojs/db";

import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  integrations: [mdx(), sitemap(), db(), vue()],
  output: "hybrid"
  // en el modo hibrid, mantiene la generacion estatica por defecto a menos que le digamos que sean generado del lado del servidor
  // adapter: node({
  //   mode: "standalone"
  // })
  ,
  adapter: cloudflare(),
  experimental: {
    actions: true,
  }
});

// https://docs.astro.build/en/guides/integrations-guide/node/
// hybrid todo es prerender por defecto a menos que le pongamos en false 
// server todo generado del lado del servidor por defecto a menos que le pongamos el prerender en true