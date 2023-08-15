import { useClickOutside } from '@/app/_hooks'
import React, { ReactNode, useRef } from 'react'
import { styled } from 'styled-components'

interface TooltipProps {
	isOpen: boolean
	onClose: () => void
	children: ReactNode
}

export const Tooltip = ({ isOpen, onClose, children }: TooltipProps) => {
	const refToolTip = useRef(null)

	useClickOutside(refToolTip, onClose)

	if (isOpen)
		return <Tooltip.Container ref={refToolTip}>{children}</Tooltip.Container>

	return <span style={{ display: 'none' }} />
}

Tooltip.Container = styled.div`
	z-index: 2;
	border-radius: 0.5rem;
	box-shadow: 0px 0px 3px #00000073;
	background-color: white;
	padding: 1rem;
	position: absolute;
	button:first-child {
		margin-top: 0;
	}
`
