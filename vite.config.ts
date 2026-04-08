import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');

  return {
    base: '', // 保持为空，使用相对路径
    
    plugins: [react()],
    
    define: {
      'process.env': {}, 
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY || '')
    },
    
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'), // 确保别名指向根目录
      }
    },

    build: {
      outDir: 'dist',
      assetsDir: 'assets',
    }
  };
});
