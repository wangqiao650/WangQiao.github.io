import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path'; // 必须有这一行

export default defineConfig({
  base: '/', 
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true, // 确保每次清理旧的乱码文件名
  },
  resolve: {
    alias: {
      // 这一行最关键：它把 @ 符号锁定在你的项目根目录
      '@': path.resolve(__dirname, './'), 
    }
  }
});
