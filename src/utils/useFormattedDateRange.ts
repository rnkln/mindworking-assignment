export const useFormatDateRange = (
	locale: string = navigator.language, // navigator.language would fail in SSR :)
	options: Intl.DateTimeFormatOptions = {}
) => {
	return (start: string | Date, end: string | Date): string => {
		const startDate = new Date(start)
		const endDate = new Date(end)

		if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
			return ''
		}

		return new Intl.DateTimeFormat(locale, options).formatRange(
			startDate,
			endDate
		)
	}
}
