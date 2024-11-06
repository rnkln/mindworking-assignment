import { useExperiences } from './useExperiences'
import ExperiencesListItem from './ExperiencesListItem'
import Button from '../../lib/Button/Button'
import { useNavigate } from 'react-router-dom'

export default () => {
	const { data, loading } = useExperiences()
	const navigate = useNavigate()

	if (loading) {
		return 'Loading...'
	}

	return (
		<div className="experiences-list">
			{data.map((experience) => (
				<ExperiencesListItem key={experience.title} {...experience} />
			))}

			{/* Should really make this an anchor with button styling */}
			<Button onClick={() => navigate('/profile/add/experience')}>
				Add new experience
			</Button>
		</div>
	)
}
