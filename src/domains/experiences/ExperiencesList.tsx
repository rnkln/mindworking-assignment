import { useExperiences } from './useExperiences'
import ExperiencesListItem from './ExperiencesListItem'

export default () => {
	const { data, loading } = useExperiences()

	if (loading) {
		return 'Loading...'
	}

	return (
		<div className="experiences-list">
			{data.map((experience) => (
				<ExperiencesListItem key={experience.title} {...experience} />
			))}
		</div>
	)
}
