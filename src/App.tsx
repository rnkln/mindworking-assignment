import { Outlet } from 'react-router-dom'
import MindworkingLogo from '@project/assets/mindworking.svg?react'
import './App.css'

export default () => (
	<div className="app">
		<header>
			<MindworkingLogo />
		</header>

		{/* The main could be merged with the flex, see asChild or as patterns */}
		{/* Instead of handling data loading inside lists, it could be done here for a better UX */}
		{/* Or use the loader pattern in react router dom */}
		<main>
			<Outlet />
		</main>
	</div>
)
