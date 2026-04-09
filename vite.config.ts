import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // 顶级域名仓库必须用 '/'，如果是二级路径则用 './'
  // 鉴于你之前的情况，我们先用 '/' 配合 Actions 部署
  base: '/', 
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      // 确保 index.html 是唯一的入口
      input: path.resolve(__dirname, 'index.html'),
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    }
  }
});
