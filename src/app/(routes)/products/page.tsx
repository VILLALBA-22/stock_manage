'use client'
import 'react-tabulator/lib/styles.css'
import { useEffect, useState } from 'react'
import { styled } from 'styled-components'
import 'ag-grid-community/styles//ag-grid.css'
import 'ag-grid-community/styles//ag-theme-alpine.css'
import { AgGridReact } from 'ag-grid-react'
import { screenType } from '@/app/_components/Button/types'
import {
	CellAmount,
	CellDate,
	CellName,
	DeleteBtnTable,
	DetailBtnTable,
	ModalFormProduct,
} from './components'
import { useRecoilState, useRecoilValue } from 'recoil'
import Button from '@/app/_components/Button'
import {
	currentProductsState,
	currentSelectProductState,
} from '@/app/_store/products'
import { breakpoints } from '@/app/_utils'

const Product = () => {
	const [currentProduct] = useRecoilState(currentProductsState)
	const currentProductSelect = useRecoilValue(currentSelectProductState)
	const [isOpenModalForm, setIsOpenModalForm] = useState(false)

	const [columnDefs, setColumnDefs] = useState([
		{
			field: 'dischargeDate',
			headerName: 'Discharge date',
			cellRenderer: CellDate,
			filter: true,
		},
		{
			field: 'name',
			headerName: 'Name',
			filter: true,
			cellRenderer: CellName,
		},
		{
			field: 'amount',
			headerName: 'Amount',
			filter: true,
		},
		{
			field: 'price',
			headerName: 'Unit Price',
			filter: true,
			cellRenderer: CellAmount,
		},
		{ field: 'delete', headerName: 'Delete', cellRenderer: DeleteBtnTable },
		{ field: 'detail', headerName: 'Detail', cellRenderer: DetailBtnTable },
	])

	const defaultColDef = {
		sortable: true,
	}

	useEffect(() => {
		if (!!currentProductSelect?.id && !isOpenModalForm) {
			setIsOpenModalForm(true)
		}
	}, [currentProductSelect.id, isOpenModalForm])

	return (
		<Product.Container>
			<Product.ContainerButtonTop>
				<Button
					$screenType={screenType.RESPONSIVE}
					onClick={() => setIsOpenModalForm(true)}
				>
					Add new
				</Button>
			</Product.ContainerButtonTop>
			<div
				className='ag-theme-alpine'
				style={{ width: '100%', height: '500px' }}
			>
				<AgGridReact
					rowData={currentProduct.map(product => ({
						...product,
						detail: '',
						delete: '',
					}))}
					columnDefs={columnDefs as any}
					defaultColDef={defaultColDef}
					animateRows={true}
					rowSelection='multiple'
				/>
			</div>
			<ModalFormProduct
				onClose={() => setIsOpenModalForm(false)}
				isOpenModalForm={isOpenModalForm}
			/>
		</Product.Container>
	)
}

Product.Container = styled.div`
	width: 100%;
	height: 100%;
	@media (max-width: ${breakpoints.desktop}) {
		padding: 0 1rem;
	}
`

Product.ContainerButtonTop = styled.div`
	margin: 1rem 0 1rem 0;
`

export default Product
