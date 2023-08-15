import Button from '@/app/_components/Button'
import { size } from '@/app/_components/Button/types'
import Image from 'next/image'
import { styled } from 'styled-components'

interface ProfileRowProps {
	src: string
	name: string
	profession: string
}

export const ProfileRow = ({ src, name, profession }: ProfileRowProps) => {
	return (
		<ProfileRow.Container>
			<ProfileRow.ContainerBasicInfo>
				<ProfileRow.ContainerImage>
					<Image
						className='profile-image'
						src={src}
						alt={`${name}'s photo`}
						width={48}
						height={48}
					/>
				</ProfileRow.ContainerImage>
				<ProfileRow.NameAndProfession>
					<h2 className='name'>{name}</h2>
					<h3 className='profession'>{profession}</h3>
				</ProfileRow.NameAndProfession>
			</ProfileRow.ContainerBasicInfo>
		</ProfileRow.Container>
	)
}

ProfileRow.Container = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-between;
`

ProfileRow.ContainerBasicInfo = styled.div`
	display: flex;
`

ProfileRow.ContainerImage = styled.div`
	margin-right: 0.62rem;
	.profile-image {
		border-radius: 50%;
		min-height: 48px;
	}
`

ProfileRow.NameAndProfession = styled.div`
	.name {
		color: #3f3e3e;
		font-size: 1rem;
		font-style: normal;
		font-weight: 500;
		line-height: normal;
	}
	.profession {
		color: #3f3e3e;
		font-size: 0.875rem;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
	}
`

ProfileRow.ContainerBtnEdit = styled.div``
