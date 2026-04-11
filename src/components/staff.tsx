// biome-ignore-all lint/nursery/noJsxPropsBind : here prop bindings are used alongside Aray.map()
// dependencies
import type { JSX } from 'react'

// src
import { GridFromJSON } from './modules/grid-from-json.tsx'
import '../style/staff.scss'

// config
import { type C4DMEmployee, staff } from '../config/staff.ts'

export function Staff(): JSX.Element {
	return (
		<GridFromJSON
			cell={(obj: C4DMEmployee, i: number): JSX.Element => (
				<div className='contact-staff' key={i}>
					<img alt={obj.name} height={200} src={obj.image} width={200} />
					{obj.link ? <a href={obj.link.href}>{obj.name}</a> : <p>{obj.name}</p>}
					<i>{obj.role}</i>
				</div>
			)}
			json={staff}
			maxHeight={200}
			maxWidth={320}
		/>
	)
}
