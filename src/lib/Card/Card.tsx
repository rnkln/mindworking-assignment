import type { ReactNode } from 'react'
import clsx from 'clsx'
import './Card.css'

export type CardProps = {
	children: ReactNode
	title: string
	className?: string
}

// Could do some merging with standard html button props.
// Should probably handle forwardRef, this is pre react 19.

{
	/* The main could be merged with the flex, see asChild or as patterns */
}
export default ({ children, title, className }: CardProps) => (
	<div className={clsx('card', className)}>
		<h3>{title}</h3>
		{children}
	</div>
)
