import React, { ReactNode } from 'react'
import styled from 'styled-components'

interface Props extends React.ComponentPropsWithoutRef<'textarea'> {
	value: string
	label?: string
	hasError?: boolean
	variation?: string
	helperText?: string | ReactNode
}

const TextArea = ({
	value,
	label,
	hasError,
	helperText,
	variation = 'default',
	...props
}: Props) => {
	const { id, disabled } = props
	return (
		<TextArea.Container>
			{label && <label htmlFor={id}>{label}</label>}
			<TextArea.InputContainer
				$isDisabled={disabled}
				$variation={variation}
				$hasError={hasError}
			>
				<textarea id={id} value={value} {...props} />
			</TextArea.InputContainer>
			<TextArea.Footer>
				<TextArea.HelperContainer>
					{helperText && (
						<TextArea.HelperText $color={'red'}>
							{helperText}
						</TextArea.HelperText>
					)}
				</TextArea.HelperContainer>
			</TextArea.Footer>
		</TextArea.Container>
	)
}

TextArea.Container = styled.div`
	display: flex;
	flex: 1;
	flex-direction: column;
	margin-top: 1rem;

	label {
		font-size: 12px;
		line-height: 16px;
		font-style: normal;
		font-weight: normal;
		margin-bottom: 0;
		color: #344054;
	}

	> span {
		font-size: 12px;
		margin-top: 8px;
		color: #344054;
	}
`

TextArea.InputContainer = styled.div<{
	$isDisabled?: boolean
	$hasError?: boolean
	$variation?: string
}>`
	box-shadow: 0px 0px 1px #00000073;
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	background: ${({ $isDisabled }) =>
		$isDisabled ? 'transparent' : 'rgba(255, 255, 239, 0.04)'};
	border: 1px solid
		${({ $hasError, $isDisabled }) =>
			$isDisabled
				? 'rgba(255, 255, 239, 0.16)'
				: $hasError
				? '#F33148'
				: '#D0D5DD'};
	border-radius: 8px;
	backdrop-filter: none;
	margin-top: 8px;
	padding: 10px 12px;
	outline: none;
	transition: all 0.4s ease;
	opacity: ${({ $isDisabled }) => ($isDisabled ? 0.3 : 1)};
	pointer-events: ${({ $isDisabled }) => ($isDisabled ? 'none' : 'auto')};
	textarea {
		width: 100%;
		font-size: 1rem;
		box-sizing: border-box;
		transition: all 0.4s ease;
		color: #667085;
		background-color: transparent;
		border: none;
		resize: none;

		::placeholder {
			font-style: normal;
			font-weight: normal;
			font-size: 14px;
			line-height: 20px;
			color: #667085;
		}

		&:focus {
			outline: none;
		}
	}

	&:hover {
		background: ${({ $isDisabled }) =>
			$isDisabled ? 'none' : 'rgba(255, 255, 239, 0.08)'};
	}
	&:focus-within {
		border: 1px solid ${({ $hasError }) => ($hasError ? '#F33148' : '#66D3D5')};
	}
`

TextArea.HelperText = styled.span<{ $color: string }>`
	font-size: 12px;
	color: ${({ $color }) => $color};
`

TextArea.Footer = styled.div`
	display: flex;
	align-items: center;
	margin-top: 8px;
`

TextArea.HelperContainer = styled.div`
	display: flex;
	flex: 1;
`

export default TextArea
