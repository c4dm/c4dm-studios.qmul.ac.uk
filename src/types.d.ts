// dependencies
/// <reference types="vite/client" />

// markdown support
declare module '*.md?raw' {
	const content: string
	export default content
}

// fileames within /public/images/gallery
declare module 'virtual:gallery' {
	const gallery: string[]
	export default gallery
}
