import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  // 加载环境变量
  const env = loadEnv(mode, '.', '');

  return {
    // 关键修改：顶级域名仓库（WangQiao.github.io）必须使用 '/'
    base: '/', 
    
    server: {
      port: 3000,
      host: '0.0.0.0',
    },
    
    plugins: [react()],
    
    define: {
      'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY || ''),
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY || '')
    },
    
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      }
    }
  };
});
