// biome-ignore-all lint/nursery/noJsxPropsBind : here prop bindings are used alongside Aray.map()

// dependencies
import type { FC } from 'react'
import { useNavigate } from 'react-router-dom'

// src
import '../style/navi.scss'

export const Navi: FC<{
	pages: string[]
}> = ({ pages }) => {
	const navigate = useNavigate()

	return (
		<nav>
			<button
				aria-label='Navigation: Home'
				className='logo'
				onClick={(): void => {
					void navigate('')
				}}
				type='button'
			>
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
						aria-label={`Navigation: ${section.slice(0, 1).toUpperCase()}${section.slice(1)}`}
						key={section}
						onClick={(): void => {
							void navigate(`/${section}`)
						}}
						type='button'
					>
						<p>{`${section.slice(0, 1).toUpperCase()}${section.slice(1)}`}</p>
					</button>
				))}
			</div>
		</nav>
	)
}
