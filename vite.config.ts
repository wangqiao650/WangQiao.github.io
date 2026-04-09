import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/', // 保持顶级域名仓库使用 '/'
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    // 移除 rollupOptions 里的 input 手动指定，让 Vite 自动处理根目录的 index.html
  },
  resolve: {
    alias: {
      '@': '/', // 将 @ 指向根目录
    }
  }
});
