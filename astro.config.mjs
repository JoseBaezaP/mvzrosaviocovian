// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://josebaezap.github.io",
  base: "/mvzrosaviocovian.github.io/",

  vite: {
    plugins: [tailwindcss()],
  },
});
