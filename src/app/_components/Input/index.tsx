import { ReactNode } from 'react'
import MaskedInput from 'react-text-mask'
import { css, styled } from 'styled-components'

export interface Props extends React.ComponentPropsWithRef<'input'> {
	value: string
	label?: string
	leftElement?: ReactNode
	rightElement?: ReactNode
	hasError?: boolean
	helperText?: string | ReactNode | undefined
	inputRef?: any
	mask?: any
}

export const Input = (props: Props) => {
	const {
		label,
		id,
		hasError,
		disabled,
		helperText,
		leftElement,
		inputRef,
		onChange,
		mask,
		...rest
	} = props

	return (
		<Input.Container>
			{label && <label htmlFor={id}>{label}</label>}
			<Input.Content>
				<Input.InputContainer $hasError={hasError} $isDisabled={disabled}>
					{leftElement && <Input.Element $isLeft>{leftElement}</Input.Element>}
					{!!mask ? (
						<Input.Input
							mask={mask}
							id={id}
							guide={false}
							ref={inputRef}
							onChange={onChange}
							{...rest}
						/>
					) : (
						<input id={id} ref={inputRef} onChange={onChange} {...rest} />
					)}

					{!!props?.rightElement && (
						<Input.Element>{props.rightElement}</Input.Element>
					)}
				</Input.InputContainer>
			</Input.Content>
			<Input.Footer>
				<Input.HelperContainer>
					{helperText && (
						<Input.HelperText $color={'#F33148'}>{helperText}</Input.HelperText>
					)}
				</Input.HelperContainer>
			</Input.Footer>
		</Input.Container>
	)
}

Input.Container = styled.div`
	display: flex;
	flex: 1;
	flex-direction: column;
	margin-top: 1rem;
	label {
		margin-bottom: 0;
		color: #344054;
		font-size: 0.875rem;
		font-style: normal;
		font-weight: 500;
		line-height: 1.25rem; /* 142.857% */
	}
`

Input.Content = styled.div`
	display: flex;
	width: 100%;
`

Input.HelperText = styled.span<{ $color: string }>`
	width: 100% !important;
	font-size: 12px;
	color: ${({ $color }) => $color};
`

Input.Element = styled.div<{ $isLeft?: boolean }>`
	display: flex;
	align-items: center;
	height: 100%;
	${({ $isLeft }) =>
		$isLeft
			? css`
					padding-right: 0.5rem;
			  `
			: css`
					padding-left: 0.5rem;
			  `}
`
Input.Input = styled(MaskedInput)``

Input.InputContainer = styled.div<{
	$isDisabled?: boolean
	$hasError?: boolean
}>`
	box-sizing: border-box;
	display: flex;
	align-items: center;
	position: relative;
	max-height: 40px;
	height: 40px;
	width: 100%;
	padding: 10px 12px;
	box-shadow: 0px 0px 1px #00000073;
	background: ${({ $isDisabled }) =>
		$isDisabled ? 'transparent' : 'rgba(255, 255, 239, 0.04)'};
	border: 1px solid
		${({ $hasError, $isDisabled }) =>
			$isDisabled
				? 'rgba(255, 255, 239, 0.16)'
				: $hasError
				? '#F33148'
				: '#D0D5DD'};
	border-radius: 0.5rem;
	backdrop-filter: none;
	margin-top: 8px;
	outline: none;
	transition: all 0.4s ease;
	pointer-events: ${({ $isDisabled }) => ($isDisabled ? 'none' : 'auto')};
	input {
		padding: 1px 2px;
		height: 22px;
		width: 100%;
		font-size: 1rem;
		box-sizing: border-box;
		transition: all 0.4s ease;
		color: #667085;
		background-color: transparent;
		border: none;
		::placeholder {
			font-family: 'Roboto', sans-serif;
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

Input.Footer = styled.div`
	display: flex;
	align-items: center;
	margin-top: 8px;
`
Input.HelperContainer = styled.div`
	width: 100%;
`

Input.CounterContainer = styled.div`
	display: flex;
	justify-content: flex-end;
	flex: 1;
`
