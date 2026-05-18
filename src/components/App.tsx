/* eslint-disable sort-keys */

// dependencies
import { type JSX, useEffect } from 'react'
import Markdown from 'react-markdown'
import { useLocation, useNavigate } from 'react-router-dom'
import rehype from 'rehype-raw'

// components & scss
import { Navi } from './navi.tsx'
import { Gallery } from './gallery.tsx'
import { Staff } from './staff.tsx'
import '../style/App.scss'

// config - markdown
import contact from '../config/contact.md?raw'
import documentation from '../config/documentation.md?raw'
import equipment from '../config/equipment.md?raw'
import home from '../config/home.md?raw'
import services from '../config/services.md?raw'

// routes (this is _ordered_)
const pages: Record<string, string> = {
	'/': home,
	'/services': services,
	'/equipment': equipment,
	'/documentation': documentation,
	'/contact': contact,
}
const NULL: JSX.Element = <></>

export default function App(): JSX.Element {
	// get current path
	const location = useLocation().pathname
	// redirect to home if !pages[location]
	const navigate = useNavigate()
	useEffect((): void => {
		if (!Object.keys(pages).includes(location)) {
			void navigate('')
		}
	}, [location, navigate])

	// render dynamic content
	return (
		<>
			<title>
				{`C4DM Studios${location === '/' ? '' : ` | ${location.charAt(1).toUpperCase() + location.slice(2)}`}`}
			</title>
			<Navi pages={Object.keys(pages)} />
			<main>
				<Markdown
					components={{
						// default link behaviour
						a: ({ ...props }): JSX.Element => (
							<a
								{...(props.className && { className: props.className })}
								{...(props.download ? { download: true } : { rel: 'noopener', target: '_blank' })}
								href={props.href}
							>
								{props.children}
							</a>
						),
						// styled headers
						h1: ({ children }): JSX.Element => (
							<div className='h1'>
								<h1>{children}</h1>
							</div>
						),
						h3: ({ children }): JSX.Element => (
							<div className='h3'>
								<h3>{children}</h3>
							</div>
						),
						// JSX replacement / insertion
						script: ({ className }): JSX.Element => {
							switch (className) {
								case 'contact-staff':
									return <Staff />
								case 'home-gallery':
									return <Gallery />
								default:
									return NULL
							}
						},
					}}
					rehypePlugins={[rehype]}
				>
					{pages[location]}
				</Markdown>
			</main>
		</>
	)
}
