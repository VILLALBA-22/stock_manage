import { styled } from 'styled-components'
import { useDeleteProduct } from '../../hooks'

export const DeleteBtnTable = (props: any) => {
	const handleDeleteProduct = useDeleteProduct()

	const handleClick = () => {
		const currentIdProductToDelete = props?.data?.id
		handleDeleteProduct(currentIdProductToDelete)
	}

	return (
		<DeleteBtnTable.Delete onClick={handleClick}>Delete</DeleteBtnTable.Delete>
	)
}

DeleteBtnTable.Delete = styled.button`
	background-color: red;
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
