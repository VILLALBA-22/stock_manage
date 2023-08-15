/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import { Input, Loading } from '@/app/_components'
import { LogoIcon } from '@/app/_components/Icons/logo'
import { styled } from 'styled-components'
import { TfiClose } from 'react-icons/tfi'
import { useEffect, useState } from 'react'
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai'
import Button from '@/app/_components/Button'
import { breakpoints } from '@/app/_utils'
import Image from 'next/image'
import { useFormik } from 'formik'
import { initialValuesLogin, validationSchemaLogin } from './formik'
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'
import { toast } from 'react-hot-toast'

export default function Login() {
	const [showPassWord, setShowPassWord] = useState(false)
	const [isLoading, setIsLoading] = useState(false)
	const router = useRouter()

	const {
		values,
		errors,
		touched,
		dirty,
		setFieldValue,
		handleBlur,
		handleChange,
		handleSubmit,
		resetForm,
	} = useFormik({
		validateOnBlur: true,
		initialValues: initialValuesLogin,
		validationSchema: validationSchemaLogin,
		onSubmit: async values => {
			setIsLoading(true)
			// We need to call our auth system
			const falseToken =
				'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2OTE5NzM0ODEsImV4cCI6MTY5NDU2NTQ4MSwic3ViIjoiZTM3MTIxNWUtNGZmNC00Yzk1LWEzZjUtNmNmZDEwNTY4MGE4In0.JoygYnnF4fCq0PJE3pp_P70qj5TbQXIlsVXEbypeycE'
			await Cookies.set('accessToken', falseToken, { expires: 30 })
			toast.success('Successfully logged!', {
				duration: 4000,
			})
			router.push('/profile')
		},
	})

	const handleShowPassWord = () => {
		setShowPassWord(prevState => !prevState)
	}

	const getRightIconPassWord = () => {
		if (showPassWord) return <AiOutlineEyeInvisible size={18} color='#667085' />
		if (!showPassWord) return <AiOutlineEye size={18} color='#667085' />
	}

	useEffect(() => {
		const accessToken = Cookies.get('accessToken')
		if (accessToken) {
			router.replace('/profile')
		}
	}, [])

	useEffect(() => {
		return () => {
			setIsLoading(false)
			resetForm()
		}
	}, [])

	return (
		<Login.Container>
			<Login.ContainerForm>
				<Login.Header>
					<LogoIcon width={32} height={32} />
					<span className='title-logo'>Stock control</span>
				</Login.Header>
				<Login.Body>
					<Login.BodyText>
						<h1 className='body-text_title'>Stock control access</h1>
						<h2 className='body-text_description'>
							Please fill your detail to access your account.
						</h2>
					</Login.BodyText>
					<Login.BodyInputs>
						<Input
							type='text'
							hasError={!!errors?.email && !!touched.email}
							helperText={errors.email && touched.email && errors.email}
							onBlur={handleBlur}
							onChange={handleChange}
							value={values.email}
							name='email'
							label='Email'
							placeholder='Write your email'
							rightElement={
								<button
									onClick={() => setFieldValue('email', '')}
									type='button'
								>
									<TfiClose size={10} color='#667085' stroke={1} />
								</button>
							}
						/>
						<Input
							hasError={!!errors?.password && !!touched.password}
							helperText={
								errors.password && touched.password && errors.password
							}
							onBlur={handleBlur}
							onChange={handleChange}
							value={values.password}
							name='password'
							type={showPassWord ? 'text' : 'password'}
							label='Password'
							placeholder='Write your password'
							rightElement={
								<button type='button' onClick={handleShowPassWord}>
									{getRightIconPassWord()}
								</button>
							}
						/>
					</Login.BodyInputs>
				</Login.Body>
				<Login.Footer>
					<Button
						onClick={handleSubmit}
						$disabled={Object.values(errors).length > 0 || !dirty || isLoading}
					>
						{isLoading ? <Loading size={12} color='white' /> : 'Sing in'}
					</Button>
				</Login.Footer>
			</Login.ContainerForm>
			<Login.ContainerImage>
				<Image
					layout='fill'
					objectFit='contain'
					src='/images/login.png'
					alt='Three persons with a cat'
				/>
			</Login.ContainerImage>
		</Login.Container>
	)
}

Login.Container = styled.div`
	height: 100vh;
	padding: 1.5rem;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	@media (min-width: ${breakpoints.desktop}) {
		display: grid;
		grid-template-columns: 40% 1fr;
	}
`

Login.ContainerForm = styled.form`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`

Login.Header = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	.title-logo {
		margin-top: 10px;
		color: #000;
		font-size: 1rem;
		font-style: normal;
		font-weight: 500;
		line-height: normal;
		letter-spacing: 0.01rem;
	}
`

Login.Body = styled.div`
	padding-top: 56px;
	width: 100%;
	max-width: 22.5rem;
`

Login.BodyText = styled.div`
	.body-text_title {
		color: #344054;
		font-family: Inter;
		font-size: 2rem;
		font-style: normal;
		font-weight: 700;
		line-height: normal;
		letter-spacing: 0.02rem;
	}
	.body-text_description {
		color: #667085;
		font-family: Inter;
		font-size: 0.875rem;
		font-style: normal;
		font-weight: 400;
		line-height: 1.5rem;
	}
`

Login.BodyInputs = styled.div`
	margin-top: 3.5rem;
`

Login.Footer = styled.div`
	width: 100%;
	margin-top: 4rem;
	max-width: 22.5rem;
`

Login.ContainerImage = styled.div`
	width: 100%;
	height: 100%;
	position: relative;
	border-radius: 2.5rem;
	background: #cbcce8;
	display: flex;
	align-items: center;
	justify-content: center;
	@media (max-width: ${breakpoints.desktop}) {
		display: none;
	}
`
