// dependencies
import { type JSX, useEffect, useState } from 'react'
import Markdown from 'react-markdown'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'

// components
import { Navi } from './navi.tsx'
import { GridFromJSON } from './grid-from-json.tsx'

// markdown
import contact from '../config/contact.md'
import home from '../config/home.md'
import documentation from '../config/documentation.md'
import members from '../config/members.md'
import equipment from '../config/equipment.md'

// config
import { type MembersLink, links } from '../config/members.ts'

// scss
import '../style/App.scss'

// global
const pages: {
	[index: string]: string
} = {
	'/': home,
	'/equipment': equipment,
	'/documentation': documentation,
	'/members': members,
	'/contact': contact,
}

export default function App(): JSX.Element {
	const location = useLocation().pathname
	const [markdown, setMarkdown] = useState<string>('')

	useEffect(() => {
		if (pages[location]) {
			void fetch(pages[location] as RequestInfo)
				.then((res) => res.text())
				.then((text) => {
					setMarkdown(text)
				})
		} else {
			setMarkdown('')
		}
	}, [location])

	return (
		<>
			<title>{`C4DM Studios${
				location === '/' ? '' : ` | ${location.slice(1, 2).toUpperCase()}${location.slice(2)}`
			}`}</title>
			<Navi pages={Object.keys(pages).map((page) => page.slice(1))} />
			<main className={location.slice(1)}>
				<Routes>
					<Route element={<header />} path='/' />
					<Route element={<></>} path='/equipment' />
					<Route element={<></>} path='/documentation' />
					<Route
						element={
							<>
								<h1>Members Area</h1>
								<p>Below are some links </p>
								<GridFromJSON
									json={links}
									cell={(obj: MembersLink, i: number): JSX.Element => (
										<button
											aria-label={`Navigate to ${obj.text}.`}
											key={i.toString()}
											tabIndex={0}
											type='button'
											onClick={() => window.open(obj.link, '_blank')}
											onKeyDown={(e) => {
												if (e.key === 'Enter' || e.key === ' ') {
													e.preventDefault()
													window.open(obj.link, '_blank')
												}
											}}
										>
											{obj.text}
										</button>
									)}
									maxHeight={100}
									maxWidth={400}
								/>
							</>
						}
						path='/members'
					/>
					<Route element={<></>} path='/contact' />
					<Route element={<Navigate to='/' />} path='*' />
				</Routes>
				<Markdown rehypePlugins={[rehypeRaw]} remarkPlugins={[remarkGfm]}>
					{markdown}
				</Markdown>
			</main>
		</>
	)
}
