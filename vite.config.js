import handlebars from '@vituum/vite-plugin-handlebars';
import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    handlebars({
      partials: resolve(__dirname, 'src/partials'),
      reload: true
    }),
  ],
  build: {
    rollupOptions: {
      input: './src/js/scripts.js', // The entry point for your JavaScript code
      output: {
        format: 'es',
        dir: './dist',
        entryFileNames: 'scripts.js',
      },
    },
  },
});
