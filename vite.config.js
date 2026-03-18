import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // Add this
import autoprefixer from 'autoprefixer'

export default defineConfig({
  plugins: [
    autoprefixer(),
    react(),
    tailwindcss(), // Add this
  ],
})