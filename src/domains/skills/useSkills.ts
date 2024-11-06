import { useSimulatedFetch } from '../../utils/fetch'

export type Skill = {
	name: string
	certified: boolean
	endorsements: number
}

const skills: Skill[] = [
	{ name: 'TypeScript', certified: true, endorsements: 6 },
	{ name: 'JavaScript', certified: true, endorsements: 4 },
	{ name: 'React', certified: false, endorsements: 2 }
]

export const useSkills = () => {
	return useSimulatedFetch(skills)
}
