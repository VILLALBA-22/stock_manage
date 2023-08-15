import * as yup from 'yup'

export const initialValuesLogin = {
	email: '',
	password: '',
}

export const validationSchemaLogin = yup.object({
	email: yup
		.string()
		.required('This field is required')
		.email('Your email must be correct'),
	password: yup
		.string()
		.required('This field is required')
		.matches(
			/.*[a-z].*/,
			'Your password must have a least one lowercase letter'
		)
		.matches(/.*[A-Z].*/, 'Your password must have a least one capital letter')
		.matches(/.*\d.*/, 'Your password must have a least one number')
		.min(10, 'Your password must have a least 10 characters'),
})
