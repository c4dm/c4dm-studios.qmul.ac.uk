// dependencies
/// <reference types="vite/client" />

// markdown support
declare module '*.md?raw' {
	const content: string
	export default content
}

// virtual gallery suppoer
declare module 'virtual:gallery' {
	const gallery: string[]
	export default gallery
}
