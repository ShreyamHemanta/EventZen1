import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
    port: 3000,
    watch: {
      usePolling: true,
    },
    fs: {
      strict: false,
    },
    hmr: true,
    proxy: {},
    middlewareMode: false,
    historyApiFallback: true,
  },
  build: {
    target: 'esnext',
    outDir: 'dist',
    assetsDir: 'assets',
  },
  resolve: {
    alias: {
      '@': '/src',
    },
    extensions: ['.js', '.jsx'], // Ensure JSX and JS files are resolved
  },
});
