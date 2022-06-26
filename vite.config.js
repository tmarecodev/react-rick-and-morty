import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://tmarecodev.github.io/react-rick-and-morty/",
  plugins: [react()]
})
