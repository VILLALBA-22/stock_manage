import React, { ReactNode } from 'react'
import { screenType, size } from './types'
import { styled } from 'styled-components'

interface ButtonProps {
	children: ReactNode
	$screenType?: screenType
	$size?: size
	$disabled?: boolean
	onClick: () => void
}

export default function Button({
	children,
	$screenType,
	$size,
	$disabled,
	onClick,
}: ButtonProps) {
	return (
		<Button.Button
			onClick={onClick}
			type='button'
			$disabled={$disabled}
			$screenType={$screenType}
			$size={$size}
		>
			{children}
		</Button.Button>
	)
}

Button.Button = styled.button<{
	$screenType?: screenType
	$size?: size
	$disabled?: boolean
}>`
	display: flex;
	justify-content: center;
	align-items: center;
	width: ${({ $screenType }) =>
		$screenType === screenType.RESPONSIVE ? 'auto' : '100%'};
	padding: ${({ $size }) => ($size === size.XS ? '8px 20px' : '10px 24px')};
	transition: all 0.2s ease;
	background: #3f3e3e;
	border-radius: 0.5rem;
	overflow: hidden;
	opacity: ${({ $disabled }) => ($disabled ? '0.2' : '1')};
	pointer-events: ${({ $disabled }) => ($disabled ? 'none' : 'normal')};

	> div {
		display: flex;
		align-items: center;
		opacity: 1;
	}

	> span {
		display: inline-block;
		font-weight: bold;
		pointer-events: none;
		min-height: 17px;
	}

	&:hover {
		opacity: 0.8;
		> span {
			opacity: 0.8;
		}
	}
`
