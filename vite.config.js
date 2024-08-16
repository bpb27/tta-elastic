import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  envPrefix: 'PUBLIC',
  plugins: [react()],
  root: 'src',
  publicDir: '../public',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      utils: path.resolve(__dirname, './src/utils'),
    },
  },
  css: {
    modules: {
      localsConvention: 'camelCase',
    },
    preprocessorOptions: {
      scss: {},
    },
  },
  server: {
    hmr: true,
    port: 8080,
  },
  build: {
    outDir: '../dist',
    assetsDir: 'assets',
    rollupOptions: {},
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./test-setup/setup.js'],
    exclude: ['./unused'],
  },
});
