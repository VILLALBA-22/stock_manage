import { styled } from 'styled-components'
import { CgProfile } from 'react-icons/cg'

export const GeneralNav = () => {
	return (
		<GeneralNav.HeaderTop>
			<div className='icon-profile'>
				<CgProfile size={16} color='#3F3E3E' />
			</div>
			<p className='current-user'>Andres Villalba</p>
		</GeneralNav.HeaderTop>
	)
}

GeneralNav.HeaderTop = styled.div`
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
