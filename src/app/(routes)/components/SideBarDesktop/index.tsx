import { breakpoints } from '@/app/_utils'
import Link from 'next/link'
import { styled } from 'styled-components'
import { RiHome3Line } from 'react-icons/ri'
import { FiUser } from 'react-icons/fi'

export const SideBarDesktop = () => {
	return (
		<SideBarDesktop.SideBar>
			<SideBarDesktop.Link href={'/products'}>
				<RiHome3Line size={20} color='black' /> <span>Products</span>
			</SideBarDesktop.Link>
			<SideBarDesktop.Link href={'/profile'}>
				<FiUser size={20} color='black' /> <span>Profile</span>
			</SideBarDesktop.Link>
		</SideBarDesktop.SideBar>
	)
}

SideBarDesktop.SideBar = styled.div`
	width: 100%;
	height: 100%;
	max-width: 200px;
	border-right: 1px solid rgb(63 62 62 / 17%);
	@media (min-width: ${breakpoints.desktop}) {
		display: flex;
		height: 90vh;
		display: flex;
		flex-direction: column;
		padding: 2rem;
	}
`

SideBarDesktop.Link = styled(Link)`
	color: #3f3e3e;
	font-size: 1rem;
	font-style: normal;
	font-weight: 400;
	line-height: 1.5rem;
	margin-bottom: 2rem;
	display: flex;
	transition: all ease 0.5s;
	span {
		margin-left: 0.5rem;
	}
	&:hover {
		opacity: 0.6;
	}
`
