import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  // 加载环境变量
  const env = loadEnv(mode, '.', '');

  return {
    // 关键点：顶级域名仓库（WangQiao.github.io）必须使用 '/'
    base: '/', 

    plugins: [react()],

    define: {
      'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY || ''),
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY || '')
    },

    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      // 强制把 index.html 作为入口，解决根目录文件识别问题
      rollupOptions: {
        input: path.resolve(__dirname, 'index.html'),
      },
    },

    resolve: {
      alias: {
        // 确保 @ 别名准确指向当前根目录
        '@': path.resolve(__dirname, '.'),
      }
    }
  };
});
