'use client'
import React from 'react'
import { styled } from 'styled-components'
import { ProfileRow } from './components'

export default function Profile() {
	return (
		<Profile.Container>
			<Profile.Header>
				<ProfileRow
					src='https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1085&q=80'
					name='Andres Villalba'
					profession='Fronted developer'
				/>
				<Profile.Info>
					<p className='title'>Email</p>
					<p className='paragraph'>andresfelipevillalba486@gmail.com</p>
				</Profile.Info>
			</Profile.Header>
		</Profile.Container>
	)
}

Profile.Container = styled.div``

Profile.Header = styled.div`
	padding: 1.5rem;
`

Profile.Info = styled.div`
	margin-top: 1rem;
	.title {
		color: #3f3e3e;
		font-size: 1.125rem;
		font-style: normal;
		font-weight: 700;
		line-height: normal;
	}
	.paragraph {
		color: #3f3e3e;
		font-size: 0.875rem;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
	}
`
