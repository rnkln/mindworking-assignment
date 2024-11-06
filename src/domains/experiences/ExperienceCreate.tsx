import { useNavigate } from 'react-router-dom'
import ExperienceForm from './ExperienceForm'

export default () => {
	const navigate = useNavigate()

	// Handle the actual creation of the exeperience, await backend and then navigate to profile.
	return <ExperienceForm onSubmit={() => navigate('/profile')} />
}
