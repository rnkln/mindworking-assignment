import type { ChangeEvent } from 'react'
import './Field.css'

export type DateFieldProps = {
	label: string
	name: string
	value: string
	// Decide if the value should be passed directly here.
	onChange: (event: ChangeEvent<HTMLInputElement>) => void
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
}: DateFieldProps) => {
	const label = `${labelProp}${required ? ' *' : ''}`

	return (
		<div className="field">
			<label htmlFor={name}>{label}</label>
			<input
				id={name}
				type="date"
				name={name}
				value={value}
				onChange={onChange}
				required={required}
				placeholder={placeholder}
			/>
		</div>
	)
}
