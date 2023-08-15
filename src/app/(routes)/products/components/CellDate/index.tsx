import { format } from 'date-fns'

export const CellDate = (props: any) => {
	return (
		<span>{format(props?.data?.dischargeDate, 'dd/MM/yyyy hh:mm:ss')}</span>
	)
}
