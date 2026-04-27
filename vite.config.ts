import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    chunkSizeWarningLimit: 750,
    rollupOptions: {
      output: {
        manualChunks(id) {
          const normalizedId = id.replace(/\\/g, '/');
          if (normalizedId.includes('node_modules')) {
            if (normalizedId.includes('@react-three/fiber')) {
              return 'chunk-r3f';
            }
            if (normalizedId.includes('@react-three/drei')) {
              return 'chunk-drei';
            }
            if (normalizedId.includes('/three/src/renderers/')) {
              return 'chunk-three-renderers';
            }
            if (normalizedId.includes('/three/src/materials/')) {
              return 'chunk-three-materials';
            }
            if (normalizedId.includes('/three/src/geometries/')) {
              return 'chunk-three-geometries';
            }
            if (normalizedId.includes('/three/src/math/')) {
              return 'chunk-three-math';
            }
            if (normalizedId.includes('/three/src/core/')) {
              return 'chunk-three-internals';
            }
            if (normalizedId.includes('/three/src/objects/')) {
              return 'chunk-three-objects';
            }
            if (normalizedId.includes('/three/')) {
              return 'chunk-three-core';
            }
            if (normalizedId.includes('/gsap/')) {
              return 'chunk-gsap';
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
