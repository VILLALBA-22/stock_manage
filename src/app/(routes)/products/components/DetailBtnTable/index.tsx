import { currentSelectProductState } from '@/app/_store/products'
import { useSetRecoilState } from 'recoil'
import { styled } from 'styled-components'

export const DetailBtnTable = (props: any) => {
	const setCurrentSelectProduct = useSetRecoilState(currentSelectProductState)

	const handleClick = () => {
		const currentSelectProduct = props?.data

		setCurrentSelectProduct({
			id: currentSelectProduct.id,
			dischargeDate: currentSelectProduct.id,
			name: currentSelectProduct.name,
			amount: currentSelectProduct.amount,
			price: currentSelectProduct.price,
			characteristics: currentSelectProduct.characteristics,
		})
	}

	return (
		<DetailBtnTable.Detail onClick={handleClick}> Detail</DetailBtnTable.Detail>
	)
}

DetailBtnTable.Detail = styled.button`
	background-color: #a3a3a3;
	color: #ffffff;
	font-size: 1rem;
	font-weight: 700;
	border-radius: 7px;
	padding: 0 5px;
	transition: all ease 0.3s;
	:hover {
		opacity: 0.7;
	}
`
