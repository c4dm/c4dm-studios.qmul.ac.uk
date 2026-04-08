// biome-ignore-all lint/nursery/noJsxPropsBind : here prop bindings are used alongside Aray.map()

// dependencies
import type { JSX } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

// src
// import '../scss/navi.scss'

export default function Navi(): JSX.Element {
	const pages = ['', 'equipment', 'documentation', 'members', 'contact']
	// const pages = ['', 'gallery', 'equipment', 'documentation', 'members', 'contact']
	const navigate = useNavigate()
	const location = useLocation().pathname.slice(1)

	// useEffect(() => {
	// 	const scrollLocation = () => {
	// 		// const scrollPos = window.scrollY + 100 // offset for header
	// 		// for (const section of pages.slice(1)) {
	// 		// 	const el = document.getElementById(section)
	// 		// 	if (!el) continue
	// 		// 	const { offsetTop, offsetHeight } = el
	// 		// 	if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
	// 		// 		navigate(`/${section}`, { replace: true })
	// 		// 		break
	// 		// 	}
	// 		// }
	// 	}

	// 	window.addEventListener('scroll', scrollLocation)
	// 	return (): void => {
	// 		window.removeEventListener('scroll', scrollLocation)
	// 	}
	// }, [])

	return (
		<nav>
			<div>
				<p>C4DM</p>
			</div>
			<div>
				<p>Studios</p>
			</div>
			{pages.slice(1).map((section) => (
				<button
					aria-label={`Navigation: ${location === section ? 'home' : section}`}
					key={section}
					onClick={(): void => {
						void navigate(location === section ? '' : `/${section}`)
					}}
					type='button'
				>
					{`${section.slice(0, 1).toUpperCase()}${section.slice(1)}`}
				</button>
			))}
		</nav>
	)
}
