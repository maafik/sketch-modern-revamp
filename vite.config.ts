import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/sketch-modern-revamp/', // ⚠️ замените на своё
})