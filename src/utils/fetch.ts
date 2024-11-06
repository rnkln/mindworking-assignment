import { useState, useEffect } from 'react'

export const useSimulatedFetch = <T>(output: T) => {
	const [data, setData] = useState<T | null>(null)

	useEffect(() => {
		const delay = Math.floor(Math.random() * 351) + 50
		const simulate = new Promise<T>((resolve) => {
			setTimeout(() => {
				resolve(output)
			}, delay)
		})

		simulate.then((result) => {
			setData(result)
		})
	}, [])

	return { data, loading: data === null } as
		| { loading: true; data: null }
		| { loading: false; data: T }
}
