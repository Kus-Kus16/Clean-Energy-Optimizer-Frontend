import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const FRONTEND_HOST = process.env.VITE_FRONTEND_HOST || 'localhost';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port:5173
  },
  preview: {
      host: '0.0.0.0',
      port: 4173,
      allowedHosts: [FRONTEND_HOST],
  },
})
