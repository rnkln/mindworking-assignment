import MindworkingLogo from '@project/assets/mindworking.svg?react'
import Profile from './domains/profile/Profile'
import './App.css'

export default () => (
	<div className="app">
		<header>
			<MindworkingLogo />
		</header>

		{/* The main could be merged with the flex, see asChild or as patterns */}
		{/* Instead of handling data loading inside lists, it could be done here for a better UX */}
		<main>
			<Profile />
		</main>
	</div>
)
