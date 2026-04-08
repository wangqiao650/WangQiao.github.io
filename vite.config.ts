import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');

  return {
    // 关键：确保 base 为 '/'
    base: '/', 
    
    plugins: [react()],
    
    define: {
      'process.env': {}, // 防止某些库报错
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY || '')
    },
    
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      }
    },

    // 显式指定打包配置
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
    }
  };
});
