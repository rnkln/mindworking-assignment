import { useState, type ChangeEvent, type FormEvent } from 'react'
import type { Experience } from './useExperiences'
import Flex from '../../lib/Flex/Flex'
import TextField from '../../lib/Input/TextField'
import TextareaField from '../../lib/Input/TextareaField'
import Button from '../../lib/Button/Button'
import DateField from '../../lib/Input/DateField'

const defaultFormValues: Experience = {
	title: '',
	company: '',
	start: new Date(),
	end: new Date(),
	logo: '',
	location: '',
	description: ''
}

export type ExperienceFormProps = {
	defaultValues?: Experience
	onSubmit?: (experience: Experience) => void
}

// Input component could be seperated into it's own file
// Using a form library to handle state management and validation with zod, yup eg.
export default ({
	defaultValues = defaultFormValues,
	onSubmit
}: ExperienceFormProps) => {
	const [experience, setExperience] = useState<Experience>(defaultValues)

	const handleChange = (
		event: ChangeEvent<
			HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
		>
	) => {
		const { name, value } = event.target
		setExperience({
			...experience,
			[name]: value
		})
	}

	const handleDateChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target
		setExperience({
			...experience,
			[name]: new Date(value)
		})
	}

	const handleSubmit = (event: FormEvent) => {
		event.preventDefault()

		if (onSubmit) {
			onSubmit(experience)
		}
	}

	return (
		<form onSubmit={handleSubmit}>
			<Flex direction="column" gap={1}>
				<TextField
					type="text"
					label="Title"
					name="title"
					value={experience.title}
					onChange={handleChange}
					required
				/>

				<TextField
					type="text"
					label="Company"
					name="company"
					value={experience.company}
					onChange={handleChange}
					required
				/>

				<DateField
					label="Start Date:"
					name="start"
					value={experience.end.toISOString().substring(0, 10)}
					onChange={handleDateChange}
					required
				/>

				<DateField
					label="End Date:"
					name="end"
					value={experience.end.toISOString().substring(0, 10)}
					onChange={handleDateChange}
					required
				/>

				<TextField
					type="text"
					label="Logo"
					name="logo"
					value={experience.logo}
					onChange={handleChange}
					required
				/>

				<TextField
					type="text"
					label="Location"
					name="location"
					value={experience.location}
					onChange={handleChange}
					required
				/>

				<TextareaField
					label="Description"
					name="description"
					value={experience.description}
					onChange={handleChange}
					required
				/>

				<Button type="submit">Create</Button>
			</Flex>
		</form>
	)
}
