// biome-ignore-all lint/correctness/noNodejsModules: this is a NodeJS script
import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'

const allowedExtensions = new Set(['.jpg', '.jpeg', '.png', '.webp'])
const gallery_dir = path.join(process.cwd(), 'public/images/gallery')

// list contents of gallery_dir
let files: string[] = []
try {
	files = fs
		.readdirSync(gallery_dir)
		.filter((file) => allowedExtensions.has(path.extname(file).toLowerCase()))
		.sort()
} catch {
	console.error(`No images were retrievable from /${gallery_dir}`)
	process.exit()
}
// write a json file to gallery_dir
fs.writeFileSync(
	path.join(gallery_dir, 'images.json'),
	JSON.stringify(
		files.map((file) => file),
		null,
		2,
	),
)
console.info(`Generated ${files.length.toString()} gallery entries.`)
