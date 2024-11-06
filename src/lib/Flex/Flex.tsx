import type { ReactNode, CSSProperties } from 'react'
import clsx from 'clsx'

export type FlexProps = {
	children: ReactNode
	direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse'
	justify?:
		| 'flex-start'
		| 'flex-end'
		| 'center'
		| 'space-between'
		| 'space-around'
		| 'space-evenly'
	align?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline'
	wrap?: 'nowrap' | 'wrap' | 'wrap-reverse'
	gap?: 0 | 1 | 2
	style?: CSSProperties
	className?: string
}

export default ({
	children,
	direction = 'row',
	justify = 'flex-start',
	align = 'stretch',
	wrap = 'nowrap',
	gap = 0,
	style,
	className
}: FlexProps) => {
	const flexStyles: CSSProperties = {
		display: 'flex',
		flexDirection: direction,
		justifyContent: justify,
		alignItems: align,
		flexWrap: wrap,
		gap: `var(--spacing-${gap})`,
		...style
	}

	return (
		<div style={flexStyles} className={clsx('flex', className)}>
			{children}
		</div>
	)
}
