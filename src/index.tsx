// dependencies
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
// src
import App from './components/App.tsx'

createRoot(document.querySelector('#root') as NonNullable<HTMLDivElement>).render(
	<StrictMode>
		<HashRouter>
			<App />
		</HashRouter>
	</StrictMode>,
)
