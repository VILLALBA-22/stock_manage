import * as yup from 'yup'
import { valuesFormProduct } from '../../types'

export const initialValuesAddProduct = (initial: valuesFormProduct) => {
	return {
		name: initial?.name ?? '',
		amount: initial?.amount ?? '',
		unitPrice: initial?.unitPrice ?? '',
		characteristics: initial?.characteristics ?? '',
	}
}

export const validationSchemaAddProduct = yup.object({
	name: yup
		.string()
		.required('This field is required')
		.min(3, 'Write a valid name'),
	amount: yup.string().required('This field is required'),
	unitPrice: yup.string().required('This field is required'),
	characteristics: yup.string().required('This field is required'),
})
