import { useSimulatedFetch } from '../../utils/fetch'

export type Experience = {
	title: string
	logo: string
}

const educations: Experience[] = [
	{
		title: 'Erhvervsakademi Aarhus | Business Academy Aarhus logo',
		logo: 'https://media.licdn.com/dms/image/v2/D4E0BAQHF6YW9LsBx_w/company-logo_100_100/company-logo_100_100/0/1664796105183/erhvervsakademi_aarhus_business_academy_aarhus_logo?e=1738800000&v=beta&t=mWjo4bSvFaj0oKmTkO4RH9B9B-dmCgjNP7-AOZngSFw'
	}
]

export const useEducations = () => {
	return useSimulatedFetch(educations)
}
