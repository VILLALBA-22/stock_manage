import { currentProductsState } from '@/app/_store/products'
import { toast } from 'react-hot-toast'
import { useSetRecoilState } from 'recoil'

export const useDeleteProduct = () => {
	const setCurrentProducts = useSetRecoilState(currentProductsState)

	return (idProductToDelete: string) => {
		setCurrentProducts(prevState =>
			prevState.filter(({ id }) => id !== idProductToDelete)
		)
		toast.success('Successfully deleted!', {
			duration: 4000,
		})
	}
}
