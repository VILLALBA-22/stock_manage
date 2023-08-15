import { RowOption, Tooltip } from '@/app/_components'
import { usePathname, useRouter } from 'next/navigation'
import { useState } from 'react'
import { SlOptionsVertical } from 'react-icons/sl'
import { styled } from 'styled-components'
import { GiExitDoor } from 'react-icons/gi'
import { CgProfile } from 'react-icons/cg'
import { breakpoints } from '@/app/_utils'
import { useLogout } from '@/app/_hooks'

export const Header = () => {
	const router = useRouter()
	const pathName = usePathname()
	const [isOpenDropDown, setIsOpenDropDown] = useState(false)
	const logOut = useLogout()

	const getTitleSection = () => {
		if (pathName.includes('/profile')) return 'Profile'
		if (pathName.includes('/products')) return 'Product registration'
	}

	const optionsDropDown = [
		{
			id: 'profile-option_layout',
			name: 'Profile',
			onClick: () => {
				setIsOpenDropDown(false)
				router.push('/profile')
			},
			icon: <CgProfile size={16} color='#3F3E3E' />,
		},
		{
			id: 'sign-out-option_layout',
			name: 'Sign out',
			onClick: () => {
				setIsOpenDropDown(false)
				logOut()
			},
			icon: <GiExitDoor size={16} color='#3F3E3E' />,
		},
	]

	return (
		<Header.HeaderBody>
			<div className='section'>
				<p>{getTitleSection()}</p>
			</div>
			<div>
				<button
					className='btn-options'
					onClick={() => setIsOpenDropDown(prevState => !prevState)}
				>
					<SlOptionsVertical color='#3F3E3E' />
				</button>
			</div>
			<Header.ContainerToolTip>
				<Tooltip
					isOpen={isOpenDropDown}
					onClose={() => setIsOpenDropDown(false)}
				>
					{optionsDropDown.map(({ id, icon, name, onClick }) => (
						<RowOption key={id} icon={icon} name={name} onClick={onClick} />
					))}
				</Tooltip>
			</Header.ContainerToolTip>
		</Header.HeaderBody>
	)
}

Header.HeaderBody = styled.div`
	width: 100%;
	padding: 1rem 1.25rem 0rem 1.25rem;
	display: flex;
	justify-content: space-between;
	max-width: 840px;
	position: relative;
	margin: 0 auto;
	.section {
		color: #3f3e3e;
		font-size: 1.125rem;
		font-style: normal;
		font-weight: 700;
		line-height: normal;
	}
	.btn-options {
		width: 2rem;
		height: 2rem;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: all ease 0.3s;
		border-radius: 50%;
		&:hover {
			box-shadow: 0px 0px 2px #000000;
		}
		svg {
			pointer-events: none;
		}
	}
	@media (min-width: ${breakpoints.desktop}) {
		padding: 1rem 0rem 0rem 0rem;
	}
`

Header.ContainerToolTip = styled.div`
	position: absolute;
	@media (min-width: ${breakpoints.desktop}) {
		left: calc(100% - 114px);
	}
	right: 130px;
`
