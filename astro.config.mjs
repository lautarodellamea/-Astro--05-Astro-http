import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  integrations: [mdx(), sitemap()],
  output: "hybrid",
  // en el modo hibrid, mantiene la generacion estatica por defecto a menos que le digamos que sean generado del lado del servidor
  adapter: node({
    mode: "standalone"
  })
});

// https://docs.astro.build/en/guides/integrations-guide/node/
// hybrid todo es prerender por defecto a menos que le pongamos en false 
// server todo generado del lado del servidor por defecto a menos que le pongamos el prerender en true