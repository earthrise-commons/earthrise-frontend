// @ts-check
import { defineConfig } from "astro/config";

import icon from "astro-icon";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  output: "server",
  prefetch: {
    prefetchAll: true,
  },
  integrations: [icon()],
  scopedStyleStrategy: "class",
  adapter: netlify(),
  image: { domains: ["251195.xyz"] },
});
