// dependencies
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router'

// src
import App from './components/App.tsx'

const root = document.querySelector('#root')
if (root) {
	createRoot(root).render(
		<StrictMode>
			<HashRouter>
				<App />
			</HashRouter>
		</StrictMode>,
	)
}
