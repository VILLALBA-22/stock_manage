import { Input } from '@/app/_components'
import Button from '@/app/_components/Button'
import Modal from '@/app/_components/Modal'
import TextArea from '@/app/_components/TextArea'
import { useFormik } from 'formik'
import React from 'react'
import { styled } from 'styled-components'
import { initialValuesAddProduct, validationSchemaAddProduct } from './formik'
import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil'
import {
	currentProductsState,
	currentSelectProductState,
} from '@/app/_store/products'
import {
	currencyMask,
	getFormikMessageError,
	parseCurrency,
} from '@/app/_utils'
import { useDeleteProduct } from '../../hooks'
import { toast } from 'react-hot-toast'

interface ModalFormProductProps {
	isOpenModalForm: boolean
	onClose: () => void
}

export const ModalFormProduct = ({
	isOpenModalForm,
	onClose,
}: ModalFormProductProps) => {
	const [, setCurrentProducts] = useRecoilState(currentProductsState)
	const currentProductSelect = useRecoilValue(currentSelectProductState)
	const resetSelectProduct = useResetRecoilState(currentSelectProductState)
	const hasSelectProduct = !!currentProductSelect.id
	const deleteProduct = useDeleteProduct()

	const handleOnClose = () => {
		resetSelectProduct()
		onClose()
	}

	const handleDeleteProduct = () => {
		handleOnClose()
		deleteProduct(currentProductSelect.id)
	}

	const handleAddProduct = ({
		name,
		unitPrice,
		characteristics,
		amount,
	}: any) => {
		toast.success('Successfully added!', {
			duration: 4000,
		})
		setCurrentProducts(prevState => [
			...prevState,
			{
				id: `product ${name}`,
				name,
				dischargeDate: Date.now(),
				price: parseCurrency(unitPrice ?? 0),
				characteristics,
				amount: parseInt(amount ?? 0),
			},
		])
		handleOnClose()
		resetForm()
	}

	const {
		values,
		errors,
		touched,
		dirty,
		handleBlur,
		handleChange,
		handleSubmit,
		resetForm,
	} = useFormik({
		enableReinitialize: true,
		initialValues: initialValuesAddProduct({
			name: currentProductSelect.name,
			dischargeDate: currentProductSelect.dischargeDate,
			amount: !!currentProductSelect.amount
				? String(currentProductSelect.amount)
				: '',
			unitPrice: !!currentProductSelect.price
				? String(currentProductSelect.price)
				: '',
			characteristics: currentProductSelect.characteristics,
		}),
		validationSchema: validationSchemaAddProduct,
		onSubmit: handleAddProduct,
	})

	return (
		<Modal onOpen={isOpenModalForm} onClose={handleOnClose}>
			<ModalFormProduct.Container>
				<h2>{hasSelectProduct ? 'Detail Product' : 'Add Product'}</h2>
				<Input
					readOnly={hasSelectProduct}
					disabled={hasSelectProduct}
					hasError={!!errors?.name && !!touched.name}
					helperText={
						errors?.name && touched.name && getFormikMessageError(errors?.name)
					}
					type='text'
					placeholder='Write the name'
					name='name'
					onChange={handleChange}
					onBlur={handleBlur}
					value={values.name}
					label='Name'
				/>
				<Input
					readOnly={hasSelectProduct}
					disabled={hasSelectProduct}
					hasError={!!errors?.amount && !!touched.amount}
					helperText={
						errors?.amount &&
						touched.amount &&
						getFormikMessageError(errors?.amount)
					}
					type='number'
					placeholder='Write the amount'
					name='amount'
					onChange={handleChange}
					onBlur={handleBlur}
					value={values.amount}
					label='Amount'
				/>
				<Input
					id='price-unit'
					type='text'
					mask={currencyMask()}
					readOnly={hasSelectProduct}
					disabled={hasSelectProduct}
					hasError={!!errors?.unitPrice && !!touched.unitPrice}
					helperText={
						errors?.unitPrice &&
						touched.unitPrice &&
						getFormikMessageError(errors?.unitPrice)
					}
					placeholder='Write the price'
					name='unitPrice'
					onChange={handleChange}
					onBlur={handleBlur}
					value={values.unitPrice}
					label='Unit price'
				/>
				<TextArea
					readOnly={hasSelectProduct}
					disabled={hasSelectProduct}
					hasError={!!errors?.characteristics && !!touched.characteristics}
					helperText={
						!!errors?.characteristics &&
						!!touched.characteristics &&
						getFormikMessageError(errors?.characteristics)
					}
					placeholder='Write the characteristics'
					name='characteristics'
					onChange={handleChange}
					onBlur={handleBlur}
					value={values.characteristics}
					label='Characteristics'
				/>
			</ModalFormProduct.Container>
			<ModalFormProduct.ContainerSubmitBtn>
				{hasSelectProduct ? (
					<Button onClick={handleDeleteProduct}>Delete</Button>
				) : (
					<Button
						$disabled={Object.values(errors).length > 0 || !dirty}
						onClick={handleSubmit}
					>
						Add
					</Button>
				)}
			</ModalFormProduct.ContainerSubmitBtn>
		</Modal>
	)
}

ModalFormProduct.Container = styled.div`
	h2 {
		color: #3f3e3e;
		font-size: 1rem;
		font-style: normal;
		font-weight: 500;
		line-height: normal;
	}
`

ModalFormProduct.ContainerSubmitBtn = styled.div`
	margin-top: 1rem;
`
