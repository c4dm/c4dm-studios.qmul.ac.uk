import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import { compression } from 'vite-plugin-compression2'

// https://vitejs.dev/config/
export default defineConfig({
	assetsInclude: ['**/*.md'],
	build: { sourcemap: true, target: 'ESNext' },
	esbuild: { legalComments: 'none' },
	plugins: [
		compression({
			algorithms: ['gzip'],
			include: /\.(js|map|mjs|json|css|svg)$/i,
		}),
		react(),
	],
})
