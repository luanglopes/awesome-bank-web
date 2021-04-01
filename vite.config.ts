import { defineConfig } from "vite";
import { getAliases } from "vite-aliases";
import vue from "@vitejs/plugin-vue";

const aliases = getAliases({
  path: "src",
  prefix: "@/",
});

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: aliases,
  },
});
