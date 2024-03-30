import { fileURLToPath, URL } from 'node:url'

import {defineConfig, splitVendorChunkPlugin} from 'vite'
import vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Pages({
      extensions: ['vue', 'md'],
    }),
    vue(),
    splitVendorChunkPlugin(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    sourcemap: true,
    assetsInlineLimit: 0,
    rollupOptions: {
      output:{
        manualChunks(id) {
          if (id.includes('@fortawesome/free-solid-svg-icons')) return 'fas';
          if (id.includes('@fortawesome/free-regular-svg-icons')) return 'far';
          if (id.includes('@fortawesome/free-brands-svg-icons')) return 'fab';
        }
      }
    }
  },
  ssgOptions: {
    dirStyle: "nested",
  }
})
