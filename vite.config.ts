// biome-ignore-all lint/correctness/noNodejsModules : this script is ran by node js at build time
// biome-ignore-all lint/nursery/useExplicitReturnType : vite plugin methods are typed internally, and cannot be imported
/* eslint-disable no-undefined */

// core
import fs from 'node:fs'
import path from 'node:path'

// dependencies
import react from '@vitejs/plugin-react'
import { type Plugin, defineConfig } from 'vite'
import { compression } from 'vite-plugin-compression2'

// globals
const regex = {
	compression_filetypes: /\.(?:js|map|mjs|json|css|svg)$/iu,
	image_filetypes: /\.(?:jpg|jpeg|png|webp)$/iu,
}

// custom plugins
const galleryManifestPlugin = (): Plugin => ({
	load(id) {
		if (id !== '\0virtual:gallery') {
			return null
		}
		const dir = path.resolve('public/images/gallery')
		const files = fs
			.readdirSync(dir)
			.filter((f) => regex.image_filetypes.test(f))
			.sort()
		return `export default ${JSON.stringify(files)}`
	},
	name: 'gallery-manifest',
	resolveId(id) {
		return id === 'virtual:gallery' ? '\0virtual:gallery' : undefined
	},
})

// https://vitejs.dev/config/
export default defineConfig({
	build: {
		rolldownOptions: {
			output: {
				comments: {
					annotation: false,
					jsdoc: false,
					legal: false,
				},
			},
		},
		target: 'baseline-widely-available',
	},
	plugins: [
		compression({
			algorithms: ['gzip'],
			include: regex.compression_filetypes,
		}),
		galleryManifestPlugin(),
		react(),
	],
})
