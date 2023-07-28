import React, { useContext, useState } from 'react'
import { Alert } from 'react-native'

import { InsertEmailScreenProps } from '@routes/stack/RegisterStack/screenProps'
import { useTheme } from 'styled-components'

import { RegisterContext } from '@contexts/RegisterContext'

import { emailAlreadyRegistred } from '@services/firebase/user/emailAlreadyRegistred'

import { FormContainer } from '@components/containers/FormContainer'
import { ScreenContainer } from '@components/containers/ScreenContainer'
import { LineInput } from '@components/inputs/LineInput'

function InsertEmail({ navigation }: InsertEmailScreenProps) {
	const { setUserRegistrationDataOnContext } = useContext(RegisterContext)

	const [email, setEmail] = useState<string>('well@gmail.com')

	const theme = useTheme()

	const validateEmail = (dirtyEmail: string) => {
		const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

		const cleanEmail = dirtyEmail.trim()

		if (!cleanEmail.includes('@')) return false
		if (!regexEmail.test(email)) return false
		return true
	}

	const submitEmail = async () => {
		setUserRegistrationDataOnContext({ email })

		if (await emailAlreadyRegistred(email)) {
			Alert.alert('Ops', 'Esse email já foi cadastrado!')
		} else {
			navigation.navigate('InsertPassword')
		}
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
