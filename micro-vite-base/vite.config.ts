import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => /^micro-app/.test(tag)
        }
      }
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    host: '0.0.0.0',
    allowedHosts: ['pftl6m-5174.csb.app', 'localhost', '127.0.0.1'],
    fs: {
      strict: false
    },
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    proxy: {
      '/vite-vue3': {
        target: 'http://192.168.241.2:5173/vite-vue3',
        changeOrigin: true,
        ws: true,
        rewrite: (path) => path.replace(new RegExp(`^/vite-vue3`), '')
      }
    }
  },
  build: {
    outDir: 'web-base',
    modulePreload: {
      resolveDependencies(filename, deps) {
        return deps.filter((dep) => !dep.endsWith('.js'));
      }
    }
  }
});
