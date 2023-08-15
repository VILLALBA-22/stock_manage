'use client'
import { styled } from 'styled-components'
import '../_styles/globals.css'
import 'ag-grid-community/styles//ag-grid.css'
import 'ag-grid-community/styles//ag-theme-alpine.css'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect } from 'react'
import Cookies from 'js-cookie'
import RecoilRootWrapper from '../_store/wrapper'
import {
	GeneralNav,
	Header,
	LayoutMobileNav,
	SideBarDesktop,
} from './components'
import { useWindowSize } from '../_hooks'
import { breakpoints } from '../_utils'
import { Toaster } from 'react-hot-toast'

// From the layout we can fetch the user with ssr and after we can hydrate our app
export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	const pathName = usePathname()
	const router = useRouter()
	const isLoginPage = pathName.includes('/login')
	const { isMobile } = useWindowSize()

	// Auth: Our validation is very straightforward, with another services we would need to change this
	useEffect(() => {
		const accessToken = Cookies.get('accessToken')
		if (!accessToken && !isLoginPage) {
			router.push('/login')
		}
	}, [pathName, isLoginPage, router])

	if (isLoginPage) {
		return (
			<RecoilRootWrapper>
				<RootLayout.Container>
					<RootLayout.ContainerChildren>
						{children}
					</RootLayout.ContainerChildren>
				</RootLayout.Container>
				<Toaster />
			</RecoilRootWrapper>
		)
	}

	return (
		<RecoilRootWrapper>
			<GeneralNav />
			<RootLayout.Separator />
			<RootLayout.Container>
				{!isMobile && <SideBarDesktop />}
				<RootLayout.ContainerChildren $isDashboard>
					<Header />
					{children}
				</RootLayout.ContainerChildren>
			</RootLayout.Container>
			{isMobile && <LayoutMobileNav />}
			<Toaster />
		</RecoilRootWrapper>
	)
}

RootLayout.HeaderTop = styled.div`
	width: 100%;
	padding: 1rem 1rem 0 1.25rem;
	display: flex;
	align-items: center;

	.icon-profile {
		margin-right: 0.5rem;
	}
	.current-user {
		color: #3f3e3e;
		font-size: 0.875rem;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
	}
`

RootLayout.Separator = styled.div`
	width: calc(100% - 2rem);
	margin: 1rem 1rem 0 1rem;
	border-top: 1px solid rgb(63 62 62 / 17%);
`

RootLayout.ContainerChildren = styled.div<{ $isDashboard?: boolean }>`
	width: 100%;
	height: 100%;
	max-width: ${({ $isDashboard }) => ($isDashboard ? '800px' : '100%')};
	margin: 0 auto;
`

RootLayout.Container = styled.div`
	width: 100%;
	height: 100%;
	@media (min-width: ${breakpoints.desktop}) {
		display: flex;
	}
`
