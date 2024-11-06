import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'

const root = document.getElementById('root')

if (root) {
	createRoot(root).render(
		<StrictMode>
			<App />
		</StrictMode>
	)
} else {
	throw new Error('Could not find root element.')
}