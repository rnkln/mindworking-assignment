import type { ReactNode } from 'react'
import clsx from 'clsx'
import './Button.css'

export type ButtonProps = {
	children: ReactNode
	onClick?: () => void
	disabled?: boolean
	type?: 'button' | 'submit' | 'reset'
	className?: string
	'aria-label'?: string
}

// Could do some merging with standard html button props.
// Should probably handle forwardRef, this is pre react 19.

export default ({
	children,
	'aria-label': ariaLabel,
	onClick,
	disabled = false,
	type = 'button',
	className
}: ButtonProps) => (
	<button
		className={clsx('button', className)}
		onClick={onClick}
		disabled={disabled}
		type={type}
		aria-label={ariaLabel}
	>
		{children}
	</button>
)
