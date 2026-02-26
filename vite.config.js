import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // VITE_BASE is set to '/websitebuilder/' only in the GitHub Pages workflow.
  // Vercel and local dev use '/' (default).
  base: process.env.VITE_BASE ?? '/',
})
