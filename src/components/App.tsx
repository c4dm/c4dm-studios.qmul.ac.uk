// dependencies
import { type JSX, useEffect, useState } from 'react'
import Markdown from 'react-markdown'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'

// components
import Navi from './navi.tsx'
import contact from '../config/contact.md'
import home from '../config/home.md'
import members from '../config/members.md'
import documentation from '../config/documentation.md'
import equipment from '../config/equipment.md'

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
			<Navi />
			<Routes>
				<Route
					element={
						<header>
							<p>C4DM Studios</p>
						</header>
					}
					path='/'
				/>
				<Route
					element={
						<main className='equipment'>
							<Markdown>{markdown}</Markdown>
						</main>
					}
					path='/equipment'
				/>
				<Route
					element={
						<main className='documentation'>
							<Markdown rehypePlugins={[rehypeRaw]} remarkPlugins={[remarkGfm]}>
								{markdown}
							</Markdown>
						</main>
					}
					path='/documentation'
				/>
				<Route
					element={
						<main className='members'>
							<Markdown>{markdown}</Markdown>
						</main>
					}
					path='/members'
				/>
				<Route
					element={
						<main className='contact'>
							<Markdown>{markdown}</Markdown>
						</main>
					}
					path='/contact'
				/>
				<Route element={<Navigate to='/' />} path='*' />
			</Routes>
		</>
	)
}
