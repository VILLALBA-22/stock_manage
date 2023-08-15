import Link from 'next/link'
import { styled } from 'styled-components'
import { RiHome3Line } from 'react-icons/ri'
import { FiUser } from 'react-icons/fi'

export const LayoutMobileNav = () => {
	return (
		<LayoutMobileNav.LayoutMobileBar>
			<LayoutMobileNav.LinkNavbar href={'/products'}>
				<RiHome3Line size={20} color='black' />
			</LayoutMobileNav.LinkNavbar>
			<LayoutMobileNav.LinkNavbar href={'/profile'}>
				<FiUser size={20} color='black' />
			</LayoutMobileNav.LinkNavbar>
		</LayoutMobileNav.LayoutMobileBar>
	)
}

LayoutMobileNav.LayoutMobileBar = styled.div`
	position: fixed;
	right: 0px;
	left: 0px;
	bottom: 0px;
	height: 3rem;
	padding: 1rem;
	box-shadow: 0px 0px 13px #0000004a;
	display: flex;
	justify-content: space-around;
	align-items: center;
`

LayoutMobileNav.LinkNavbar = styled(Link)`
	transition: all ease 0.5s;
	:hover {
		opacity: 0.6;
	}
`
