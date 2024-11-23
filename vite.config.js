import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command }) =>{
  const config = {
    plugins: [react()],
    // server: {
    //   host: true
    // },
    base: "/", 
  }

  if (command !== 'deploy') {
    config.base = '/adv-soft-eng/';
  }

  return config
})
