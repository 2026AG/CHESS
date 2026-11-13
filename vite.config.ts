import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const base = env.VITE_BASE_PATH || '/CHESS/';
  return {
    base,
    plugins: [
      react(),
      tailwindcss(),
      VitePWA({
        registerType: 'autoUpdate',
        manifest: {
          name: 'KEMET CHESS — Шахматы Древнего Мира',
          short_name: 'Kemet Chess',
          start_url: base,
          scope: base,
          display: 'standalone',
          background_color: '#14100c',
          theme_color: '#14100c',
          icons: [
            { src: 'icons/icon-192.png', sizes: '192x192', type: 'image/png' },
            { src: 'icons/icon-512.png', sizes: '512x512', type: 'image/png' },
          ],
        },
      }),
    ],
    test: { environment: 'node', include: ['src/**/*.test.ts'] },
  };
});
