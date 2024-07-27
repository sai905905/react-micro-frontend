import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'configure-response-headers',
      configureServer: (server) => {
        server.middlewares.use((_req, res, next) => {
          res.setHeader('Access-Control-Allow-Origin', '*')
          next()
        })
      }
    }
  ],
  server: {
    port: 4002, // Change the port here
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react'],
        },
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
