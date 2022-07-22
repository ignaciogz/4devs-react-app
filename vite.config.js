import { defineConfig } from 'vite'
import mkcert from 'vite-plugin-mkcert'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    https: true,
    port: 8081,
    strictPort: true,
  },
  plugins: [react(), mkcert()],
})
