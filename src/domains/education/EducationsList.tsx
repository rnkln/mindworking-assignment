import { useEducations } from './useEducations'
import './EducationsList.css'
import Flex from '../../lib/Flex/Flex'

export default () => {
	const { data, loading } = useEducations()

	if (loading) {
		return 'Loading...'
	}

	return (
		<div className="education-list">
			{data.map((education) => (
				<Flex key={education.title} className="educations-list-item">
					<img src={education.logo} />
					<p>{education.title}</p>
				</Flex>
			))}
		</div>
	)
}
