import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: './', // 👈 important to make relative paths work
  plugins: [react()],
  build: {
    outDir: 'dist', // Vercel expects this as default
  },
  css: {
    postcss: './postcss.config.js',
  },
})