import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Sp-Tech", // This should match the repository name or the path
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
