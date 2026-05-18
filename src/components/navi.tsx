// biome-ignore-all lint/nursery/noJsxPropsBind : here prop bindings are used alongside Aray.map()

// dependencies
import type { FC } from 'react'
import { useNavigate } from 'react-router-dom'

// src
import '../style/navi.scss'

export const Navi: FC<{ pages: string[] }> = ({ pages }) => {
	// event handlers
	const navigate = useNavigate()
	const _homeButton = (): void => {
		void navigate('')
	}

	// render dynamic content
	return (
		<nav>
			<button aria-label='Navigation: Home' className='logo' onClick={_homeButton} type='button'>
				<div>
					<p>C4DM</p>
				</div>
				<div>
					<p>Studios</p>
				</div>
			</button>
			<div className='navi'>
				{pages.slice(1).map((section) => (
					<button
						aria-label={`Navigation: ${section.slice(1, 2).toUpperCase()}${section.slice(2)}`}
						key={section}
						onClick={(): void => {
							void navigate(section)
						}}
						type='button'
					>
						<p>{`${section.slice(1, 2).toUpperCase()}${section.slice(2)}`}</p>
					</button>
				))}
			</div>
		</nav>
	)
}
