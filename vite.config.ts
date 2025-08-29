import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 8080,
  },
  base: process.env.NODE_ENV === 'production' ? '/reva-stay-find/' : '/',
  build: {
    outDir: "dist",
    assetsDir: "assets",
  },
});
