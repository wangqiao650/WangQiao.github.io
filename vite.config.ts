import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  base: '/', 
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    // 确保没有其他复杂的路径重写
  },
  resolve: {
    alias: {
      // 这里的标识符要和你的代码习惯对应
      '@': path.resolve(__dirname, './'), 
    }
  }
});
