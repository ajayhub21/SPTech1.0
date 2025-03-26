import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/SPTech1.0", // This should match the repository name or the path
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
