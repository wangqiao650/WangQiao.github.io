import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // 使用相对路径，解决所有域名/子路径的 404 问题
  base: './', 
  
  plugins: [react()],
  
  build: {
    outDir: 'dist',
    // 强制不使用 assets 子文件夹，直接把混淆后的 JS/CSS 放在根目录
    assetsDir: '', 
    rollupOptions: {
      input: path.resolve(__dirname, 'index.html'),
    },
  },
  
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    }
  }
});
