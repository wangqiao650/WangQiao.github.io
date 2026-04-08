import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  // 1. 加载环境变量 (保持你原有的逻辑)
  const env = loadEnv(mode, '.', '');

  return {
    // 2. 关键修复：确保在 GitHub Pages 顶级域名下资源路径正确
    base: '/', 
    
    server: {
      port: 3000,
      host: '0.0.0.0',
    },
    
    plugins: [react()],
    
    // 3. 注入 API KEY (保持你原有的逻辑)
  define: {
      'process.env': {}, // 建议加上这一行
      'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY || ''),
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY || '')
    },
    
    resolve: {
      alias: {
        // 4. 路径别名：既然 index.tsx 在根目录，这里指向 '.' 是正确的
        '@': path.resolve(__dirname, '.'),
      }
    }
  };
});
