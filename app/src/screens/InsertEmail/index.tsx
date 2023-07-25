import React, { useState } from 'react'

import { useTheme } from 'styled-components'

import { performSignup } from '@services/firebase/user/signin'

import { FormContainer } from '@components/containers/FormContainer'
import { ScreenContainer } from '@components/containers/ScreenContainer'
import { LineInput } from '@components/inputs/LineInput'

function InsertEmail() {
	const [email, setEmail] = useState<string>('')

	const theme = useTheme()

	const validateEmail = (textEmail: string) => {
		const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

		if (!textEmail.includes('@')) return false
		if (!regexEmail.test(email)) return false
		return true
	}

	const submitEmail = async () => {
		console.log('sasd')
	}

	return (
		<ScreenContainer
			topSafeAreaColor={theme.green4}
			padding={0}
		>
			<FormContainer
				title={'Insira seu email'}
				errorMessage={'Esse email não é válido!'}
				validateField={() => validateEmail(email)}
				onSubmit={submitEmail}
			>
				<LineInput
					value={email}
					placeholder={'Email...'}
					keyboardType={'email-address'}
					onChangeText={setEmail}
				/>
			</FormContainer>
		</ScreenContainer>
	)
}

export { InsertEmail }
