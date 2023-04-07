import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      '/TrainOperation': {
        // target:'http://172.16.218.181:8080',
        target: 'http://172.51.215.159:8081',
        changeOrigin: true,
        // rewrite:(path) =>path.replace(/^\/api/,'')
      },
      '/AveLoadFactorofTransitNetwork': {
        // target:'http://172.16.218.181:8082',
        target: 'http://172.51.215.159:8082/',
        changeOrigin: true,
        // rewrite:(path) =>path.replace(/^\/api/,'')
      },

    }
  }
})
