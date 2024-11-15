import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Isso permite que o Vite use o IP local
    port: 5173, // ou qualquer outra porta que queira
  },
});
