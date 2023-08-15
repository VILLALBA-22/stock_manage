import createNumberMask from 'text-mask-addons/dist/createNumberMask'

const maskCurrencyOptions = (allowDecimal: boolean) => ({
	prefix: '$',
	suffix: '',
	includeThousandsSeparator: true,
	thousandsSeparatorSymbol: ',',
	decimalSymbol: '.',
	decimalLimit: 2,
	integerLimit: 7,
	allowNegative: false,
	allowLeadingZeroes: false,
	allowDecimal: allowDecimal,
})

export const breakpoints = {
	mobileS: '320px',
	mobile: '576px',
	tablet: '768px',
	desktop: '1024px',
	desktopL: '1200px',
	desktopXL: '1440px',
	desktopXXL: '1600px',
}

export const isAvailableOnClientSide = typeof window !== 'undefined'

export const getFormikMessageError = (message: any) => {
	if (typeof message === 'string') return message
	return ''
}

export const currencyMask = (allowDecimal = false) =>
	createNumberMask({
		...maskCurrencyOptions(allowDecimal),
	})

export const parseCurrency = (currency: string) => {
	const parseValue = parseFloat(
		currency.replaceAll(',', '').replaceAll('$', '')
	)
	return !isNaN(parseValue) ? parseValue : 0
}
