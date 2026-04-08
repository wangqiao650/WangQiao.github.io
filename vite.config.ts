import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  return {
    base: '', // 改为空字符串，使用相对路径
    // ... 其他配置保持不变
  };
});
