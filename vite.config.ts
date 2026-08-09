import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pages serves project sites from /<repo-name>/ — set this to
  // your actual repo name (e.g. '/gf-site/'). Leave as '/' if you deploy
  // to a <username>.github.io repo instead.
  base: '/doiloveyou/',
})
