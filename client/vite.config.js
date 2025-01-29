import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "https://urban-edge.onrender.com",
        secure: false
      }
    }
  },
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ["react", "react-dom"]
    }
  },
  resolve: {
    alias: {
      "@": "/src"
    },
    extensions: [".js", ".jsx", ".ts", ".tsx"]
  },
  esbuild: {
    jsx: "automatic"
  }
});
