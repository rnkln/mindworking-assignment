import type { ChangeEvent } from 'react'
import './Field.css'

export type TextareaField = {
	label: string
	name: string
	value: string
	// Decide if the value should be passed directly here.
	onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void
	required?: boolean
	placeholder?: string
}

export default ({
	label: labelProp,
	name,
	value,
	onChange,
	required = false,
	placeholder
}: TextareaField) => {
	const label = `${labelProp}${required ? ' *' : ''}`

	return (
		<div className="field">
			<label htmlFor={name}>{label}</label>
			<textarea
				id={name}
				rows={4}
				name={name}
				value={value}
				onChange={onChange}
				required={required}
				placeholder={placeholder}
			/>
		</div>
	)
}
