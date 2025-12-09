import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "MyReactProjects/04-cards-project/",
  plugins: [react()],
})
