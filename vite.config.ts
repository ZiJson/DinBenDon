/// <reference types="vitest" />
import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  /* UNIT TEST SETUP */
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/helpers/setupTest.ts']
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  base: '/DinBenDon/'
})
