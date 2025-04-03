import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  server: {
    // hmr: true, // Enable Hot Module Replacement
    host: 'localhost',
    port: 5173,
    watch: {
      usePolling: true,   // 🔥 force file watching via polling
      interval: 100,      // optional tweak
    },
  },
  plugins: [vue()],
})
