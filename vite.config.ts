import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          const normalizedId = id.replace(/\\/g, '/');
          if (normalizedId.includes('node_modules')) {
            if (normalizedId.match(/(@react-three|three|gsap)/)) {
              return 'chunk-three';
            }
            if (normalizedId.includes('framer-motion')) {
              return 'chunk-motion';
            }
            return;
          }

          if (normalizedId.includes('/src/three/')) {
            return 'chunk-hero-scene';
          }

          if (normalizedId.includes('/src/components/sections/Projects') || normalizedId.includes('/src/components/sections/Experience')) {
            return 'chunk-case-studies';
          }
        },
      },
    },
  },
})
