import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/', // or '/REPO_NAME/' if deploying to username.github.io/REPO_NAME
  plugins: [react()],
})
