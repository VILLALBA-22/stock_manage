import { styled } from 'styled-components'

export const CellName = (props: any) => {
	return <CellName.Name>{props?.data?.name}</CellName.Name>
}

CellName.Name = styled.span`
	text-transform: uppercase;
`
