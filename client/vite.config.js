import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': 'https://employeemanagementsystem-copy-production.up.railway.app',

      // '/': 'http://localhost:5200/',
      
    }
  },

  plugins: [react()],
})
