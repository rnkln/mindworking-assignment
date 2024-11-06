import Flex from '../../lib/Flex/Flex'
import Card from '../../lib/Card/Card'
import ExperiencesList from '../experiences/ExperiencesList'
import EducationsList from '../education/EducationsList'
import SkillsList from '../skills/SkillsList'

export default () => (
	<Flex direction="column" gap={2}>
		<Card title="Experiences">
			<ExperiencesList />
		</Card>
		<Card title="Education">
			<EducationsList />
		</Card>
		<Card title="Skills">
			<SkillsList />
		</Card>
	</Flex>
)
