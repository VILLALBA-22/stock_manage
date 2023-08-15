import { isAvailableOnClientSide } from '@/app/_utils'
import { useEffect, useState } from 'react'

export const useWindowSize = () => {
	const [windowSize, setWindowSize] = useState({
		width: 320,
		height: undefined,
	})

	useEffect(() => {
		if (isAvailableOnClientSide) {
			const handleResize = () => {
				setWindowSize({
					width: window.innerWidth,
					height: window.innerHeight as any,
				})
			}

			window.addEventListener('resize', handleResize)

			handleResize()

			return () => window.removeEventListener('resize', handleResize)
		}
	}, [])

	return { ...windowSize, isMobile: windowSize.width < 1024 }
}
