import { useSkills } from './useSkills'
import './SkillsList.css'

export default () => {
	const { data, loading } = useSkills()

	if (loading) {
		return 'Loading...'
	}

	return (
		<div className="skills-list">
			{data.map((skill) => (
				<div key={skill.name} className="skills-list-skill">
					<div>
						{skill.name}
						{skill.certified && <span>✅</span>}
					</div>
					<p>{`Endorsed by ${skill.endorsements} people`}</p>
				</div>
			))}
		</div>
	)
}

// Often i would turn the actual item into a component, this is too simple.
