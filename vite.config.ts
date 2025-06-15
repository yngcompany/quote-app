import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  base: '/quote-app/', // 깃허브 저장소 이름
  plugins: [vue()],
})
