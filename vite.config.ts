import { defineConfig } from 'vite'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react(),ViteImageOptimizer()],
  server: {
    host: '0.0.0.0', 
    port: 5173,      
  },
})