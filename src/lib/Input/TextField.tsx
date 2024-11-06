import type { ChangeEvent } from 'react'
import './Field.css'

export type TextFieldProps = {
	label: string
	type: 'text' | 'url'
	name: string
	value: string
	// Decide if the value should be passed directly here.
	onChange: (event: ChangeEvent<HTMLInputElement>) => void
	required?: boolean
	placeholder?: string
}

export default ({
	label: labelProp,
	type = 'text',
	name,
	value,
	onChange,
	required = false,
	placeholder
}: TextFieldProps) => {
	const label = `${labelProp}${required ? ' *' : ''}`

	return (
		<div className="field">
			<label htmlFor={name}>{label}</label>
			<input
				id={name}
				type={type}
				name={name}
				value={value}
				onChange={onChange}
				required={required}
				placeholder={placeholder}
			/>
		</div>
	)
}
