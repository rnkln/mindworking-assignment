import Flex from '../../lib/Flex/Flex'
import { useFormatDateRange } from '../../utils/useFormattedDateRange'
import type { Experience } from './useExperiences'
import './ExperienceListItem.css'

export type ExperiencesListItemProps = Experience

export default ({
	company,
	description,
	end,
	location,
	logo,
	start,
	title
}: ExperiencesListItemProps) => {
	const formatDateRange = useFormatDateRange()

	return (
		<div key={title} className="experiences-list-item">
			<img src={logo} />
			<Flex gap={1} direction="column">
				<p>{title}</p>
				<p>{company}</p>
				<p>{formatDateRange(start, end)}</p>
				<p>{location}</p>
				<div>
					<pre className="experiences-list-item-description">
						{description}
					</pre>
				</div>
			</Flex>
		</div>
	)
}
