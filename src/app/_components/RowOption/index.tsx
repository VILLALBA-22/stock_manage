import React, { ReactNode } from 'react'
import { styled } from 'styled-components'

interface RowOptionProps {
	icon: ReactNode
	name: string
	onClick: () => void
}

export const RowOption = ({ icon, name, onClick }: RowOptionProps) => {
	return (
		<RowOption.Container onClick={onClick}>
			<span className='container-icon'>{icon}</span>
			{name}
		</RowOption.Container>
	)
}

RowOption.Container = styled.button`
	width: 100%;
	display: flex;
	align-items: center;
	.container-icon {
		margin-right: 0.5rem;
	}
	color: #3f3e3e;
	font-size: 1rem;
	font-style: normal;
	font-weight: 400;
	line-height: normal;
	text-wrap: nowrap;
	margin-top: 1rem;
	transition: all ease 0.3s;
	&:hover {
		opacity: 0.7;
	}
`
