// biome-ignore-all lint/nursery/noJsxPropsBind : here prop bindings are used alongside Aray.map()
/* eslint-disable sort-keys */

// dependencies
import { type JSX, useEffect } from 'react'
import Markdown from 'react-markdown'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import rehypeRaw from 'rehype-raw'

// components
import { Navi } from './navi.tsx'
import { GridFromJSON } from './grid-from-json.tsx'
import '../style/App.scss'
import '../style/contact.scss'

// markdown
import contact from '../config/contact.md?raw'
import home from '../config/home.md?raw'
import documentation from '../config/documentation.md?raw'
import members from '../config/members.md?raw'
import equipment from '../config/equipment.md?raw'

// config
import { type MembersLink, links } from '../config/members.ts'
import { type C4DMEmployee, Staff } from '../config/staff.ts'

// routes
const pages: Record<string, string> = {
	'/': home,
	'/equipment': equipment,
	'/documentation': documentation,
	'/members': members,
	'/contact': contact,
}

export default function App(): JSX.Element {
	// redirect
	const location = useLocation().pathname
	const navigate = useNavigate()
	useEffect(() => {
		if (!Object.keys(pages).includes(location)) {
			void navigate('')
		}
	}, [location, navigate])

	return (
		<>
			<title>{`C4DM Studios${
				location === '/' ? '' : ` | ${location.slice(1, 2).toUpperCase()}${location.slice(2)}`
			}`}</title>
			<Navi pages={Object.keys(pages).map((page) => page.slice(1))} />
			<main>
				<Markdown
					components={{
						h1: ({ children }): JSX.Element => (
							<div className='h1'>
								<h1>{children}</h1>
							</div>
						),
						script: (): JSX.Element => (
							<Routes>
								<Route
									element={
										<GridFromJSON
											cell={(obj: MembersLink, i: number): JSX.Element => (
												<button
													aria-label={`Navigate to ${obj.text}.`}
													key={i.toString()}
													onClick={(): Window | null => window.open(obj.link, '_blank')}
													onKeyDown={(e): void => {
														if (e.key === 'Enter' || e.key === ' ') {
															e.preventDefault()
															window.open(obj.link, '_blank')
														}
													}}
													tabIndex={0}
													type='button'
												>
													{obj.text}
												</button>
											)}
											json={links}
											maxHeight={100}
											maxWidth={320}
										/>
									}
									path='/members'
								/>
								<Route
									element={
										<GridFromJSON
											cell={(obj: C4DMEmployee, i: number): JSX.Element => (
												<div className='contact-headshots' key={i}>
													<img
														alt={obj.name}
														height={200}
														src={obj.image ?? '/images/edward-hoskins.jpeg'}
														width={200}
													/>
													{obj.link ? <a href={obj.link.href}>{obj.name}</a> : <p>{obj.name}</p>}
													<i>{obj.role}</i>
												</div>
											)}
											json={Staff}
											maxHeight={200}
											maxWidth={320}
										/>
									}
									path='/contact'
								/>
							</Routes>
						),
					}}
					rehypePlugins={[rehypeRaw]}
				>
					{pages[location]}
				</Markdown>
			</main>
		</>
	)
}
