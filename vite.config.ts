import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/', 
  plugins: [react()],
  resolve: {
    alias: {
      // 这里的 '@' 符号如果你在代码里没用到，可以先删掉或者这样写：
      '@': '/', 
    },
  },
});
