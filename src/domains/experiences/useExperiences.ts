import { useSimulatedFetch } from '../../utils/fetch'

export type Experience = {
	title: string
	company: string
	start: Date
	end: Date
	logo: string
	location: string
	description: string
}

const experiences: Experience[] = [
	{
		title: 'Frontend Developer',
		company: 'LunarWay A/S',
		logo: 'https://media.licdn.com/dms/image/v2/C560BAQEnkTF3tOSVgQ/company-logo_100_100/company-logo_100_100/0/1674057880847/lunarbank_logo?e=1738800000&v=beta&t=HcOIjSRjHpVGD_hN3VI4_hVLlWmbFBI1znBqiHE6Vb0',
		start: new Date('2022-08-01'),
		end: new Date('2024-10-01'),
		location: 'Denmark',
		description:
			"Primarily responsible for developing new features and writing tests for the Lunar web banking experience, while maintaining the hosting setup with NextJS and Vercel, ensuring the availability of necessary environments.\n\nLead development on a project designed to enable online payment, using credit cards, MobilePay, and Apple Pay. Introduced a modern developer environment and tool stack, that served as a foundation for upgrading other web applications in the organization. The result was an improved developer experience, a faster GitHub workflow, and a more performant web applications.\n\nDeveloped an internal Git-backed document hosting solution for legal documents, that enabled the Legal team to easily create, edit, and update their documents with full confidence that all changes was kept in the git history. This was created using TinaCMS, featuring authentication against internal Okta.\n\nTo ensure a coherent experience and accelerate development across all web experiences, I led the creation of an internal React component library based on the organization's design system. This involved Storybook, automatic tests, and package management."
	},
	{
		title: 'Frontend Developer',
		company: 'team.blue Denmark',
		logo: 'https://media.licdn.com/dms/image/v2/C560BAQHpItfrFiiQYA/company-logo_100_100/company-logo_100_100/0/1630613435502/zitcom_as_logo?e=1738800000&v=beta&t=pdQ_qxsIcbLxQdrYLXtYiquS5iMpMUMDUnXQXYFcHc4',
		start: new Date('2024-10-01'),
		end: new Date('2019-03-01'),
		location: 'Denmark',
		description:
			"Rebooted a React frontend project that had stalled in development after ~2 years, and successfully deployed to production after 6 months. Responsible for hiring, building, and guiding a in house and a remote team to develop and maintain the administration.\n\nIntroduced a modern infrastructure, creating a developer environment with tooling for linting, formatting, automatic test, package management, and deploy flows using Docker and GitLab CI/CD.\n\nAssisted operations in building the hosting infrastructure and collaborated closely with the backend team to design the GraphQL API with a frontend-first approach.\n\nWorked with designers and UX teams to build a React component library for the project based on the organization's design system, which later was used by multiple projects to accelerate the development process across the organization.\n\nWorked with the support team as part of the application's feedback loop to identify and solve problematic user experiences in collaboration with the UX team."
	},
	{
		title: 'Software Developer',
		company: 'Peopleway A/S',
		logo: 'https://media.licdn.com/dms/image/v2/D4E0BAQFZNPoNcXDsIQ/company-logo_100_100/company-logo_100_100/0/1685969204921/peopleway_a_s_logo?e=1738800000&v=beta&t=9mOTyZKmqiBT3yd-0GC9NFQOYm412xUfCuxVydu2p-M',
		start: new Date('2011-08-01'),
		end: new Date('2019-03-01'),
		location: 'Denmark',
		description:
			'Responsible for design, architecture, development and deployment of both frontend and backend. Technologies used include Java, JavaScript, React, Redux, REST, GraphQL, Babel, Webpack and Microsoft SQL Server.\n\nAdministration, configuration and maintenance of internal and production network etc. workstations, routers, printers and servers running services Microsoft Exchange & SQL Server, Apache httpd & Tomcat, OpenVPN, Subversion, Git and Office 365.\n\nSupervisor for computer science interns and project manager on internal projects.'
	}
]

export const useExperiences = () => {
	return useSimulatedFetch(experiences)
}
