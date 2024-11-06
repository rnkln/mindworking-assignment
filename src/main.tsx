import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
	createBrowserRouter,
	createRoutesFromElements,
	Navigate,
	Route,
	RouterProvider
} from 'react-router-dom'
import Profile from './domains/profile/Profile'
import './theme.css'
import App from './App'
import ExperienceCreate from './domains/experiences/ExperienceCreate'

// Make sure bundle splitting correctly works.
// This will grow as the application grows, could use create routers for each domain to keep things neatly packed.
const router = createBrowserRouter(
	createRoutesFromElements(
		<Route element={<App />}>
			<Route path="/" element={<Navigate to="/profile" replace />} />
			<Route path="/profile" element={<Profile />} />
			<Route
				path="/profile/add/experience"
				element={<ExperienceCreate />}
			/>
		</Route>
	)
)

const root = document.getElementById('root')

if (root) {
	createRoot(root).render(
		<StrictMode>
			<RouterProvider router={router} />
		</StrictMode>
	)
} else {
	throw new Error('Could not find root element.')
}
