import { formatterMoney } from '@/app/_config/moneyFormat'

export const CellAmount = (props: any) => {
	return <span>{formatterMoney.format(props?.data?.price)}</span>
}
