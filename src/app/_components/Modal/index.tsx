import { ReactNode } from 'react'
import styled from 'styled-components'
import { MdOutlineClose } from 'react-icons/md'
import usePortal from 'react-useportal'
import { Transition } from 'react-transition-group'

type ChildrenProps = {
	onClick?: (value: any) => void
	stateTransaction: string
}

interface ModalProps {
	onOpen: boolean
	onClose: () => void
	children: ReactNode
}

const Modal = ({ onOpen, onClose, children }: ModalProps) => {
	const { Portal, portalRef } = usePortal() as any

	const handleOnClose = () => {
		onClose()
	}

	return (
		<Transition
			in={onOpen}
			timeout={{
				appear: 500,
				exit: 500,
			}}
			unmountOnExit
			mountOnEnter
		>
			{state => {
				return (
					<Portal>
						<Modal.Container>
							<Modal.Backdrop
								onClick={handleOnClose}
								stateTransaction={state}
							/>
							<Modal.ContainerCloseBtn stateTransaction={state}>
								<Modal.CloseButton onClick={onClose}>
									<MdOutlineClose size={16} color={'white'} />
								</Modal.CloseButton>
							</Modal.ContainerCloseBtn>
							<Modal.ContainerModal stateTransaction={state}>
								<Modal.Body>{children}</Modal.Body>
							</Modal.ContainerModal>
						</Modal.Container>
					</Portal>
				)
			}}
		</Transition>
	)
}

Modal.Container = styled.div`
	position: fixed;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 999999999999;
	transition: all 0.4s ease;
`

//Backdrop styles
Modal.Backdrop = styled.div<{ stateTransaction: string }>`
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
	transition: all 0.4s ease;
	background: ${({ stateTransaction }) => {
		switch (stateTransaction) {
			case 'entered':
				return 'rgb(0,0,0,0.56)'
			case 'exited':
				return 'transparent'
		}
	}};
`

Modal.ContainerModal = styled.div<ChildrenProps>`
	position: relative;
	width: auto;
	height: auto;
	max-height: 80vh;
	padding: 2rem;
	transition: all 0.4s ease;
	z-index: 99999999;
	overflow-y: auto;
	overflow-x: hidden;
	border-radius: 1rem;
	box-shadow: 0px 0px 3px #00000073;
	background: white;
	opacity: 0;

	opacity: ${({ stateTransaction }) => {
		switch (stateTransaction) {
			case 'entered':
				return '1'
			case 'entering':
			case 'exiting':
				return '0'
		}
	}};

	transform: ${({ stateTransaction }) => {
		switch (stateTransaction) {
			case 'entered':
				return 'translateY(0px) scale(1)'
			case 'entering':
			case 'exiting':
				return 'translateY(1rem) scale(0.95)'
		}
	}};
`

Modal.ContainerCloseBtn = styled.div<{
	stateTransaction?: string
	$webView?: boolean
}>`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	position: absolute;
	transition: opacity 0.4s ease;
	opacity: ${({ stateTransaction }) => {
		switch (stateTransaction) {
			case 'entered':
				return '1'
			case 'entering':
			case 'exiting':
				return '0'
		}
	}};

	right: 8px;
	top: 8px;
`

Modal.CloseButton = styled.button`
	cursor: pointer;
	height: 2rem;
	width: 2rem;
	border: none;
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	transition: opacity 0.4s ease;

	&:hover {
		opacity: 0.7;
	}
`

Modal.Body = styled.div`
	height: 80%;
`

export default Modal
