import MindworkingLogo from '@project/assets/mindworking.svg?react'
import Flex from './lib/Flex/Flex'
import Card from './lib/Card/Card'
import './App.css'

export default () => (
	<div className="app">
		<header>
			<MindworkingLogo />
		</header>

		{/* The main could be merged with the flex, see asChild or as patterns */}
		<main>
			<Flex direction="column" gap={2}>
				<Card title="Experiences">a</Card>
				<Card title="Education">a</Card>
				<Card title="Skills">a</Card>
			</Flex>
		</main>

		<footer>Footer</footer>
	</div>
)
