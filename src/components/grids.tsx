// biome-ignore-all lint/performance/noJsxPropsBind : here prop bindings are used alongside Aray.map()

// dependencies
import type { JSX } from 'react'

// src
import { GridFromJSON } from './modules/grid-from-json.tsx'
import '../style/staff.scss'

// config
import { type Affiliation, affiliations } from '../config/affiliations.ts'
import { type C4DMEmployee, staff } from '../config/staff.ts'

export function Affiliations(): JSX.Element {
	return (
		<GridFromJSON
			cell={(obj: Affiliation, i: number): JSX.Element => (
				<div className='contact-affiliations' key={i}>
					<a href={obj.link.href} rel='noopener' target='_blank'>
						<img alt={obj.name} height={150} src={obj.image} width={150} />
					</a>
				</div>
			)}
			json={affiliations}
			maxHeight={150}
			maxWidth={150}
		/>
	)
}

export function Staff(): JSX.Element {
	return (
		<GridFromJSON
			cell={(obj: C4DMEmployee, i: number): JSX.Element => (
				<div className='contact-staff' key={i}>
					<img alt={obj.name} height={200} src={obj.image} width={200} />
					{obj.link ? (
						<a href={obj.link.href} rel='noopener' target='_blank'>
							{obj.name}
						</a>
					) : (
						<p>{obj.name}</p>
					)}
					<i>{obj.role}</i>
				</div>
			)}
			json={staff}
			maxHeight={200}
			maxWidth={320}
		/>
	)
}
