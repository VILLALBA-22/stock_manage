import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'
import { useResetStates } from '..'

export function useLogout() {
	const resetStates = useResetStates()
	const router = useRouter()

	return () => {
		resetStates()
		Cookies.remove('accessToken', { expires: 30 })
		router.replace('/login')
	}
}
