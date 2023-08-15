import { atom } from 'recoil'
import { productsType, productType } from './types'
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist()

export const currentProductsState = atom<productsType>({
	key: 'currentProductsState',
	default: [
		{
			id: 'product-1',
			name: 'Toyota',
			dischargeDate: 1692049637957,
			price: 50000,
			characteristics: 'A lot of quality',
			amount: 9,
		},
		{
			id: 'product-2',
			name: 'Ford',
			dischargeDate: 1692060218313,
			price: 20000,
			characteristics: 'Good relationship between quality and cost ',
			amount: 10,
		},
		{
			id: 'product-3',
			name: 'Porsche',
			dischargeDate: 1692060239253,
			price: 500000,
			characteristics: 'Pretty fancy',
			amount: 1,
		},
	],
	effects_UNSTABLE: [persistAtom],
})

export const currentSelectProductState = atom<productType>({
	key: 'currentSelectProductState',
	default: {
		id: '',
		dischargeDate: 1692049637957,
		name: '',
		amount: 0,
		price: 0,
		characteristics: '',
	},
})
