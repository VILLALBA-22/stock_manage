import * as recoilStates from '../../_store'
import { useResetRecoilState } from 'recoil'

export const useResetStates = () => {
	const states = Object.values(recoilStates).map((state: any) =>
		// eslint-disable-next-line react-hooks/rules-of-hooks
		useResetRecoilState(state)
	)
	return () => states.forEach(reset => reset())
}
